'use client';

import { useEffect, useState } from 'react';
import { getWordsAction, updateWordStatusAction, resetAllStatusesAction, getWordExamplesAction, getAllExamplesAction } from '@/lib/actions';
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
  const [langMode, setLangMode] = useState<'en' | 'ko'>('en');
  const { setStatsDirectly } = useStats();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = (localStorage.getItem('voca_lang_mode') as 'en' | 'ko') || 'en';
      setLangMode(storedLang);
    }
    const handleLangChange = () => {
      const storedLang = (localStorage.getItem('voca_lang_mode') as 'en' | 'ko') || 'en';
      setLangMode(storedLang);
    };
    window.addEventListener('voca_lang_change', handleLangChange);
    return () => window.removeEventListener('voca_lang_change', handleLangChange);
  }, []);

  useEffect(() => {
    const fetchWords = async () => {
      setLoading(true);
      const storedUser = typeof window !== 'undefined' ? (localStorage.getItem('voca_user') || 'admin') : 'admin';
      setUserId(storedUser);
      
      // 1. 단어 데이터 우선 로딩 및 화면 디스플레이 완료
      const data = await getWordsAction(storedUser) as Word[];

      const sorted = [...data].sort((a, b) => {
        const orderA = POS_ORDER[a.pos as keyof typeof POS_ORDER] ?? 99;
        const orderB = POS_ORDER[b.pos as keyof typeof POS_ORDER] ?? 99;
        return orderA - orderB;
      });

      setAllWords(sorted);
      
      const baseList = sorted.filter(w => w.status !== 'mastered');
      const filtered = baseList.filter(w => w.pos === 'v.');
      setWords(filtered);
      
      // 🚀 화면 디스플레이 즉시 종료 (유저 기다림 없음)
      setLoading(false);

      // 2. 화면 디스플레이가 끝난 후 백그라운드에서 한글 예문 2차 로딩
      getAllExamplesAction().then(allExamples => {
        if (!allExamples || allExamples.length === 0) return;
        const exampleMap = new Map<string, { en: string; ko: string; }[]>();
        for (const ex of allExamples) {
          if (!exampleMap.has(ex.wordId)) exampleMap.set(ex.wordId, []);
          exampleMap.get(ex.wordId)!.push({ en: ex.en, ko: ex.ko });
        }

        setAllWords(prev => prev.map(w => ({
          ...w,
          examples: exampleMap.get(w.id) || w.examples || []
        })));
        setWords(prev => prev.map(w => ({
          ...w,
          examples: exampleMap.get(w.id) || w.examples || []
        })));
      }).catch(() => {});
    };
    fetchWords();
  }, []);

  const currentWord = words[currentIndex] || null;

  const handleCardClick = async () => {
    if (finished || !currentWord) return;
    const nextFlipped = !isFlipped;
    setIsFlipped(nextFlipped);
    if (nextFlipped && (!currentWord.examples || currentWord.examples.length === 0)) {
      try {
        const ex = await getWordExamplesAction(currentWord.id);
        setAllWords(prev => prev.map(w => w.id === currentWord.id ? { ...w, examples: ex } : w));
        setWords(prev => prev.map(w => w.id === currentWord.id ? { ...w, examples: ex } : w));
      } catch (e) {}
    }
  };

  const handleFilter = (pos: string | null) => {
    setFilterPos(pos);
    const baseList = allWords.filter(w => w.status !== 'mastered');
    const filtered = pos ? baseList.filter(w => w.pos === pos) : baseList;
    setWords(filtered);
    setCurrentIndex(0);
    setIsFlipped(false);
    setFinished(false);
  };

  const handleNext = (status?: Word['status']) => {
    const targetWord = words[currentIndex];
    if (!targetWord) return;

    const currentActiveUser = typeof window !== 'undefined' ? (localStorage.getItem('voca_user') || 'admin') : userId;

    if (status) {
      // 1. [0.00초 즉시 반영] allWords 클라이언트 메모리 상태 반영
      setAllWords(prev => prev.map(w => w.id === targetWord.id ? { ...w, status } : w));

      // 2. [0.00초 즉시 반영] 카드 덱 조작 및 다음 단어로 넘기기
      if (status === 'mastered') {
        const newWords = words.filter(w => w.id !== targetWord.id);
        setWords(newWords);
        if (newWords.length === 0) {
          setFinished(true);
        } else if (currentIndex >= newWords.length) {
          setCurrentIndex(newWords.length - 1);
        }
        setIsFlipped(false);
      } else {
        if (currentIndex < words.length - 1) {
          setCurrentIndex(currentIndex + 1);
          setIsFlipped(false);
        } else {
          setFinished(true);
        }
      }

      // 3. 백그라운드로 DB 저장 및 통계 수신 (화면 딜레이 0초)
      updateWordStatusAction(targetWord.id, status, currentActiveUser).then(res => {
        if (res && res.stats) {
          setStatsDirectly(res.stats);
        }
      });

      return;
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
    setWords(filtered);
    
    setCurrentIndex(0);
    setIsFlipped(false);
    setFinished(false);
    setLoading(false);
  };

  if (loading) return <div style={{ textAlign: 'center', marginTop: '4rem' }}>로딩 중...</div>;
  if (allWords.length === 0) return <div style={{ textAlign: 'center', marginTop: '4rem' }}>학습할 단어가 없습니다.</div>;

  const progressPercent = finished ? 100 : (currentWord ? ((currentIndex) / words.length) * 100 : 0);

  // 1. 각 품사별 완료(mastered) 개수 계산
  const verbMastered = allWords.filter(w => w.pos === 'v.' && w.status === 'mastered').length;
  const adverbMastered = allWords.filter(w => w.pos === 'ad.' && w.status === 'mastered').length;
  const nounMastered = allWords.filter(w => w.pos === 'n.' && w.status === 'mastered').length;
  const adjMastered = allWords.filter(w => w.pos === 'a.' && w.status === 'mastered').length;

  // 2. 개인별 총합 (동사 + 부사 + 명사 + 형용사 완료 개수의 합)
  const totalMasteredCount = verbMastered + adverbMastered + nounMastered + adjMastered;

  // 3. 현재 탭에 따른 표시 완료 개수 (품사 탭: 해당 품사 개수 / 전체 탭: 개인별 총합)
  let masteredCount = totalMasteredCount;
  if (filterPos === 'v.') masteredCount = verbMastered;
  else if (filterPos === 'ad.') masteredCount = adverbMastered;
  else if (filterPos === 'n.') masteredCount = nounMastered;
  else if (filterPos === 'a.') masteredCount = adjMastered;

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', padding: '0.4rem 0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', boxSizing: 'border-box' }}>
      {/* Progress Bar */}
      <div style={{ width: '100%', maxWidth: '600px', height: '6px', background: 'var(--card-bg)', borderRadius: '3px', marginBottom: '0.75rem', overflow: 'hidden' }}>
        <div style={{ width: `${progressPercent}%`, height: '100%', background: 'var(--primary)', transition: 'width 0.3s' }} />
      </div>

      <div style={{ width: '100%', maxWidth: '600px', marginBottom: '0.5rem', padding: '0 0.25rem', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', color: 'var(--secondary)', fontSize: '0.9rem', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <span>{finished ? words.length : (currentWord ? currentIndex + 1 : 0)} / {words.length}</span>
          <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>(완료: {masteredCount}개)</span>
        </div>
      </div>

      {/* POS Filter Tabs Row */}
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
        bottom: '-2px',
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
                paddingBottom: isActive ? '4px' : '0',
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
        onClick={handleCardClick}
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
            boxSizing: 'border-box'
          }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--success)', marginBottom: '1rem' }}>🎉 학습 완료!</h2>
            <p style={{ color: 'var(--secondary)', marginBottom: '2rem' }}>선택하신 품사의 모든 단어를 완성하셨습니다.</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button onClick={() => handleFilter(filterPos)} className="btn btn-secondary">
                다시 학습하기
              </button>
              <Link href="/" className="btn btn-primary">
                대시보드로 돌아가기
              </Link>
            </div>
          </div>
        ) : currentWord ? (
          <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            transition: 'transform 0.6s',
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}>
            {/* Front of Card */}
            <div className="glass" style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '1.5rem 2rem',
              boxSizing: 'border-box'
            }}>
              {/* Top Row: POS Tag */}
              <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', marginBottom: '1rem' }}>
                <span style={{ 
                  fontSize: '0.85rem', 
                  fontWeight: 'bold',
                  color: getPosColor(currentWord.pos),
                  background: 'rgba(255,255,255,0.05)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '4px'
                }}>
                  {currentWord.pos}
                </span>
              </div>
              
              {/* Main Text Center Container (Shifted 30px Upwards) */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '1rem', transform: 'translateY(-30px)', width: '100%' }}>
                {langMode === 'en' ? (
                  <>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                      <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0, letterSpacing: '1px', color: '#ffffff' }}>
                        {currentWord.word}
                      </h2>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speak(currentWord.word);
                        }}
                        style={{
                          background: 'none',
                          border: 'none',
                          fontSize: '1.5rem',
                          cursor: 'pointer',
                          padding: '0.2rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--primary)',
                        }}
                        title="발음 듣기"
                      >
                        🔊
                      </button>
                    </div>
                    {currentWord.pronunciation && (
                      <div style={{ color: 'var(--secondary)', fontSize: '1rem', marginTop: '0.4rem' }}>
                        [{currentWord.pronunciation}]
                      </div>
                    )}
                  </>
                ) : (
                  <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', color: 'var(--accent)', margin: 0, textAlign: 'center' }}>
                    {currentWord.meaning}
                  </h2>
                )}
              </div>

              {/* Bottom Tip */}
              <p style={{ color: 'var(--secondary)', fontSize: '0.85rem', marginTop: 'auto', marginBottom: '0.5rem' }}>
                💡 카드를 클릭하면 {langMode === 'en' ? '뜻' : '영어단어'}를 볼 수 있습니다.
              </p>
            </div>

            {/* Back of Card */}
            <div className="glass" style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '1.5rem 2rem',
              boxSizing: 'border-box'
            }}>
              {/* Top Row: POS Tag */}
              <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', marginBottom: '1rem' }}>
                <span style={{ 
                  fontSize: '0.85rem', 
                  fontWeight: 'bold',
                  color: getPosColor(currentWord.pos),
                  background: 'rgba(255,255,255,0.05)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '4px'
                }}>
                  {currentWord.pos}
                </span>
              </div>
              
              {/* Main Text Center Container (Shifted 30px Upwards) */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '1rem', transform: 'translateY(-30px)', width: '100%' }}>
                {langMode === 'en' ? (
                  <h3 style={{ fontSize: '2.2rem', fontWeight: 'bold', color: 'var(--accent)', margin: 0, textAlign: 'center' }}>
                    {currentWord.meaning}
                  </h3>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                      <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0, letterSpacing: '1px', color: '#ffffff' }}>
                        {currentWord.word}
                      </h3>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speak(currentWord.word);
                        }}
                        style={{
                          background: 'none',
                          border: 'none',
                          fontSize: '1.5rem',
                          cursor: 'pointer',
                          padding: '0.2rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--primary)',
                        }}
                        title="발음 듣기"
                      >
                        🔊
                      </button>
                    </div>
                    {currentWord.pronunciation && (
                      <div style={{ color: 'var(--secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>
                        [{currentWord.pronunciation}]
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Bottom Examples Container */}
              <div style={{ width: '100%', marginTop: 'auto', marginBottom: '0.5rem' }}>
                {currentWord.examples && currentWord.examples.length > 0 ? (
                  <div style={{ textAlign: 'left', background: 'rgba(0,0,0,0.2)', padding: '0.75rem 1rem', borderRadius: '8px', fontSize: '0.85rem' }}>
                    {currentWord.examples.map((ex, idx) => (
                      <div key={idx} style={{ marginBottom: idx < currentWord.examples!.length - 1 ? '0.4rem' : 0 }}>
                        <div style={{ color: '#e2e8f0', fontWeight: '500' }}>• {ex.en}</div>
                        <div style={{ color: 'var(--secondary)', fontSize: '0.8rem', paddingLeft: '0.8rem' }}>{ex.ko}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ color: 'var(--secondary)', fontSize: '0.85rem', fontStyle: 'italic', textAlign: 'center' }}>
                    예문을 불러오는 중...
                  </div>
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
