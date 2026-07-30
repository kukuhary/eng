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
    pronunciation TEXT,
    reg_dt INTEGER
  );

  CREATE TABLE IF NOT EXISTS examples (
    id TEXT PRIMARY KEY,
    en TEXT NOT NULL,
    ko TEXT NOT NULL,
    wordId TEXT NOT NULL,
    reg_dt INTEGER,
    FOREIGN KEY (wordId) REFERENCES words (id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    username TEXT NOT NULL,
    createdAt INTEGER NOT NULL,
    reg_dt INTEGER
  );

  CREATE TABLE IF NOT EXISTS user_word_status (
    userId TEXT NOT NULL,
    wordId TEXT NOT NULL,
    status TEXT NOT NULL,
    updatedAt INTEGER NOT NULL,
    reg_dt INTEGER,
    PRIMARY KEY (userId, wordId),
    FOREIGN KEY (userId) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (wordId) REFERENCES words (id) ON DELETE CASCADE
  );

  CREATE INDEX IF NOT EXISTS idx_words_word ON words(word);
  CREATE INDEX IF NOT EXISTS idx_examples_wordId ON examples(wordId);
  CREATE INDEX IF NOT EXISTS idx_user_word_status_userId ON user_word_status(userId);
  CREATE INDEX IF NOT EXISTS idx_user_word_status_wordId ON user_word_status(wordId);
`);

// Run migration to add pronunciation column to existing database if it doesn't exist
try {
  db.exec(`ALTER TABLE words ADD COLUMN pronunciation TEXT`);
} catch (e) {
  // column might already exist, ignore error
}

// Migration to add reg_dt column to existing tables if it doesn't exist
const tables = ['words', 'examples', 'users', 'user_word_status'];
tables.forEach(table => {
  try {
    db.exec(`ALTER TABLE ${table} ADD COLUMN reg_dt INTEGER`);
  } catch (e) {
    // column might already exist, ignore error
  }
});

// Seed admin user and migrate existing statuses
try {
  db.prepare(`
    INSERT OR IGNORE INTO users (id, username, createdAt, reg_dt)
    VALUES ('admin', 'admin', ?, ?)
  `).run(Date.now(), Date.now());

  // Count existing statuses. If 0, copy from words table.
  const countStatus = db.prepare('SELECT COUNT(*) as count FROM user_word_status').get() as { count: number };
  if (countStatus && countStatus.count === 0) {
    db.prepare(`
      INSERT INTO user_word_status (userId, wordId, status, updatedAt, reg_dt)
      SELECT 'admin', id, status, ?, ? FROM words WHERE status IS NOT NULL AND status != 'new'
    `).run(Date.now(), Date.now());
    console.log('Migrated existing status values to user_word_status for admin');
  }
} catch (e) {
  console.error('User migration or seed failed:', e);
}

export default db;
