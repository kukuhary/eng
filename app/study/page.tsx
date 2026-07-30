'use client';

import { useEffect, useState } from 'react';
import { getWordsAction, updateWordStatusAction } from '@/lib/actions';
import { DBWord as Word } from '@/lib/words_db';
import { getPosColor } from '@/lib/constants';
import Link from 'next/link';

const POS_ORDER = { 'v.': 0, 'ad.': 1, 'n.': 2, 'a.': 3 };

export default function StudyPage() {
  const [allWords, setAllWords] = useState<Word[]>([]);
  const [words, setWords] = useState<Word[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filterPos, setFilterPos] = useState<string | null>('v.');

  useEffect(() => {
    const fetchWords = async () => {
      setLoading(true);
      const data = await getWordsAction() as Word[];
      
      // Sort words by Verb, Adverb, Noun, Adjective
      const sorted = [...data].sort((a, b) => {
        const orderA = POS_ORDER[a.pos as keyof typeof POS_ORDER] ?? 99;
        const orderB = POS_ORDER[b.pos as keyof typeof POS_ORDER] ?? 99;
        return orderA - orderB;
      });

      setAllWords(sorted);
      
      // Initial filter: Verbs (v.)
      const baseList = sorted.filter(w => w.status !== 'mastered');
      const filtered = baseList.filter(w => w.pos === 'v.');
      setWords(filtered.length > 0 ? filtered : (baseList.length > 0 ? baseList : sorted));
      
      setLoading(false);
    };
    fetchWords();
  }, []);

  const handleFilter = (pos: string | null) => {
    setFilterPos(pos);
    const baseList = allWords.filter(w => w.status !== 'mastered');
    const filtered = pos ? baseList.filter(w => w.pos === pos) : baseList;
    setWords(filtered.length > 0 ? filtered : (pos ? [] : allWords));
    setCurrentIndex(0);
    setIsFlipped(false);
    setFinished(false);
  };

  const handleNext = async (status?: Word['status']) => {
    if (status) {
      await updateWordStatusAction(words[currentIndex].id, status);
    }
    
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    } else {
      setFinished(true);
    }
  };

  if (loading) return <div style={{ textAlign: 'center', marginTop: '4rem' }}>로딩 중...</div>;
  if (allWords.length === 0) return <div style={{ textAlign: 'center', marginTop: '4rem' }}>학습할 단어가 없습니다.</div>;

  if (finished) {
    return (
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h1 style={{ marginBottom: '1rem' }}>🎉 학습 완료!</h1>
        <p style={{ color: 'var(--secondary)', marginBottom: '2rem' }}>선택한 범위의 학습을 마쳤습니다.</p>
        <button onClick={() => setFinished(false)} className="btn btn-secondary" style={{ marginRight: '1rem' }}>다시 하기</button>
        <Link href="/" className="btn btn-primary">대시보드로 돌아가기</Link>
      </div>
    );
  }

  const currentWord = words[currentIndex] || null;
  const progressPercent = currentWord ? ((currentIndex) / words.length) * 100 : 0;

  return (
    <div style={{ maxWidth: '800px', margin: '4rem auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Progress Bar */}
      <div style={{ width: '100%', maxWidth: '600px', height: '6px', background: 'var(--card-bg)', borderRadius: '3px', marginBottom: '2rem', overflow: 'hidden' }}>
        <div style={{ width: `${progressPercent}%`, height: '100%', background: 'var(--primary)', transition: 'width 0.3s' }} />
      </div>

      <div style={{ width: '100%', maxWidth: '600px', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', color: 'var(--secondary)', fontSize: '0.9rem' }}>
        <span>Progress: {currentWord ? currentIndex + 1 : 0} / {words.length}</span>
        {currentWord && (
          <span style={{ 
            padding: '0.2rem 0.6rem', 
            background: 'rgba(255,255,255,0.05)', 
            borderRadius: '1rem',
            color: currentWord.level === 'high' ? 'var(--accent)' : 'var(--primary)'
          }}>{currentWord.level.toUpperCase()}</span>
        )}
      </div>

      <div style={{ display: 'flex', gap: '0', width: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
        {/* Flashcard with Flip Animation */}
        <div 
          style={{
            flex: '0 0 600px',
            height: '450px',
            perspective: '1000px',
            cursor: 'pointer',
            zIndex: 2,
          }}
          onClick={() => currentWord && setIsFlipped(!isFlipped)}
        >
          {currentWord ? (
            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}>
              {/* Front */}
              <div className="glass" style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                padding: '2rem',
                borderWidth: '2px',
                borderColor: getPosColor(currentWord.pos),
                justifyContent: 'flex-start',
                paddingTop: '3rem',
                overflowY: 'auto',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              }}>
                <div style={{ height: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <div style={{ fontSize: '3.5rem', fontWeight: 'bold', textShadow: '0 0 20px rgba(56,189,248,0.2)' }}>{currentWord.word}</div>
                  {currentWord.pronunciation && (
                    <div style={{ fontSize: '1.2rem', color: '#a1a1aa', fontFamily: 'monospace', marginTop: '0.2rem' }}>
                      {currentWord.pronunciation}
                    </div>
                  )}
                </div>
                <div style={{ height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <div style={{ fontSize: '1.2rem', color: getPosColor(currentWord.pos), fontStyle: 'italic', opacity: 0.9, fontWeight: '500' }}>{currentWord.pos}</div>
                </div>

                <div style={{ marginTop: '2rem', width: '100%', textAlign: 'left', padding: '0 1rem' }}>
                  {currentWord.examples && currentWord.examples.length > 0 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                      {currentWord.examples.map((ex, idx) => (
                        <div key={idx} style={{ color: 'var(--foreground)', fontSize: '0.95rem', lineHeight: '1.4' }}>
                          {idx + 1}. {ex.en}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div style={{ color: 'var(--secondary)', fontSize: '0.85rem', fontStyle: 'italic' }}>No examples available.</div>
                  )}
                </div>
              </div>

              {/* Back */}
              <div className="glass" style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transform: 'rotateY(180deg)',
                padding: '2rem',
                textAlign: 'center',
                borderWidth: '2px',
                borderColor: getPosColor(currentWord.pos),
                justifyContent: 'flex-start',
                paddingTop: '3rem',
                overflowY: 'auto',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              }}>
                <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '600', color: 'var(--primary)' }}>{currentWord.meaning}</div>
                </div>
                <div style={{ height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <div style={{ fontSize: '1.2rem', color: getPosColor(currentWord.pos), fontStyle: 'italic', opacity: 0.9, fontWeight: '500' }}>{currentWord.pos}</div>
                </div>
                
                <div style={{ marginTop: '2rem', width: '100%', textAlign: 'left', padding: '0 1rem' }}>
                  {currentWord.examples && currentWord.examples.length > 0 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                      {currentWord.examples.map((ex, idx) => (
                        <div key={idx} style={{ color: 'var(--foreground)', fontSize: '0.95rem', lineHeight: '1.4' }}>
                          {idx + 1}. {ex.ko}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div style={{ color: 'var(--secondary)', fontSize: '0.85rem', fontStyle: 'italic' }}>예문이 없습니다.</div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="glass" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              해당 품사의 단어가 없습니다.
            </div>
          )}
        </div>

        {/* Bookmark Tabs Sidebar */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '0.2rem', 
          paddingTop: '2rem',
          marginLeft: '-2px', // Slight overlap with card
          zIndex: 1
        }}>
          {[
            { label: '전체', value: null, color: '#475569' },
            { label: '동사', value: 'v.', color: '#fb923c' },
            { label: '부사', value: 'ad.', color: 'var(--primary)' },
            { label: '명사', value: 'n.', color: '#f8fafc' },
            { label: '형용사', value: 'a.', color: 'var(--accent)' },
          ].map((btn) => (
            <button
              key={btn.label}
              onClick={() => handleFilter(btn.value)}
              style={{
                width: '70px',
                height: '45px',
                borderRadius: '0 8px 8px 0',
                border: 'none',
                background: filterPos === btn.value ? btn.color : 'rgba(255,255,255,0.03)',
                color: filterPos === btn.value ? (btn.value === 'n.' ? '#0f172a' : 'white') : '#94a3b8',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: '600',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: filterPos === btn.value ? `5px 0 15px ${btn.color}44` : 'none',
                transform: filterPos === btn.value ? 'translateX(5px)' : 'translateX(0)',
                borderLeft: filterPos === btn.value ? `4px solid ${btn.value === 'n.' ? 'var(--primary)' : 'white'}` : 'none',
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1.5rem', width: '600px', marginTop: '3rem' }}>
        <button 
          onClick={(e) => { e.stopPropagation(); currentWord && handleNext('learning'); }} 
          className="btn btn-secondary" 
          disabled={!currentWord}
          style={{ flex: 1, padding: '1.25rem', justifyContent: 'center' }}
        >
          아직 헷갈려요 ⚡
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); currentWord && handleNext('mastered'); }} 
          className="btn btn-primary" 
          disabled={!currentWord}
          style={{ flex: 1, padding: '1.25rem', background: 'var(--success)', color: 'white', justifyContent: 'center' }}
        >
          확실히 알아요 🏆
        </button>
      </div>
    </div>
  );
}
