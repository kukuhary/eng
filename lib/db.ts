import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'voca.db');
const db = new Database(dbPath);

// Initialize tables
db.exec(`
  CREATE TABLE IF NOT EXISTS words (
    id TEXT PRIMARY KEY,
    word TEXT UNIQUE NOT NULL,
    pos TEXT NOT NULL,
    meaning TEXT NOT NULL,
    level TEXT NOT NULL,
    status TEXT DEFAULT 'new',
    createdAt INTEGER NOT NULL
  );

  CREATE TABLE IF NOT EXISTS examples (
    id TEXT PRIMARY KEY,
    en TEXT NOT NULL,
    ko TEXT NOT NULL,
    wordId TEXT NOT NULL,
    FOREIGN KEY (wordId) REFERENCES words (id) ON DELETE CASCADE
  );

  CREATE INDEX IF NOT EXISTS idx_words_word ON words(word);
  CREATE INDEX IF NOT EXISTS idx_examples_wordId ON examples(wordId);
`);

export default db;
