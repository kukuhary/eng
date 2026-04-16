export const POS_COLORS: Record<string, string> = {
  'n.': '#f8fafc',          // Noun: White (Highly distinct)
  'v.': '#fb923c',          // Verb: Orange (Distinct from blue/pink)
  'a.': 'var(--accent)',    // Adjective: Pink
  'ad.': 'var(--primary)',   // Adverb: Blue
};

export const getPosColor = (pos: string) => {
  return POS_COLORS[pos] || 'var(--secondary)';
};
