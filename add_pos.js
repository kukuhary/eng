const fs = require('fs');
const path = require('path');

const files = [
  'tmp_words_1.txt',
  'tmp_words_2.txt',
  'tmp_words_3.txt'
];

const getPos = (meaning) => {
  if (meaning.includes('|')) {
    // Already has POS? (word|pos|meaning)
    const parts = meaning.split('|');
    if (parts.length >= 2) return parts[0];
  }

  // Heuristic based on Korean meaning
  if (meaning.endsWith('다') || meaning.includes('다 ')) return 'v.';
  if (meaning.endsWith('한') || meaning.endsWith('인') || meaning.endsWith('된') || meaning.endsWith('의') || meaning.endsWith('로운') || meaning.endsWith('적') || meaning.endsWith('는')) return 'a.';
  if (meaning.endsWith('히') || meaning.endsWith('게') || meaning.endsWith('으로') || meaning.endsWith('로')) return 'ad.';
  
  // Default to noun
  return 'n.';
};

files.forEach(file => {
  const filePath = path.join('c:/antGra/eng', file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Handle both | and : as separators
  const pairs = content.split(';');
  const updatedPairs = pairs.map(pair => {
    if (!pair.trim()) return '';
    
    let word, meaning, pos;
    if (pair.includes('|')) {
      const parts = pair.split('|');
      word = parts[0].trim();
      meaning = parts[parts.length - 1].trim();
    } else if (pair.includes(':')) {
      const parts = pair.split(':');
      word = parts[0].trim();
      meaning = parts[1].trim();
    } else {
      return pair;
    }

    pos = getPos(meaning);
    return `${word}|${pos}|${meaning}`;
  }).filter(p => p !== '');

  fs.writeFileSync(filePath, updatedPairs.join(';') + ';');
  console.log(`Updated ${file}`);
});
