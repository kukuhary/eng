import { createClient, Client } from '@libsql/client';
import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const tursoUrl = process.env.TURSO_DATABASE_URL;
const tursoToken = process.env.TURSO_AUTH_TOKEN;

export const isTurso = !!(tursoUrl && tursoToken);

let libsqlClient: Client | null = null;
let sqliteDb: any = null;

if (isTurso) {
  libsqlClient = createClient({
    url: tursoUrl!,
    authToken: tursoToken!,
  });
} else {
  const isVercel = process.env.VERCEL === '1';
  let dbPath: string;

  if (isVercel) {
    dbPath = '/tmp/voca.db';
    const seedPath = path.join(process.cwd(), 'voca-seed.db');
    if (!fs.existsSync(dbPath) && fs.existsSync(seedPath)) {
      try {
        fs.copyFileSync(seedPath, dbPath);
      } catch (e) {}
    }
  } else {
    dbPath = path.join(process.cwd(), 'voca.db');
  }

  sqliteDb = new Database(dbPath);
}

export { libsqlClient, sqliteDb };
