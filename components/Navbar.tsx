'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('voca_user');
      setCurrentUser(stored);
    }
  }, []);

  const navItems = [
    { name: '대시보드', href: '/' },
    { name: '학습하기', href: '/study' },
    ...(currentUser === 'admin' ? [{ name: '단어장', href: '/words' }] : []),
  ];

  const handleLogin = (name: string) => {
    localStorage.setItem('voca_user', name);
    setCurrentUser(name);
    setShowLoginModal(false);
    window.location.reload();
  };

  const handleLogout = () => {
    if (confirm('로그아웃 하시겠습니까?')) {
      localStorage.removeItem('voca_user');
      setCurrentUser(null);
      window.location.reload();
    }
  };

  return (
    <nav className="glass" style={{
      margin: '0.5rem',
      padding: '0.75rem 1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: '0.5rem',
      zIndex: 100,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--primary)' }}>
          VocaPro
        </div>
        {currentUser ? (
          <button 
            onClick={handleLogout}
            style={{
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#ef4444',
              fontSize: '0.75rem',
              padding: '0.2rem 0.5rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.2s',
              marginLeft: '0.5rem',
              lineHeight: '1.2',
              textAlign: 'center',
            }}
          >
            {currentUser}
            <br />
            로그아웃
          </button>
        ) : (
          <button 
            onClick={() => setShowLoginModal(true)}
            style={{
              background: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              color: 'var(--primary)',
              fontSize: '0.8rem',
              padding: '0.3rem 0.6rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.2s',
              marginLeft: '0.5rem',
            }}
          >
            로그인
          </button>
        )}
      </div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        {navItems.map((item) => {
          const isDisabled = item.href === '/study' && !currentUser;
          if (isDisabled) {
            return (
              <span
                key={item.href}
                style={{
                  color: 'rgba(255, 255, 255, 0.2)',
                  cursor: 'not-allowed',
                  fontSize: '1rem',
                  fontWeight: '400',
                  pointerEvents: 'none'
                }}
                title="로그인이 필요합니다"
              >
                {item.name}
              </span>
            );
          }
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                color: pathname === item.href ? 'var(--primary)' : 'var(--foreground)',
                textDecoration: 'none',
                fontWeight: pathname === item.href ? '600' : '400',
                transition: 'color 0.2s',
              }}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      {showLoginModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }} onClick={() => setShowLoginModal(false)}>
          <div className="glass" style={{
            width: '90%',
            maxWidth: '320px',
            padding: '1.5rem',
            borderRadius: '16px',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
          }} onClick={(e) => e.stopPropagation()}>
            <h3 style={{ marginBottom: '1.2rem', color: 'var(--foreground)', fontSize: '1.1rem' }}>너무도 소중한 내 친구들에게</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.2rem' }}>
              {['서준', '소윤', '서아', '민경', '남규', '경준'].map(name => (
                <button
                  key={name}
                  onClick={() => handleLogin(name)}
                  style={{
                    padding: '0.75rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--primary)';
                    e.currentTarget.style.borderColor = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  {name}
                </button>
              ))}
            </div>
            <button 
              onClick={() => setShowLoginModal(false)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--secondary)',
                cursor: 'pointer',
                fontSize: '0.85rem',
              }}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
