const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../voca.db');
const seedWordsPath = path.join(__dirname, 'seedWords.json');
const examplesPath = path.join(__dirname, 'examples.json');

const db = new Database(dbPath);

// Ensure tables exist (in case db.ts hasn't run or this is run independently)
db.exec(`
  CREATE TABLE IF NOT EXISTS words (
    id TEXT PRIMARY KEY,
    word TEXT UNIQUE NOT NULL,
    pos TEXT NOT NULL,
    meaning TEXT NOT NULL,
    level TEXT NOT NULL,
    status TEXT DEFAULT 'new',
    createdAt INTEGER NOT NULL,
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

  CREATE INDEX IF NOT EXISTS idx_words_word ON words(word);
  CREATE INDEX IF NOT EXISTS idx_examples_wordId ON examples(wordId);
`);

const seedWords = JSON.parse(fs.readFileSync(seedWordsPath, 'utf8'));
const examplesMap = JSON.parse(fs.readFileSync(examplesPath, 'utf8'));

console.log(`Starting seeding of ${seedWords.length} words...`);

const insertWord = db.prepare(`
  INSERT OR IGNORE INTO words (id, word, pos, meaning, level, status, createdAt, reg_dt)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`);

const insertExample = db.prepare(`
  INSERT INTO examples (id, en, ko, wordId, reg_dt)
  VALUES (?, ?, ?, ?, ?)
`);

const deleteExamples = db.prepare('DELETE FROM examples WHERE wordId = ?');

// Use a transaction for speed
const seed = db.transaction(() => {
  let wordCount = 0;
  let exampleCount = 0;

  for (let i = 0; i < seedWords.length; i++) {
    const w = seedWords[i];
    const wordId = `seed-${i}`;
    
    const result = insertWord.run(
      wordId,
      w.word,
      w.pos,
      w.meaning,
      w.level,
      'new',
      Date.now(),
      Date.now()
    );

    if (result.changes > 0) {
      wordCount++;
      
      // Add examples from examples.json if they exist
      const examples = examplesMap[w.word] || [];
      // Also check if seedWords itself has examples (some do in the sample I saw)
      const seedExamples = w.examples || [];
      const allExamples = [...examples, ...seedExamples];

      // Remove duplicates by English text
      const seen = new Set();
      const uniqueExamples = allExamples.filter(ex => {
        if (seen.has(ex.en)) return false;
        seen.add(ex.en);
        return true;
      });

      for (let j = 0; j < uniqueExamples.length; j++) {
        const ex = uniqueExamples[j];
        insertExample.run(
          `ex-${wordId}-${j}`,
          ex.en,
          ex.ko,
          wordId,
          Date.now()
        );
        exampleCount++;
      }
    }

    if (i % 500 === 0 && i > 0) {
      console.log(`Processed ${i} words...`);
    }
  }

  return { wordCount, exampleCount };
});

try {
  const { wordCount, exampleCount } = seed();
  console.log(`Successfully seeded ${wordCount} words and ${exampleCount} examples.`);
} catch (err) {
  console.error('Seeding failed:', err);
} finally {
  db.close();
}
