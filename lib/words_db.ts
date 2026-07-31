import { libsqlClient, sqliteDb, isTurso } from './db';

export interface DBWord {
  id: string;
  word: string;
  pos: string;
  meaning: string;
  level: string;
  status: 'new' | 'learning' | 'mastered';
  createdAt: number;
  examples?: { en: string; ko: string; }[];
  pronunciation?: string;
}

export interface UserStats {
  username: string;
  masteredCount: number;
  totalCount: number;
}

export async function getAllWords(userId: string = 'admin'): Promise<DBWord[]> {
  const sql = `
    SELECT w.id, w.word, w.pos, w.meaning, w.level, w.createdAt, w.pronunciation,
           COALESCE(uws.status, 'new') as status
    FROM words w
    LEFT JOIN user_word_status uws ON w.id = uws.wordId AND uws.userId = ?
    ORDER BY w.word ASC
  `;

  let wordsRaw: any[] = [];

  if (isTurso && libsqlClient) {
    const res = await libsqlClient.execute({ sql, args: [userId] });
    wordsRaw = res.rows as any[];
  } else {
    wordsRaw = sqliteDb.prepare(sql).all(userId);
  }

  return wordsRaw.map(w => ({
    id: String(w.id),
    word: String(w.word),
    pos: String(w.pos),
    meaning: String(w.meaning),
    level: String(w.level),
    createdAt: Number(w.createdAt),
    pronunciation: w.pronunciation ? String(w.pronunciation) : undefined,
    status: w.status as DBWord['status'],
    examples: []
  }));
}

export async function getWordExamples(wordId: string): Promise<{ en: string; ko: string; }[]> {
  const sql = 'SELECT en, ko FROM examples WHERE wordId = ?';
  if (isTurso && libsqlClient) {
    const res = await libsqlClient.execute({ sql, args: [wordId] });
    return res.rows.map(r => ({ en: String(r.en), ko: String(r.ko) }));
  } else {
    return sqliteDb.prepare(sql).all(wordId) as { en: string; ko: string; }[];
  }
}

export async function getAllExamples(): Promise<{ wordId: string; en: string; ko: string; }[]> {
  const sql = 'SELECT wordId, en, ko FROM examples';
  if (isTurso && libsqlClient) {
    const res = await libsqlClient.execute(sql);
    return res.rows.map(r => ({ wordId: String(r.wordId), en: String(r.en), ko: String(r.ko) }));
  } else {
    return sqliteDb.prepare(sql).all() as { wordId: string; en: string; ko: string; }[];
  }
}

export async function getWordById(id: string, userId: string = 'admin'): Promise<DBWord | null> {
  const sql = `
    SELECT w.id, w.word, w.pos, w.meaning, w.level, w.createdAt, w.pronunciation,
           COALESCE(uws.status, 'new') as status
    FROM words w
    LEFT JOIN user_word_status uws ON w.id = uws.wordId AND uws.userId = ?
    WHERE w.id = ?
  `;

  let word: any = null;
  if (isTurso && libsqlClient) {
    const res = await libsqlClient.execute({ sql, args: [userId, id] });
    word = res.rows[0] || null;
  } else {
    word = sqliteDb.prepare(sql).get(userId, id);
  }

  if (!word) return null;

  let examples: { en: string; ko: string; }[] = [];
  if (isTurso && libsqlClient) {
    const exRes = await libsqlClient.execute({ sql: 'SELECT en, ko FROM examples WHERE wordId = ?', args: [id] });
    examples = exRes.rows as any[];
  } else {
    examples = sqliteDb.prepare('SELECT en, ko FROM examples WHERE wordId = ?').all(id);
  }

  return {
    ...word,
    status: word.status as DBWord['status'],
    examples
  };
}

export async function updateWordStatus(id: string, status: string, userId: string = 'admin'): Promise<{ success: boolean; stats: UserStats[] }> {
  const sql = `
    INSERT INTO user_word_status (userId, wordId, status, updatedAt, reg_dt)
    VALUES (?, ?, ?, ?, ?)
    ON CONFLICT(userId, wordId) DO UPDATE SET
      status = excluded.status,
      updatedAt = excluded.updatedAt
  `;

  let changes = 0;
  const now = Date.now();

  if (isTurso && libsqlClient) {
    const res = await libsqlClient.execute({ sql, args: [userId, id, status, now, now] });
    changes = Number(res.rowsAffected || 0);
  } else {
    const res = sqliteDb.prepare(sql).run(userId, id, status, now, now);
    changes = res.changes;
  }

  const stats = await getAllUsersStats();
  return { success: changes > 0, stats };
}

export async function addWord(word: Omit<DBWord, 'id' | 'status' | 'createdAt'>): Promise<DBWord> {
  const id = `user-${Date.now()}`;
  const createdAt = Date.now();
  const status = 'new';

  let pronunciation = word.pronunciation || '';
  if (!pronunciation) {
    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word.word.trim())}`);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          pronunciation = data[0].phonetic || '';
          if (!pronunciation && data[0].phonetics) {
            const found = data[0].phonetics.find((p: any) => p.text);
            if (found) pronunciation = found.text;
          }
        }
      }
    } catch (e) {}
  }

  const now = Date.now();
  if (isTurso && libsqlClient) {
    await libsqlClient.execute({
      sql: `INSERT INTO words (id, word, pos, meaning, level, status, createdAt, pronunciation, reg_dt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [id, word.word, word.pos, word.meaning, word.level, status, createdAt, pronunciation, now]
    });

    if (word.examples && word.examples.length > 0) {
      for (let index = 0; index < word.examples.length; index++) {
        const ex = word.examples[index];
        await libsqlClient.execute({
          sql: `INSERT INTO examples (id, en, ko, wordId, reg_dt) VALUES (?, ?, ?, ?, ?)`,
          args: [`ex-${id}-${index}`, ex.en, ex.ko, id, now]
        });
      }
    }
  } else {
    sqliteDb.prepare(`
      INSERT INTO words (id, word, pos, meaning, level, status, createdAt, pronunciation, reg_dt)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(id, word.word, word.pos, word.meaning, word.level, status, createdAt, pronunciation, now);

    if (word.examples && word.examples.length > 0) {
      const insertEx = sqliteDb.prepare(`
        INSERT INTO examples (id, en, ko, wordId, reg_dt)
        VALUES (?, ?, ?, ?, ?)
      `);
      word.examples.forEach((ex, index) => {
        insertEx.run(`ex-${id}-${index}`, ex.en, ex.ko, id, now);
      });
    }
  }

  return { id, ...word, status: status as DBWord['status'], createdAt, pronunciation };
}

export async function deleteWord(id: string): Promise<boolean> {
  if (isTurso && libsqlClient) {
    const res = await libsqlClient.execute({ sql: 'DELETE FROM words WHERE id = ?', args: [id] });
    return Number(res.rowsAffected || 0) > 0;
  } else {
    const res = sqliteDb.prepare('DELETE FROM words WHERE id = ?').run(id);
    return res.changes > 0;
  }
}

export async function resetAllStatuses(userId: string = 'admin'): Promise<boolean> {
  if (isTurso && libsqlClient) {
    await libsqlClient.execute({ sql: 'DELETE FROM user_word_status WHERE userId = ?', args: [userId] });
    await libsqlClient.execute({ sql: "UPDATE words SET status = 'new'", args: [] });
  } else {
    sqliteDb.prepare("DELETE FROM user_word_status WHERE userId = ?").run(userId);
    sqliteDb.prepare("UPDATE words SET status = 'new'").run();
  }
  return true;
}

export async function getAllUsersStats(): Promise<UserStats[]> {
  const sql = `
    SELECT u.username,
           COUNT(CASE WHEN uws.status = 'mastered' THEN 1 END) as masteredCount,
           (SELECT COUNT(*) FROM words) as totalCount
    FROM users u
    LEFT JOIN user_word_status uws ON u.id = uws.userId
    WHERE u.id != 'admin'
    GROUP BY u.id, u.username
    ORDER BY masteredCount DESC, 
             CASE u.username
               WHEN '서준' THEN 1
               WHEN '소윤' THEN 2
               WHEN '서아' THEN 3
               WHEN '민경' THEN 4
               WHEN '남규' THEN 5
               WHEN '경준' THEN 6
               ELSE 7
             END ASC
  `;

  let rows: any[] = [];
  if (isTurso && libsqlClient) {
    const res = await libsqlClient.execute(sql);
    rows = res.rows as any[];
  } else {
    rows = sqliteDb.prepare(sql).all();
  }

  return rows.map(r => ({
    username: String(r.username),
    masteredCount: Number(r.masteredCount || 0),
    totalCount: Number(r.totalCount || 2998),
  }));
}
