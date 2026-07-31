'use client';

import { useEffect, useState } from 'react';
import { getWordsAction, updateWordStatusAction, resetAllStatusesAction } from '@/lib/actions';
import { DBWord as Word } from '@/lib/words_db';
import { getPosColor } from '@/lib/constants';
import Link from 'next/link';
import { speak } from '@/lib/tts';
import { useStats } from '@/lib/StatsContext';

const POS_ORDER = { 'v.': 0, 'ad.': 1, 'n.': 2, 'a.': 3 };

export default function StudyPage() {
  const [allWords, setAllWords] = useState<Word[]>([]);
  const [words, setWords] = useState<Word[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filterPos, setFilterPos] = useState<string | null>('v.');
  const [userId, setUserId] = useState<string>('admin');
  // 사이트 공통 통계: refreshStats로 mastered 후 대시보드 포함 전체 갱신
  const { setStatsDirectly } = useStats();

  useEffect(() => {
    const fetchWords = async () => {
      setLoading(true);
      const storedUser = typeof window !== 'undefined' ? (localStorage.getItem('voca_user') || 'admin') : 'admin';
      setUserId(storedUser);
      const data = await getWordsAction(storedUser) as Word[];
      
      // Sort words by Verb, Adverb, Noun, Adjective
      const sorted = [...data].sort((a, b) => {
        const orderA = POS_ORDER[a.pos as keyof typeof POS_ORDER] ?? 99;
        const orderB = POS_ORDER[b.pos as keyof typeof POS_ORDER] ?? 99;
        return orderA - orderB;
      });

      setAllWords(sorted);
      
      // Initial filter: Verbs (v.) 미학습 단어만
      const baseList = sorted.filter(w => w.status !== 'mastered');
      const filtered = baseList.filter(w => w.pos === 'v.');
      setWords(filtered);
      
      setLoading(false);
    };
    fetchWords();
  }, []);

  const handleFilter = (pos: string | null) => {
    setFilterPos(pos);
    const baseList = allWords.filter(w => w.status !== 'mastered');
    const filtered = pos ? baseList.filter(w => w.pos === pos) : baseList;
    setWords(filtered);
    setCurrentIndex(0);
    setIsFlipped(false);
    setFinished(false);
  };

  const handleNext = async (status?: Word['status']) => {
    const targetWord = words[currentIndex];
    if (!targetWord) return;

    const currentActiveUser = typeof window !== 'undefined' ? (localStorage.getItem('voca_user') || 'admin') : userId;

    if (status) {
      // 1. DB 업데이트 및 즉시 최신 통계 수신
      const res = await updateWordStatusAction(targetWord.id, status, currentActiveUser);
      if (res.stats) {
        setStatsDirectly(res.stats);
      }

      // 2. allWords 클라이언트 상태 반영
      setAllWords(prev => prev.map(w => w.id === targetWord.id ? { ...w, status } : w));

      if (status === 'mastered') {
        // mastered 단어는 현재 학습 덱에서 즉시 제거
        const newWords = words.filter(w => w.id !== targetWord.id);
        setWords(newWords);
        if (newWords.length === 0) {
          setFinished(true);
        } else if (currentIndex >= newWords.length) {
          setCurrentIndex(newWords.length - 1);
        }
        setIsFlipped(false);
        return;
      }
    }

    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    } else {
      setFinished(true);
    }
  };

  const handleResetProgress = async () => {
    if (!confirm('모든 단어의 학습 상태를 초기화(미학습 상태로 변경)하시겠습니까?')) {
      return;
    }
    setLoading(true);
    await resetAllStatusesAction(userId);
    const data = await getWordsAction(userId) as Word[];
    
    const sorted = [...data].sort((a, b) => {
      const orderA = POS_ORDER[a.pos as keyof typeof POS_ORDER] ?? 99;
      const orderB = POS_ORDER[b.pos as keyof typeof POS_ORDER] ?? 99;
      return orderA - orderB;
    });

    setAllWords(sorted);
    
    const baseList = sorted.filter(w => w.status !== 'mastered');
    const filtered = filterPos ? baseList.filter(w => w.pos === filterPos) : baseList;
    setWords(filtered.length > 0 ? filtered : (filterPos ? [] : sorted));
    
    setCurrentIndex(0);
    setIsFlipped(false);
    setFinished(false);
    setLoading(false);
  };

  if (loading) return <div style={{ textAlign: 'center', marginTop: '4rem' }}>로딩 중...</div>;
  if (allWords.length === 0) return <div style={{ textAlign: 'center', marginTop: '4rem' }}>학습할 단어가 없습니다.</div>;

  const currentWord = words[currentIndex] || null;
  const progressPercent = finished ? 100 : (currentWord ? ((currentIndex) / words.length) * 100 : 0);

  // 전체 탭: 동사, 부사, 명사, 형용사 모든 품사 완료 개수의 합 (allWords 기준)
  // 품사 탭: 해당 품사 완료 개수 (allWords 기준)
  const masteredCount = filterPos
    ? allWords.filter(w => w.pos === filterPos && w.status === 'mastered').length
    : allWords.filter(w => w.status === 'mastered').length;

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', padding: '0.4rem 0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', boxSizing: 'border-box' }}>
      {/* Progress Bar */}
      <div style={{ width: '100%', maxWidth: '600px', height: '6px', background: 'var(--card-bg)', borderRadius: '3px', marginBottom: '0.75rem', overflow: 'hidden' }}>
        <div style={{ width: `${progressPercent}%`, height: '100%', background: 'var(--primary)', transition: 'width 0.3s' }} />
      </div>

      <div style={{ width: '100%', maxWidth: '600px', marginBottom: '0.5rem', padding: '0 0.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--secondary)', fontSize: '0.9rem', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <span>Progress: {finished ? words.length : (currentWord ? currentIndex + 1 : 0)} / {words.length}</span>
          <span style={{ color: 'var(--success)', fontWeight: '500' }}>(완료: {masteredCount}개)</span>
        </div>
        {!finished && currentWord && (
          <span style={{ 
            padding: '0.2rem 0.6rem', 
            background: 'rgba(255,255,255,0.05)', 
            borderRadius: '1rem',
            color: currentWord.level === 'high' ? 'var(--accent)' : 'var(--primary)'
          }}>{currentWord.level.toUpperCase()}</span>
        )}
      </div>

      {/* POS Filter Tabs Row (Horizontal Bookmarks / File Folder Tabs) */}
      <div style={{ 
        display: 'flex', 
        gap: '4px', 
        width: '100%', 
        maxWidth: '600px', 
        alignItems: 'flex-end', 
        padding: '0 1rem',
        boxSizing: 'border-box',
        zIndex: 3,
        position: 'relative',
        bottom: '-2px', // Overlaps the card's top border
      }}>
        {[
          { label: '전체', value: null, color: '#475569' },
          { label: '동사', value: 'v.', color: '#fb923c' },
          { label: '부사', value: 'ad.', color: 'var(--primary)' },
          { label: '명사', value: 'n.', color: '#f8fafc' },
          { label: '형용사', value: 'a.', color: 'var(--accent)' },
        ].map((btn) => {
          const isActive = filterPos === btn.value;
          return (
            <button
              key={btn.label}
              onClick={() => handleFilter(btn.value)}
              style={{
                flex: 1,
                height: isActive ? '42px' : '36px',
                borderRadius: '8px 8px 0 0',
                border: isActive ? `2px solid ${btn.color}` : '1px solid rgba(255,255,255,0.1)',
                borderBottom: isActive ? 'none' : '1px solid rgba(255,255,255,0.1)',
                background: isActive ? btn.color : 'rgba(255,255,255,0.03)',
                color: isActive ? (btn.value === 'n.' ? '#0f172a' : 'white') : '#94a3b8',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: '600',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: isActive ? `0 -4px 10px ${btn.color}33` : 'none',
                zIndex: isActive ? 4 : 2,
                paddingBottom: isActive ? '4px' : '0', // Offset the bottom overlap
              }}
            >
              {btn.label}
            </button>
          );
        })}
      </div>

      {/* Flashcard Container */}
      <div 
        style={{
          width: '100%',
          maxWidth: '600px',
          height: '350px',
          perspective: '1000px',
          cursor: finished ? 'default' : 'pointer',
          zIndex: 2,
          padding: '0 1rem',
          boxSizing: 'border-box'
        }}
        onClick={() => !finished && currentWord && setIsFlipped(!isFlipped)}
      >
        {finished ? (
          <div className="glass" style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            textAlign: 'center',
            borderColor: 'var(--primary)',
            borderWidth: '2px',
            borderStyle: 'solid',
            boxSizing: 'border-box',
            borderRadius: '12px'
          }}>
            <h1 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>🎉 학습 완료!</h1>
            <p style={{ color: 'var(--secondary)', marginBottom: '2.5rem', fontSize: '1rem' }}>선택한 범위의 학습을 마쳤습니다.</p>
            <div style={{ display: 'flex', gap: '1rem', width: '100%', justifyContent: 'center', maxWidth: '360px' }}>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(0);
                  setFinished(false);
                  setIsFlipped(false);
                }} 
                className="btn btn-secondary"
                style={{ flex: 1, padding: '0.8rem', fontSize: '0.95rem', justifyContent: 'center' }}
              >
                다시 하기
              </button>
              <Link 
                href="/" 
                className="btn btn-primary"
                style={{ flex: 1, padding: '0.8rem', fontSize: '0.95rem', justifyContent: 'center', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
              >
                대시보드
              </Link>
            </div>
          </div>
        ) : currentWord ? (
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
              padding: '1.5rem',
              borderWidth: '2px',
              borderColor: getPosColor(currentWord.pos),
              justifyContent: 'flex-start',
              paddingTop: '2rem',
              overflowY: 'auto',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              boxSizing: 'border-box'
            }}>
              <div style={{ minHeight: '90px', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginBottom: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                  <div style={{ fontSize: 'clamp(2rem, 8vw, 3.2rem)', fontWeight: 'bold', textShadow: '0 0 20px rgba(56,189,248,0.2)', wordBreak: 'break-all', textAlign: 'center' }}>{currentWord.word}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem', marginTop: '0.3rem' }}>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      speak(currentWord.word);
                    }}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.6rem', display: 'inline-flex', alignItems: 'center', opacity: 0.8, padding: '2px', flexShrink: 0 }}
                    title="발음 듣기"
                  >
                    🔊
                  </button>
                  {currentWord.pronunciation && (
                    <div style={{ fontSize: '1.2rem', color: '#a1a1aa', fontFamily: 'monospace' }}>
                      {currentWord.pronunciation}
                    </div>
                  )}
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', width: '100%', textAlign: 'left', padding: '0 0.5rem', boxSizing: 'border-box' }}>
                {currentWord.examples && currentWord.examples.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {currentWord.examples.map((ex, idx) => (
                      <div key={idx} style={{ color: 'var(--foreground)', fontSize: '0.9rem', lineHeight: '1.4' }}>
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
              padding: '1.5rem',
              textAlign: 'center',
              borderWidth: '2px',
              borderColor: getPosColor(currentWord.pos),
              justifyContent: 'flex-start',
              paddingTop: '2rem',
              overflowY: 'auto',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              boxSizing: 'border-box'
            }}>
              <div style={{ height: '90px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <div style={{ fontSize: 'clamp(1.8rem, 6vw, 2.5rem)', fontWeight: '600', color: 'var(--primary)', wordBreak: 'break-all', padding: '0 0.5rem', textAlign: 'center' }}>{currentWord.meaning}</div>
                <div style={{ height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '0.2rem' }}>
                  <div style={{ fontSize: '1.1rem', color: getPosColor(currentWord.pos), fontStyle: 'italic', opacity: 0.9, fontWeight: '500' }}>{currentWord.pos}</div>
                </div>
              </div>
              
              <div style={{ marginTop: '1.5rem', width: '100%', textAlign: 'left', padding: '0 0.5rem', boxSizing: 'border-box' }}>
                {currentWord.examples && currentWord.examples.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {currentWord.examples.map((ex, idx) => (
                      <div key={idx} style={{ color: 'var(--foreground)', fontSize: '0.9rem', lineHeight: '1.4' }}>
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

      {/* Action Buttons */}
      {!finished && (
        <div style={{ display: 'flex', gap: '1rem', width: '100%', maxWidth: '600px', padding: '0 0.25rem', boxSizing: 'border-box', marginTop: '1rem' }}>
          <button 
            onClick={(e) => { e.stopPropagation(); currentWord && handleNext('learning'); }} 
            className="btn btn-secondary" 
            disabled={!currentWord}
            style={{ flex: 1, padding: '1rem', justifyContent: 'center', fontSize: '1rem', whiteSpace: 'nowrap' }}
          >
            아직 헷갈려요
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); currentWord && handleNext('mastered'); }} 
            className="btn btn-primary" 
            disabled={!currentWord}
            style={{ flex: 1, padding: '1rem', background: 'var(--success)', color: 'white', justifyContent: 'center', fontSize: '1rem', whiteSpace: 'nowrap' }}
          >
            확실히 알아요
          </button>
        </div>
      )}
    </div>
  );
}
