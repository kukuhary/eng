const Database = require('better-sqlite3');
const db = new Database('voca.db');

const words = db.prepare("SELECT word FROM words WHERE word LIKE 't%' ORDER BY word ASC").all();
console.log(JSON.stringify(words, null, 2));

db.close();
