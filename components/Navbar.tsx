'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { resetAllStatusesAction } from '@/lib/actions';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: '대시보드', href: '/' },
    { name: '학습하기', href: '/study' },
    { name: '단어장', href: '/words' },
  ];

  const handleResetProgress = async () => {
    if (confirm('모든 단어의 학습 상태를 초기화(미학습 상태로 변경)하시겠습니까?')) {
      await resetAllStatusesAction();
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
        <button 
          onClick={handleResetProgress}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.5rem',
            padding: '4px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.7,
            transition: 'opacity 0.2s, transform 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.7';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          title="학습 진도 초기화"
        >
          🔄
        </button>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {navItems.map((item) => (
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
        ))}
      </div>
    </nav>
  );
}
