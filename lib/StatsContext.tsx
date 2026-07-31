'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
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
  statsLoading: boolean;
}

const StatsContext = createContext<StatsContextType>({
  allUsersStats: [],
  currentUserMasteredCount: 0,
  totalCount: 0,
  refreshStats: async () => {},
  statsLoading: true,
});

export function StatsProvider({ children }: { children: React.ReactNode }) {
  const [allUsersStats, setAllUsersStats] = useState<UserStats[]>([]);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [statsLoading, setStatsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUser(localStorage.getItem('voca_user'));
    }
  }, []);

  const refreshStats = useCallback(async () => {
    const data = await getAllUsersStatsAction();
    setAllUsersStats(data);
    setStatsLoading(false);
  }, []);

  useEffect(() => {
    refreshStats();

    // 다른 탭에서 돌아올 때 자동 갱신
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
  // totalCount는 모든 유저에게 동일 (전체 단어 수)
  const totalCount = allUsersStats[0]?.totalCount ?? 0;

  return (
    <StatsContext.Provider value={{
      allUsersStats,
      currentUserMasteredCount,
      totalCount,
      refreshStats,
      statsLoading,
    }}>
      {children}
    </StatsContext.Provider>
  );
}

export function useStats() {
  return useContext(StatsContext);
}
