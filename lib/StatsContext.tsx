'use client';

import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { getAllUsersStatsAction } from './actions';
import { UserStats } from './words_db';

interface StatsContextType {
  /** 전체 유저 통계 - 대시보드 랭킹에 직접 사용 */
  allUsersStats: UserStats[];
  /** 현재 로그인 유저의 mastered 단어 수 (DB 기준) */
  currentUserMasteredCount: number;
  /** 전체 단어 수 */
  totalCount: number;
  /** DB에서 통계 재조회 - mastered 처리 후 호출 */
  refreshStats: () => Promise<void>;
  /** Server Action이 반환한 최신 통계 직접 주입 */
  setStatsDirectly: (stats: UserStats[]) => void;
  statsLoading: boolean;
}

const StatsContext = createContext<StatsContextType>({
  allUsersStats: [],
  currentUserMasteredCount: 0,
  totalCount: 0,
  refreshStats: async () => {},
  setStatsDirectly: () => {},
  statsLoading: true,
});

export function StatsProvider({ children }: { children: React.ReactNode }) {
  const [allUsersStats, setAllUsersStats] = useState<UserStats[]>([]);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [statsLoading, setStatsLoading] = useState(true);
  // 요청 ID 추적: 니는 응답이 이전 요청을 덮어쓰는 race condition 방지
  const refreshCallId = useRef(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUser(localStorage.getItem('voca_user'));
    }
  }, []);

  const refreshStats = useCallback(async () => {
    const callId = ++refreshCallId.current;
    const data = await getAllUsersStatsAction();
    if (callId !== refreshCallId.current) return;
    setAllUsersStats(data);
    setStatsLoading(false);
  }, []);

  useEffect(() => {
    refreshStats();

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        refreshStats();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [refreshStats]);

  const currentUserStats = currentUser
    ? allUsersStats.find(u => u.username === currentUser)
    : null;

  const currentUserMasteredCount = currentUserStats?.masteredCount ?? 0;
  const totalCount = allUsersStats[0]?.totalCount ?? 0;

  const setStatsDirectly = useCallback((stats: UserStats[]) => {
    refreshCallId.current++;
    setAllUsersStats(stats);
    setStatsLoading(false);
  }, []);

  return (
    <StatsContext.Provider value={{
      allUsersStats,
      currentUserMasteredCount,
      totalCount,
      refreshStats,
      setStatsDirectly,
      statsLoading,
    }}>
      {children}
    </StatsContext.Provider>
  );
}

export function useStats() {
  return useContext(StatsContext);
}
