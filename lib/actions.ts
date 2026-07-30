'use server';

import { getAllWords, addWord as dbAddWord, updateWordStatus as dbUpdateWordStatus, DBWord } from './words_db';
import { revalidatePath } from 'next/cache';

export async function getWordsAction() {
  return getAllWords();
}

export async function addWordAction(word: Omit<DBWord, 'id' | 'status' | 'createdAt'>) {
  const newWord = await dbAddWord(word);
  revalidatePath('/words');
  return newWord;
}

export async function updateWordStatusAction(id: string, status: 'new' | 'learning' | 'mastered') {
  const success = dbUpdateWordStatus(id, status);
  if (success) {
    revalidatePath('/words');
  }
  return success;
}
