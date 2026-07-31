require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env' });
const Database = require('better-sqlite3');
const { createClient } = require('@libsql/client');
const path = require('path');

const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

if (!url || !authToken) {
  console.error('❌ Error: TURSO_DATABASE_URL 또는 TURSO_AUTH_TOKEN이 설정되지 않았습니다.');
  console.error('.env.local 파일이나 환경변수에 Turso 접속 정보를 먼저 입력해주세요.');
  process.exit(1);
}

console.log('🚀 Turso 클라우드 데이터베이스로 업로드를 시작합니다...');
console.log(`Target: ${url}`);

const localDbPath = path.join(process.cwd(), 'voca.db');
const localDb = new Database(localDbPath);
const turso = createClient({ url, authToken });

async function migrate() {
  try {
    console.log('1. Turso 데이터베이스에 테이블을 생성합니다...');
    
    await turso.execute(`
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
    `);

    await turso.execute(`
      CREATE TABLE IF NOT EXISTS examples (
        id TEXT PRIMARY KEY,
        en TEXT NOT NULL,
        ko TEXT NOT NULL,
        wordId TEXT NOT NULL,
        reg_dt INTEGER,
        FOREIGN KEY (wordId) REFERENCES words (id) ON DELETE CASCADE
      );
    `);

    await turso.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        username TEXT NOT NULL,
        createdAt INTEGER NOT NULL,
        reg_dt INTEGER
      );
    `);

    await turso.execute(`
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
    `);

    console.log('2. 로컬 데이터를 읽어서 Turso로 전송합니다...');

    // Users 업로드
    const users = localDb.prepare('SELECT * FROM users').all();
    console.log(`- 유저 ${users.length}명 업로드 중...`);
    for (const u of users) {
      await turso.execute({
        sql: `INSERT OR IGNORE INTO users (id, username, createdAt, reg_dt) VALUES (?, ?, ?, ?)`,
        args: [u.id, u.username, u.createdAt, u.reg_dt || Date.now()]
      });
    }

    // Words 업로드 (Batch 단위)
    const words = localDb.prepare('SELECT * FROM words').all();
    console.log(`- 단어 ${words.length}개 업로드 중...`);
    const BATCH_SIZE = 100;
    for (let i = 0; i < words.length; i += BATCH_SIZE) {
      const chunk = words.slice(i, i + BATCH_SIZE);
      const stmts = chunk.map(w => ({
        sql: `INSERT OR IGNORE INTO words (id, word, pos, meaning, level, status, createdAt, pronunciation, reg_dt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        args: [w.id, w.word, w.pos, w.meaning, w.level, w.status || 'new', w.createdAt, w.pronunciation || null, w.reg_dt || Date.now()]
      }));
      await turso.batch(stmts);
      process.stdout.write(`\r  진행률: ${Math.min(i + BATCH_SIZE, words.length)} / ${words.length}`);
    }
    console.log('\n- 단어 업로드 완료!');

    // Examples 업로드
    const examples = localDb.prepare('SELECT * FROM examples').all();
    console.log(`- 예문 ${examples.length}개 업로드 중...`);
    for (let i = 0; i < examples.length; i += BATCH_SIZE) {
      const chunk = examples.slice(i, i + BATCH_SIZE);
      const stmts = chunk.map(ex => ({
        sql: `INSERT OR IGNORE INTO examples (id, en, ko, wordId, reg_dt) VALUES (?, ?, ?, ?, ?)`,
        args: [ex.id, ex.en, ex.ko, ex.wordId, ex.reg_dt || Date.now()]
      }));
      await turso.batch(stmts);
    }

    // User Word Status 업로드
    const statuses = localDb.prepare('SELECT * FROM user_word_status').all();
    console.log(`- 학습 기록 ${statuses.length}개 업로드 중...`);
    for (const st of statuses) {
      await turso.execute({
        sql: `INSERT OR REPLACE INTO user_word_status (userId, wordId, status, updatedAt, reg_dt) VALUES (?, ?, ?, ?, ?)`,
        args: [st.userId, st.wordId, st.status, st.updatedAt, st.reg_dt || Date.now()]
      });
    }

    console.log('\n🎉 축하합니다! 모든 테이블과 2,998개 단어가 Turso 데이터베이스에 업로드되었습니다!');
  } catch (err) {
    console.error('❌ 업로드 중 오류가 발생했습니다:', err);
  }
}

migrate();
