'use server';

import { 
  getAllWords, 
  addWord as dbAddWord, 
  updateWordStatus as dbUpdateWordStatus, 
  resetAllStatuses as dbResetAllStatuses, 
  getAllUsersStats,
  DBWord 
} from './words_db';
import { revalidatePath } from 'next/cache';

export async function getWordsAction(userId?: string) {
  return getAllWords(userId);
}

export async function addWordAction(word: Omit<DBWord, 'id' | 'status' | 'createdAt'>) {
  const newWord = await dbAddWord(word);
  revalidatePath('/');
  revalidatePath('/words');
  return newWord;
}

export async function updateWordStatusAction(id: string, status: 'new' | 'learning' | 'mastered', userId?: string) {
  const success = dbUpdateWordStatus(id, status, userId);
  if (success) {
    // study 페이지는 순수 Client Component이라 revalidatePath 불필요
    // revalidatePath('/study')를 호출하면 router.refresh()로 인해 컴포넌트 상태가 초기화되는 버그 발생
    revalidatePath('/');
  }
  return success;
}

export async function resetAllStatusesAction(userId?: string) {
  const success = dbResetAllStatuses(userId);
  if (success) {
    revalidatePath('/');
  }
  return success;
}

export async function getAllUsersStatsAction() {
  return getAllUsersStats();
}
