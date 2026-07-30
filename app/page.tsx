'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getAllUsersStatsAction } from '@/lib/actions';
import { UserStats } from '@/lib/words_db';

export default function Home() {
  const [leaderboard, setLeaderboard] = useState<UserStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      if (typeof window !== 'undefined') {
        setCurrentUser(localStorage.getItem('voca_user'));
      }
      const data = await getAllUsersStatsAction();
      setLeaderboard(data);
      setLoading(false);
    };
    loadData();
  }, []);

  function getRankEmoji(index: number) {
    if (index === 0) return '🥇';
    if (index === 1) return '🥈';
    if (index === 2) return '🥉';
    return `${index + 1}등`;
  }

  function getRankColor(index: number) {
    if (index === 0) return '#fbbf24'; // Gold
    if (index === 1) return '#94a3b8'; // Silver
    if (index === 2) return '#b45309'; // Bronze
    return '#64748b'; // Slate
  }

  function getLeaderboardColor(index: number) {
    if (index === 0) return 'linear-gradient(90deg, #f59e0b, #fbbf24)'; // Gold
    if (index === 1) return 'linear-gradient(90deg, #64748b, #94a3b8)'; // Silver
    if (index === 2) return 'linear-gradient(90deg, #78350f, #b45309)'; // Bronze
    return 'linear-gradient(90deg, #0284c7, #38bdf8)'; // Primary sky
  }

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '3rem auto', padding: '0 1rem', boxSizing: 'border-box' }}>
      <section style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ 
          fontSize: '2rem', 
          fontWeight: 'bold', 
          background: 'linear-gradient(to right, var(--primary), var(--accent))', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent',
          marginBottom: '0.5rem'
        }}>
          🏆 보카프로 실시간 랭킹
        </h1>
        <p style={{ color: 'var(--secondary)', fontSize: '0.95rem' }}>
          친구들과 함께 매일 확실히 아는 단어를 늘려보세요!
        </p>
      </section>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--secondary)' }}>랭킹 집계 중...</div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
          {leaderboard.map((user, idx) => {
            const percent = user.totalCount > 0 ? (user.masteredCount / user.totalCount) * 100 : 0;
            return (
              <div key={user.username} style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
                {/* Left: Bar Graph */}
                <div style={{ flex: 1, position: 'relative' }}>
                  <div style={{ 
                    width: '100%', 
                    height: '28px', 
                    background: 'rgba(255,255,255,0.03)', 
                    borderRadius: '14px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.06)',
                    position: 'relative'
                  }}>
                    <div style={{
                      width: `${percent}%`,
                      height: '100%',
                      background: getLeaderboardColor(idx),
                      borderRadius: '14px',
                      transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)',
                    }} />
                    
                    {/* Percent Text inside the bar */}
                    <span style={{
                      position: 'absolute',
                      left: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      color: '#ffffff',
                      textShadow: '0 1px 3px rgba(0,0,0,0.6)',
                    }}>
                      {user.masteredCount} / {user.totalCount}개 ({percent.toFixed(1)}%)
                    </span>
                  </div>
                </div>

                {/* Right: Username & Rank Badge */}
                <div style={{ 
                  width: '95px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  flexShrink: 0 
                }}>
                  <span style={{ fontSize: '1rem', fontWeight: '700', color: '#ffffff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '65px' }}>
                    {user.username}
                  </span>
                  <span style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: '800',
                    color: getRankColor(idx)
                  }} title={`${idx + 1}등`}>
                    {getRankEmoji(idx)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Start Study CTA */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        {currentUser ? (
          <Link href="/study" className="btn btn-primary" style={{ fontSize: '1.05rem', padding: '0.9rem 2.5rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', fontWeight: 'bold' }}>
            ⚡ 학습 시작하기
          </Link>
        ) : (
          <button 
            disabled 
            className="btn btn-primary" 
            style={{ 
              fontSize: '1.05rem', 
              padding: '0.9rem 2.5rem', 
              opacity: 0.5, 
              cursor: 'not-allowed',
              background: '#1e293b',
              color: '#64748b',
              borderColor: '#334155',
              fontWeight: 'bold'
            }}
            title="로그인이 필요합니다"
          >
            🔒 학습 시작하기 (로그인 필요)
          </button>
        )}
      </div>
    </div>
  );
}
