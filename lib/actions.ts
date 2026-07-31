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
  const result = await dbUpdateWordStatus(id, status, userId);
  if (result.success) {
    revalidatePath('/');
  }
  return result;
}

export async function resetAllStatusesAction(userId?: string) {
  const success = await dbResetAllStatuses(userId);
  if (success) {
    revalidatePath('/');
  }
  return success;
}

export async function getAllUsersStatsAction() {
  return getAllUsersStats();
}

export async function getWordExamplesAction(wordId: string) {
  const { getWordExamples } = await import('./words_db');
  return getWordExamples(wordId);
}
