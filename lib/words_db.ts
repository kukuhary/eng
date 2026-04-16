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
}

export function getAllWords(): DBWord[] {
  const words = db.prepare('SELECT * FROM words ORDER BY word ASC').all() as (Omit<DBWord, 'examples' | 'status'> & { status: string })[];
  
  return words.map(w => {
    const examples = db.prepare('SELECT en, ko FROM examples WHERE wordId = ?').all(w.id) as { en: string; ko: string; }[];
    return {
      ...w,
      status: w.status as DBWord['status'],
      examples
    };
  });
}

export function getWordById(id: string): DBWord | null {
  const word = db.prepare('SELECT * FROM words WHERE id = ?').get(id) as (Omit<DBWord, 'examples' | 'status'> & { status: string }) | undefined;
  if (!word) return null;

  const examples = db.prepare('SELECT en, ko FROM examples WHERE wordId = ?').all(id) as { en: string; ko: string; }[];
  return {
    ...word,
    status: word.status as DBWord['status'],
    examples
  };
}

export function updateWordStatus(id: string, status: string): boolean {
  const result = db.prepare('UPDATE words SET status = ? WHERE id = ?').run(status, id);
  return result.changes > 0;
}

export function addWord(word: Omit<DBWord, 'id' | 'status' | 'createdAt'>): DBWord {
  const id = `user-${Date.now()}`;
  const createdAt = Date.now();
  const status = 'new';

  const insert = db.transaction(() => {
    db.prepare(`
      INSERT INTO words (id, word, pos, meaning, level, status, createdAt)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(id, word.word, word.pos, word.meaning, word.level, status, createdAt);

    if (word.examples && word.examples.length > 0) {
      const insertEx = db.prepare(`
        INSERT INTO examples (id, en, ko, wordId)
        VALUES (?, ?, ?, ?)
      `);
      word.examples.forEach((ex, index) => {
        insertEx.run(`ex-${id}-${index}`, ex.en, ex.ko, id);
      });
    }

    return { id, ...word, status: status as DBWord['status'], createdAt };
  });

  return insert() as DBWord;
}

export function deleteWord(id: string): boolean {
  const result = db.prepare('DELETE FROM words WHERE id = ?').run(id);
  return result.changes > 0;
}
