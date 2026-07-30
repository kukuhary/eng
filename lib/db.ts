import Database from 'better-sqlite3';
import path from 'path';

import fs from 'fs';

const isVercel = process.env.VERCEL === '1';
let dbPath: string;

if (isVercel) {
  dbPath = '/tmp/voca.db';
  const seedPath = path.join(process.cwd(), 'voca-seed.db');
  
  if (!fs.existsSync(dbPath)) {
    try {
      if (fs.existsSync(seedPath)) {
        fs.copyFileSync(seedPath, dbPath);
      } else {
        fs.writeFileSync(dbPath, '');
      }
    } catch (e) {
      console.error('Failed to copy seed database to /tmp:', e);
    }
  }
} else {
  dbPath = path.join(process.cwd(), 'voca.db');
}

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
    createdAt INTEGER NOT NULL,
    pronunciation TEXT
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

// Run migration to add pronunciation column to existing database if it doesn't exist
try {
  db.exec(`ALTER TABLE words ADD COLUMN pronunciation TEXT`);
} catch (e) {
  // column might already exist, ignore error
}

export default db;
