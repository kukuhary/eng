const fs = require('fs');
const path = require('path');

const files = [
  'tmp_words_1.txt',
  'tmp_words_2.txt',
  'tmp_words_3.txt'
];

let allWords = [];

files.forEach(file => {
  const content = fs.readFileSync(path.join('c:/antGra/eng', file), 'utf8');
  const pairs = content.split(';');
  pairs.forEach(pair => {
    let parts = pair.split('|');
    if (parts.length >= 2) {
      let word, pos, meaning;
      if (parts.length === 3) {
        [word, pos, meaning] = parts;
      } else {
        [word, meaning] = parts;
        pos = 'n.';
      }
      if (word && meaning) {
        allWords.push({
          word: word.trim(),
          pos: pos.trim(),
          meaning: meaning.trim().replace('#ERROR!', '극장')
        });
      }
    }
  });
});

// Remove duplicates if any
const seen = new Set();
allWords = allWords.filter(item => {
  const duplicate = seen.has(item.word);
  seen.add(item.word);
  return !duplicate;
});

const en_US = require('./node_modules/ipa-dict/lib/en_US.js');

console.log(`Found ${allWords.length} unique words.`);

const wordsWithLevels = allWords.map((item, index) => {
  let level = 'middle';
  if (index > 800 && index <= 2000) level = 'high';
  if (index > 2000) level = 'advanced';

  // Look up pronunciation
  const normalizedWord = item.word.toLowerCase().trim();
  const ipaArray = en_US.get(normalizedWord);
  let pronunciation = '';
  if (ipaArray && ipaArray.length > 0) {
    pronunciation = ipaArray.map(x => x.trim()).join(', ');
  } else {
    const cleanWord = normalizedWord.replace(/[^a-z]/g, '');
    const cleanIpa = en_US.get(cleanWord);
    if (cleanIpa && cleanIpa.length > 0) {
      pronunciation = cleanIpa.map(x => x.trim()).join(', ');
    }
  }

  return { ...item, level, pronunciation };
});

const tsContent = `import EXAMPLES from './examples.json';

export interface Word {
  id: string;
  word: string;
  pos: string;
  meaning: string;
  level: 'middle' | 'high' | 'advanced';
  status: 'new' | 'learning' | 'mastered';
  createdAt: number;
  examples?: { en: string; ko: string; }[] | any;
  pronunciation?: string;
}

const SEED_WORDS_RAW: any[] = ${JSON.stringify(wordsWithLevels, null, 2)};

export const SEED_WORDS: Omit<Word, 'id' | 'status' | 'createdAt'>[] = SEED_WORDS_RAW.map(sw => ({
  ...sw,
  examples: (EXAMPLES as any)[sw.word] || sw.examples
}));
`;

fs.writeFileSync('c:/antGra/eng/lib/seedWords.ts', tsContent);
console.log('Successfully updated lib/seedWords.ts');
