export interface Word {
  id: string;
  word: string;
  meaning: string;
  level: 'middle' | 'high' | 'advanced';
  status: 'new' | 'learning' | 'mastered';
  createdAt: number;
}

export const SEED_WORDS: Omit<Word, 'id' | 'status' | 'createdAt'>[] = [
  { word: 'abandon', meaning: '버리다, 포기하다', level: 'high' },
  { word: 'ability', meaning: '능력', level: 'middle' },
  { word: 'abnormal', meaning: '비정상적인', level: 'high' },
  { word: 'academic', meaning: '학문적인', level: 'high' },
  { word: 'accept', meaning: '받아들이다', level: 'middle' },
  { word: 'access', meaning: '접근', level: 'high' },
  { word: 'accommodate', meaning: '수용하다', level: 'high' },
  { word: 'accomplish', meaning: '성취하다', level: 'high' },
  { word: 'accurate', meaning: '정확한', level: 'middle' },
  { word: 'achieve', meaning: '달성하다', level: 'middle' },
  { word: 'acknowledge', meaning: '인정하다', level: 'high' },
  { word: 'acquire', meaning: '습득하다', level: 'high' },
  { word: 'actual', meaning: '실제의', level: 'middle' },
  { word: 'adapt', meaning: '적응하다', level: 'high' },
  { word: 'addict', meaning: '중독자', level: 'high' },
  { word: 'address', meaning: '주소, 다루다', level: 'middle' },
  { word: 'adequate', meaning: '적절한', level: 'high' },
  { word: 'adjust', meaning: '조절하다', level: 'high' },
  { word: 'admire', meaning: '존경하다', level: 'middle' },
  { word: 'admit', meaning: '인정하다', level: 'middle' },
  { word: 'adopt', meaning: '채택하다, 입양하다', level: 'high' },
  { word: 'advance', meaning: '전진, 발전', level: 'middle' },
  { word: 'advantage', meaning: '장점', level: 'middle' },
  { word: 'adventure', meaning: '모험', level: 'middle' },
  { word: 'advice', meaning: '조언', level: 'middle' },
  { word: 'advocate', meaning: '옹호하다', level: 'high' },
  { word: 'affect', meaning: '영향을 미치다', level: 'middle' },
  { word: 'afford', meaning: '~할 여유가 있다', level: 'middle' },
  { word: 'agreement', meaning: '동의, 계약', level: 'middle' },
  { word: 'altitude', meaning: '고도', level: 'high' },
  { word: 'analyze', meaning: '분석하다', level: 'high' },
  { word: 'ancient', meaning: '고대의', level: 'middle' },
  { word: 'announce', meaning: '발표하다', level: 'middle' },
  { word: 'anxious', meaning: '불안한, 갈망하는', level: 'middle' },
  { word: 'apparent', meaning: '분명한', level: 'high' },
  { word: 'appeal', meaning: '호소하다, 매력', level: 'middle' },
  { word: 'appoint', meaning: '임명하다, 정하다', level: 'high' },
  { word: 'appreciate', meaning: '감사하다, 감상하다', level: 'middle' },
  { word: 'approach', meaning: '접근하다', level: 'middle' },
  { word: 'appropriate', meaning: '적절한', level: 'high' },
  { word: 'approve', meaning: '승인하다', level: 'middle' },
  { word: 'approximate', meaning: '대략의', level: 'high' },
  { word: 'area', meaning: '지역, 분야', level: 'middle' },
  { word: 'argue', meaning: '주장하다, 논쟁하다', level: 'middle' },
  { word: 'arise', meaning: '발생하다', level: 'high' },
  { word: 'artificial', meaning: '인공적인', level: 'high' },
  { word: 'aspect', meaning: '측면', level: 'high' },
  { word: 'aspire', meaning: '열망하다', level: 'high' },
  { word: 'assign', meaning: '할당하다', level: 'high' },
  { word: 'assist', meaning: '돕다', level: 'middle' }
];
