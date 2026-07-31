'use client';

import { UserStats } from './words_db';

const DEFAULT_USERS = ['서준', '소윤', '서아', '민경', '남규', '경준'];

/**
 * 로컬스토리지에 저장된 유저별 mastered 단어 ID 세트를 가져옵니다.
 */
export function getLocalUserMasteredIds(username: string): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(`voca_mastered_${username}`);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

/**
 * 로컬스토리지에 유저의 mastered 단어 ID를 추가/업데이트합니다.
 */
export function saveLocalUserMasteredId(username: string, wordId: string, status: 'new' | 'learning' | 'mastered') {
  if (typeof window === 'undefined') return;
  try {
    const current = getLocalUserMasteredIds(username);
    let updated: string[];
    if (status === 'mastered') {
      updated = Array.from(new Set([...current, wordId]));
    } else {
      updated = current.filter(id => id !== wordId);
    }
    localStorage.setItem(`voca_mastered_${username}`, JSON.stringify(updated));
    
    // 유저 카운트도 공유 통계 스토리지에 동기화
    updateLocalUserStatCount(username, updated.length);
  } catch (e) {
    console.error('Failed to save local user mastered id', e);
  }
}

/**
 * 대시보드 랭킹 통계를 localstorage에 유지 및 병합합니다.
 */
export function getLocalUsersStats(dbStats: UserStats[]): UserStats[] {
  if (typeof window === 'undefined') return dbStats;
  
  try {
    const raw = localStorage.getItem('voca_all_users_stats_v2');
    const localStatsMap: Record<string, number> = raw ? JSON.parse(raw) : {};

    const totalCount = dbStats[0]?.totalCount || 2998;
    const users = DEFAULT_USERS;

    const mergedMap: Record<string, number> = {};
    
    users.forEach(username => {
      const dbCount = dbStats.find(u => u.username === username)?.masteredCount || 0;
      const localIds = getLocalUserMasteredIds(username);
      const localCount = Math.max(localIds.length, localStatsMap[username] || 0);
      mergedMap[username] = Math.max(dbCount, localCount);
    });

    const result: UserStats[] = users.map(username => ({
      username,
      masteredCount: mergedMap[username] || 0,
      totalCount,
    }));

    // 정렬 (masteredCount 내림차순)
    result.sort((a, b) => {
      if (b.masteredCount !== a.masteredCount) {
        return b.masteredCount - a.masteredCount;
      }
      return DEFAULT_USERS.indexOf(a.username) - DEFAULT_USERS.indexOf(b.username);
    });

    return result;
  } catch (e) {
    return dbStats;
  }
}

/**
 * 특정 유저의 마스터 카운트를 localstorage 통계 맵에 업데이트합니다.
 */
export function updateLocalUserStatCount(username: string, count: number) {
  if (typeof window === 'undefined') return;
  try {
    const raw = localStorage.getItem('voca_all_users_stats_v2');
    const localStatsMap: Record<string, number> = raw ? JSON.parse(raw) : {};
    localStatsMap[username] = Math.max(localStatsMap[username] || 0, count);
    localStorage.setItem('voca_all_users_stats_v2', JSON.stringify(localStatsMap));
  } catch (e) {
    console.error('Failed to update local user stat count', e);
  }
}
