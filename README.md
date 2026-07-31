# VocaPro - 중고등 필수 영단어 학습 서비스

VocaPro는 중고등 필수 영단어를 품사별로 암기하고 실시간 랭킹을 확인할 수 있는 웹 애플리케이션입니다.

---

## 🚀 Turso 클라우드 DB 연동 가이드 (Vercel 배포 시 필수)

Vercel과 같은 서버리스 호스팅 환경에서는 로컬 SQLite 파일이 인스턴스에 따라 초기화될 수 있습니다. 
**Turso (SQLite 기반 클라우드 DB)**를 연동하면 모든 사용자의 학습 기록과 대시보드 랭킹 통계가 100% 영구 보관됩니다.

### 1. Turso 회원가입 및 DB 생성 (무료)
1. [Turso 웹사이트](https://turso.tech) 접속 후 **Sign in with GitHub**로 로그인합니다.
2. **Create Database**를 클릭하고 원하는 데이터베이스 이름(예: `voca-db`)을 입력하여 생성합니다.

### 2. DB 접속 URL 및 Auth Token 발급
1. 생성된 DB 상세 페이지에서 `Database URL` (예: `libsql://voca-db-xxx.turso.io`)을 복사합니다.
2. `Tokens` 탭에서 **Create Token**을 눌러 생성된 `Auth Token`을 복사합니다.

### 3. Vercel 환경 변수 (Environment Variables) 설정
Vercel 프로젝트 설정 (`Settings` -> `Environment Variables`)에 아래 2개의 환경 변수를 추가한 후 **Redeploy**합니다.

| 환경 변수 이름 | 설명 | 예시 |
| :--- | :--- | :--- |
| `TURSO_DATABASE_URL` | Turso DB 데이터베이스 URL | `libsql://voca-db-xxx.turso.io` |
| `TURSO_AUTH_TOKEN` | Turso 인증 토큰 | `eyJhbGciOi...` |

> 💡 **참고**: `TURSO_DATABASE_URL`이 설정되지 않은 로컬 개발 환경에서는 자동으로 로컬 파일(`voca.db`)을 사용합니다.

---

## 💻 로컬 개발 환경 실행

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속하여 확인합니다.
