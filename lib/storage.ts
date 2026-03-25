import { Word, SEED_WORDS } from './seedWords';

const STORAGE_KEY = 'voca_app_words';

export const getWords = (): Word[] => {
  if (typeof window === 'undefined') return [];
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    const initialWords: Word[] = SEED_WORDS.map((w, index) => ({
      ...w,
      id: `seed-${index}`,
      status: 'new',
      createdAt: Date.now(),
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialWords));
    return initialWords;
  }
  
  return JSON.parse(stored);
};

export const saveWords = (words: Word[]) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
};

export const addWord = (word: Omit<Word, 'id' | 'status' | 'createdAt'>) => {
  const words = getWords();
  const newWord: Word = {
    ...word,
    id: `user-${Date.now()}`,
    status: 'new',
    createdAt: Date.now(),
  };
  saveWords([newWord, ...words]);
  return newWord;
};

export const updateWordStatus = (id: string, status: Word['status']) => {
  const words = getWords();
  const updated = words.map(w => w.id === id ? { ...w, status } : w);
  saveWords(updated);
};
