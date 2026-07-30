import db from './db';

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

export function getAllWords(userId: string = 'admin'): DBWord[] {
  const sql = `
    SELECT w.id, w.word, w.pos, w.meaning, w.level, w.createdAt, w.pronunciation,
           COALESCE(uws.status, 'new') as status
    FROM words w
    LEFT JOIN user_word_status uws ON w.id = uws.wordId AND uws.userId = ?
    ORDER BY w.word ASC
  `;
  const words = db.prepare(sql).all(userId) as (Omit<DBWord, 'examples' | 'status'> & { status: string })[];
  
  return words.map(w => {
    const examples = db.prepare('SELECT en, ko FROM examples WHERE wordId = ?').all(w.id) as { en: string; ko: string; }[];
    return {
      ...w,
      status: w.status as DBWord['status'],
      examples
    };
  });
}

export function getWordById(id: string, userId: string = 'admin'): DBWord | null {
  const sql = `
    SELECT w.id, w.word, w.pos, w.meaning, w.level, w.createdAt, w.pronunciation,
           COALESCE(uws.status, 'new') as status
    FROM words w
    LEFT JOIN user_word_status uws ON w.id = uws.wordId AND uws.userId = ?
    WHERE w.id = ?
  `;
  const word = db.prepare(sql).get(userId, id) as (Omit<DBWord, 'examples' | 'status'> & { status: string }) | undefined;
  if (!word) return null;

  const examples = db.prepare('SELECT en, ko FROM examples WHERE wordId = ?').all(id) as { en: string; ko: string; }[];
  return {
    ...word,
    status: word.status as DBWord['status'],
    examples
  };
}

export function updateWordStatus(id: string, status: string, userId: string = 'admin'): boolean {
  const sql = `
    INSERT INTO user_word_status (userId, wordId, status, updatedAt)
    VALUES (?, ?, ?, ?)
    ON CONFLICT(userId, wordId) DO UPDATE SET
      status = excluded.status,
      updatedAt = excluded.updatedAt
  `;
  const result = db.prepare(sql).run(userId, id, status, Date.now());
  return result.changes > 0;
}

export async function addWord(word: Omit<DBWord, 'id' | 'status' | 'createdAt'>): Promise<DBWord> {
  const id = `user-${Date.now()}`;
  const createdAt = Date.now();
  const status = 'new';

  // Look up pronunciation automatically if not provided
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
    } catch (e) {
      console.error('Failed to fetch pronunciation in words_db.ts:', e);
    }
  }

  const insert = db.transaction(() => {
    db.prepare(`
      INSERT INTO words (id, word, pos, meaning, level, status, createdAt, pronunciation)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(id, word.word, word.pos, word.meaning, word.level, status, createdAt, pronunciation);

    if (word.examples && word.examples.length > 0) {
      const insertEx = db.prepare(`
        INSERT INTO examples (id, en, ko, wordId)
        VALUES (?, ?, ?, ?)
      `);
      word.examples.forEach((ex, index) => {
        insertEx.run(`ex-${id}-${index}`, ex.en, ex.ko, id);
      });
    }

    return { id, ...word, status: status as DBWord['status'], createdAt, pronunciation };
  });

  return insert() as DBWord;
}

export function deleteWord(id: string): boolean {
  const result = db.prepare('DELETE FROM words WHERE id = ?').run(id);
  return result.changes > 0;
}

export function resetAllStatuses(userId: string = 'admin'): boolean {
  db.prepare("DELETE FROM user_word_status WHERE userId = ?").run(userId);
  db.prepare("UPDATE words SET status = 'new'").run(); // keep for fallback / legacy compatibility
  return true;
}
