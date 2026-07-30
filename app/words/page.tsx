'use client';

import { useEffect, useState } from 'react';
import { getWordsAction, addWordAction } from '@/lib/actions';
import { DBWord as Word } from '@/lib/words_db';
import { getPosColor } from '@/lib/constants';

export default function WordsPage() {
  const [words, setWords] = useState<Word[]>([]);
  const [newWord, setNewWord] = useState('');
  const [newMeaning, setNewMeaning] = useState('');
  const [newPos, setNewPos] = useState('');
  const [newLevel, setNewLevel] = useState<'middle' | 'high'>('middle');
  const [loading, setLoading] = useState(true);

  const fetchWords = async () => {
    setLoading(true);
    const data = await getWordsAction();
    setWords(data as Word[]);
    setLoading(false);
  };

  useEffect(() => {
    fetchWords();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWord || !newMeaning) return;
    
    await addWordAction({ 
      word: newWord, 
      meaning: newMeaning, 
      pos: newPos || 'n.', 
      level: newLevel,
      examples: [] 
    });
    
    await fetchWords();
    setNewWord('');
    setNewMeaning('');
    setNewPos('');
  };

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>단어장 관리 (SQLite)</h1>
      
      <form onSubmit={handleAdd} className="glass" style={{ padding: '2rem', marginBottom: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <input 
          type="text" 
          placeholder="단어 (English)" 
          value={newWord} 
          onChange={e => setNewWord(e.target.value)}
          style={{ flex: 2, padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--card-border)', background: 'rgba(0,0,0,0.2)', color: 'white' }}
        />
        <input 
          type="text" 
          placeholder="품사 (Pos)" 
          value={newPos} 
          onChange={e => setNewPos(e.target.value)}
          style={{ flex: 1, padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--card-border)', background: 'rgba(0,0,0,0.2)', color: 'white' }}
        />
        <input 
          type="text" 
          placeholder="뜻 (Meaning)" 
          value={newMeaning} 
          onChange={e => setNewMeaning(e.target.value)}
          style={{ flex: 2, padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--card-border)', background: 'rgba(0,0,0,0.2)', color: 'white' }}
        />
        <select 
          value={newLevel} 
          onChange={e => setNewLevel(e.target.value as 'middle' | 'high')}
          style={{ flex: 1, padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--card-border)', background: 'rgba(0,0,0,0.2)', color: 'white' }}
        >
          <option value="middle">중등</option>
          <option value="high">고등</option>
        </select>
        <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>추가</button>
      </form>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>로딩 중...</div>
      ) : (
        <div style={{ display: 'grid', gap: '1rem' }}>
          {words.map(w => (
            <div key={w.id} className="glass" style={{ padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: `1px solid ${getPosColor(w.pos)}` }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{w.word}</span>
                  <span style={{ color: getPosColor(w.pos), fontStyle: 'italic', fontSize: '0.9rem', fontWeight: '500' }}>{w.pos}</span>
                </div>
                {w.pronunciation && (
                  <div style={{ fontSize: '0.9rem', color: '#a1a1aa', fontFamily: 'monospace', margin: '0.1rem 0 0.3rem 0' }}>
                    {w.pronunciation}
                  </div>
                )}
                <div style={{ color: 'var(--secondary)' }}>{w.meaning}</div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ 
                  fontSize: '0.75rem', 
                  padding: '0.25rem 0.5rem', 
                  borderRadius: '1rem', 
                  background: w.level === 'high' ? 'rgba(244,114,182,0.2)' : 'rgba(56,189,248,0.2)',
                  color: w.level === 'high' ? 'var(--accent)' : 'var(--primary)'
                }}>
                  {w.level === 'high' ? '고등' : '중등'}
                </span>
                <span style={{ color: 'var(--secondary)', fontSize: '0.8rem' }}>
                  {w.status === 'mastered' ? '✅' : w.status === 'learning' ? '⚡' : '🆕'}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
