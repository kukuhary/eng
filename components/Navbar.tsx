'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: '대시보드', href: '/' },
    { name: '학습하기', href: '/study' },
    { name: '단어장', href: '/words' },
  ];

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
      <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--primary)' }}>
        VocaPro
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
