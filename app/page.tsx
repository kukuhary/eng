import Link from 'next/link';
import { getAllWords } from '@/lib/words_db';

export default async function Home() {
  const words = getAllWords();
  const stats = {
    total: words.length,
    mastered: words.filter(w => w.status === 'mastered').length,
    learning: words.filter(w => w.status === 'learning').length,
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '4rem auto' }}>
      <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', background: 'linear-gradient(to right, var(--primary), var(--accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Smart English Learning (SQLite)
        </h1>
        <p style={{ color: 'var(--secondary)', fontSize: '1.2rem' }}>
          교육부 권장 중고등 필수 영단어를 효과적으로 정복하세요.
        </p>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        <StatCard title="전체 단어" value={stats.total} icon="📚" color="var(--primary)" />
        <StatCard title="학습 중" value={stats.learning} icon="⚡" color="var(--warning)" />
        <StatCard title="마스터" value={stats.mastered} icon="🏆" color="var(--success)" />
      </div>

      <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
        <Link href="/study" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
          학습 시작하기
        </Link>
        <Link href="/words" className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
          단어장 관리
        </Link>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, color }: { title: string; value: number; icon: string; color: string }) {
  return (
    <div className="glass" style={{ padding: '2rem', textAlign: 'center', transition: 'transform 0.3s' }}>
      <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{icon}</div>
      <div style={{ color: 'var(--secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{title}</div>
      <div style={{ fontSize: '2rem', fontWeight: 'bold', color }}>{value}</div>
    </div>
  );
}
