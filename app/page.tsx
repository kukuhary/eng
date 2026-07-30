'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getWordsAction } from '@/lib/actions';
import { DBWord as Word } from '@/lib/words_db';

export default function Home() {
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  useEffect(() => {
    const loadStats = async () => {
      setLoading(true);
      const storedUser = typeof window !== 'undefined' ? (localStorage.getItem('voca_user') || 'admin') : 'admin';
      setCurrentUser(typeof window !== 'undefined' ? localStorage.getItem('voca_user') : null);
      const data = await getWordsAction(storedUser);
      setWords(data as Word[]);
      setLoading(false);
    };
    loadStats();
  }, []);

  const stats = {
    total: words.length,
    mastered: words.filter(w => w.status === 'mastered').length,
    learning: words.filter(w => w.status === 'learning').length,
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 1rem', boxSizing: 'border-box' }}>
      <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', marginBottom: '1rem', background: 'linear-gradient(to right, var(--primary), var(--accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }}>
          Smart English Learning (SQLite)
        </h1>
        <p style={{ color: 'var(--secondary)', fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>
          교육부 권장 중고등 필수 영단어를 효과적으로 정복하세요.
        </p>
      </section>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--secondary)' }}>통계 로딩 중...</div>
      ) : (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            <StatCard title="전체 단어" value={stats.total} icon="📚" color="var(--primary)" />
            <StatCard title="학습 중" value={stats.learning} icon="⚡" color="var(--warning)" />
            <StatCard title="마스터" value={stats.mastered} icon="🏆" color="var(--success)" />
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {currentUser ? (
              <Link href="/study" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                학습 시작하기
              </Link>
            ) : (
              <button 
                disabled 
                className="btn btn-primary" 
                style={{ 
                  fontSize: '1.1rem', 
                  padding: '1rem 2.5rem', 
                  opacity: 0.5, 
                  cursor: 'not-allowed',
                  background: '#1e293b',
                  color: '#64748b',
                  borderColor: '#334155'
                }}
                title="로그인이 필요합니다"
              >
                학습 시작하기 (로그인 필요)
              </button>
            )}
            
            {currentUser === 'admin' && (
              <Link href="/words" className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                단어장 관리
              </Link>
            )}
          </div>
        </>
      )}
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
