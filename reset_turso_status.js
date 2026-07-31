require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env' });
const { createClient } = require('@libsql/client');

const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

if (!url || !authToken) {
  console.error('❌ Error: TURSO_DATABASE_URL 또는 TURSO_AUTH_TOKEN 환경변수가 설정되지 않았습니다.');
  process.exit(1);
}

const turso = createClient({ url, authToken });

async function resetTursoStatus() {
  try {
    console.log('🔄 Turso 데이터베이스의 학습 기록(user_word_status)을 초기화 중입니다...');
    
    // 1. user_word_status 테이블 초기화
    await turso.execute('DELETE FROM user_word_status;');
    
    // 2. words 테이블 fallback status도 'new'로 리셋
    await turso.execute("UPDATE words SET status = 'new';");
    
    console.log('🎉 Turso 서버 데이터베이스의 모든 사용자 학습 완료 기록이 성공적으로 초기화 되었습니다!');
  } catch (err) {
    console.error('❌ 초기화 중 오류 발생:', err);
  }
}

resetTursoStatus();
