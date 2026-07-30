import EXAMPLES from './examples.json';

export interface Word {
  id: string;
  word: string;
  pos: string;
  meaning: string;
  level: 'middle' | 'high' | 'advanced';
  status: 'new' | 'learning' | 'mastered';
  createdAt: number;
  examples?: { en: string; ko: string; }[] | any;
}

const SEED_WORDS_RAW: any[] = [
  {
    "word": "a",
    "pos": "a.",
    "meaning": "하나의",
    "level": "middle"
  },
  {
    "word": "abandon",
    "pos": "v.",
    "meaning": "버리다",
    "level": "middle"
  },
  {
    "word": "able",
    "pos": "a.",
    "meaning": "할 수 있는",
    "level": "middle"
  },
  {
    "word": "aboard",
    "pos": "ad.",
    "meaning": "배로",
    "level": "middle"
  },
  {
    "word": "abort",
    "pos": "v.",
    "meaning": "유산하다",
    "level": "middle",
    "examples": [
      { "en": "The mission was aborted.", "ko": "임무가 중단되었다." },
      { "en": "The pilot had to abort the takeoff.", "ko": "조종사는 이륙을 중단해야 했다." },
      { "en": "They decided to abort the project.", "ko": "그들은 프로젝트를 중단하기로 결정했다." }
    ]
  },
  {
    "word": "about",
    "pos": "n.",
    "meaning": "-에 대하여",
    "level": "middle"
  },
  {
    "word": "above",
    "pos": "v.",
    "meaning": "-보다 위에",
    "level": "middle"
  },
  {
    "word": "abroad",
    "pos": "ad.",
    "meaning": "외국으로",
    "level": "middle"
  },
  {
    "word": "absent",
    "pos": "a.",
    "meaning": "부재의",
    "level": "middle"
  },
  {
    "word": "absolute",
    "pos": "a.",
    "meaning": "절대의",
    "level": "middle"
  },
  {
    "word": "absorb",
    "pos": "v.",
    "meaning": "흡수하다",
    "level": "middle"
  },
  {
    "word": "abstract",
    "pos": "a.",
    "meaning": "추상적인",
    "level": "middle"
  },
  {
    "word": "absurd",
    "pos": "a.",
    "meaning": "불합리한",
    "level": "middle"
  },
  {
    "word": "abundant",
    "pos": "a.",
    "meaning": "풍부한",
    "level": "middle"
  },
  {
    "word": "abuse",
    "pos": "n.",
    "meaning": "남용",
    "level": "middle"
  },
  {
    "word": "academy",
    "pos": "n.",
    "meaning": "학술원",
    "level": "middle"
  },
  {
    "word": "accelerate",
    "pos": "v.",
    "meaning": "가속하다 속도가 가해지다",
    "level": "middle"
  },
  {
    "word": "accent",
    "pos": "n.",
    "meaning": "액센트",
    "level": "middle"
  },
  {
    "word": "accept",
    "pos": "v.",
    "meaning": "받아들이다",
    "level": "middle"
  },
  {
    "word": "access",
    "pos": "n.",
    "meaning": "접근",
    "level": "middle"
  },
  {
    "word": "accident",
    "pos": "n.",
    "meaning": "뜻밖의 사건",
    "level": "middle"
  },
  {
    "word": "accommodate",
    "pos": "v.",
    "meaning": "수용하다",
    "level": "middle"
  },
  {
    "word": "accompany",
    "pos": "v.",
    "meaning": "동반하다",
    "level": "middle"
  },
  {
    "word": "accomplish",
    "pos": "v.",
    "meaning": "이루다",
    "level": "middle"
  },
  {
    "word": "accord",
    "pos": "v.",
    "meaning": "일치하다",
    "level": "middle"
  },
  {
    "word": "account",
    "pos": "v.",
    "meaning": "설명하다 계산",
    "level": "middle"
  },
  {
    "word": "accumulate",
    "pos": "v.",
    "meaning": "축적하다",
    "level": "middle"
  },
  {
    "word": "accurate",
    "pos": "a.",
    "meaning": "정확한",
    "level": "middle"
  },
  {
    "word": "accuse",
    "pos": "v.",
    "meaning": "고발하다",
    "level": "middle"
  },
  {
    "word": "achieve",
    "pos": "v.",
    "meaning": "성취하다",
    "level": "middle"
  },
  {
    "word": "acid",
    "pos": "n.",
    "meaning": "산 신",
    "level": "middle"
  },
  {
    "word": "acknowledge",
    "pos": "v.",
    "meaning": "인정하다",
    "level": "middle"
  },
  {
    "word": "acquaint",
    "pos": "v.",
    "meaning": "알리다",
    "level": "middle"
  },
  {
    "word": "acquire",
    "pos": "v.",
    "meaning": "얻다",
    "level": "middle"
  },
  {
    "word": "acquisition",
    "pos": "n.",
    "meaning": "획득",
    "level": "middle"
  },
  {
    "word": "across",
    "pos": "n.",
    "meaning": "가로질러",
    "level": "middle"
  },
  {
    "word": "act vi",
    "pos": "v.",
    "meaning": "행동하다",
    "level": "middle"
  },
  {
    "word": "activate",
    "pos": "v.",
    "meaning": "활동적으로 하다",
    "level": "middle"
  },
  {
    "word": "actual",
    "pos": "a.",
    "meaning": "현실의",
    "level": "middle"
  },
  {
    "word": "acute",
    "pos": "a.",
    "meaning": "날카로운",
    "level": "middle"
  },
  {
    "word": "adapt",
    "pos": "v.",
    "meaning": "적용시키다",
    "level": "middle"
  },
  {
    "word": "add",
    "pos": "v.",
    "meaning": "추가하다",
    "level": "middle"
  },
  {
    "word": "addict",
    "pos": "v.",
    "meaning": "열중하게 하다",
    "level": "middle"
  },
  {
    "word": "address",
    "pos": "v.",
    "meaning": "말을 걸다",
    "level": "middle"
  },
  {
    "word": "adequate",
    "pos": "a.",
    "meaning": "충분한",
    "level": "middle"
  },
  {
    "word": "adjust",
    "pos": "v.",
    "meaning": "맞추다",
    "level": "middle"
  },
  {
    "word": "administer",
    "pos": "v.",
    "meaning": "관리하다",
    "level": "middle"
  },
  {
    "word": "admire",
    "pos": "v.",
    "meaning": "감복하다",
    "level": "middle"
  },
  {
    "word": "admission",
    "pos": "n.",
    "meaning": "입장",
    "level": "middle"
  },
  {
    "word": "admit",
    "pos": "v.",
    "meaning": "받아들이다",
    "level": "middle"
  },
  {
    "word": "adolescent",
    "pos": "a.",
    "meaning": "청년기의",
    "level": "middle"
  },
  {
    "word": "adopt",
    "pos": "v.",
    "meaning": "채용하다",
    "level": "middle"
  },
  {
    "word": "adult",
    "pos": "a.",
    "meaning": "성인",
    "level": "middle"
  },
  {
    "word": "advance",
    "pos": "v.",
    "meaning": "나아가다",
    "level": "middle"
  },
  {
    "word": "advantage",
    "pos": "n.",
    "meaning": "유리한 입장",
    "level": "middle"
  },
  {
    "word": "adventure",
    "pos": "v.",
    "meaning": "모험 모험하다",
    "level": "middle"
  },
  {
    "word": "adverse",
    "pos": "a.",
    "meaning": "거꾸로의",
    "level": "middle"
  },
  {
    "word": "advertize",
    "pos": "v.",
    "meaning": "광고하다",
    "level": "middle"
  },
  {
    "word": "advise",
    "pos": "v.",
    "meaning": "충고하다",
    "level": "middle"
  },
  {
    "word": "advocate",
    "pos": "n.",
    "meaning": "변호사",
    "level": "middle"
  },
  {
    "word": "aesthetic",
    "pos": "a.",
    "meaning": "미적인",
    "level": "middle"
  },
  {
    "word": "affair",
    "pos": "n.",
    "meaning": "일",
    "level": "middle"
  },
  {
    "word": "affect",
    "pos": "v.",
    "meaning": "영향을 주다",
    "level": "middle"
  },
  {
    "word": "affection",
    "pos": "n.",
    "meaning": "애정",
    "level": "middle"
  },
  {
    "word": "affiliate",
    "pos": "v.",
    "meaning": "회원으로 가입시키다",
    "level": "middle"
  },
  {
    "word": "afford",
    "pos": "v.",
    "meaning": "여유가 있다",
    "level": "middle"
  },
  {
    "word": "afraid",
    "pos": "n.",
    "meaning": "두려워하여",
    "level": "middle"
  },
  {
    "word": "after",
    "pos": "n.",
    "meaning": "후에",
    "level": "middle"
  },
  {
    "word": "afternoon",
    "pos": "n.",
    "meaning": "오후",
    "level": "middle"
  },
  {
    "word": "again",
    "pos": "n.",
    "meaning": "다시",
    "level": "middle"
  },
  {
    "word": "against",
    "pos": "n.",
    "meaning": "…에 반대하여",
    "level": "middle"
  },
  {
    "word": "age",
    "pos": "n.",
    "meaning": "연령",
    "level": "middle"
  },
  {
    "word": "agency",
    "pos": "n.",
    "meaning": "기능",
    "level": "middle"
  },
  {
    "word": "agenda",
    "pos": "n.",
    "meaning": "안건",
    "level": "middle"
  },
  {
    "word": "agent",
    "pos": "a.",
    "meaning": "대리인",
    "level": "middle"
  },
  {
    "word": "aggressive",
    "pos": "a.",
    "meaning": "침략적인",
    "level": "middle"
  },
  {
    "word": "ago",
    "pos": "n.",
    "meaning": "이전에",
    "level": "middle"
  },
  {
    "word": "agree",
    "pos": "v.",
    "meaning": "동의하다",
    "level": "middle"
  },
  {
    "word": "agriculture",
    "pos": "n.",
    "meaning": "농업",
    "level": "middle"
  },
  {
    "word": "ahead",
    "pos": "n.",
    "meaning": "전방에",
    "level": "middle"
  },
  {
    "word": "aid",
    "pos": "v.",
    "meaning": "도와 주다",
    "level": "middle"
  },
  {
    "word": "aim",
    "pos": "v.",
    "meaning": "겨누다",
    "level": "middle"
  },
  {
    "word": "air",
    "pos": "n.",
    "meaning": "공기",
    "level": "middle"
  },
  {
    "word": "airplane",
    "pos": "n.",
    "meaning": "비행기",
    "level": "middle"
  },
  {
    "word": "aircraft",
    "pos": "n.",
    "meaning": "항공기",
    "level": "middle"
  },
  {
    "word": "airline",
    "pos": "n.",
    "meaning": "정기항공",
    "level": "middle"
  },
  {
    "word": "airport",
    "pos": "n.",
    "meaning": "공항",
    "level": "middle"
  },
  {
    "word": "aisle",
    "pos": "n.",
    "meaning": "측면복도",
    "level": "middle"
  },
  {
    "word": "alert",
    "pos": "a.",
    "meaning": "빈틈없는",
    "level": "middle"
  },
  {
    "word": "alien",
    "pos": "a.",
    "meaning": "외국의",
    "level": "middle"
  },
  {
    "word": "alike",
    "pos": "a.",
    "meaning": "비슷한",
    "level": "middle"
  },
  {
    "word": "alive",
    "pos": "a.",
    "meaning": "살아있는",
    "level": "middle"
  },
  {
    "word": "all",
    "pos": "n.",
    "meaning": "모든",
    "level": "middle"
  },
  {
    "word": "allocate",
    "pos": "v.",
    "meaning": "할당하다",
    "level": "middle"
  },
  {
    "word": "allow",
    "pos": "v.",
    "meaning": "허락하다",
    "level": "middle"
  },
  {
    "word": "ally",
    "pos": "v.",
    "meaning": "동맹하다",
    "level": "middle"
  },
  {
    "word": "almost",
    "pos": "a.",
    "meaning": "거의",
    "level": "middle"
  },
  {
    "word": "alone",
    "pos": "n.",
    "meaning": "다만 홀로(혼자서)",
    "level": "middle"
  },
  {
    "word": "along",
    "pos": "n.",
    "meaning": "-을 따라",
    "level": "middle"
  },
  {
    "word": "alongside",
    "pos": "n.",
    "meaning": "-의 곁에",
    "level": "middle"
  },
  {
    "word": "aloud",
    "pos": "ad.",
    "meaning": "큰 소리로",
    "level": "middle"
  },
  {
    "word": "already",
    "pos": "n.",
    "meaning": "이미",
    "level": "middle"
  },
  {
    "word": "alright",
    "pos": "n.",
    "meaning": "더할나위없이",
    "level": "middle"
  },
  {
    "word": "also",
    "pos": "a.",
    "meaning": "-도 또한",
    "level": "middle"
  },
  {
    "word": "alter",
    "pos": "v.",
    "meaning": "바꾸다",
    "level": "middle"
  },
  {
    "word": "alternative",
    "pos": "n.",
    "meaning": "어느 한쪽의 양자택일",
    "level": "middle"
  },
  {
    "word": "although",
    "pos": "n.",
    "meaning": "비록 -일지라도",
    "level": "middle"
  },
  {
    "word": "altogether",
    "pos": "n.",
    "meaning": "전혀",
    "level": "middle"
  },
  {
    "word": "always",
    "pos": "n.",
    "meaning": "늘",
    "level": "middle"
  },
  {
    "word": "A.M.",
    "pos": "n.",
    "meaning": "오전",
    "level": "middle"
  },
  {
    "word": "amaze",
    "pos": "v.",
    "meaning": "깜짝 놀라게 하다",
    "level": "middle"
  },
  {
    "word": "ambassador",
    "pos": "n.",
    "meaning": "대사",
    "level": "middle"
  },
  {
    "word": "ambition",
    "pos": "n.",
    "meaning": "야심",
    "level": "middle"
  },
  {
    "word": "among",
    "pos": "n.",
    "meaning": "-중에",
    "level": "middle"
  },
  {
    "word": "amount",
    "pos": "v.",
    "meaning": "(금액이)-이 되다",
    "level": "middle"
  },
  {
    "word": "amplify",
    "pos": "v.",
    "meaning": "확대하다",
    "level": "middle"
  },
  {
    "word": "amuse",
    "pos": "v.",
    "meaning": "재미나게 하다",
    "level": "middle"
  },
  {
    "word": "analyze",
    "pos": "v.",
    "meaning": "분해하다",
    "level": "middle"
  },
  {
    "word": "anchor",
    "pos": "n.",
    "meaning": "닻",
    "level": "middle"
  },
  {
    "word": "ancient",
    "pos": "a.",
    "meaning": "옛날의",
    "level": "middle"
  },
  {
    "word": "and",
    "pos": "n.",
    "meaning": "및",
    "level": "middle"
  },
  {
    "word": "angel",
    "pos": "n.",
    "meaning": "천사",
    "level": "middle"
  },
  {
    "word": "anger",
    "pos": "n.",
    "meaning": "성",
    "level": "middle"
  },
  {
    "word": "angle",
    "pos": "n.",
    "meaning": "각",
    "level": "middle"
  },
  {
    "word": "animal",
    "pos": "n.",
    "meaning": "동물",
    "level": "middle"
  },
  {
    "word": "anniversary",
    "pos": "a.",
    "meaning": "기념일 예년의",
    "level": "middle"
  },
  {
    "word": "announce",
    "pos": "v.",
    "meaning": "알리다",
    "level": "middle"
  },
  {
    "word": "annoy",
    "pos": "v.",
    "meaning": "귀찮게 하다",
    "level": "middle"
  },
  {
    "word": "annual",
    "pos": "a.",
    "meaning": "일년의",
    "level": "middle"
  },
  {
    "word": "another",
    "pos": "n.",
    "meaning": "또 하나",
    "level": "middle"
  },
  {
    "word": "answer",
    "pos": "n.",
    "meaning": "대답",
    "level": "middle"
  },
  {
    "word": "ant",
    "pos": "n.",
    "meaning": "개미",
    "level": "middle"
  },
  {
    "word": "anticipate",
    "pos": "v.",
    "meaning": "예기하다",
    "level": "middle"
  },
  {
    "word": "anxiety",
    "pos": "n.",
    "meaning": "근심",
    "level": "middle"
  },
  {
    "word": "anxious",
    "pos": "a.",
    "meaning": "걱정되는",
    "level": "middle"
  },
  {
    "word": "any",
    "pos": "n.",
    "meaning": "어떤",
    "level": "middle"
  },
  {
    "word": "apart",
    "pos": "n.",
    "meaning": "떨어져서",
    "level": "middle"
  },
  {
    "word": "apology",
    "pos": "n.",
    "meaning": "사과",
    "level": "middle"
  },
  {
    "word": "apparent",
    "pos": "a.",
    "meaning": "명백한",
    "level": "middle"
  },
  {
    "word": "appeal",
    "pos": "v.",
    "meaning": "간청하다",
    "level": "middle"
  },
  {
    "word": "appear",
    "pos": "v.",
    "meaning": "나타나다",
    "level": "middle"
  },
  {
    "word": "apple",
    "pos": "n.",
    "meaning": "사과",
    "level": "middle"
  },
  {
    "word": "applicant",
    "pos": "n.",
    "meaning": "지원자",
    "level": "middle"
  },
  {
    "word": "apply",
    "pos": "v.",
    "meaning": "(물건을)대다",
    "level": "middle"
  },
  {
    "word": "appoint",
    "pos": "v.",
    "meaning": "지정하다",
    "level": "middle"
  },
  {
    "word": "appreciate",
    "pos": "v.",
    "meaning": "감상하다",
    "level": "middle"
  },
  {
    "word": "approach",
    "pos": "v.",
    "meaning": "다가가다",
    "level": "middle"
  },
  {
    "word": "appropriate",
    "pos": "a.",
    "meaning": "적당한",
    "level": "middle"
  },
  {
    "word": "approve",
    "pos": "v.",
    "meaning": "시인하다",
    "level": "middle"
  },
  {
    "word": "approximate",
    "pos": "a.",
    "meaning": "어림셈의",
    "level": "middle"
  },
  {
    "word": "architect",
    "pos": "n.",
    "meaning": "건축가",
    "level": "middle"
  },
  {
    "word": "architecture",
    "pos": "n.",
    "meaning": "건축",
    "level": "middle"
  },
  {
    "word": "archive",
    "pos": "n.",
    "meaning": "기록보관소",
    "level": "middle"
  },
  {
    "word": "area",
    "pos": "a.",
    "meaning": "면적",
    "level": "middle"
  },
  {
    "word": "argue",
    "pos": "v.",
    "meaning": "논하다",
    "level": "middle"
  },
  {
    "word": "arise",
    "pos": "v.",
    "meaning": "생기다",
    "level": "middle"
  },
  {
    "word": "arm",
    "pos": "n.",
    "meaning": "팔",
    "level": "middle"
  },
  {
    "word": "army",
    "pos": "n.",
    "meaning": "육군",
    "level": "middle"
  },
  {
    "word": "around",
    "pos": "n.",
    "meaning": "사방에",
    "level": "middle"
  },
  {
    "word": "arrange",
    "pos": "v.",
    "meaning": "가지런히 하다",
    "level": "middle"
  },
  {
    "word": "arrest",
    "pos": "v.",
    "meaning": "체포하다",
    "level": "middle"
  },
  {
    "word": "arrive",
    "pos": "v.",
    "meaning": "도착하다",
    "level": "middle"
  },
  {
    "word": "arrow",
    "pos": "n.",
    "meaning": "화살",
    "level": "middle"
  },
  {
    "word": "art",
    "pos": "n.",
    "meaning": "예술",
    "level": "middle"
  },
  {
    "word": "article",
    "pos": "n.",
    "meaning": "물품",
    "level": "middle"
  },
  {
    "word": "artificial",
    "pos": "a.",
    "meaning": "인공의",
    "level": "middle"
  },
  {
    "word": "as",
    "pos": "ad.",
    "meaning": "-와 같은 정도로",
    "level": "middle"
  },
  {
    "word": "ash",
    "pos": "n.",
    "meaning": "회",
    "level": "middle"
  },
  {
    "word": "aside",
    "pos": "n.",
    "meaning": "곁에",
    "level": "middle"
  },
  {
    "word": "ask",
    "pos": "v.",
    "meaning": "묻다",
    "level": "middle"
  },
  {
    "word": "asleep",
    "pos": "n.",
    "meaning": "잠들은",
    "level": "middle"
  },
  {
    "word": "aspect",
    "pos": "n.",
    "meaning": "관점",
    "level": "middle"
  },
  {
    "word": "aspire",
    "pos": "v.",
    "meaning": "열망하다",
    "level": "middle"
  },
  {
    "word": "assault",
    "pos": "n.",
    "meaning": "습격",
    "level": "middle"
  },
  {
    "word": "assemble",
    "pos": "v.",
    "meaning": "모으다",
    "level": "middle"
  },
  {
    "word": "assert",
    "pos": "v.",
    "meaning": "단언하다",
    "level": "middle"
  },
  {
    "word": "assess",
    "pos": "v.",
    "meaning": "(세금 등을)사정하다",
    "level": "middle"
  },
  {
    "word": "asset",
    "pos": "n.",
    "meaning": "자산",
    "level": "middle"
  },
  {
    "word": "assign",
    "pos": "v.",
    "meaning": "할당하다",
    "level": "middle"
  },
  {
    "word": "assist",
    "pos": "v.",
    "meaning": "돕다",
    "level": "middle"
  },
  {
    "word": "associate",
    "pos": "v.",
    "meaning": "연상하다",
    "level": "middle"
  },
  {
    "word": "assume",
    "pos": "v.",
    "meaning": "취하다",
    "level": "middle"
  },
  {
    "word": "assure",
    "pos": "v.",
    "meaning": "보증하다",
    "level": "middle"
  },
  {
    "word": "astonish",
    "pos": "v.",
    "meaning": "놀라게 하다",
    "level": "middle"
  },
  {
    "word": "at",
    "pos": "n.",
    "meaning": "-에서",
    "level": "middle"
  },
  {
    "word": "athlete",
    "pos": "n.",
    "meaning": "운동가",
    "level": "middle"
  },
  {
    "word": "atmosphere",
    "pos": "n.",
    "meaning": "대기",
    "level": "middle"
  },
  {
    "word": "atom",
    "pos": "n.",
    "meaning": "원자",
    "level": "middle"
  },
  {
    "word": "attach",
    "pos": "v.",
    "meaning": "붙이다",
    "level": "middle"
  },
  {
    "word": "attack",
    "pos": "v.",
    "meaning": "공격하다",
    "level": "middle"
  },
  {
    "word": "attain",
    "pos": "v.",
    "meaning": "이르다",
    "level": "middle"
  },
  {
    "word": "attempt",
    "pos": "v.",
    "meaning": "시도하다",
    "level": "middle"
  },
  {
    "word": "attend",
    "pos": "v.",
    "meaning": "출석하다",
    "level": "middle"
  },
  {
    "word": "attention",
    "pos": "a.",
    "meaning": "주의",
    "level": "middle"
  },
  {
    "word": "attitude",
    "pos": "n.",
    "meaning": "태도",
    "level": "middle"
  },
  {
    "word": "attorney",
    "pos": "n.",
    "meaning": "변호사",
    "level": "middle"
  },
  {
    "word": "attract",
    "pos": "v.",
    "meaning": "끌어 당기다",
    "level": "middle"
  },
  {
    "word": "attribute",
    "pos": "n.",
    "meaning": "속성",
    "level": "middle"
  },
  {
    "word": "auction",
    "pos": "n.",
    "meaning": "경매",
    "level": "middle"
  },
  {
    "word": "audience",
    "pos": "n.",
    "meaning": "청중",
    "level": "middle"
  },
  {
    "word": "aunt",
    "pos": "n.",
    "meaning": "아주머니",
    "level": "middle"
  },
  {
    "word": "authentic",
    "pos": "a.",
    "meaning": "진짜의",
    "level": "middle"
  },
  {
    "word": "author",
    "pos": "n.",
    "meaning": "저자",
    "level": "middle"
  },
  {
    "word": "autobiography",
    "pos": "n.",
    "meaning": "자서전",
    "level": "middle"
  },
  {
    "word": "automatic",
    "pos": "a.",
    "meaning": "자동의",
    "level": "middle"
  },
  {
    "word": "automobile",
    "pos": "a.",
    "meaning": "자동차 자동차의",
    "level": "middle"
  },
  {
    "word": "available",
    "pos": "a.",
    "meaning": "쓸모있는",
    "level": "middle"
  },
  {
    "word": "avenue",
    "pos": "n.",
    "meaning": "가로수길",
    "level": "middle"
  },
  {
    "word": "average",
    "pos": "n.",
    "meaning": "평균",
    "level": "middle"
  },
  {
    "word": "avoid",
    "pos": "v.",
    "meaning": "피하다",
    "level": "middle"
  },
  {
    "word": "await",
    "pos": "v.",
    "meaning": "기다리다",
    "level": "middle"
  },
  {
    "word": "awake",
    "pos": "v.",
    "meaning": "깨우다",
    "level": "middle"
  },
  {
    "word": "award",
    "pos": "n.",
    "meaning": "상",
    "level": "middle"
  },
  {
    "word": "aware",
    "pos": "a.",
    "meaning": "알고 있는",
    "level": "middle"
  },
  {
    "word": "away",
    "pos": "n.",
    "meaning": "떨어져서",
    "level": "middle"
  },
  {
    "word": "awesome",
    "pos": "n.",
    "meaning": "무서운",
    "level": "middle"
  },
  {
    "word": "awful",
    "pos": "n.",
    "meaning": "두려운",
    "level": "middle"
  },
  {
    "word": "awkward",
    "pos": "a.",
    "meaning": "어색한",
    "level": "middle"
  },
  {
    "word": "baby",
    "pos": "n.",
    "meaning": "갓난아이, 막내 관심사, 골치아픈 일,",
    "level": "middle"
  },
  {
    "word": "back",
    "pos": "n.",
    "meaning": "등",
    "level": "middle"
  },
  {
    "word": "background",
    "pos": "n.",
    "meaning": "배경",
    "level": "middle"
  },
  {
    "word": "bad",
    "pos": "n.",
    "meaning": "나쁜",
    "level": "middle"
  },
  {
    "word": "bake",
    "pos": "v.",
    "meaning": "굽다",
    "level": "middle"
  },
  {
    "word": "balance",
    "pos": "n.",
    "meaning": "균형",
    "level": "middle"
  },
  {
    "word": "ball",
    "pos": "n.",
    "meaning": "공",
    "level": "middle"
  },
  {
    "word": "balloon",
    "pos": "n.",
    "meaning": "기구",
    "level": "middle"
  },
  {
    "word": "ban",
    "pos": "n.",
    "meaning": "금지",
    "level": "middle"
  },
  {
    "word": "band",
    "pos": "n.",
    "meaning": "그룹",
    "level": "middle"
  },
  {
    "word": "bang",
    "pos": "n.",
    "meaning": "강타",
    "level": "middle"
  },
  {
    "word": "bank",
    "pos": "n.",
    "meaning": "둑",
    "level": "middle"
  },
  {
    "word": "bankrupt",
    "pos": "n.",
    "meaning": "파산자",
    "level": "middle"
  },
  {
    "word": "bar",
    "pos": "n.",
    "meaning": "막대기",
    "level": "middle"
  },
  {
    "word": "bare",
    "pos": "n.",
    "meaning": "벌거벗은",
    "level": "middle"
  },
  {
    "word": "bargain",
    "pos": "n.",
    "meaning": "매매",
    "level": "middle"
  },
  {
    "word": "bark",
    "pos": "v.",
    "meaning": "짖다",
    "level": "middle"
  },
  {
    "word": "barn",
    "pos": "n.",
    "meaning": "헛간",
    "level": "middle"
  },
  {
    "word": "barrier",
    "pos": "n.",
    "meaning": "장벽",
    "level": "middle"
  },
  {
    "word": "base",
    "pos": "n.",
    "meaning": "기초",
    "level": "middle"
  },
  {
    "word": "baseball",
    "pos": "n.",
    "meaning": "야구",
    "level": "middle"
  },
  {
    "word": "basic",
    "pos": "a.",
    "meaning": "기본의",
    "level": "middle"
  },
  {
    "word": "basis",
    "pos": "n.",
    "meaning": "기초",
    "level": "middle"
  },
  {
    "word": "basket",
    "pos": "n.",
    "meaning": "바구니",
    "level": "middle"
  },
  {
    "word": "basketball",
    "pos": "n.",
    "meaning": "농구",
    "level": "middle"
  },
  {
    "word": "bath",
    "pos": "n.",
    "meaning": "목욕",
    "level": "middle"
  },
  {
    "word": "bathroom",
    "pos": "n.",
    "meaning": "욕실",
    "level": "middle"
  },
  {
    "word": "battery",
    "pos": "n.",
    "meaning": "전지",
    "level": "middle"
  },
  {
    "word": "battle",
    "pos": "n.",
    "meaning": "전투",
    "level": "middle"
  },
  {
    "word": "bay",
    "pos": "n.",
    "meaning": "만",
    "level": "middle"
  },
  {
    "word": "be",
    "pos": "v.",
    "meaning": "-이다",
    "level": "middle"
  },
  {
    "word": "beach",
    "pos": "n.",
    "meaning": "해안",
    "level": "middle"
  },
  {
    "word": "beam",
    "pos": "n.",
    "meaning": "광선",
    "level": "middle"
  },
  {
    "word": "bean",
    "pos": "n.",
    "meaning": "콩",
    "level": "middle"
  },
  {
    "word": "bear",
    "pos": "v.",
    "meaning": "나르다",
    "level": "middle"
  },
  {
    "word": "beard",
    "pos": "n.",
    "meaning": "턱수염",
    "level": "middle"
  },
  {
    "word": "beast",
    "pos": "n.",
    "meaning": "짐승",
    "level": "middle"
  },
  {
    "word": "beat",
    "pos": "v.",
    "meaning": "치다",
    "level": "middle"
  },
  {
    "word": "beauty",
    "pos": "n.",
    "meaning": "아름다움",
    "level": "middle"
  },
  {
    "word": "because",
    "pos": "n.",
    "meaning": "왜냐하면",
    "level": "middle"
  },
  {
    "word": "become",
    "pos": "v.",
    "meaning": "-이 되다",
    "level": "middle"
  },
  {
    "word": "bed",
    "pos": "n.",
    "meaning": "침대",
    "level": "middle"
  },
  {
    "word": "bedroom",
    "pos": "a.",
    "meaning": "침실 성적인",
    "level": "middle"
  },
  {
    "word": "bee",
    "pos": "n.",
    "meaning": "꿀벌",
    "level": "middle"
  },
  {
    "word": "beef",
    "pos": "n.",
    "meaning": "쇠고기",
    "level": "middle"
  },
  {
    "word": "beer",
    "pos": "n.",
    "meaning": "맥주",
    "level": "middle"
  },
  {
    "word": "before",
    "pos": "n.",
    "meaning": "앞에",
    "level": "middle"
  },
  {
    "word": "beg",
    "pos": "v.",
    "meaning": "청하다",
    "level": "middle"
  },
  {
    "word": "begin",
    "pos": "v.",
    "meaning": "시작하다",
    "level": "middle"
  },
  {
    "word": "behalf",
    "pos": "n.",
    "meaning": "위함",
    "level": "middle"
  },
  {
    "word": "behave",
    "pos": "v.",
    "meaning": "행동하다",
    "level": "middle"
  },
  {
    "word": "behavior",
    "pos": "n.",
    "meaning": "행동",
    "level": "middle"
  },
  {
    "word": "behind",
    "pos": "n.",
    "meaning": "뒤에",
    "level": "middle"
  },
  {
    "word": "believe",
    "pos": "v.",
    "meaning": "믿다",
    "level": "middle"
  },
  {
    "word": "bell",
    "pos": "n.",
    "meaning": "종",
    "level": "middle"
  },
  {
    "word": "belong",
    "pos": "v.",
    "meaning": "속하다",
    "level": "middle"
  },
  {
    "word": "below",
    "pos": "n.",
    "meaning": "아래에",
    "level": "middle"
  },
  {
    "word": "bend",
    "pos": "v.",
    "meaning": "구부리다",
    "level": "middle"
  },
  {
    "word": "beneath",
    "pos": "n.",
    "meaning": "-의 바로 아래에",
    "level": "middle"
  },
  {
    "word": "benefit",
    "pos": "n.",
    "meaning": "이익",
    "level": "middle"
  },
  {
    "word": "berry",
    "pos": "n.",
    "meaning": "액과",
    "level": "middle"
  },
  {
    "word": "beside",
    "pos": "n.",
    "meaning": "-의 곁에",
    "level": "middle"
  },
  {
    "word": "bet",
    "pos": "v.",
    "meaning": "걸다",
    "level": "middle"
  },
  {
    "word": "betray",
    "pos": "v.",
    "meaning": "배반하다",
    "level": "middle"
  },
  {
    "word": "between",
    "pos": "n.",
    "meaning": "-의 사이에 사이에",
    "level": "middle"
  },
  {
    "word": "beyond",
    "pos": "n.",
    "meaning": "저편에",
    "level": "middle"
  },
  {
    "word": "bias",
    "pos": "n.",
    "meaning": "치우침",
    "level": "middle"
  },
  {
    "word": "bible",
    "pos": "n.",
    "meaning": "성서, 성경",
    "level": "middle"
  },
  {
    "word": "bicycle",
    "pos": "v.",
    "meaning": "자전거 자전거를 타다",
    "level": "middle"
  },
  {
    "word": "big",
    "pos": "n.",
    "meaning": "큰",
    "level": "middle"
  },
  {
    "word": "bill",
    "pos": "n.",
    "meaning": "계산서",
    "level": "middle"
  },
  {
    "word": "billion",
    "pos": "n.",
    "meaning": "10 억",
    "level": "middle"
  },
  {
    "word": "bin",
    "pos": "n.",
    "meaning": "궤",
    "level": "middle"
  },
  {
    "word": "bind",
    "pos": "v.",
    "meaning": "매다",
    "level": "middle"
  },
  {
    "word": "biography",
    "pos": "n.",
    "meaning": "전기",
    "level": "middle"
  },
  {
    "word": "biology",
    "pos": "n.",
    "meaning": "생물학",
    "level": "middle"
  },
  {
    "word": "bird",
    "pos": "n.",
    "meaning": "새",
    "level": "middle"
  },
  {
    "word": "birth",
    "pos": "n.",
    "meaning": "출생",
    "level": "middle"
  },
  {
    "word": "birthday",
    "pos": "n.",
    "meaning": "생일",
    "level": "middle"
  },
  {
    "word": "bishop",
    "pos": "n.",
    "meaning": "주교",
    "level": "middle"
  },
  {
    "word": "bit bite",
    "pos": "n.",
    "meaning": "의 과거(분사) 작은 조각",
    "level": "middle"
  },
  {
    "word": "bite",
    "pos": "v.",
    "meaning": "물다",
    "level": "middle"
  },
  {
    "word": "bitter",
    "pos": "n.",
    "meaning": "쓴",
    "level": "middle"
  },
  {
    "word": "black",
    "pos": "n.",
    "meaning": "검은",
    "level": "middle"
  },
  {
    "word": "blame",
    "pos": "v.",
    "meaning": "책망하다",
    "level": "middle"
  },
  {
    "word": "blank",
    "pos": "n.",
    "meaning": "공백",
    "level": "middle"
  },
  {
    "word": "blanket",
    "pos": "n.",
    "meaning": "담요",
    "level": "middle"
  },
  {
    "word": "blast",
    "pos": "n.",
    "meaning": "돌풍",
    "level": "middle"
  },
  {
    "word": "blend",
    "pos": "v.",
    "meaning": "혼합하다",
    "level": "middle"
  },
  {
    "word": "bless",
    "pos": "v.",
    "meaning": "축복하다",
    "level": "middle"
  },
  {
    "word": "blind",
    "pos": "n.",
    "meaning": "눈먼",
    "level": "middle"
  },
  {
    "word": "blink",
    "pos": "v.",
    "meaning": "(눈을)깜빡거리다",
    "level": "middle"
  },
  {
    "word": "block",
    "pos": "n.",
    "meaning": "덩어리",
    "level": "middle"
  },
  {
    "word": "blonde",
    "pos": "n.",
    "meaning": "(살결이 흰)금발의 여성",
    "level": "middle"
  },
  {
    "word": "blood",
    "pos": "n.",
    "meaning": "피",
    "level": "middle"
  },
  {
    "word": "bloom",
    "pos": "n.",
    "meaning": "쇳덩이",
    "level": "middle"
  },
  {
    "word": "blossom",
    "pos": "n.",
    "meaning": "(과수의)꽃",
    "level": "middle"
  },
  {
    "word": "blow",
    "pos": "n.",
    "meaning": "강타",
    "level": "middle"
  },
  {
    "word": "blue",
    "pos": "n.",
    "meaning": "푸른",
    "level": "middle"
  },
  {
    "word": "board",
    "pos": "n.",
    "meaning": "널빤지",
    "level": "middle"
  },
  {
    "word": "boat",
    "pos": "n.",
    "meaning": "배",
    "level": "middle"
  },
  {
    "word": "body",
    "pos": "n.",
    "meaning": "신체",
    "level": "middle"
  },
  {
    "word": "boil",
    "pos": "v.",
    "meaning": "끓다",
    "level": "middle"
  },
  {
    "word": "bold",
    "pos": "a.",
    "meaning": "대담한",
    "level": "middle"
  },
  {
    "word": "bomb",
    "pos": "v.",
    "meaning": "폭탄 폭격하다",
    "level": "middle"
  },
  {
    "word": "bond",
    "pos": "n.",
    "meaning": "결속",
    "level": "middle"
  },
  {
    "word": "bone",
    "pos": "n.",
    "meaning": "뼈",
    "level": "middle"
  },
  {
    "word": "book",
    "pos": "n.",
    "meaning": "책",
    "level": "middle"
  },
  {
    "word": "boom",
    "pos": "n.",
    "meaning": "굉음",
    "level": "middle"
  },
  {
    "word": "boost",
    "pos": "n.",
    "meaning": "뒤를 밀기",
    "level": "middle"
  },
  {
    "word": "boot",
    "pos": "n.",
    "meaning": "목이 긴 구두",
    "level": "middle"
  },
  {
    "word": "border",
    "pos": "n.",
    "meaning": "가장자리",
    "level": "middle"
  },
  {
    "word": "bore",
    "pos": "n.",
    "meaning": "고조",
    "level": "middle"
  },
  {
    "word": "borrow",
    "pos": "v.",
    "meaning": "빌다",
    "level": "middle"
  },
  {
    "word": "boss",
    "pos": "n.",
    "meaning": "두목",
    "level": "middle"
  },
  {
    "word": "both",
    "pos": "a.",
    "meaning": "쌍방의",
    "level": "middle"
  },
  {
    "word": "bother",
    "pos": "v.",
    "meaning": "괴롭히다 근심하다 귀찮음",
    "level": "middle"
  },
  {
    "word": "bottle",
    "pos": "n.",
    "meaning": "병",
    "level": "middle"
  },
  {
    "word": "bottom",
    "pos": "n.",
    "meaning": "밑바닥",
    "level": "middle"
  },
  {
    "word": "bounce",
    "pos": "v.",
    "meaning": "뛰어오르다",
    "level": "middle"
  },
  {
    "word": "boundary",
    "pos": "n.",
    "meaning": "경계",
    "level": "middle"
  },
  {
    "word": "bow",
    "pos": "n.",
    "meaning": "절",
    "level": "middle"
  },
  {
    "word": "bowl",
    "pos": "n.",
    "meaning": "사발",
    "level": "middle"
  },
  {
    "word": "boy",
    "pos": "n.",
    "meaning": "소년",
    "level": "middle"
  },
  {
    "word": "brain",
    "pos": "n.",
    "meaning": "뇌",
    "level": "middle"
  },
  {
    "word": "brake",
    "pos": "n.",
    "meaning": "브레이크",
    "level": "middle"
  },
  {
    "word": "branch",
    "pos": "n.",
    "meaning": "가지",
    "level": "middle"
  },
  {
    "word": "brand",
    "pos": "n.",
    "meaning": "상표",
    "level": "middle"
  },
  {
    "word": "brave",
    "pos": "a.",
    "meaning": "용감한",
    "level": "middle"
  },
  {
    "word": "bread",
    "pos": "n.",
    "meaning": "빵",
    "level": "middle"
  },
  {
    "word": "break",
    "pos": "v.",
    "meaning": "부수다",
    "level": "middle"
  },
  {
    "word": "breakfast",
    "pos": "n.",
    "meaning": "아침밥",
    "level": "middle"
  },
  {
    "word": "breast",
    "pos": "n.",
    "meaning": "가슴",
    "level": "middle"
  },
  {
    "word": "breathe",
    "pos": "v.",
    "meaning": "숨쉬다",
    "level": "middle"
  },
  {
    "word": "breed",
    "pos": "v.",
    "meaning": "기르다",
    "level": "middle"
  },
  {
    "word": "breeze",
    "pos": "n.",
    "meaning": "미풍",
    "level": "middle"
  },
  {
    "word": "brew",
    "pos": "v.",
    "meaning": "양조하다",
    "level": "middle"
  },
  {
    "word": "brick",
    "pos": "n.",
    "meaning": "벽돌",
    "level": "middle"
  },
  {
    "word": "bride",
    "pos": "n.",
    "meaning": "신부",
    "level": "middle"
  },
  {
    "word": "bridge",
    "pos": "n.",
    "meaning": "다리",
    "level": "middle"
  },
  {
    "word": "brief",
    "pos": "a.",
    "meaning": "단시간의",
    "level": "middle"
  },
  {
    "word": "bright",
    "pos": "n.",
    "meaning": "밝은",
    "level": "middle"
  },
  {
    "word": "brilliant",
    "pos": "a.",
    "meaning": "빛나는",
    "level": "middle"
  },
  {
    "word": "bring",
    "pos": "v.",
    "meaning": "가져오다",
    "level": "middle"
  },
  {
    "word": "broad",
    "pos": "n.",
    "meaning": "(폭이)넓은",
    "level": "middle"
  },
  {
    "word": "broadcast",
    "pos": "v.",
    "meaning": "방송하다",
    "level": "middle"
  },
  {
    "word": "brother",
    "pos": "n.",
    "meaning": "형제",
    "level": "middle"
  },
  {
    "word": "brown",
    "pos": "n.",
    "meaning": "갈색의 갈색",
    "level": "middle"
  },
  {
    "word": "brush",
    "pos": "n.",
    "meaning": "솔",
    "level": "middle"
  },
  {
    "word": "brute",
    "pos": "n.",
    "meaning": "야수 짐승같은",
    "level": "middle"
  },
  {
    "word": "bubble",
    "pos": "v.",
    "meaning": "거품 거품이 일다",
    "level": "middle"
  },
  {
    "word": "budget",
    "pos": "n.",
    "meaning": "예산",
    "level": "middle"
  },
  {
    "word": "bug",
    "pos": "n.",
    "meaning": "벌레",
    "level": "middle"
  },
  {
    "word": "build",
    "pos": "v.",
    "meaning": "짓다",
    "level": "middle"
  },
  {
    "word": "bulk",
    "pos": "n.",
    "meaning": "부피",
    "level": "middle"
  },
  {
    "word": "bull",
    "pos": "n.",
    "meaning": "황소",
    "level": "middle"
  },
  {
    "word": "bullet",
    "pos": "n.",
    "meaning": "탄환",
    "level": "middle"
  },
  {
    "word": "bully",
    "pos": "n.",
    "meaning": "약한 자를 못살게 구는 자",
    "level": "middle"
  },
  {
    "word": "bump",
    "pos": "v.",
    "meaning": "충돌 부딪치다",
    "level": "middle"
  },
  {
    "word": "bunch",
    "pos": "n.",
    "meaning": "송이",
    "level": "middle"
  },
  {
    "word": "bundle",
    "pos": "n.",
    "meaning": "다발",
    "level": "middle"
  },
  {
    "word": "burden",
    "pos": "n.",
    "meaning": "후렴",
    "level": "middle"
  },
  {
    "word": "burn",
    "pos": "n.",
    "meaning": "시내",
    "level": "middle"
  },
  {
    "word": "burst",
    "pos": "v.",
    "meaning": "파열하다",
    "level": "middle"
  },
  {
    "word": "bury",
    "pos": "v.",
    "meaning": "묻다",
    "level": "middle"
  },
  {
    "word": "bush",
    "pos": "n.",
    "meaning": "덤불",
    "level": "middle"
  },
  {
    "word": "business",
    "pos": "n.",
    "meaning": "직업",
    "level": "middle"
  },
  {
    "word": "busy",
    "pos": "n.",
    "meaning": "바쁜",
    "level": "middle"
  },
  {
    "word": "but",
    "pos": "n.",
    "meaning": "그러나 다만 (-을)제외하고",
    "level": "middle"
  },
  {
    "word": "butcher",
    "pos": "a.",
    "meaning": "정육점주인",
    "level": "middle"
  },
  {
    "word": "button",
    "pos": "v.",
    "meaning": "단추 단추를 채우다 단추로 채워지다",
    "level": "middle"
  },
  {
    "word": "buy",
    "pos": "v.",
    "meaning": "사다",
    "level": "middle"
  },
  {
    "word": "buzz",
    "pos": "n.",
    "meaning": "윙윙거리는 소리",
    "level": "middle"
  },
  {
    "word": "by",
    "pos": "n.",
    "meaning": "곁에",
    "level": "middle"
  },
  {
    "word": "cab",
    "pos": "n.",
    "meaning": "택시",
    "level": "middle"
  },
  {
    "word": "cabin",
    "pos": "n.",
    "meaning": "선실",
    "level": "middle"
  },
  {
    "word": "cable",
    "pos": "n.",
    "meaning": "해저전신",
    "level": "middle"
  },
  {
    "word": "cage",
    "pos": "n.",
    "meaning": "새장",
    "level": "middle"
  },
  {
    "word": "calculate",
    "pos": "v.",
    "meaning": "계산하다",
    "level": "middle"
  },
  {
    "word": "calendar",
    "pos": "n.",
    "meaning": "달력",
    "level": "middle"
  },
  {
    "word": "call",
    "pos": "v.",
    "meaning": "부르다",
    "level": "middle"
  },
  {
    "word": "calm",
    "pos": "a.",
    "meaning": "평온한",
    "level": "middle"
  },
  {
    "word": "can",
    "pos": "v.",
    "meaning": "au-할 수 있다",
    "level": "middle"
  },
  {
    "word": "cancel",
    "pos": "v.",
    "meaning": "취소하다",
    "level": "middle"
  },
  {
    "word": "cancer",
    "pos": "n.",
    "meaning": "암",
    "level": "middle"
  },
  {
    "word": "candidate",
    "pos": "n.",
    "meaning": "지원자",
    "level": "middle"
  },
  {
    "word": "candy",
    "pos": "n.",
    "meaning": "사탕과자",
    "level": "middle"
  },
  {
    "word": "canvas",
    "pos": "n.",
    "meaning": "돛베",
    "level": "middle"
  },
  {
    "word": "cap",
    "pos": "n.",
    "meaning": "모자",
    "level": "middle"
  },
  {
    "word": "capable",
    "pos": "a.",
    "meaning": "할 수 있는",
    "level": "middle"
  },
  {
    "word": "cape",
    "pos": "n.",
    "meaning": "곶",
    "level": "middle"
  },
  {
    "word": "capital",
    "pos": "a.",
    "meaning": "수위의",
    "level": "middle"
  },
  {
    "word": "captain",
    "pos": "n.",
    "meaning": "우두머리(chief)",
    "level": "middle"
  },
  {
    "word": "caption",
    "pos": "n.",
    "meaning": "표제",
    "level": "middle"
  },
  {
    "word": "capture",
    "pos": "n.",
    "meaning": "붙잡다(=catch)",
    "level": "middle"
  },
  {
    "word": "car",
    "pos": "n.",
    "meaning": "자동차",
    "level": "middle"
  },
  {
    "word": "care",
    "pos": "n.",
    "meaning": "걱정",
    "level": "middle"
  },
  {
    "word": "career",
    "pos": "n.",
    "meaning": "경력",
    "level": "middle"
  },
  {
    "word": "carrot",
    "pos": "n.",
    "meaning": "당근",
    "level": "middle"
  },
  {
    "word": "carry",
    "pos": "v.",
    "meaning": "나르다",
    "level": "middle"
  },
  {
    "word": "cart",
    "pos": "n.",
    "meaning": "(2 륜)짐마차",
    "level": "middle"
  },
  {
    "word": "carve",
    "pos": "v.",
    "meaning": "조각하다",
    "level": "middle"
  },
  {
    "word": "case",
    "pos": "n.",
    "meaning": "경우",
    "level": "middle"
  },
  {
    "word": "cash",
    "pos": "v.",
    "meaning": "현금 현금으로 바꾸다 현금의",
    "level": "middle"
  },
  {
    "word": "cast",
    "pos": "v.",
    "meaning": "던지다",
    "level": "middle"
  },
  {
    "word": "castle",
    "pos": "n.",
    "meaning": "성",
    "level": "middle"
  },
  {
    "word": "casual",
    "pos": "a.",
    "meaning": "우연한",
    "level": "middle"
  },
  {
    "word": "cat",
    "pos": "n.",
    "meaning": "고양이",
    "level": "middle"
  },
  {
    "word": "catch",
    "pos": "v.",
    "meaning": "붙잡다",
    "level": "middle"
  },
  {
    "word": "category",
    "pos": "n.",
    "meaning": "범주",
    "level": "middle"
  },
  {
    "word": "cater",
    "pos": "v.",
    "meaning": "음식물을 마련하다",
    "level": "middle"
  },
  {
    "word": "cathedral",
    "pos": "n.",
    "meaning": "대성당",
    "level": "middle"
  },
  {
    "word": "cattle",
    "pos": "n.",
    "meaning": "소",
    "level": "middle"
  },
  {
    "word": "causal",
    "pos": "a.",
    "meaning": "원인의",
    "level": "middle"
  },
  {
    "word": "cause",
    "pos": "a.",
    "meaning": "원인",
    "level": "middle"
  },
  {
    "word": "caution",
    "pos": "n.",
    "meaning": "조심",
    "level": "middle"
  },
  {
    "word": "cave",
    "pos": "v.",
    "meaning": "동굴 굴을 파다 꺼지다",
    "level": "middle"
  },
  {
    "word": "cease",
    "pos": "v.",
    "meaning": "그만두다 그치다 중지",
    "level": "middle"
  },
  {
    "word": "ceiling",
    "pos": "n.",
    "meaning": "천장",
    "level": "middle"
  },
  {
    "word": "celebrate",
    "pos": "v.",
    "meaning": "경축하다",
    "level": "middle"
  },
  {
    "word": "celebrity",
    "pos": "n.",
    "meaning": "명성",
    "level": "middle"
  },
  {
    "word": "cell",
    "pos": "n.",
    "meaning": "작은 방",
    "level": "middle"
  },
  {
    "word": "censor",
    "pos": "n.",
    "meaning": "검열관",
    "level": "middle"
  },
  {
    "word": "century",
    "pos": "n.",
    "meaning": "1 세기",
    "level": "middle"
  },
  {
    "word": "certain",
    "pos": "a.",
    "meaning": "확신하는",
    "level": "middle"
  },
  {
    "word": "certificate",
    "pos": "n.",
    "meaning": "증명서",
    "level": "middle"
  },
  {
    "word": "chain",
    "pos": "n.",
    "meaning": "사슬",
    "level": "middle"
  },
  {
    "word": "chair",
    "pos": "n.",
    "meaning": "의장",
    "level": "middle"
  },
  {
    "word": "chairman",
    "pos": "n.",
    "meaning": "의장",
    "level": "middle"
  },
  {
    "word": "challenge",
    "pos": "n.",
    "meaning": "도전",
    "level": "middle"
  },
  {
    "word": "chamber",
    "pos": "n.",
    "meaning": "방",
    "level": "middle"
  },
  {
    "word": "chance",
    "pos": "n.",
    "meaning": "우연",
    "level": "middle"
  },
  {
    "word": "change",
    "pos": "n.",
    "meaning": "변화",
    "level": "middle"
  },
  {
    "word": "chaos",
    "pos": "n.",
    "meaning": "혼돈",
    "level": "middle"
  },
  {
    "word": "character",
    "pos": "n.",
    "meaning": "인격",
    "level": "middle"
  },
  {
    "word": "characteristic",
    "pos": "a.",
    "meaning": "특유한",
    "level": "middle"
  },
  {
    "word": "charge",
    "pos": "n.",
    "meaning": "요금",
    "level": "middle"
  },
  {
    "word": "charity",
    "pos": "n.",
    "meaning": "자비",
    "level": "middle"
  },
  {
    "word": "charm",
    "pos": "n.",
    "meaning": "매력",
    "level": "middle"
  },
  {
    "word": "chase",
    "pos": "v.",
    "meaning": "쫓다",
    "level": "middle"
  },
  {
    "word": "chat",
    "pos": "n.",
    "meaning": "잡담",
    "level": "middle"
  },
  {
    "word": "cheap",
    "pos": "n.",
    "meaning": "값싼",
    "level": "middle"
  },
  {
    "word": "check",
    "pos": "n.",
    "meaning": "방해",
    "level": "middle"
  },
  {
    "word": "cheek",
    "pos": "n.",
    "meaning": "볼",
    "level": "middle"
  },
  {
    "word": "cheer",
    "pos": "n.",
    "meaning": "갈채",
    "level": "middle"
  },
  {
    "word": "chef",
    "pos": "n.",
    "meaning": "쿡",
    "level": "middle"
  },
  {
    "word": "chemical",
    "pos": "a.",
    "meaning": "화학의",
    "level": "middle"
  },
  {
    "word": "chemistry",
    "pos": "n.",
    "meaning": "화학",
    "level": "middle"
  },
  {
    "word": "chest",
    "pos": "n.",
    "meaning": "가슴팍",
    "level": "middle"
  },
  {
    "word": "chew",
    "pos": "v.",
    "meaning": "씹다",
    "level": "middle"
  },
  {
    "word": "chief",
    "pos": "n.",
    "meaning": "우두머리",
    "level": "middle"
  },
  {
    "word": "child",
    "pos": "n.",
    "meaning": "아이",
    "level": "middle"
  },
  {
    "word": "chill",
    "pos": "n.",
    "meaning": "차가움",
    "level": "middle"
  },
  {
    "word": "chin",
    "pos": "v.",
    "meaning": "턱(끝) 턱에 대다",
    "level": "middle"
  },
  {
    "word": "chip",
    "pos": "n.",
    "meaning": "(나무)토막",
    "level": "middle"
  },
  {
    "word": "choir",
    "pos": "n.",
    "meaning": "(교회의)성가대",
    "level": "middle"
  },
  {
    "word": "choose",
    "pos": "v.",
    "meaning": "고르다",
    "level": "middle"
  },
  {
    "word": "chop",
    "pos": "v.",
    "meaning": "(도끼 등으로)자르다",
    "level": "middle"
  },
  {
    "word": "chorus",
    "pos": "n.",
    "meaning": "합창",
    "level": "middle"
  },
  {
    "word": "chronic",
    "pos": "a.",
    "meaning": "만성의",
    "level": "middle"
  },
  {
    "word": "church",
    "pos": "n.",
    "meaning": "교회",
    "level": "middle"
  },
  {
    "word": "cigarette",
    "pos": "n.",
    "meaning": "궐련",
    "level": "middle"
  },
  {
    "word": "cinema",
    "pos": "n.",
    "meaning": "영화관",
    "level": "middle"
  },
  {
    "word": "circle",
    "pos": "n.",
    "meaning": "원",
    "level": "middle"
  },
  {
    "word": "circulate",
    "pos": "v.",
    "meaning": "순환하다",
    "level": "middle"
  },
  {
    "word": "circumstance",
    "pos": "n.",
    "meaning": "환경",
    "level": "middle"
  },
  {
    "word": "cite",
    "pos": "n.",
    "meaning": "인용하다(quote)",
    "level": "middle"
  },
  {
    "word": "citizen",
    "pos": "n.",
    "meaning": "시민",
    "level": "middle"
  },
  {
    "word": "city",
    "pos": "n.",
    "meaning": "도시",
    "level": "middle"
  },
  {
    "word": "civil",
    "pos": "a.",
    "meaning": "시민의",
    "level": "middle"
  },
  {
    "word": "claim",
    "pos": "v.",
    "meaning": "요구하다",
    "level": "middle"
  },
  {
    "word": "clap",
    "pos": "n.",
    "meaning": "짝짝",
    "level": "middle"
  },
  {
    "word": "clarify",
    "pos": "v.",
    "meaning": "맑게 하다",
    "level": "middle"
  },
  {
    "word": "clash",
    "pos": "v.",
    "meaning": "충돌하다",
    "level": "middle"
  },
  {
    "word": "class",
    "pos": "n.",
    "meaning": "계급",
    "level": "middle"
  },
  {
    "word": "classic",
    "pos": "a.",
    "meaning": "고전의",
    "level": "middle"
  },
  {
    "word": "classify",
    "pos": "v.",
    "meaning": "분류하다",
    "level": "middle"
  },
  {
    "word": "classroom",
    "pos": "n.",
    "meaning": "교실",
    "level": "middle"
  },
  {
    "word": "clause",
    "pos": "n.",
    "meaning": "조항",
    "level": "middle"
  },
  {
    "word": "clay",
    "pos": "n.",
    "meaning": "찰흙",
    "level": "middle"
  },
  {
    "word": "clean",
    "pos": "a.",
    "meaning": "청결한",
    "level": "middle"
  },
  {
    "word": "clear",
    "pos": "n.",
    "meaning": "맑은",
    "level": "middle"
  },
  {
    "word": "clerk",
    "pos": "n.",
    "meaning": "서기",
    "level": "middle"
  },
  {
    "word": "clever",
    "pos": "a.",
    "meaning": "영리한",
    "level": "middle"
  },
  {
    "word": "client",
    "pos": "a.",
    "meaning": "소송의뢰인",
    "level": "middle"
  },
  {
    "word": "cliff",
    "pos": "n.",
    "meaning": "절벽",
    "level": "middle"
  },
  {
    "word": "climate",
    "pos": "n.",
    "meaning": "기후",
    "level": "middle"
  },
  {
    "word": "climb",
    "pos": "v.",
    "meaning": "기어 오르다",
    "level": "middle"
  },
  {
    "word": "cling",
    "pos": "v.",
    "meaning": "밀착하다",
    "level": "middle"
  },
  {
    "word": "clinic",
    "pos": "n.",
    "meaning": "병원",
    "level": "middle"
  },
  {
    "word": "clip",
    "pos": "v.",
    "meaning": "가위로 자르다",
    "level": "middle"
  },
  {
    "word": "clock",
    "pos": "n.",
    "meaning": "시계",
    "level": "middle"
  },
  {
    "word": "close",
    "pos": "v.",
    "meaning": "닫다",
    "level": "middle"
  },
  {
    "word": "cloth",
    "pos": "n.",
    "meaning": "천",
    "level": "middle"
  },
  {
    "word": "cloud",
    "pos": "n.",
    "meaning": "구름",
    "level": "middle"
  },
  {
    "word": "club",
    "pos": "n.",
    "meaning": "클럽",
    "level": "middle"
  },
  {
    "word": "clue",
    "pos": "n.",
    "meaning": "단서",
    "level": "middle"
  },
  {
    "word": "cluster",
    "pos": "n.",
    "meaning": "떼",
    "level": "middle"
  },
  {
    "word": "coach",
    "pos": "n.",
    "meaning": "역마차",
    "level": "middle"
  },
  {
    "word": "coal",
    "pos": "n.",
    "meaning": "석탄",
    "level": "middle"
  },
  {
    "word": "coast",
    "pos": "n.",
    "meaning": "연안",
    "level": "middle"
  },
  {
    "word": "code",
    "pos": "n.",
    "meaning": "법전",
    "level": "middle"
  },
  {
    "word": "coin",
    "pos": "n.",
    "meaning": "화폐",
    "level": "middle"
  },
  {
    "word": "coincide",
    "pos": "v.",
    "meaning": "일치하다",
    "level": "middle"
  },
  {
    "word": "cold",
    "pos": "n.",
    "meaning": "추운",
    "level": "middle"
  },
  {
    "word": "collaborate",
    "pos": "v.",
    "meaning": "공동으로 일하다",
    "level": "middle"
  },
  {
    "word": "collapse",
    "pos": "n.",
    "meaning": "붕괴",
    "level": "middle"
  },
  {
    "word": "collar",
    "pos": "n.",
    "meaning": "칼라",
    "level": "middle"
  },
  {
    "word": "colleague",
    "pos": "n.",
    "meaning": "동료",
    "level": "middle"
  },
  {
    "word": "collect",
    "pos": "v.",
    "meaning": "모으다",
    "level": "middle"
  },
  {
    "word": "college",
    "pos": "n.",
    "meaning": "단과대학",
    "level": "middle"
  },
  {
    "word": "colony",
    "pos": "n.",
    "meaning": "식민지",
    "level": "middle"
  },
  {
    "word": "color",
    "pos": "v.",
    "meaning": "착색하다",
    "level": "middle"
  },
  {
    "word": "column",
    "pos": "n.",
    "meaning": "(신문 등의)난",
    "level": "middle"
  },
  {
    "word": "combat",
    "pos": "v.",
    "meaning": "격투하다",
    "level": "middle"
  },
  {
    "word": "combine",
    "pos": "v.",
    "meaning": "결합하다",
    "level": "middle"
  },
  {
    "word": "come",
    "pos": "v.",
    "meaning": "오다",
    "level": "middle"
  },
  {
    "word": "comedy",
    "pos": "n.",
    "meaning": "희극",
    "level": "middle"
  },
  {
    "word": "comfort",
    "pos": "n.",
    "meaning": "위안",
    "level": "middle"
  },
  {
    "word": "command",
    "pos": "v.",
    "meaning": "명령하다",
    "level": "middle"
  },
  {
    "word": "commence",
    "pos": "v.",
    "meaning": "시작하다",
    "level": "middle"
  },
  {
    "word": "comment",
    "pos": "n.",
    "meaning": "논평",
    "level": "middle"
  },
  {
    "word": "commerce",
    "pos": "n.",
    "meaning": "상업",
    "level": "middle"
  },
  {
    "word": "commission",
    "pos": "n.",
    "meaning": "위임",
    "level": "middle"
  },
  {
    "word": "commit",
    "pos": "v.",
    "meaning": "위탁하다",
    "level": "middle"
  },
  {
    "word": "committee",
    "pos": "n.",
    "meaning": "위원회",
    "level": "middle"
  },
  {
    "word": "commodity",
    "pos": "n.",
    "meaning": "상품",
    "level": "middle"
  },
  {
    "word": "communicate",
    "pos": "v.",
    "meaning": "알리다",
    "level": "middle"
  },
  {
    "word": "communist",
    "pos": "n.",
    "meaning": "공산주의자",
    "level": "middle"
  },
  {
    "word": "community",
    "pos": "n.",
    "meaning": "공동생활체",
    "level": "middle"
  },
  {
    "word": "companion",
    "pos": "n.",
    "meaning": "동료",
    "level": "middle"
  },
  {
    "word": "company",
    "pos": "n.",
    "meaning": "교제",
    "level": "middle"
  },
  {
    "word": "compare",
    "pos": "v.",
    "meaning": "비교하다",
    "level": "middle"
  },
  {
    "word": "compatible",
    "pos": "a.",
    "meaning": "양립할 수 있는",
    "level": "middle"
  },
  {
    "word": "compel",
    "pos": "v.",
    "meaning": "억지로 -시키다",
    "level": "middle"
  },
  {
    "word": "compensate",
    "pos": "v.",
    "meaning": "배상하다",
    "level": "middle"
  },
  {
    "word": "compete",
    "pos": "v.",
    "meaning": "경쟁하다",
    "level": "middle"
  },
  {
    "word": "competent",
    "pos": "a.",
    "meaning": "능력있는",
    "level": "middle"
  },
  {
    "word": "compile",
    "pos": "v.",
    "meaning": "편찬하다",
    "level": "middle"
  },
  {
    "word": "complain",
    "pos": "v.",
    "meaning": "불평하다",
    "level": "middle"
  },
  {
    "word": "complement",
    "pos": "n.",
    "meaning": "보완하는 것",
    "level": "middle"
  },
  {
    "word": "complete",
    "pos": "v.",
    "meaning": "완성하다",
    "level": "middle"
  },
  {
    "word": "complex",
    "pos": "n.",
    "meaning": "합성물",
    "level": "middle"
  },
  {
    "word": "complicate",
    "pos": "v.",
    "meaning": "복잡하게 하다",
    "level": "middle"
  },
  {
    "word": "component",
    "pos": "n.",
    "meaning": "구성하는 성분",
    "level": "middle"
  },
  {
    "word": "compose",
    "pos": "v.",
    "meaning": "구성하다",
    "level": "middle"
  },
  {
    "word": "compound",
    "pos": "v.",
    "meaning": "성분 등을 혼합하다",
    "level": "middle"
  },
  {
    "word": "comprehensive",
    "pos": "a.",
    "meaning": "이해력있는",
    "level": "middle"
  },
  {
    "word": "comprise",
    "pos": "v.",
    "meaning": "포함하다",
    "level": "middle"
  },
  {
    "word": "compromise",
    "pos": "v.",
    "meaning": "타협 타협하다",
    "level": "middle"
  },
  {
    "word": "compulsory",
    "pos": "a.",
    "meaning": "의무적인",
    "level": "middle"
  },
  {
    "word": "conceal",
    "pos": "v.",
    "meaning": "숨기다",
    "level": "middle"
  },
  {
    "word": "conceive",
    "pos": "v.",
    "meaning": "상상하다",
    "level": "middle"
  },
  {
    "word": "concentrate",
    "pos": "v.",
    "meaning": "집중하다",
    "level": "middle"
  },
  {
    "word": "concept",
    "pos": "n.",
    "meaning": "개념",
    "level": "middle"
  },
  {
    "word": "concern",
    "pos": "v.",
    "meaning": "관계하다",
    "level": "middle"
  },
  {
    "word": "concert",
    "pos": "n.",
    "meaning": "연주회",
    "level": "middle"
  },
  {
    "word": "conclude",
    "pos": "v.",
    "meaning": "결정하다",
    "level": "middle"
  },
  {
    "word": "concrete",
    "pos": "n.",
    "meaning": "구체적인 응고물",
    "level": "middle"
  },
  {
    "word": "condemn",
    "pos": "v.",
    "meaning": "나무라다",
    "level": "middle"
  },
  {
    "word": "condition",
    "pos": "n.",
    "meaning": "조건",
    "level": "middle"
  },
  {
    "word": "conduct",
    "pos": "v.",
    "meaning": "행위 이끌다",
    "level": "middle"
  },
  {
    "word": "confer",
    "pos": "v.",
    "meaning": "주다",
    "level": "middle"
  },
  {
    "word": "confess",
    "pos": "v.",
    "meaning": "실토하다",
    "level": "middle"
  },
  {
    "word": "confident",
    "pos": "a.",
    "meaning": "확신하는",
    "level": "middle"
  },
  {
    "word": "confine",
    "pos": "n.",
    "meaning": "국경",
    "level": "middle"
  },
  {
    "word": "confirm",
    "pos": "v.",
    "meaning": "확인하다",
    "level": "middle"
  },
  {
    "word": "conflict",
    "pos": "n.",
    "meaning": "투쟁",
    "level": "middle"
  },
  {
    "word": "conform",
    "pos": "v.",
    "meaning": "일치시키다",
    "level": "middle"
  },
  {
    "word": "confront",
    "pos": "v.",
    "meaning": "직면하다",
    "level": "middle"
  },
  {
    "word": "confuse",
    "pos": "v.",
    "meaning": "혼란시키다",
    "level": "middle"
  },
  {
    "word": "congratulate",
    "pos": "v.",
    "meaning": "축하하다",
    "level": "middle"
  },
  {
    "word": "congress",
    "pos": "a.",
    "meaning": "회의",
    "level": "middle"
  },
  {
    "word": "connect",
    "pos": "v.",
    "meaning": "잇다 이어지다",
    "level": "middle"
  },
  {
    "word": "conscience",
    "pos": "n.",
    "meaning": "양심",
    "level": "middle"
  },
  {
    "word": "conscious",
    "pos": "a.",
    "meaning": "의식적인",
    "level": "middle"
  },
  {
    "word": "consensus",
    "pos": "n.",
    "meaning": "(의견 등의)일치",
    "level": "middle"
  },
  {
    "word": "consent",
    "pos": "v.",
    "meaning": "승낙하다",
    "level": "middle"
  },
  {
    "word": "conserve",
    "pos": "v.",
    "meaning": "보존하다",
    "level": "middle"
  },
  {
    "word": "consider",
    "pos": "v.",
    "meaning": "숙고하다",
    "level": "middle"
  },
  {
    "word": "consist",
    "pos": "v.",
    "meaning": "-으로 이루어지다",
    "level": "middle"
  },
  {
    "word": "consistent",
    "pos": "a.",
    "meaning": "시종일관한",
    "level": "middle"
  },
  {
    "word": "constant",
    "pos": "a.",
    "meaning": "불변의",
    "level": "middle"
  },
  {
    "word": "constitute",
    "pos": "v.",
    "meaning": "구성하다",
    "level": "middle"
  },
  {
    "word": "constrain",
    "pos": "v.",
    "meaning": "강제하다",
    "level": "middle"
  },
  {
    "word": "construct",
    "pos": "v.",
    "meaning": "건조하다",
    "level": "middle"
  },
  {
    "word": "consult",
    "pos": "v.",
    "meaning": "상의하다",
    "level": "middle"
  },
  {
    "word": "consume",
    "pos": "v.",
    "meaning": "소비하다",
    "level": "middle"
  },
  {
    "word": "contact",
    "pos": "n.",
    "meaning": "접촉",
    "level": "middle"
  },
  {
    "word": "contain",
    "pos": "v.",
    "meaning": "내포하다",
    "level": "middle"
  },
  {
    "word": "contemporary",
    "pos": "a.",
    "meaning": "현대의",
    "level": "middle"
  },
  {
    "word": "contend",
    "pos": "v.",
    "meaning": "싸우다",
    "level": "middle"
  },
  {
    "word": "content",
    "pos": "n.",
    "meaning": "만족하여",
    "level": "middle"
  },
  {
    "word": "contest",
    "pos": "v.",
    "meaning": "겨루다",
    "level": "middle"
  },
  {
    "word": "context",
    "pos": "n.",
    "meaning": "문맥",
    "level": "middle"
  },
  {
    "word": "continent",
    "pos": "a.",
    "meaning": "자제심이 있는",
    "level": "middle"
  },
  {
    "word": "continue",
    "pos": "v.",
    "meaning": "계속하다",
    "level": "middle"
  },
  {
    "word": "contract",
    "pos": "n.",
    "meaning": "계약",
    "level": "middle"
  },
  {
    "word": "contradict",
    "pos": "v.",
    "meaning": "반박하다",
    "level": "middle"
  },
  {
    "word": "contrary",
    "pos": "ad.",
    "meaning": "반대의 반대 거꾸로",
    "level": "middle"
  },
  {
    "word": "contrast",
    "pos": "n.",
    "meaning": "대조",
    "level": "middle"
  },
  {
    "word": "contribute",
    "pos": "v.",
    "meaning": "기부하다",
    "level": "middle"
  },
  {
    "word": "control",
    "pos": "v.",
    "meaning": "억제하다",
    "level": "middle"
  },
  {
    "word": "controversy",
    "pos": "n.",
    "meaning": "논쟁",
    "level": "middle"
  },
  {
    "word": "convenient",
    "pos": "a.",
    "meaning": "편리한",
    "level": "middle"
  },
  {
    "word": "convention",
    "pos": "n.",
    "meaning": "관례",
    "level": "middle"
  },
  {
    "word": "conversation",
    "pos": "n.",
    "meaning": "회화",
    "level": "middle"
  },
  {
    "word": "convert",
    "pos": "v.",
    "meaning": "바꾸다",
    "level": "middle"
  },
  {
    "word": "convey",
    "pos": "v.",
    "meaning": "나르다",
    "level": "middle"
  },
  {
    "word": "convict",
    "pos": "v.",
    "meaning": "유죄로 판결하다 죄수",
    "level": "middle"
  },
  {
    "word": "convince",
    "pos": "v.",
    "meaning": "확신시키다",
    "level": "middle"
  },
  {
    "word": "cook",
    "pos": "v.",
    "meaning": "요리하다 요리사",
    "level": "middle"
  },
  {
    "word": "cookie",
    "pos": "n.",
    "meaning": "쿠키",
    "level": "middle"
  },
  {
    "word": "cool",
    "pos": "a.",
    "meaning": "서늘한",
    "level": "middle"
  },
  {
    "word": "cooperate",
    "pos": "v.",
    "meaning": "협동하다",
    "level": "middle"
  },
  {
    "word": "coordinate",
    "pos": "a.",
    "meaning": "동격의",
    "level": "middle"
  },
  {
    "word": "cop",
    "pos": "n.",
    "meaning": "순경",
    "level": "middle"
  },
  {
    "word": "cope",
    "pos": "n.",
    "meaning": "코우프(성직자의 긴 겉옷)",
    "level": "middle"
  },
  {
    "word": "copy",
    "pos": "n.",
    "meaning": "사본",
    "level": "middle"
  },
  {
    "word": "copyright",
    "pos": "n.",
    "meaning": "판권",
    "level": "middle"
  },
  {
    "word": "cord",
    "pos": "n.",
    "meaning": "밧줄",
    "level": "middle"
  },
  {
    "word": "core",
    "pos": "n.",
    "meaning": "핵심",
    "level": "middle"
  },
  {
    "word": "corn",
    "pos": "n.",
    "meaning": "티눈",
    "level": "middle"
  },
  {
    "word": "corner",
    "pos": "n.",
    "meaning": "모퉁이",
    "level": "middle"
  },
  {
    "word": "corporate",
    "pos": "a.",
    "meaning": "법인조직의",
    "level": "middle"
  },
  {
    "word": "correct",
    "pos": "n.",
    "meaning": "옳은",
    "level": "middle"
  },
  {
    "word": "correspond",
    "pos": "v.",
    "meaning": "일치하다",
    "level": "middle"
  },
  {
    "word": "corridor",
    "pos": "n.",
    "meaning": "복도",
    "level": "middle"
  },
  {
    "word": "corrupt",
    "pos": "a.",
    "meaning": "타락한",
    "level": "middle"
  },
  {
    "word": "cost",
    "pos": "n.",
    "meaning": "가격",
    "level": "middle"
  },
  {
    "word": "costume",
    "pos": "n.",
    "meaning": "복장",
    "level": "middle"
  },
  {
    "word": "cottage",
    "pos": "n.",
    "meaning": "시골집",
    "level": "middle"
  },
  {
    "word": "cotton",
    "pos": "n.",
    "meaning": "목화",
    "level": "middle"
  },
  {
    "word": "couch",
    "pos": "n.",
    "meaning": "침대",
    "level": "middle"
  },
  {
    "word": "cough",
    "pos": "v.",
    "meaning": "기침 기침을 하다 기침을 하여 -을 뱉어내다",
    "level": "middle"
  },
  {
    "word": "could aucan",
    "pos": "n.",
    "meaning": "의 과거",
    "level": "middle"
  },
  {
    "word": "council",
    "pos": "a.",
    "meaning": "회의",
    "level": "middle"
  },
  {
    "word": "counsel",
    "pos": "n.",
    "meaning": "의논",
    "level": "middle"
  },
  {
    "word": "count",
    "pos": "n.",
    "meaning": "계산",
    "level": "middle"
  },
  {
    "word": "counter",
    "pos": "n.",
    "meaning": "계산하는 person",
    "level": "middle"
  },
  {
    "word": "counterpart",
    "pos": "n.",
    "meaning": "부본",
    "level": "middle"
  },
  {
    "word": "country",
    "pos": "n.",
    "meaning": "나라",
    "level": "middle"
  },
  {
    "word": "countryside",
    "pos": "n.",
    "meaning": "시골",
    "level": "middle"
  },
  {
    "word": "county",
    "pos": "n.",
    "meaning": "주",
    "level": "middle"
  },
  {
    "word": "couple",
    "pos": "n.",
    "meaning": "한 쌍",
    "level": "middle"
  },
  {
    "word": "courage",
    "pos": "n.",
    "meaning": "용기",
    "level": "middle"
  },
  {
    "word": "cousin",
    "pos": "n.",
    "meaning": "사촌",
    "level": "middle"
  },
  {
    "word": "cover",
    "pos": "v.",
    "meaning": "덮다",
    "level": "middle"
  },
  {
    "word": "cow",
    "pos": "v.",
    "meaning": "위협하다 암소",
    "level": "middle"
  },
  {
    "word": "cowboy",
    "pos": "n.",
    "meaning": "목동",
    "level": "middle"
  },
  {
    "word": "crack",
    "pos": "v.",
    "meaning": "찰싹 소리내다 금가다 날카로운소리",
    "level": "middle"
  },
  {
    "word": "craft",
    "pos": "n.",
    "meaning": "솜씨",
    "level": "middle"
  },
  {
    "word": "crash",
    "pos": "n.",
    "meaning": "도산",
    "level": "middle"
  },
  {
    "word": "crawl",
    "pos": "v.",
    "meaning": "네발로 기다",
    "level": "middle"
  },
  {
    "word": "crazy",
    "pos": "n.",
    "meaning": "미친",
    "level": "middle"
  },
  {
    "word": "create",
    "pos": "v.",
    "meaning": "창조하다",
    "level": "middle"
  },
  {
    "word": "creature",
    "pos": "n.",
    "meaning": "창조물",
    "level": "middle"
  },
  {
    "word": "credible",
    "pos": "a.",
    "meaning": "믿을 수 있는",
    "level": "middle"
  },
  {
    "word": "credit",
    "pos": "n.",
    "meaning": "신용",
    "level": "middle"
  },
  {
    "word": "creek",
    "pos": "n.",
    "meaning": "시내",
    "level": "middle"
  },
  {
    "word": "creep",
    "pos": "v.",
    "meaning": "기다",
    "level": "middle"
  },
  {
    "word": "crew",
    "pos": "n.",
    "meaning": "승무원",
    "level": "middle"
  },
  {
    "word": "cricket",
    "pos": "n.",
    "meaning": "크리켓",
    "level": "middle"
  },
  {
    "word": "crime",
    "pos": "n.",
    "meaning": "범죄",
    "level": "middle"
  },
  {
    "word": "criminal",
    "pos": "a.",
    "meaning": "죄의",
    "level": "middle"
  },
  {
    "word": "crisis",
    "pos": "n.",
    "meaning": "위기",
    "level": "middle"
  },
  {
    "word": "crisp",
    "pos": "a.",
    "meaning": "파삭파삭한",
    "level": "middle"
  },
  {
    "word": "criteria criterion",
    "pos": "n.",
    "meaning": "의 복수형",
    "level": "middle"
  },
  {
    "word": "critic",
    "pos": "n.",
    "meaning": "비평가",
    "level": "middle"
  },
  {
    "word": "criticize",
    "pos": "v.",
    "meaning": "비평하다",
    "level": "middle"
  },
  {
    "word": "criticism",
    "pos": "n.",
    "meaning": "비평",
    "level": "middle"
  },
  {
    "word": "crop",
    "pos": "n.",
    "meaning": "수확",
    "level": "middle"
  },
  {
    "word": "cross",
    "pos": "n.",
    "meaning": "십자형",
    "level": "middle"
  },
  {
    "word": "crowd",
    "pos": "n.",
    "meaning": "군중",
    "level": "middle"
  },
  {
    "word": "crown",
    "pos": "n.",
    "meaning": "왕관",
    "level": "middle"
  },
  {
    "word": "crucial",
    "pos": "a.",
    "meaning": "결정적인",
    "level": "middle"
  },
  {
    "word": "cruel",
    "pos": "a.",
    "meaning": "잔인한",
    "level": "middle"
  },
  {
    "word": "cruise",
    "pos": "v.",
    "meaning": "순항하다",
    "level": "middle"
  },
  {
    "word": "crush",
    "pos": "v.",
    "meaning": "눌러 부수다",
    "level": "middle"
  },
  {
    "word": "cry",
    "pos": "v.",
    "meaning": "소리치다",
    "level": "middle"
  },
  {
    "word": "crystal",
    "pos": "n.",
    "meaning": "수정",
    "level": "middle"
  },
  {
    "word": "cultivate",
    "pos": "v.",
    "meaning": "경작하다",
    "level": "middle"
  },
  {
    "word": "culture",
    "pos": "n.",
    "meaning": "문화",
    "level": "middle"
  },
  {
    "word": "cupboard",
    "pos": "n.",
    "meaning": "찬장",
    "level": "middle"
  },
  {
    "word": "cure",
    "pos": "n.",
    "meaning": "치료",
    "level": "middle"
  },
  {
    "word": "curious",
    "pos": "n.",
    "meaning": "이상스러운",
    "level": "middle"
  },
  {
    "word": "curl",
    "pos": "v.",
    "meaning": "곱슬머리 머리털을 지지다",
    "level": "middle"
  },
  {
    "word": "currency",
    "pos": "n.",
    "meaning": "통용",
    "level": "middle"
  },
  {
    "word": "current",
    "pos": "a.",
    "meaning": "유행의",
    "level": "middle"
  },
  {
    "word": "curriculum",
    "pos": "n.",
    "meaning": "과목",
    "level": "middle"
  },
  {
    "word": "curry",
    "pos": "v.",
    "meaning": "카레요리 카레로 맛을 내다",
    "level": "middle"
  },
  {
    "word": "curse",
    "pos": "n.",
    "meaning": "저주",
    "level": "middle"
  },
  {
    "word": "curtain",
    "pos": "n.",
    "meaning": "커어튼",
    "level": "middle"
  },
  {
    "word": "curve",
    "pos": "n.",
    "meaning": "곡선",
    "level": "middle"
  },
  {
    "word": "custody",
    "pos": "n.",
    "meaning": "보호",
    "level": "middle"
  },
  {
    "word": "custom",
    "pos": "n.",
    "meaning": "습관",
    "level": "middle"
  },
  {
    "word": "customer",
    "pos": "n.",
    "meaning": "고객",
    "level": "middle"
  },
  {
    "word": "cut",
    "pos": "v.",
    "meaning": "베다",
    "level": "middle"
  },
  {
    "word": "cute",
    "pos": "n.",
    "meaning": "귀여운",
    "level": "middle"
  },
  {
    "word": "cycle",
    "pos": "n.",
    "meaning": "순환",
    "level": "middle"
  },
  {
    "word": "cynical",
    "pos": "a.",
    "meaning": "냉소적인",
    "level": "middle"
  },
  {
    "word": "dad",
    "pos": "n.",
    "meaning": "아빠",
    "level": "middle"
  },
  {
    "word": "dairy",
    "pos": "n.",
    "meaning": "낙농장",
    "level": "middle"
  },
  {
    "word": "dam",
    "pos": "n.",
    "meaning": "댐",
    "level": "middle"
  },
  {
    "word": "damage",
    "pos": "n.",
    "meaning": "손해",
    "level": "middle"
  },
  {
    "word": "damp",
    "pos": "v.",
    "meaning": "축축한 습기 적시다",
    "level": "middle"
  },
  {
    "word": "dance",
    "pos": "n.",
    "meaning": "댄스",
    "level": "middle"
  },
  {
    "word": "danger",
    "pos": "n.",
    "meaning": "위험",
    "level": "middle"
  },
  {
    "word": "dare au",
    "pos": "v.",
    "meaning": "감히 -하다",
    "level": "middle"
  },
  {
    "word": "dark",
    "pos": "n.",
    "meaning": "어두운",
    "level": "middle"
  },
  {
    "word": "darling",
    "pos": "n.",
    "meaning": "귀여운",
    "level": "middle"
  },
  {
    "word": "dash",
    "pos": "n.",
    "meaning": "돌진",
    "level": "middle"
  },
  {
    "word": "database",
    "pos": "n.",
    "meaning": "데이터베이스",
    "level": "middle"
  },
  {
    "word": "date",
    "pos": "n.",
    "meaning": "날짜",
    "level": "middle"
  },
  {
    "word": "daughter",
    "pos": "n.",
    "meaning": "딸",
    "level": "middle"
  },
  {
    "word": "dawn",
    "pos": "v.",
    "meaning": "새벽 날이 새다",
    "level": "middle"
  },
  {
    "word": "day",
    "pos": "n.",
    "meaning": "낮",
    "level": "middle"
  },
  {
    "word": "dead",
    "pos": "n.",
    "meaning": "죽은",
    "level": "middle"
  },
  {
    "word": "deal",
    "pos": "n.",
    "meaning": "양",
    "level": "middle"
  },
  {
    "word": "death",
    "pos": "n.",
    "meaning": "죽음",
    "level": "middle"
  },
  {
    "word": "debate",
    "pos": "v.",
    "meaning": "토론 토론하다",
    "level": "middle"
  },
  {
    "word": "debt",
    "pos": "n.",
    "meaning": "빚",
    "level": "middle"
  },
  {
    "word": "decade",
    "pos": "n.",
    "meaning": "10 년간",
    "level": "middle"
  },
  {
    "word": "decay",
    "pos": "v.",
    "meaning": "쇠퇴하다",
    "level": "middle"
  },
  {
    "word": "decent",
    "pos": "n.",
    "meaning": "점잖은",
    "level": "middle"
  },
  {
    "word": "decide",
    "pos": "v.",
    "meaning": "결정하다",
    "level": "middle"
  },
  {
    "word": "decision",
    "pos": "n.",
    "meaning": "결정",
    "level": "middle"
  },
  {
    "word": "deck",
    "pos": "n.",
    "meaning": "갑판",
    "level": "middle"
  },
  {
    "word": "declare",
    "pos": "v.",
    "meaning": "선언하다",
    "level": "middle"
  },
  {
    "word": "decline",
    "pos": "v.",
    "meaning": "기울다",
    "level": "middle"
  },
  {
    "word": "decorate",
    "pos": "v.",
    "meaning": "장식하다",
    "level": "middle"
  },
  {
    "word": "decrease",
    "pos": "v.",
    "meaning": "감소하다",
    "level": "middle"
  },
  {
    "word": "dedicate",
    "pos": "v.",
    "meaning": "봉납하다",
    "level": "middle"
  },
  {
    "word": "deep",
    "pos": "n.",
    "meaning": "깊은",
    "level": "middle"
  },
  {
    "word": "defeat",
    "pos": "n.",
    "meaning": "패배",
    "level": "middle"
  },
  {
    "word": "defense",
    "pos": "n.",
    "meaning": "방어",
    "level": "middle"
  },
  {
    "word": "defend",
    "pos": "v.",
    "meaning": "방어하다",
    "level": "middle"
  },
  {
    "word": "defendant",
    "pos": "a.",
    "meaning": "피고 피고의",
    "level": "middle"
  },
  {
    "word": "deficiency",
    "pos": "n.",
    "meaning": "결핍",
    "level": "middle"
  },
  {
    "word": "deficit",
    "pos": "n.",
    "meaning": "결손",
    "level": "middle"
  },
  {
    "word": "define",
    "pos": "v.",
    "meaning": "정의하다",
    "level": "middle"
  },
  {
    "word": "definite",
    "pos": "a.",
    "meaning": "일정한",
    "level": "middle"
  },
  {
    "word": "degrade",
    "pos": "v.",
    "meaning": "지위를 낮추다",
    "level": "middle"
  },
  {
    "word": "degree",
    "pos": "n.",
    "meaning": "도",
    "level": "middle"
  },
  {
    "word": "delay",
    "pos": "v.",
    "meaning": "늦추다",
    "level": "middle"
  },
  {
    "word": "delegate",
    "pos": "v.",
    "meaning": "파견하다",
    "level": "middle"
  },
  {
    "word": "delete",
    "pos": "v.",
    "meaning": "삭제하다",
    "level": "middle"
  },
  {
    "word": "deliberate",
    "pos": "v.",
    "meaning": "숙고하다",
    "level": "middle"
  },
  {
    "word": "delicate",
    "pos": "a.",
    "meaning": "미묘한",
    "level": "middle"
  },
  {
    "word": "delicious",
    "pos": "a.",
    "meaning": "맛있는",
    "level": "middle"
  },
  {
    "word": "delight",
    "pos": "v.",
    "meaning": "즐겁게하다 즐거워하다",
    "level": "middle"
  },
  {
    "word": "deliver",
    "pos": "v.",
    "meaning": "인도하다",
    "level": "middle"
  },
  {
    "word": "demand",
    "pos": "v.",
    "meaning": "요구하다",
    "level": "middle"
  },
  {
    "word": "democracy",
    "pos": "a.",
    "meaning": "민주주의",
    "level": "middle"
  },
  {
    "word": "democrat",
    "pos": "n.",
    "meaning": "민주주의자",
    "level": "middle"
  },
  {
    "word": "demon",
    "pos": "n.",
    "meaning": "악마",
    "level": "middle"
  },
  {
    "word": "demonstrate",
    "pos": "v.",
    "meaning": "증명하다",
    "level": "middle"
  },
  {
    "word": "dense",
    "pos": "n.",
    "meaning": "짙은",
    "level": "middle"
  },
  {
    "word": "dentist",
    "pos": "n.",
    "meaning": "치과의사",
    "level": "middle"
  },
  {
    "word": "deny",
    "pos": "v.",
    "meaning": "부정하다",
    "level": "middle"
  },
  {
    "word": "department",
    "pos": "n.",
    "meaning": "부",
    "level": "middle"
  },
  {
    "word": "departure",
    "pos": "n.",
    "meaning": "출발",
    "level": "middle"
  },
  {
    "word": "depend",
    "pos": "v.",
    "meaning": "좌우되다",
    "level": "middle"
  },
  {
    "word": "dependence",
    "pos": "n.",
    "meaning": "종속",
    "level": "middle"
  },
  {
    "word": "depict",
    "pos": "v.",
    "meaning": "묘사하다",
    "level": "middle"
  },
  {
    "word": "deposit",
    "pos": "n.",
    "meaning": "예금",
    "level": "middle"
  },
  {
    "word": "depress",
    "pos": "v.",
    "meaning": "억압하다",
    "level": "middle"
  },
  {
    "word": "deprive",
    "pos": "v.",
    "meaning": "빼앗다",
    "level": "middle"
  },
  {
    "word": "derive",
    "pos": "v.",
    "meaning": "이끌어 내다",
    "level": "middle"
  },
  {
    "word": "descend",
    "pos": "v.",
    "meaning": "내려오다",
    "level": "middle"
  },
  {
    "word": "describe",
    "pos": "v.",
    "meaning": "기술하다",
    "level": "middle"
  },
  {
    "word": "description",
    "pos": "n.",
    "meaning": "서술",
    "level": "middle"
  },
  {
    "word": "desert",
    "pos": "v.",
    "meaning": "버리다",
    "level": "middle"
  },
  {
    "word": "deserve",
    "pos": "v.",
    "meaning": "-할 만하다",
    "level": "middle"
  },
  {
    "word": "design",
    "pos": "a.",
    "meaning": "디자인",
    "level": "middle"
  },
  {
    "word": "designate",
    "pos": "v.",
    "meaning": "가리키다",
    "level": "middle"
  },
  {
    "word": "desire",
    "pos": "v.",
    "meaning": "바라다",
    "level": "middle"
  },
  {
    "word": "desk",
    "pos": "n.",
    "meaning": "책상",
    "level": "middle"
  },
  {
    "word": "despair",
    "pos": "v.",
    "meaning": "절망하다",
    "level": "middle"
  },
  {
    "word": "desperate",
    "pos": "a.",
    "meaning": "절망적인",
    "level": "middle"
  },
  {
    "word": "despite",
    "pos": "n.",
    "meaning": "-에도 불구하고 모욕",
    "level": "middle"
  },
  {
    "word": "destination",
    "pos": "n.",
    "meaning": "목적지",
    "level": "middle"
  },
  {
    "word": "destiny",
    "pos": "n.",
    "meaning": "운명",
    "level": "middle"
  },
  {
    "word": "destroy",
    "pos": "v.",
    "meaning": "파괴하다",
    "level": "high"
  },
  {
    "word": "destruction",
    "pos": "n.",
    "meaning": "파괴",
    "level": "high"
  },
  {
    "word": "detach",
    "pos": "v.",
    "meaning": "분리하다",
    "level": "high"
  },
  {
    "word": "detail",
    "pos": "n.",
    "meaning": "상설",
    "level": "high"
  },
  {
    "word": "detect",
    "pos": "v.",
    "meaning": "간파하다",
    "level": "high"
  },
  {
    "word": "determine",
    "pos": "v.",
    "meaning": "결정하다",
    "level": "high"
  },
  {
    "word": "develop",
    "pos": "v.",
    "meaning": "발달하다",
    "level": "high"
  },
  {
    "word": "device",
    "pos": "n.",
    "meaning": "고안",
    "level": "high"
  },
  {
    "word": "devil",
    "pos": "n.",
    "meaning": "악마",
    "level": "high"
  },
  {
    "word": "devise",
    "pos": "v.",
    "meaning": "고안하다",
    "level": "high"
  },
  {
    "word": "devote",
    "pos": "v.",
    "meaning": "바치다",
    "level": "high"
  },
  {
    "word": "diabetes",
    "pos": "n.",
    "meaning": "당뇨병",
    "level": "high"
  },
  {
    "word": "dialogue",
    "pos": "n.",
    "meaning": "대화",
    "level": "high"
  },
  {
    "word": "diary",
    "pos": "n.",
    "meaning": "일기",
    "level": "high"
  },
  {
    "word": "dictate",
    "pos": "v.",
    "meaning": "받아쓰게 하다",
    "level": "high"
  },
  {
    "word": "dictionary",
    "pos": "n.",
    "meaning": "사전",
    "level": "high"
  },
  {
    "word": "die",
    "pos": "v.",
    "meaning": "죽다",
    "level": "high"
  },
  {
    "word": "different",
    "pos": "n.",
    "meaning": "다른",
    "level": "high"
  },
  {
    "word": "difficult",
    "pos": "a.",
    "meaning": "곤란한",
    "level": "high"
  },
  {
    "word": "dig",
    "pos": "v.",
    "meaning": "파다",
    "level": "high"
  },
  {
    "word": "dignity",
    "pos": "n.",
    "meaning": "위엄",
    "level": "high"
  },
  {
    "word": "dimension",
    "pos": "n.",
    "meaning": "치수",
    "level": "high"
  },
  {
    "word": "diminish",
    "pos": "v.",
    "meaning": "감소하다",
    "level": "high"
  },
  {
    "word": "dine",
    "pos": "v.",
    "meaning": "저녁식사를 하다",
    "level": "high"
  },
  {
    "word": "dinner",
    "pos": "n.",
    "meaning": "정찬",
    "level": "high"
  },
  {
    "word": "dip",
    "pos": "v.",
    "meaning": "담그다",
    "level": "high"
  },
  {
    "word": "diplomat",
    "pos": "n.",
    "meaning": "외교관",
    "level": "high"
  },
  {
    "word": "direct",
    "pos": "v.",
    "meaning": "지도하다",
    "level": "high"
  },
  {
    "word": "dirty",
    "pos": "n.",
    "meaning": "더러운",
    "level": "high"
  },
  {
    "word": "disabled",
    "pos": "a.",
    "meaning": "불구가 된",
    "level": "high"
  },
  {
    "word": "disadvantage",
    "pos": "n.",
    "meaning": "불리",
    "level": "high"
  },
  {
    "word": "disagree",
    "pos": "v.",
    "meaning": "일치하지 않다",
    "level": "high"
  },
  {
    "word": "disappear",
    "pos": "v.",
    "meaning": "안보이게 되다",
    "level": "high"
  },
  {
    "word": "disappoint",
    "pos": "v.",
    "meaning": "실망시키다",
    "level": "high"
  },
  {
    "word": "disaster",
    "pos": "n.",
    "meaning": "천재",
    "level": "high"
  },
  {
    "word": "discharge",
    "pos": "v.",
    "meaning": "짐을부리다",
    "level": "high"
  },
  {
    "word": "discipline",
    "pos": "n.",
    "meaning": "훈련",
    "level": "high"
  },
  {
    "word": "disclose",
    "pos": "v.",
    "meaning": "나타내다",
    "level": "high"
  },
  {
    "word": "discount",
    "pos": "a.",
    "meaning": "할인",
    "level": "high"
  },
  {
    "word": "discourse",
    "pos": "n.",
    "meaning": "강연",
    "level": "high"
  },
  {
    "word": "discover",
    "pos": "v.",
    "meaning": "발견하다",
    "level": "high"
  },
  {
    "word": "discriminate",
    "pos": "v.",
    "meaning": "분별하다",
    "level": "high"
  },
  {
    "word": "discuss",
    "pos": "v.",
    "meaning": "토론하다",
    "level": "high"
  },
  {
    "word": "disease",
    "pos": "n.",
    "meaning": "병",
    "level": "high"
  },
  {
    "word": "disgust",
    "pos": "v.",
    "meaning": "불쾌하게 하다",
    "level": "high"
  },
  {
    "word": "dish",
    "pos": "n.",
    "meaning": "접시",
    "level": "high"
  },
  {
    "word": "dismiss",
    "pos": "v.",
    "meaning": "떠나게 하다",
    "level": "high"
  },
  {
    "word": "disorder",
    "pos": "n.",
    "meaning": "난잡",
    "level": "high"
  },
  {
    "word": "displace",
    "pos": "v.",
    "meaning": "바꾸어놓다",
    "level": "high"
  },
  {
    "word": "display",
    "pos": "v.",
    "meaning": "보이다",
    "level": "high"
  },
  {
    "word": "dispose",
    "pos": "v.",
    "meaning": "배열하다",
    "level": "high"
  },
  {
    "word": "dispute",
    "pos": "v.",
    "meaning": "논쟁하다",
    "level": "high"
  },
  {
    "word": "disrupt",
    "pos": "v.",
    "meaning": "분열시키다",
    "level": "high"
  },
  {
    "word": "distant",
    "pos": "n.",
    "meaning": "떨어진",
    "level": "high"
  },
  {
    "word": "distort",
    "pos": "v.",
    "meaning": "찌그러뜨리다",
    "level": "high"
  },
  {
    "word": "distract",
    "pos": "v.",
    "meaning": "전환시키다",
    "level": "high"
  },
  {
    "word": "distribute",
    "pos": "v.",
    "meaning": "분배하다",
    "level": "high"
  },
  {
    "word": "district",
    "pos": "n.",
    "meaning": "지구",
    "level": "high"
  },
  {
    "word": "disturb",
    "pos": "v.",
    "meaning": "교란하다",
    "level": "high"
  },
  {
    "word": "dive",
    "pos": "v.",
    "meaning": "뛰어들다",
    "level": "high"
  },
  {
    "word": "diverse",
    "pos": "a.",
    "meaning": "다양한",
    "level": "high"
  },
  {
    "word": "divide",
    "pos": "v.",
    "meaning": "나누다",
    "level": "high"
  },
  {
    "word": "divine",
    "pos": "a.",
    "meaning": "신의",
    "level": "high"
  },
  {
    "word": "divorce",
    "pos": "n.",
    "meaning": "이혼",
    "level": "high"
  },
  {
    "word": "do",
    "pos": "v.",
    "meaning": "하다",
    "level": "high"
  },
  {
    "word": "doctor",
    "pos": "n.",
    "meaning": "박사",
    "level": "high"
  },
  {
    "word": "document",
    "pos": "n.",
    "meaning": "서류",
    "level": "high"
  },
  {
    "word": "dog",
    "pos": "n.",
    "meaning": "개",
    "level": "high"
  },
  {
    "word": "doll",
    "pos": "n.",
    "meaning": "인형",
    "level": "high"
  },
  {
    "word": "dolphin",
    "pos": "n.",
    "meaning": "돌고래",
    "level": "high"
  },
  {
    "word": "domain",
    "pos": "n.",
    "meaning": "영토",
    "level": "high"
  },
  {
    "word": "domestic",
    "pos": "a.",
    "meaning": "가정의",
    "level": "high"
  },
  {
    "word": "dominant",
    "pos": "a.",
    "meaning": "우세한",
    "level": "high"
  },
  {
    "word": "donate",
    "pos": "v.",
    "meaning": "증여하다",
    "level": "high"
  },
  {
    "word": "door",
    "pos": "n.",
    "meaning": "문",
    "level": "high"
  },
  {
    "word": "dose",
    "pos": "v.",
    "meaning": "1 회복용량 투약하다",
    "level": "high"
  },
  {
    "word": "dot",
    "pos": "n.",
    "meaning": "점",
    "level": "high"
  },
  {
    "word": "double",
    "pos": "a.",
    "meaning": "2 배의",
    "level": "high"
  },
  {
    "word": "doubt",
    "pos": "n.",
    "meaning": "의심",
    "level": "high"
  },
  {
    "word": "down",
    "pos": "ad.",
    "meaning": "아래로",
    "level": "high"
  },
  {
    "word": "dozen",
    "pos": "n.",
    "meaning": "1 다스",
    "level": "high"
  },
  {
    "word": "draft",
    "pos": "n.",
    "meaning": "초고",
    "level": "high"
  },
  {
    "word": "drag",
    "pos": "v.",
    "meaning": "끌다",
    "level": "high"
  },
  {
    "word": "drain",
    "pos": "v.",
    "meaning": "배수하다",
    "level": "high"
  },
  {
    "word": "draw",
    "pos": "v.",
    "meaning": "당기다",
    "level": "high"
  },
  {
    "word": "drawer",
    "pos": "n.",
    "meaning": "제도사",
    "level": "high"
  },
  {
    "word": "dread",
    "pos": "v.",
    "meaning": "두려워하다 두려움",
    "level": "high"
  },
  {
    "word": "dream",
    "pos": "n.",
    "meaning": "꿈",
    "level": "high"
  },
  {
    "word": "drink",
    "pos": "v.",
    "meaning": "마시다",
    "level": "high"
  },
  {
    "word": "drive",
    "pos": "v.",
    "meaning": "운전하다",
    "level": "high"
  },
  {
    "word": "drop",
    "pos": "n.",
    "meaning": "방울",
    "level": "high"
  },
  {
    "word": "drown",
    "pos": "v.",
    "meaning": "물에빠뜨리다",
    "level": "high"
  },
  {
    "word": "drug",
    "pos": "n.",
    "meaning": "약제",
    "level": "high"
  },
  {
    "word": "dry",
    "pos": "n.",
    "meaning": "마른",
    "level": "high"
  },
  {
    "word": "dual",
    "pos": "a.",
    "meaning": "둘의",
    "level": "high"
  },
  {
    "word": "duck",
    "pos": "v.",
    "meaning": "머리를 물 속에 쑥 쳐박다",
    "level": "high"
  },
  {
    "word": "due",
    "pos": "a.",
    "meaning": "지급기일이 된",
    "level": "high"
  },
  {
    "word": "dull",
    "pos": "a.",
    "meaning": "둔한",
    "level": "high"
  },
  {
    "word": "dump",
    "pos": "v.",
    "meaning": "내버리다",
    "level": "high"
  },
  {
    "word": "during",
    "pos": "n.",
    "meaning": "-동안에",
    "level": "high"
  },
  {
    "word": "dust",
    "pos": "n.",
    "meaning": "먼지",
    "level": "high"
  },
  {
    "word": "duty",
    "pos": "n.",
    "meaning": "의무",
    "level": "high"
  },
  {
    "word": "dwell",
    "pos": "v.",
    "meaning": "거주하다",
    "level": "high"
  },
  {
    "word": "dynamic",
    "pos": "a.",
    "meaning": "동적인",
    "level": "high"
  },
  {
    "word": "each",
    "pos": "a.",
    "meaning": "각각의",
    "level": "high"
  },
  {
    "word": "eager",
    "pos": "a.",
    "meaning": "열심인",
    "level": "high"
  },
  {
    "word": "ear",
    "pos": "n.",
    "meaning": "귀",
    "level": "high"
  },
  {
    "word": "early",
    "pos": "n.",
    "meaning": "이른",
    "level": "high"
  },
  {
    "word": "earn",
    "pos": "v.",
    "meaning": "일하여 벌다",
    "level": "high"
  },
  {
    "word": "earth",
    "pos": "n.",
    "meaning": "지구",
    "level": "high"
  },
  {
    "word": "ease",
    "pos": "n.",
    "meaning": "안락",
    "level": "high"
  },
  {
    "word": "east",
    "pos": "ad.",
    "meaning": "동쪽 동쪽의 동쪽으로",
    "level": "high"
  },
  {
    "word": "easy",
    "pos": "n.",
    "meaning": "쉬운",
    "level": "high"
  },
  {
    "word": "eat",
    "pos": "v.",
    "meaning": "먹다",
    "level": "high"
  },
  {
    "word": "economy",
    "pos": "n.",
    "meaning": "절약",
    "level": "high"
  },
  {
    "word": "edge",
    "pos": "n.",
    "meaning": "끝머리",
    "level": "high"
  },
  {
    "word": "edit",
    "pos": "v.",
    "meaning": "편집하다",
    "level": "high"
  },
  {
    "word": "educate",
    "pos": "v.",
    "meaning": "교육하다",
    "level": "high"
  },
  {
    "word": "effect",
    "pos": "n.",
    "meaning": "결과",
    "level": "high"
  },
  {
    "word": "effective",
    "pos": "a.",
    "meaning": "효과적인",
    "level": "high"
  },
  {
    "word": "efficient",
    "pos": "a.",
    "meaning": "능률적인",
    "level": "high"
  },
  {
    "word": "effort",
    "pos": "n.",
    "meaning": "노력",
    "level": "high"
  },
  {
    "word": "egg",
    "pos": "n.",
    "meaning": "알",
    "level": "high"
  },
  {
    "word": "either",
    "pos": "a.",
    "meaning": "어느 하나의",
    "level": "high"
  },
  {
    "word": "elaborate",
    "pos": "a.",
    "meaning": "공들인",
    "level": "high"
  },
  {
    "word": "elect",
    "pos": "v.",
    "meaning": "선거하다",
    "level": "high"
  },
  {
    "word": "electric",
    "pos": "a.",
    "meaning": "전기의",
    "level": "high"
  },
  {
    "word": "electronic",
    "pos": "a.",
    "meaning": "전자(학)의",
    "level": "high"
  },
  {
    "word": "elegant",
    "pos": "a.",
    "meaning": "우아한",
    "level": "high"
  },
  {
    "word": "element",
    "pos": "n.",
    "meaning": "요소",
    "level": "high"
  },
  {
    "word": "elementary",
    "pos": "a.",
    "meaning": "기본의",
    "level": "high"
  },
  {
    "word": "elephant",
    "pos": "n.",
    "meaning": "코끼리",
    "level": "high"
  },
  {
    "word": "eliminate",
    "pos": "v.",
    "meaning": "제거하다",
    "level": "high"
  },
  {
    "word": "else",
    "pos": "n.",
    "meaning": "그 밖에",
    "level": "high"
  },
  {
    "word": "embarrass",
    "pos": "v.",
    "meaning": "난처하게 하다",
    "level": "high"
  },
  {
    "word": "embassy",
    "pos": "n.",
    "meaning": "대사관",
    "level": "high"
  },
  {
    "word": "embrace",
    "pos": "v.",
    "meaning": "포옹하다",
    "level": "high"
  },
  {
    "word": "emerge",
    "pos": "v.",
    "meaning": "나오다",
    "level": "high"
  },
  {
    "word": "emergency",
    "pos": "n.",
    "meaning": "비상사태",
    "level": "high"
  },
  {
    "word": "emit",
    "pos": "v.",
    "meaning": "방사하다",
    "level": "high"
  },
  {
    "word": "emotion",
    "pos": "n.",
    "meaning": "감정",
    "level": "high"
  },
  {
    "word": "emphasis",
    "pos": "n.",
    "meaning": "강조",
    "level": "high"
  },
  {
    "word": "empire",
    "pos": "n.",
    "meaning": "제국",
    "level": "high"
  },
  {
    "word": "employ",
    "pos": "v.",
    "meaning": "고용하다",
    "level": "high"
  },
  {
    "word": "empty",
    "pos": "n.",
    "meaning": "빈",
    "level": "high"
  },
  {
    "word": "enclose",
    "pos": "v.",
    "meaning": "에워싸다",
    "level": "high"
  },
  {
    "word": "encounter",
    "pos": "n.",
    "meaning": "조우",
    "level": "high"
  },
  {
    "word": "encourage",
    "pos": "v.",
    "meaning": "용기를 돋우다",
    "level": "high"
  },
  {
    "word": "end",
    "pos": "n.",
    "meaning": "끝",
    "level": "high"
  },
  {
    "word": "endure",
    "pos": "v.",
    "meaning": "견디다",
    "level": "high"
  },
  {
    "word": "enemy",
    "pos": "a.",
    "meaning": "적",
    "level": "high"
  },
  {
    "word": "enforce",
    "pos": "v.",
    "meaning": "실시하다",
    "level": "high"
  },
  {
    "word": "engage",
    "pos": "v.",
    "meaning": "약속하다",
    "level": "high"
  },
  {
    "word": "engine",
    "pos": "n.",
    "meaning": "엔진",
    "level": "high"
  },
  {
    "word": "engineer",
    "pos": "n.",
    "meaning": "기사",
    "level": "high"
  },
  {
    "word": "enhance",
    "pos": "v.",
    "meaning": "향상하다",
    "level": "high"
  },
  {
    "word": "enjoy",
    "pos": "v.",
    "meaning": "즐기다",
    "level": "high"
  },
  {
    "word": "enormous",
    "pos": "a.",
    "meaning": "거대한",
    "level": "high"
  },
  {
    "word": "enough",
    "pos": "a.",
    "meaning": "충분한",
    "level": "high"
  },
  {
    "word": "enroll",
    "pos": "v.",
    "meaning": "명부에 올리다",
    "level": "high"
  },
  {
    "word": "ensure",
    "pos": "v.",
    "meaning": "-을 책임지다",
    "level": "high"
  },
  {
    "word": "enter",
    "pos": "v.",
    "meaning": "들어가다",
    "level": "high"
  },
  {
    "word": "enterprise",
    "pos": "n.",
    "meaning": "기획",
    "level": "high"
  },
  {
    "word": "entertain",
    "pos": "v.",
    "meaning": "즐겁게 하다",
    "level": "high"
  },
  {
    "word": "enthusiastic",
    "pos": "a.",
    "meaning": "열심인",
    "level": "high"
  },
  {
    "word": "entire",
    "pos": "a.",
    "meaning": "전체의",
    "level": "high"
  },
  {
    "word": "entitle",
    "pos": "v.",
    "meaning": "자격을 주다",
    "level": "high"
  },
  {
    "word": "entry",
    "pos": "n.",
    "meaning": "들어감",
    "level": "high"
  },
  {
    "word": "envelope",
    "pos": "n.",
    "meaning": "봉투",
    "level": "high"
  },
  {
    "word": "environment",
    "pos": "n.",
    "meaning": "환경",
    "level": "high"
  },
  {
    "word": "envy",
    "pos": "n.",
    "meaning": "질투",
    "level": "high"
  },
  {
    "word": "episode",
    "pos": "n.",
    "meaning": "삽화",
    "level": "high"
  },
  {
    "word": "equal",
    "pos": "n.",
    "meaning": "같은",
    "level": "high"
  },
  {
    "word": "equate",
    "pos": "v.",
    "meaning": "같게하다",
    "level": "high"
  },
  {
    "word": "equipment",
    "pos": "n.",
    "meaning": "장비",
    "level": "high"
  },
  {
    "word": "era",
    "pos": "n.",
    "meaning": "시대",
    "level": "high"
  },
  {
    "word": "eraser",
    "pos": "n.",
    "meaning": "지우는 person",
    "level": "high"
  },
  {
    "word": "erect",
    "pos": "n.",
    "meaning": "똑바로 선",
    "level": "high"
  },
  {
    "word": "error",
    "pos": "n.",
    "meaning": "잘못",
    "level": "high"
  },
  {
    "word": "escape",
    "pos": "v.",
    "meaning": "도망하다",
    "level": "high"
  },
  {
    "word": "escort",
    "pos": "v.",
    "meaning": "호위하다",
    "level": "high"
  },
  {
    "word": "especially",
    "pos": "ad.",
    "meaning": "특히",
    "level": "high"
  },
  {
    "word": "essential",
    "pos": "a.",
    "meaning": "본질적인",
    "level": "high"
  },
  {
    "word": "establish",
    "pos": "v.",
    "meaning": "확립하다",
    "level": "high"
  },
  {
    "word": "estate",
    "pos": "n.",
    "meaning": "토지",
    "level": "high"
  },
  {
    "word": "estimate",
    "pos": "v.",
    "meaning": "어림잡다",
    "level": "high"
  },
  {
    "word": "etc",
    "pos": "n.",
    "meaning": "등등",
    "level": "high"
  },
  {
    "word": "ethical",
    "pos": "a.",
    "meaning": "도덕상의",
    "level": "high"
  },
  {
    "word": "ethnic",
    "pos": "a.",
    "meaning": "인종의",
    "level": "high"
  },
  {
    "word": "evacuate",
    "pos": "v.",
    "meaning": "비우다",
    "level": "high"
  },
  {
    "word": "evaluate",
    "pos": "v.",
    "meaning": "평가하다",
    "level": "high"
  },
  {
    "word": "eve",
    "pos": "n.",
    "meaning": "저녁, 밤",
    "level": "high"
  },
  {
    "word": "even",
    "pos": "n.",
    "meaning": "-조차",
    "level": "high"
  },
  {
    "word": "evening",
    "pos": "n.",
    "meaning": "저녁",
    "level": "high"
  },
  {
    "word": "eventually",
    "pos": "n.",
    "meaning": "결국",
    "level": "high"
  },
  {
    "word": "ever",
    "pos": "n.",
    "meaning": "이전에",
    "level": "high"
  },
  {
    "word": "every",
    "pos": "n.",
    "meaning": "모든",
    "level": "high"
  },
  {
    "word": "evident",
    "pos": "a.",
    "meaning": "명백한",
    "level": "high"
  },
  {
    "word": "evil",
    "pos": "a.",
    "meaning": "사악한",
    "level": "high"
  },
  {
    "word": "evolution",
    "pos": "n.",
    "meaning": "진화",
    "level": "high"
  },
  {
    "word": "evolve",
    "pos": "v.",
    "meaning": "진화하다",
    "level": "high"
  },
  {
    "word": "exact",
    "pos": "a.",
    "meaning": "정확한",
    "level": "high"
  },
  {
    "word": "exaggerate",
    "pos": "v.",
    "meaning": "과장하다",
    "level": "high"
  },
  {
    "word": "exam",
    "pos": "n.",
    "meaning": "시험",
    "level": "high"
  },
  {
    "word": "examine",
    "pos": "v.",
    "meaning": "시험하다",
    "level": "high"
  },
  {
    "word": "example",
    "pos": "n.",
    "meaning": "보기",
    "level": "high"
  },
  {
    "word": "exceed",
    "pos": "v.",
    "meaning": "넘다",
    "level": "high"
  },
  {
    "word": "excellent",
    "pos": "a.",
    "meaning": "우수한",
    "level": "high"
  },
  {
    "word": "except",
    "pos": "v.",
    "meaning": "-을 제외하고는 제외하다",
    "level": "high"
  },
  {
    "word": "excess",
    "pos": "n.",
    "meaning": "초과",
    "level": "high"
  },
  {
    "word": "exchange",
    "pos": "v.",
    "meaning": "교환하다",
    "level": "high"
  },
  {
    "word": "excite",
    "pos": "v.",
    "meaning": "흥분시키다",
    "level": "high"
  },
  {
    "word": "exclude",
    "pos": "v.",
    "meaning": "배척하다",
    "level": "high"
  },
  {
    "word": "exclusive",
    "pos": "a.",
    "meaning": "배타적인",
    "level": "high"
  },
  {
    "word": "excuse",
    "pos": "n.",
    "meaning": "변명",
    "level": "high"
  },
  {
    "word": "executive",
    "pos": "a.",
    "meaning": "집행의",
    "level": "high"
  },
  {
    "word": "exercise",
    "pos": "n.",
    "meaning": "운동",
    "level": "high"
  },
  {
    "word": "exhaust",
    "pos": "v.",
    "meaning": "다 써버리다",
    "level": "high"
  },
  {
    "word": "exhibit",
    "pos": "v.",
    "meaning": "보이다",
    "level": "high"
  },
  {
    "word": "exist",
    "pos": "v.",
    "meaning": "존재하다",
    "level": "high"
  },
  {
    "word": "exit",
    "pos": "n.",
    "meaning": "출구",
    "level": "high"
  },
  {
    "word": "exotic",
    "pos": "a.",
    "meaning": "외국의",
    "level": "high"
  },
  {
    "word": "expand",
    "pos": "v.",
    "meaning": "펴다",
    "level": "high"
  },
  {
    "word": "expect",
    "pos": "v.",
    "meaning": "기대하다",
    "level": "high"
  },
  {
    "word": "expense",
    "pos": "n.",
    "meaning": "지출",
    "level": "high"
  },
  {
    "word": "expensive",
    "pos": "a.",
    "meaning": "비용이 드는",
    "level": "high"
  },
  {
    "word": "experience",
    "pos": "n.",
    "meaning": "경험",
    "level": "high"
  },
  {
    "word": "experiment",
    "pos": "n.",
    "meaning": "실험",
    "level": "high"
  },
  {
    "word": "expert",
    "pos": "n.",
    "meaning": "숙련가",
    "level": "high"
  },
  {
    "word": "expertise",
    "pos": "n.",
    "meaning": "대가의 의견",
    "level": "high"
  },
  {
    "word": "explain",
    "pos": "v.",
    "meaning": "설명하다",
    "level": "high"
  },
  {
    "word": "explicit",
    "pos": "a.",
    "meaning": "명백한",
    "level": "high"
  },
  {
    "word": "explode",
    "pos": "v.",
    "meaning": "폭발시키다",
    "level": "high"
  },
  {
    "word": "explore",
    "pos": "v.",
    "meaning": "탐험하다",
    "level": "high"
  },
  {
    "word": "export",
    "pos": "v.",
    "meaning": "수출하다 수출",
    "level": "high"
  },
  {
    "word": "expose",
    "pos": "v.",
    "meaning": "쐬다, 드러내다, 맞히다",
    "level": "high"
  },
  {
    "word": "express",
    "pos": "v.",
    "meaning": "발표하다",
    "level": "high"
  },
  {
    "word": "extend",
    "pos": "v.",
    "meaning": "뻗다",
    "level": "high"
  },
  {
    "word": "extent",
    "pos": "n.",
    "meaning": "넓이",
    "level": "high"
  },
  {
    "word": "external",
    "pos": "a.",
    "meaning": "외부의",
    "level": "high"
  },
  {
    "word": "extinct",
    "pos": "n.",
    "meaning": "꺼진",
    "level": "high"
  },
  {
    "word": "extra",
    "pos": "a.",
    "meaning": "가외의",
    "level": "high"
  },
  {
    "word": "extract",
    "pos": "v.",
    "meaning": "뽑아내다",
    "level": "high"
  },
  {
    "word": "extraordinary",
    "pos": "a.",
    "meaning": "이상한",
    "level": "high"
  },
  {
    "word": "extreme",
    "pos": "a.",
    "meaning": "극단의",
    "level": "high"
  },
  {
    "word": "eye",
    "pos": "n.",
    "meaning": "눈",
    "level": "high"
  },
  {
    "word": "eyebrow",
    "pos": "n.",
    "meaning": "눈썹",
    "level": "high"
  },
  {
    "word": "fabric",
    "pos": "n.",
    "meaning": "천",
    "level": "high"
  },
  {
    "word": "face",
    "pos": "n.",
    "meaning": "얼굴",
    "level": "high"
  },
  {
    "word": "facilitate",
    "pos": "v.",
    "meaning": "쉽게하다",
    "level": "high"
  },
  {
    "word": "facility",
    "pos": "n.",
    "meaning": "쉬움",
    "level": "high"
  },
  {
    "word": "fact",
    "pos": "n.",
    "meaning": "사실",
    "level": "high"
  },
  {
    "word": "factor",
    "pos": "n.",
    "meaning": "요소",
    "level": "high"
  },
  {
    "word": "factory",
    "pos": "n.",
    "meaning": "공장",
    "level": "high"
  },
  {
    "word": "faculty",
    "pos": "n.",
    "meaning": "능력",
    "level": "high"
  },
  {
    "word": "fade",
    "pos": "v.",
    "meaning": "바래다",
    "level": "high"
  },
  {
    "word": "fail",
    "pos": "v.",
    "meaning": "실패하다",
    "level": "high"
  },
  {
    "word": "faint",
    "pos": "v.",
    "meaning": "기절하다",
    "level": "high"
  },
  {
    "word": "fair",
    "pos": "a.",
    "meaning": "공평한",
    "level": "high"
  },
  {
    "word": "faith",
    "pos": "n.",
    "meaning": "신용",
    "level": "high"
  },
  {
    "word": "fall",
    "pos": "v.",
    "meaning": "떨어지다",
    "level": "high"
  },
  {
    "word": "FALSE",
    "pos": "n.",
    "meaning": "거짓",
    "level": "high"
  },
  {
    "word": "fame",
    "pos": "n.",
    "meaning": "명성",
    "level": "high"
  },
  {
    "word": "familiar",
    "pos": "a.",
    "meaning": "친한",
    "level": "high"
  },
  {
    "word": "family",
    "pos": "n.",
    "meaning": "가족",
    "level": "high"
  },
  {
    "word": "famous",
    "pos": "a.",
    "meaning": "유명한",
    "level": "high"
  },
  {
    "word": "fan",
    "pos": "n.",
    "meaning": "(영화 등의)팬",
    "level": "high"
  },
  {
    "word": "fancy",
    "pos": "n.",
    "meaning": "공상",
    "level": "high"
  },
  {
    "word": "fantastic",
    "pos": "a.",
    "meaning": "환상적인",
    "level": "high"
  },
  {
    "word": "far",
    "pos": "n.",
    "meaning": "멀리",
    "level": "high"
  },
  {
    "word": "fare",
    "pos": "n.",
    "meaning": "요금",
    "level": "high"
  },
  {
    "word": "farm",
    "pos": "n.",
    "meaning": "농장",
    "level": "high"
  },
  {
    "word": "fascinate",
    "pos": "v.",
    "meaning": "황홀케 하다",
    "level": "high"
  },
  {
    "word": "fast",
    "pos": "n.",
    "meaning": "빠른",
    "level": "high"
  },
  {
    "word": "fasten",
    "pos": "v.",
    "meaning": "단단히 고정시키다",
    "level": "high"
  },
  {
    "word": "fat",
    "pos": "n.",
    "meaning": "살찐",
    "level": "high"
  },
  {
    "word": "fatal",
    "pos": "a.",
    "meaning": "치명적인",
    "level": "high"
  },
  {
    "word": "fate",
    "pos": "n.",
    "meaning": "숙명",
    "level": "high"
  },
  {
    "word": "father",
    "pos": "n.",
    "meaning": "아버지",
    "level": "high"
  },
  {
    "word": "fault",
    "pos": "n.",
    "meaning": "결점",
    "level": "high"
  },
  {
    "word": "favor",
    "pos": "a.",
    "meaning": "호의",
    "level": "high"
  },
  {
    "word": "favorite",
    "pos": "n.",
    "meaning": "마음에 드는 좋아하는 물건",
    "level": "high"
  },
  {
    "word": "fear",
    "pos": "n.",
    "meaning": "두려움",
    "level": "high"
  },
  {
    "word": "feature",
    "pos": "n.",
    "meaning": "얼굴의 생김새",
    "level": "high"
  },
  {
    "word": "federal",
    "pos": "a.",
    "meaning": "연방의",
    "level": "high"
  },
  {
    "word": "fee",
    "pos": "n.",
    "meaning": "요금",
    "level": "high"
  },
  {
    "word": "feed",
    "pos": "v.",
    "meaning": "음식(먹이)을 주다",
    "level": "high"
  },
  {
    "word": "feel",
    "pos": "v.",
    "meaning": "만져보다",
    "level": "high"
  },
  {
    "word": "fellow",
    "pos": "n.",
    "meaning": "동무",
    "level": "high"
  },
  {
    "word": "female",
    "pos": "n.",
    "meaning": "여성",
    "level": "high"
  },
  {
    "word": "ferry",
    "pos": "n.",
    "meaning": "나루터",
    "level": "high"
  },
  {
    "word": "fertile",
    "pos": "a.",
    "meaning": "비옥한",
    "level": "high"
  },
  {
    "word": "fever",
    "pos": "n.",
    "meaning": "열",
    "level": "high"
  },
  {
    "word": "few",
    "pos": "a.",
    "meaning": "소수의",
    "level": "high"
  },
  {
    "word": "fiber",
    "pos": "n.",
    "meaning": "섬유",
    "level": "high"
  },
  {
    "word": "field",
    "pos": "n.",
    "meaning": "들",
    "level": "high"
  },
  {
    "word": "fierce",
    "pos": "a.",
    "meaning": "흉포한",
    "level": "high"
  },
  {
    "word": "fight",
    "pos": "n.",
    "meaning": "싸움",
    "level": "high"
  },
  {
    "word": "figure",
    "pos": "n.",
    "meaning": "모습",
    "level": "high"
  },
  {
    "word": "file",
    "pos": "n.",
    "meaning": "종이끼우개",
    "level": "high"
  },
  {
    "word": "fill",
    "pos": "v.",
    "meaning": "가득 채우다",
    "level": "high"
  },
  {
    "word": "filter",
    "pos": "v.",
    "meaning": "여과기 여과하다",
    "level": "high"
  },
  {
    "word": "final",
    "pos": "a.",
    "meaning": "최후의",
    "level": "high"
  },
  {
    "word": "finance",
    "pos": "n.",
    "meaning": "재정",
    "level": "high"
  },
  {
    "word": "find",
    "pos": "v.",
    "meaning": "발견하다",
    "level": "high"
  },
  {
    "word": "fine",
    "pos": "a.",
    "meaning": "훌륭한",
    "level": "high"
  },
  {
    "word": "finger",
    "pos": "v.",
    "meaning": "손가락 손가락을 대다",
    "level": "high"
  },
  {
    "word": "finish",
    "pos": "v.",
    "meaning": "끝내다",
    "level": "high"
  },
  {
    "word": "finite",
    "pos": "a.",
    "meaning": "한정되어 있는",
    "level": "high"
  },
  {
    "word": "fire",
    "pos": "n.",
    "meaning": "불",
    "level": "high"
  },
  {
    "word": "firm",
    "pos": "n.",
    "meaning": "굳은",
    "level": "high"
  },
  {
    "word": "fish",
    "pos": "n.",
    "meaning": "물고기",
    "level": "high"
  },
  {
    "word": "fist",
    "pos": "n.",
    "meaning": "주먹",
    "level": "high"
  },
  {
    "word": "fit",
    "pos": "a.",
    "meaning": "맞는",
    "level": "high"
  },
  {
    "word": "fix",
    "pos": "v.",
    "meaning": "고정시키다",
    "level": "high"
  },
  {
    "word": "flag",
    "pos": "n.",
    "meaning": "기",
    "level": "high"
  },
  {
    "word": "flame",
    "pos": "n.",
    "meaning": "불꽃",
    "level": "high"
  },
  {
    "word": "flash",
    "pos": "n.",
    "meaning": "번쩍임",
    "level": "high"
  },
  {
    "word": "flat",
    "pos": "a.",
    "meaning": "편평한",
    "level": "high"
  },
  {
    "word": "flavor",
    "pos": "n.",
    "meaning": "(독특한)맛",
    "level": "high"
  },
  {
    "word": "flaw",
    "pos": "n.",
    "meaning": "금",
    "level": "high"
  },
  {
    "word": "flee",
    "pos": "v.",
    "meaning": "달아나다",
    "level": "high"
  },
  {
    "word": "flesh",
    "pos": "n.",
    "meaning": "살",
    "level": "high"
  },
  {
    "word": "flexible",
    "pos": "n.",
    "meaning": "구부리기 쉬운",
    "level": "high"
  },
  {
    "word": "flight",
    "pos": "n.",
    "meaning": "날기",
    "level": "high"
  },
  {
    "word": "flip",
    "pos": "v.",
    "meaning": "튀기다 홱 움직이다 튀기기",
    "level": "high"
  },
  {
    "word": "float",
    "pos": "v.",
    "meaning": "뜨다",
    "level": "high"
  },
  {
    "word": "flock",
    "pos": "n.",
    "meaning": "무리",
    "level": "high"
  },
  {
    "word": "flood",
    "pos": "n.",
    "meaning": "홍수",
    "level": "high"
  },
  {
    "word": "floor",
    "pos": "n.",
    "meaning": "마룻바닥",
    "level": "high"
  },
  {
    "word": "flourish",
    "pos": "v.",
    "meaning": "번창하다",
    "level": "high"
  },
  {
    "word": "flow",
    "pos": "v.",
    "meaning": "흐르다",
    "level": "high"
  },
  {
    "word": "flower",
    "pos": "n.",
    "meaning": "꽃",
    "level": "high"
  },
  {
    "word": "fluid",
    "pos": "a.",
    "meaning": "유동성의",
    "level": "high"
  },
  {
    "word": "flush",
    "pos": "v.",
    "meaning": "왈칵흐르다",
    "level": "high"
  },
  {
    "word": "fly",
    "pos": "v.",
    "meaning": "날다",
    "level": "high"
  },
  {
    "word": "focus",
    "pos": "n.",
    "meaning": "초점",
    "level": "high"
  },
  {
    "word": "fog",
    "pos": "n.",
    "meaning": "안개",
    "level": "high"
  },
  {
    "word": "fold",
    "pos": "n.",
    "meaning": "주름",
    "level": "high"
  },
  {
    "word": "folk",
    "pos": "n.",
    "meaning": "사람들",
    "level": "high"
  },
  {
    "word": "follow",
    "pos": "v.",
    "meaning": "쫓다",
    "level": "high"
  },
  {
    "word": "fond",
    "pos": "a.",
    "meaning": "좋아하는",
    "level": "high"
  },
  {
    "word": "food",
    "pos": "n.",
    "meaning": "음식",
    "level": "high"
  },
  {
    "word": "fool",
    "pos": "n.",
    "meaning": "바보",
    "level": "high"
  },
  {
    "word": "foot",
    "pos": "n.",
    "meaning": "발",
    "level": "high"
  },
  {
    "word": "football",
    "pos": "n.",
    "meaning": "축구",
    "level": "high"
  },
  {
    "word": "for",
    "pos": "n.",
    "meaning": "대신에",
    "level": "high"
  },
  {
    "word": "forbid",
    "pos": "v.",
    "meaning": "금하다",
    "level": "high"
  },
  {
    "word": "force",
    "pos": "n.",
    "meaning": "힘",
    "level": "high"
  },
  {
    "word": "forecast",
    "pos": "n.",
    "meaning": "예상",
    "level": "high"
  },
  {
    "word": "forehead",
    "pos": "n.",
    "meaning": "이마",
    "level": "high"
  },
  {
    "word": "foreign",
    "pos": "a.",
    "meaning": "외국의",
    "level": "high"
  },
  {
    "word": "forest",
    "pos": "n.",
    "meaning": "숲",
    "level": "high"
  },
  {
    "word": "forever",
    "pos": "ad.",
    "meaning": "영원히",
    "level": "high"
  },
  {
    "word": "forget",
    "pos": "v.",
    "meaning": "잊다",
    "level": "high"
  },
  {
    "word": "forgive",
    "pos": "v.",
    "meaning": "용서하다",
    "level": "high"
  },
  {
    "word": "form",
    "pos": "n.",
    "meaning": "모양",
    "level": "high"
  },
  {
    "word": "formal",
    "pos": "a.",
    "meaning": "형식상의",
    "level": "high"
  },
  {
    "word": "format",
    "pos": "n.",
    "meaning": "(서적의)체제",
    "level": "high"
  },
  {
    "word": "formation",
    "pos": "n.",
    "meaning": "형성",
    "level": "high"
  },
  {
    "word": "former",
    "pos": "a.",
    "meaning": "이전의",
    "level": "high"
  },
  {
    "word": "formula",
    "pos": "n.",
    "meaning": "공식",
    "level": "high"
  },
  {
    "word": "forth",
    "pos": "ad.",
    "meaning": "앞으로",
    "level": "high"
  },
  {
    "word": "fortunate",
    "pos": "n.",
    "meaning": "운좋은",
    "level": "high"
  },
  {
    "word": "fortune",
    "pos": "n.",
    "meaning": "운",
    "level": "high"
  },
  {
    "word": "forum",
    "pos": "n.",
    "meaning": "공개토론회",
    "level": "high"
  },
  {
    "word": "forward",
    "pos": "n.",
    "meaning": "앞쪽에",
    "level": "high"
  },
  {
    "word": "foster",
    "pos": "v.",
    "meaning": "기르다",
    "level": "high"
  },
  {
    "word": "foundation",
    "pos": "n.",
    "meaning": "기초",
    "level": "high"
  },
  {
    "word": "fountain",
    "pos": "n.",
    "meaning": "샘",
    "level": "high"
  },
  {
    "word": "fox",
    "pos": "n.",
    "meaning": "교활한 person",
    "level": "high"
  },
  {
    "word": "fraction",
    "pos": "n.",
    "meaning": "분수",
    "level": "high"
  },
  {
    "word": "frame",
    "pos": "n.",
    "meaning": "구조",
    "level": "high"
  },
  {
    "word": "framework",
    "pos": "n.",
    "meaning": "뼈대",
    "level": "high"
  },
  {
    "word": "frankly",
    "pos": "ad.",
    "meaning": "솔직히",
    "level": "high"
  },
  {
    "word": "free",
    "pos": "a.",
    "meaning": "자유로운",
    "level": "high"
  },
  {
    "word": "freeze",
    "pos": "v.",
    "meaning": "얼다",
    "level": "high"
  },
  {
    "word": "frequent",
    "pos": "a.",
    "meaning": "빈번한",
    "level": "high"
  },
  {
    "word": "fresh",
    "pos": "a.",
    "meaning": "새로운",
    "level": "high"
  },
  {
    "word": "friend",
    "pos": "n.",
    "meaning": "친구",
    "level": "high"
  },
  {
    "word": "fright",
    "pos": "n.",
    "meaning": "(갑자기 엄습하는)공포",
    "level": "high"
  },
  {
    "word": "frog",
    "pos": "n.",
    "meaning": "개구리",
    "level": "high"
  },
  {
    "word": "from",
    "pos": "n.",
    "meaning": "(분리,이탈,출발점,기점)-로 부터",
    "level": "high"
  },
  {
    "word": "front",
    "pos": "n.",
    "meaning": "정면",
    "level": "high"
  },
  {
    "word": "frost",
    "pos": "n.",
    "meaning": "서리",
    "level": "high"
  },
  {
    "word": "frown",
    "pos": "v.",
    "meaning": "눈살을 찌푸리다",
    "level": "high"
  },
  {
    "word": "fruit",
    "pos": "n.",
    "meaning": "과일",
    "level": "high"
  },
  {
    "word": "frustrate",
    "pos": "v.",
    "meaning": "(계획 등을)좌절시키다",
    "level": "high"
  },
  {
    "word": "fry",
    "pos": "v.",
    "meaning": "기름으로 튀기다",
    "level": "high"
  },
  {
    "word": "fuel",
    "pos": "n.",
    "meaning": "연료",
    "level": "high"
  },
  {
    "word": "fulfil",
    "pos": "v.",
    "meaning": "이행하다",
    "level": "high"
  },
  {
    "word": "full",
    "pos": "n.",
    "meaning": "가득찬",
    "level": "high"
  },
  {
    "word": "fun",
    "pos": "n.",
    "meaning": "즐거운 생각",
    "level": "high"
  },
  {
    "word": "function",
    "pos": "n.",
    "meaning": "기능",
    "level": "high"
  },
  {
    "word": "fund",
    "pos": "n.",
    "meaning": "기금",
    "level": "high"
  },
  {
    "word": "fundamental",
    "pos": "a.",
    "meaning": "기초(기준)의",
    "level": "high"
  },
  {
    "word": "funeral",
    "pos": "n.",
    "meaning": "장사",
    "level": "high"
  },
  {
    "word": "fur",
    "pos": "n.",
    "meaning": "모피",
    "level": "high"
  },
  {
    "word": "furious",
    "pos": "a.",
    "meaning": "노하여 펄펄뛰는",
    "level": "high"
  },
  {
    "word": "furnish",
    "pos": "v.",
    "meaning": "공급하다",
    "level": "high"
  },
  {
    "word": "furniture",
    "pos": "n.",
    "meaning": "가구",
    "level": "high"
  },
  {
    "word": "furthermore",
    "pos": "n.",
    "meaning": "더우기",
    "level": "high"
  },
  {
    "word": "fuse",
    "pos": "n.",
    "meaning": "신관",
    "level": "high"
  },
  {
    "word": "future",
    "pos": "n.",
    "meaning": "미래",
    "level": "high"
  },
  {
    "word": "gain",
    "pos": "v.",
    "meaning": "얻다",
    "level": "high"
  },
  {
    "word": "gamble",
    "pos": "v.",
    "meaning": "도박하다 도박 도박해서 잃다",
    "level": "high"
  },
  {
    "word": "gang",
    "pos": "n.",
    "meaning": "한 떼",
    "level": "high"
  },
  {
    "word": "gap",
    "pos": "n.",
    "meaning": "갈라진 틈",
    "level": "high"
  },
  {
    "word": "garage",
    "pos": "n.",
    "meaning": "차고",
    "level": "high"
  },
  {
    "word": "garden",
    "pos": "n.",
    "meaning": "뜰",
    "level": "high"
  },
  {
    "word": "gasoline",
    "pos": "n.",
    "meaning": "가솔린",
    "level": "high"
  },
  {
    "word": "gate",
    "pos": "n.",
    "meaning": "문",
    "level": "high"
  },
  {
    "word": "gather",
    "pos": "v.",
    "meaning": "그러모으다",
    "level": "high"
  },
  {
    "word": "gaze",
    "pos": "v.",
    "meaning": "지켜보다",
    "level": "high"
  },
  {
    "word": "gear",
    "pos": "n.",
    "meaning": "톱니바퀴",
    "level": "high"
  },
  {
    "word": "gender",
    "pos": "n.",
    "meaning": "성",
    "level": "high"
  },
  {
    "word": "gene",
    "pos": "n.",
    "meaning": "유전(인)자",
    "level": "high"
  },
  {
    "word": "general",
    "pos": "a.",
    "meaning": "일반적인",
    "level": "high"
  },
  {
    "word": "generate",
    "pos": "v.",
    "meaning": "낳다",
    "level": "high"
  },
  {
    "word": "generation",
    "pos": "n.",
    "meaning": "일대",
    "level": "high"
  },
  {
    "word": "generous",
    "pos": "a.",
    "meaning": "광대한",
    "level": "high"
  },
  {
    "word": "genius",
    "pos": "n.",
    "meaning": "천재",
    "level": "high"
  },
  {
    "word": "genre",
    "pos": "n.",
    "meaning": "유형",
    "level": "high"
  },
  {
    "word": "gentle",
    "pos": "a.",
    "meaning": "온화한",
    "level": "high"
  },
  {
    "word": "gentleman",
    "pos": "n.",
    "meaning": "신사",
    "level": "high"
  },
  {
    "word": "genuine",
    "pos": "a.",
    "meaning": "진짜의",
    "level": "high"
  },
  {
    "word": "geography",
    "pos": "n.",
    "meaning": "지리",
    "level": "high"
  },
  {
    "word": "geology",
    "pos": "n.",
    "meaning": "지질학",
    "level": "high"
  },
  {
    "word": "gesture",
    "pos": "n.",
    "meaning": "몸짓",
    "level": "high"
  },
  {
    "word": "get",
    "pos": "v.",
    "meaning": "얻다",
    "level": "high"
  },
  {
    "word": "ghost",
    "pos": "n.",
    "meaning": "유령",
    "level": "high"
  },
  {
    "word": "giant",
    "pos": "a.",
    "meaning": "거인",
    "level": "high"
  },
  {
    "word": "gift",
    "pos": "n.",
    "meaning": "선물",
    "level": "high"
  },
  {
    "word": "giraffe",
    "pos": "n.",
    "meaning": "기린",
    "level": "high"
  },
  {
    "word": "girl",
    "pos": "n.",
    "meaning": "소녀",
    "level": "high"
  },
  {
    "word": "give",
    "pos": "v.",
    "meaning": "주다",
    "level": "high"
  },
  {
    "word": "glad",
    "pos": "n.",
    "meaning": "기쁜",
    "level": "high"
  },
  {
    "word": "glance",
    "pos": "n.",
    "meaning": "흘긋 봄",
    "level": "high"
  },
  {
    "word": "glare",
    "pos": "n.",
    "meaning": "번쩍이는 빛",
    "level": "high"
  },
  {
    "word": "glass",
    "pos": "n.",
    "meaning": "유리",
    "level": "high"
  },
  {
    "word": "glimpse",
    "pos": "n.",
    "meaning": "흘끗 봄",
    "level": "high"
  },
  {
    "word": "global",
    "pos": "a.",
    "meaning": "공모양의",
    "level": "high"
  },
  {
    "word": "glory",
    "pos": "n.",
    "meaning": "영광",
    "level": "high"
  },
  {
    "word": "glove",
    "pos": "n.",
    "meaning": "장갑",
    "level": "high"
  },
  {
    "word": "glow",
    "pos": "v.",
    "meaning": "타다",
    "level": "high"
  },
  {
    "word": "glue",
    "pos": "n.",
    "meaning": "아교",
    "level": "high"
  },
  {
    "word": "go",
    "pos": "v.",
    "meaning": "가다",
    "level": "high"
  },
  {
    "word": "goal",
    "pos": "n.",
    "meaning": "결승점",
    "level": "high"
  },
  {
    "word": "goat",
    "pos": "n.",
    "meaning": "염소",
    "level": "high"
  },
  {
    "word": "god",
    "pos": "n.",
    "meaning": "신",
    "level": "high"
  },
  {
    "word": "gold",
    "pos": "n.",
    "meaning": "금",
    "level": "high"
  },
  {
    "word": "good",
    "pos": "n.",
    "meaning": "좋은",
    "level": "high"
  },
  {
    "word": "goodbye",
    "pos": "n.",
    "meaning": "안녕히 가세요",
    "level": "high"
  },
  {
    "word": "goods",
    "pos": "n.",
    "meaning": "상품",
    "level": "high"
  },
  {
    "word": "gorgeous",
    "pos": "a.",
    "meaning": "호화로운",
    "level": "high"
  },
  {
    "word": "govern",
    "pos": "v.",
    "meaning": "다스리다",
    "level": "high"
  },
  {
    "word": "grab",
    "pos": "n.",
    "meaning": "붙잡다(=snatch)",
    "level": "high"
  },
  {
    "word": "grace",
    "pos": "n.",
    "meaning": "은총",
    "level": "high"
  },
  {
    "word": "grade",
    "pos": "n.",
    "meaning": "등급",
    "level": "high"
  },
  {
    "word": "gradual",
    "pos": "a.",
    "meaning": "점차적인",
    "level": "high"
  },
  {
    "word": "graduate",
    "pos": "v.",
    "meaning": "학위를 수여하다",
    "level": "high"
  },
  {
    "word": "grain",
    "pos": "n.",
    "meaning": "곡물",
    "level": "high"
  },
  {
    "word": "grand",
    "pos": "a.",
    "meaning": "위대한",
    "level": "high"
  },
  {
    "word": "grandfather",
    "pos": "n.",
    "meaning": "할아버지",
    "level": "high"
  },
  {
    "word": "grant",
    "pos": "v.",
    "meaning": "받아들이다",
    "level": "high"
  },
  {
    "word": "grape",
    "pos": "n.",
    "meaning": "포도",
    "level": "high"
  },
  {
    "word": "graphic",
    "pos": "a.",
    "meaning": "그려 놓은 듯한",
    "level": "high"
  },
  {
    "word": "grasp",
    "pos": "v.",
    "meaning": "붙잡다",
    "level": "high"
  },
  {
    "word": "grass",
    "pos": "n.",
    "meaning": "풀밭",
    "level": "high"
  },
  {
    "word": "grateful",
    "pos": "a.",
    "meaning": "고맙게 생각하는",
    "level": "high"
  },
  {
    "word": "grave",
    "pos": "n.",
    "meaning": "무덤",
    "level": "high"
  },
  {
    "word": "great",
    "pos": "n.",
    "meaning": "커다란",
    "level": "high"
  },
  {
    "word": "greed",
    "pos": "n.",
    "meaning": "탐욕",
    "level": "high"
  },
  {
    "word": "green",
    "pos": "n.",
    "meaning": "초록색",
    "level": "high"
  },
  {
    "word": "greet",
    "pos": "v.",
    "meaning": "인사하다",
    "level": "high"
  },
  {
    "word": "grey",
    "pos": "a.",
    "meaning": "회색의",
    "level": "high"
  },
  {
    "word": "grief",
    "pos": "n.",
    "meaning": "심한 슬픔(deep sorrow)",
    "level": "high"
  },
  {
    "word": "grip",
    "pos": "n.",
    "meaning": "잡기",
    "level": "high"
  },
  {
    "word": "grocery",
    "pos": "n.",
    "meaning": "식품잡화류",
    "level": "high"
  },
  {
    "word": "gross",
    "pos": "a.",
    "meaning": "총계의",
    "level": "high"
  },
  {
    "word": "ground",
    "pos": "n.",
    "meaning": "땅",
    "level": "high"
  },
  {
    "word": "group",
    "pos": "n.",
    "meaning": "집단",
    "level": "high"
  },
  {
    "word": "grow",
    "pos": "v.",
    "meaning": "성장하다",
    "level": "high"
  },
  {
    "word": "guarantee",
    "pos": "v.",
    "meaning": "보증하다",
    "level": "high"
  },
  {
    "word": "guardian",
    "pos": "n.",
    "meaning": "보호자",
    "level": "high"
  },
  {
    "word": "guess",
    "pos": "v.",
    "meaning": "추측(짐작)하다",
    "level": "high"
  },
  {
    "word": "guest",
    "pos": "n.",
    "meaning": "손님",
    "level": "high"
  },
  {
    "word": "guide",
    "pos": "v.",
    "meaning": "이끌다",
    "level": "high"
  },
  {
    "word": "guideline",
    "pos": "n.",
    "meaning": "지침",
    "level": "high"
  },
  {
    "word": "guilty",
    "pos": "n.",
    "meaning": "죄지은",
    "level": "high"
  },
  {
    "word": "gulf",
    "pos": "n.",
    "meaning": "만",
    "level": "high"
  },
  {
    "word": "gun",
    "pos": "n.",
    "meaning": "총",
    "level": "high"
  },
  {
    "word": "guy",
    "pos": "n.",
    "meaning": "녀석",
    "level": "high"
  },
  {
    "word": "gymnasium",
    "pos": "n.",
    "meaning": "실내체조장",
    "level": "high"
  },
  {
    "word": "habit",
    "pos": "n.",
    "meaning": "습관",
    "level": "high"
  },
  {
    "word": "habitat",
    "pos": "n.",
    "meaning": "(동물의)자연번식지",
    "level": "high"
  },
  {
    "word": "hair",
    "pos": "n.",
    "meaning": "털",
    "level": "high"
  },
  {
    "word": "half",
    "pos": "n.",
    "meaning": "반",
    "level": "high"
  },
  {
    "word": "hall",
    "pos": "n.",
    "meaning": "회관",
    "level": "high"
  },
  {
    "word": "halt",
    "pos": "v.",
    "meaning": "멈춰서다",
    "level": "high"
  },
  {
    "word": "hammer",
    "pos": "n.",
    "meaning": "망치",
    "level": "high"
  },
  {
    "word": "hand",
    "pos": "n.",
    "meaning": "손",
    "level": "high"
  },
  {
    "word": "handicap",
    "pos": "n.",
    "meaning": "불리한 조건",
    "level": "high"
  },
  {
    "word": "handle",
    "pos": "n.",
    "meaning": "손잡이",
    "level": "high"
  },
  {
    "word": "handsome",
    "pos": "n.",
    "meaning": "얼굴(자태)이 잘생긴",
    "level": "high"
  },
  {
    "word": "hang",
    "pos": "v.",
    "meaning": "걸다",
    "level": "high"
  },
  {
    "word": "happen",
    "pos": "v.",
    "meaning": "(사건 등이)일어나다",
    "level": "high"
  },
  {
    "word": "happy",
    "pos": "a.",
    "meaning": "행운의",
    "level": "high"
  },
  {
    "word": "harbor",
    "pos": "n.",
    "meaning": "항구",
    "level": "high"
  },
  {
    "word": "hard",
    "pos": "a.",
    "meaning": "단단한",
    "level": "high"
  },
  {
    "word": "hardly",
    "pos": "v.",
    "meaning": "거의 -아니다",
    "level": "high"
  },
  {
    "word": "harm",
    "pos": "n.",
    "meaning": "해",
    "level": "high"
  },
  {
    "word": "harsh",
    "pos": "n.",
    "meaning": "거친",
    "level": "high"
  },
  {
    "word": "harvest",
    "pos": "n.",
    "meaning": "수확",
    "level": "high"
  },
  {
    "word": "haste",
    "pos": "n.",
    "meaning": "급함",
    "level": "high"
  },
  {
    "word": "hat",
    "pos": "v.",
    "meaning": "(테있는)모자 모자를 씌우다",
    "level": "high"
  },
  {
    "word": "hate",
    "pos": "v.",
    "meaning": "미워하다",
    "level": "high"
  },
  {
    "word": "haunt",
    "pos": "v.",
    "meaning": "자주가다",
    "level": "high"
  },
  {
    "word": "have",
    "pos": "v.",
    "meaning": "가지(고 있)다",
    "level": "high"
  },
  {
    "word": "hazard",
    "pos": "n.",
    "meaning": "위험",
    "level": "high"
  },
  {
    "word": "he",
    "pos": "n.",
    "meaning": "(3 인칭단수 남성)그",
    "level": "high"
  },
  {
    "word": "head",
    "pos": "n.",
    "meaning": "머리",
    "level": "high"
  },
  {
    "word": "headache",
    "pos": "n.",
    "meaning": "두통",
    "level": "high"
  },
  {
    "word": "headquarters",
    "pos": "n.",
    "meaning": "본부",
    "level": "high"
  },
  {
    "word": "heal",
    "pos": "v.",
    "meaning": "고치다",
    "level": "high"
  },
  {
    "word": "health",
    "pos": "n.",
    "meaning": "건강",
    "level": "high"
  },
  {
    "word": "hear",
    "pos": "v.",
    "meaning": "듣다",
    "level": "high"
  },
  {
    "word": "heart",
    "pos": "n.",
    "meaning": "심장",
    "level": "high"
  },
  {
    "word": "heat",
    "pos": "n.",
    "meaning": "열",
    "level": "high"
  },
  {
    "word": "heaven",
    "pos": "n.",
    "meaning": "하늘",
    "level": "high"
  },
  {
    "word": "heavy",
    "pos": "n.",
    "meaning": "무거운",
    "level": "high"
  },
  {
    "word": "heel",
    "pos": "n.",
    "meaning": "발뒤꿈치",
    "level": "high"
  },
  {
    "word": "height",
    "pos": "n.",
    "meaning": "높이",
    "level": "high"
  },
  {
    "word": "heir",
    "pos": "a.",
    "meaning": "상속인",
    "level": "high"
  },
  {
    "word": "helicopter",
    "pos": "n.",
    "meaning": "헬리콥터",
    "level": "high"
  },
  {
    "word": "hell",
    "pos": "n.",
    "meaning": "지옥",
    "level": "high"
  },
  {
    "word": "hello",
    "pos": "n.",
    "meaning": "여보",
    "level": "high"
  },
  {
    "word": "help",
    "pos": "v.",
    "meaning": "돕다",
    "level": "high"
  },
  {
    "word": "hence",
    "pos": "ad.",
    "meaning": "그러므로",
    "level": "high"
  },
  {
    "word": "here",
    "pos": "n.",
    "meaning": "여기에",
    "level": "high"
  },
  {
    "word": "heritage",
    "pos": "n.",
    "meaning": "세습 재산",
    "level": "high"
  },
  {
    "word": "hero",
    "pos": "n.",
    "meaning": "영웅",
    "level": "high"
  },
  {
    "word": "hesitate",
    "pos": "v.",
    "meaning": "주저하다",
    "level": "high"
  },
  {
    "word": "hide",
    "pos": "v.",
    "meaning": "감추다",
    "level": "high"
  },
  {
    "word": "high",
    "pos": "n.",
    "meaning": "높은",
    "level": "high"
  },
  {
    "word": "highway",
    "pos": "n.",
    "meaning": "대도",
    "level": "high"
  },
  {
    "word": "hill",
    "pos": "n.",
    "meaning": "언덕, 낮은 산 인도 고지",
    "level": "high"
  },
  {
    "word": "hip",
    "pos": "n.",
    "meaning": "엉덩이",
    "level": "high"
  },
  {
    "word": "hire",
    "pos": "v.",
    "meaning": "고용하다",
    "level": "high"
  },
  {
    "word": "history",
    "pos": "n.",
    "meaning": "역사",
    "level": "high"
  },
  {
    "word": "hit",
    "pos": "v.",
    "meaning": "명중하다",
    "level": "high"
  },
  {
    "word": "hobby",
    "pos": "n.",
    "meaning": "취미",
    "level": "high"
  },
  {
    "word": "hold",
    "pos": "v.",
    "meaning": "손에 갖고 있다",
    "level": "high"
  },
  {
    "word": "hole",
    "pos": "n.",
    "meaning": "구멍",
    "level": "high"
  },
  {
    "word": "holiday",
    "pos": "n.",
    "meaning": "휴일",
    "level": "high"
  },
  {
    "word": "holy",
    "pos": "a.",
    "meaning": "신성한",
    "level": "high"
  },
  {
    "word": "home",
    "pos": "n.",
    "meaning": "가정",
    "level": "high"
  },
  {
    "word": "homework",
    "pos": "n.",
    "meaning": "숙제",
    "level": "high"
  },
  {
    "word": "honest",
    "pos": "a.",
    "meaning": "정직한",
    "level": "high"
  },
  {
    "word": "honey",
    "pos": "n.",
    "meaning": "벌꿀",
    "level": "high"
  },
  {
    "word": "honor",
    "pos": "n.",
    "meaning": "명예",
    "level": "high"
  },
  {
    "word": "hook",
    "pos": "n.",
    "meaning": "갈고리",
    "level": "high"
  },
  {
    "word": "hope",
    "pos": "n.",
    "meaning": "희망",
    "level": "high"
  },
  {
    "word": "horizon",
    "pos": "n.",
    "meaning": "지평선",
    "level": "high"
  },
  {
    "word": "horn",
    "pos": "n.",
    "meaning": "뿔",
    "level": "high"
  },
  {
    "word": "horror",
    "pos": "n.",
    "meaning": "공포",
    "level": "high"
  },
  {
    "word": "horse",
    "pos": "n.",
    "meaning": "말",
    "level": "high"
  },
  {
    "word": "hospital",
    "pos": "n.",
    "meaning": "병완",
    "level": "high"
  },
  {
    "word": "host",
    "pos": "n.",
    "meaning": "주인, 집주인 노릇, 호스트",
    "level": "high"
  },
  {
    "word": "hostage",
    "pos": "n.",
    "meaning": "볼모",
    "level": "high"
  },
  {
    "word": "hostile",
    "pos": "a.",
    "meaning": "반대하는",
    "level": "high"
  },
  {
    "word": "hot",
    "pos": "n.",
    "meaning": "뜨거운",
    "level": "high"
  },
  {
    "word": "hour",
    "pos": "n.",
    "meaning": "시간",
    "level": "high"
  },
  {
    "word": "house",
    "pos": "n.",
    "meaning": "집",
    "level": "high"
  },
  {
    "word": "household",
    "pos": "n.",
    "meaning": "가족",
    "level": "high"
  },
  {
    "word": "how",
    "pos": "ad.",
    "meaning": "어떻게",
    "level": "high"
  },
  {
    "word": "however",
    "pos": "n.",
    "meaning": "아무리",
    "level": "high"
  },
  {
    "word": "hug",
    "pos": "v.",
    "meaning": "꼭 껴안다",
    "level": "high"
  },
  {
    "word": "huge",
    "pos": "a.",
    "meaning": "거대한",
    "level": "high"
  },
  {
    "word": "human",
    "pos": "a.",
    "meaning": "인간의",
    "level": "high"
  },
  {
    "word": "humor",
    "pos": "n.",
    "meaning": "유우머",
    "level": "high"
  },
  {
    "word": "hundred",
    "pos": "a.",
    "meaning": "100 100 의",
    "level": "high"
  },
  {
    "word": "hungry",
    "pos": "n.",
    "meaning": "배고픈",
    "level": "high"
  },
  {
    "word": "hunt",
    "pos": "v.",
    "meaning": "사냥하다",
    "level": "high"
  },
  {
    "word": "hurry",
    "pos": "v.",
    "meaning": "서두르다",
    "level": "high"
  },
  {
    "word": "hurt",
    "pos": "v.",
    "meaning": "상처내다",
    "level": "high"
  },
  {
    "word": "husband",
    "pos": "v.",
    "meaning": "남편 절약하다",
    "level": "high"
  },
  {
    "word": "hut",
    "pos": "n.",
    "meaning": "오두막",
    "level": "high"
  },
  {
    "word": "hypothesis",
    "pos": "n.",
    "meaning": "가설",
    "level": "high"
  },
  {
    "word": "I",
    "pos": "n.",
    "meaning": "나는, 내가",
    "level": "high"
  },
  {
    "word": "ice",
    "pos": "n.",
    "meaning": "얼음",
    "level": "high"
  },
  {
    "word": "idea",
    "pos": "n.",
    "meaning": "관념",
    "level": "high"
  },
  {
    "word": "ideal",
    "pos": "n.",
    "meaning": "이상",
    "level": "high"
  },
  {
    "word": "identical",
    "pos": "a.",
    "meaning": "아주 동일한",
    "level": "high"
  },
  {
    "word": "identify",
    "pos": "v.",
    "meaning": "동일시하다",
    "level": "high"
  },
  {
    "word": "ideology",
    "pos": "n.",
    "meaning": "공리",
    "level": "high"
  },
  {
    "word": "if",
    "pos": "n.",
    "meaning": "만일 -이라면",
    "level": "high"
  },
  {
    "word": "ignore",
    "pos": "v.",
    "meaning": "무시하다",
    "level": "high"
  },
  {
    "word": "ill",
    "pos": "n.",
    "meaning": "병든",
    "level": "high"
  },
  {
    "word": "illusion",
    "pos": "n.",
    "meaning": "환영",
    "level": "high"
  },
  {
    "word": "illustrate",
    "pos": "v.",
    "meaning": "설명하다",
    "level": "high"
  },
  {
    "word": "imagine",
    "pos": "v.",
    "meaning": "상상하다",
    "level": "high"
  },
  {
    "word": "imitate",
    "pos": "v.",
    "meaning": "흉내내다",
    "level": "high"
  },
  {
    "word": "immediate",
    "pos": "a.",
    "meaning": "직접의",
    "level": "high"
  },
  {
    "word": "immense",
    "pos": "a.",
    "meaning": "무한한",
    "level": "high"
  },
  {
    "word": "immigrate",
    "pos": "v.",
    "meaning": "이주하다",
    "level": "high"
  },
  {
    "word": "immune",
    "pos": "a.",
    "meaning": "면역성의",
    "level": "high"
  },
  {
    "word": "impact",
    "pos": "n.",
    "meaning": "충격",
    "level": "high"
  },
  {
    "word": "imperial",
    "pos": "a.",
    "meaning": "제국의",
    "level": "high"
  },
  {
    "word": "implement",
    "pos": "n.",
    "meaning": "기구",
    "level": "high"
  },
  {
    "word": "imply",
    "pos": "v.",
    "meaning": "함축하다",
    "level": "high"
  },
  {
    "word": "import",
    "pos": "v.",
    "meaning": "수입하다",
    "level": "high"
  },
  {
    "word": "important",
    "pos": "a.",
    "meaning": "중요한",
    "level": "high"
  },
  {
    "word": "impose",
    "pos": "v.",
    "meaning": "부과하다",
    "level": "high"
  },
  {
    "word": "impress",
    "pos": "v.",
    "meaning": "인상지우다",
    "level": "high"
  },
  {
    "word": "improve",
    "pos": "v.",
    "meaning": "개선하다",
    "level": "high"
  },
  {
    "word": "in",
    "pos": "n.",
    "meaning": "-속에",
    "level": "high"
  },
  {
    "word": "incentive",
    "pos": "a.",
    "meaning": "자극적인",
    "level": "high"
  },
  {
    "word": "incident",
    "pos": "n.",
    "meaning": "사건",
    "level": "high"
  },
  {
    "word": "incline",
    "pos": "v.",
    "meaning": "기울이다",
    "level": "high"
  },
  {
    "word": "include",
    "pos": "v.",
    "meaning": "포함하다",
    "level": "high"
  },
  {
    "word": "income",
    "pos": "n.",
    "meaning": "수입",
    "level": "high"
  },
  {
    "word": "incorporate",
    "pos": "v.",
    "meaning": "합동시키다",
    "level": "high"
  },
  {
    "word": "increase",
    "pos": "v.",
    "meaning": "늘다",
    "level": "high"
  },
  {
    "word": "incredible",
    "pos": "a.",
    "meaning": "믿을 수 없는",
    "level": "high"
  },
  {
    "word": "indeed",
    "pos": "ad.",
    "meaning": "참으로",
    "level": "high"
  },
  {
    "word": "independent",
    "pos": "a.",
    "meaning": "독립한",
    "level": "high"
  },
  {
    "word": "index",
    "pos": "a.",
    "meaning": "색인",
    "level": "high"
  },
  {
    "word": "indicate",
    "pos": "v.",
    "meaning": "지적하다",
    "level": "high"
  },
  {
    "word": "individual",
    "pos": "a.",
    "meaning": "개인",
    "level": "high"
  },
  {
    "word": "induce",
    "pos": "v.",
    "meaning": "꾀다",
    "level": "high"
  },
  {
    "word": "industry",
    "pos": "n.",
    "meaning": "공업",
    "level": "high"
  },
  {
    "word": "inevitable",
    "pos": "a.",
    "meaning": "피할 수 없는",
    "level": "high"
  },
  {
    "word": "infant",
    "pos": "n.",
    "meaning": "유아",
    "level": "high"
  },
  {
    "word": "infect",
    "pos": "v.",
    "meaning": "감염시키다",
    "level": "high"
  },
  {
    "word": "infer",
    "pos": "v.",
    "meaning": "추론하다",
    "level": "high"
  },
  {
    "word": "inflate",
    "pos": "v.",
    "meaning": "부풀게 하다",
    "level": "high"
  },
  {
    "word": "influence",
    "pos": "n.",
    "meaning": "영향력",
    "level": "high"
  },
  {
    "word": "inform",
    "pos": "v.",
    "meaning": "알리다",
    "level": "high"
  },
  {
    "word": "informal",
    "pos": "a.",
    "meaning": "비공식의",
    "level": "high"
  },
  {
    "word": "ingredient",
    "pos": "n.",
    "meaning": "성분",
    "level": "high"
  },
  {
    "word": "inhabit",
    "pos": "v.",
    "meaning": "살다",
    "level": "high"
  },
  {
    "word": "inherent",
    "pos": "a.",
    "meaning": "생태의",
    "level": "high"
  },
  {
    "word": "inhibit",
    "pos": "v.",
    "meaning": "금하다",
    "level": "high"
  },
  {
    "word": "initial",
    "pos": "a.",
    "meaning": "처음의",
    "level": "high"
  },
  {
    "word": "initiate",
    "pos": "v.",
    "meaning": "시작하다",
    "level": "high"
  },
  {
    "word": "inject",
    "pos": "v.",
    "meaning": "주사하다",
    "level": "high"
  },
  {
    "word": "injure",
    "pos": "v.",
    "meaning": "해치다",
    "level": "high"
  },
  {
    "word": "inn",
    "pos": "n.",
    "meaning": "여인숙",
    "level": "high"
  },
  {
    "word": "innocent",
    "pos": "a.",
    "meaning": "무구한",
    "level": "high"
  },
  {
    "word": "innovate",
    "pos": "v.",
    "meaning": "새롭게 하다",
    "level": "high"
  },
  {
    "word": "input",
    "pos": "n.",
    "meaning": "투입",
    "level": "high"
  },
  {
    "word": "inquire",
    "pos": "v.",
    "meaning": "묻다",
    "level": "high"
  },
  {
    "word": "insect",
    "pos": "n.",
    "meaning": "충",
    "level": "high"
  },
  {
    "word": "insert",
    "pos": "v.",
    "meaning": "끼워넣다",
    "level": "high"
  },
  {
    "word": "inside",
    "pos": "n.",
    "meaning": "안쪽",
    "level": "high"
  },
  {
    "word": "insight",
    "pos": "n.",
    "meaning": "통찰(력)",
    "level": "high"
  },
  {
    "word": "insist",
    "pos": "v.",
    "meaning": "주장하다",
    "level": "high"
  },
  {
    "word": "inspect",
    "pos": "v.",
    "meaning": "검사하다",
    "level": "high"
  },
  {
    "word": "inspire",
    "pos": "v.",
    "meaning": "영감을 주다",
    "level": "high"
  },
  {
    "word": "install",
    "pos": "v.",
    "meaning": "설치하다",
    "level": "high"
  },
  {
    "word": "instance",
    "pos": "n.",
    "meaning": "실례",
    "level": "high"
  },
  {
    "word": "instant",
    "pos": "a.",
    "meaning": "즉시의",
    "level": "high"
  },
  {
    "word": "instead",
    "pos": "n.",
    "meaning": "그 대신에",
    "level": "high"
  },
  {
    "word": "instinct",
    "pos": "n.",
    "meaning": "본능",
    "level": "high"
  },
  {
    "word": "institute",
    "pos": "v.",
    "meaning": "만들다",
    "level": "high"
  },
  {
    "word": "instruct",
    "pos": "v.",
    "meaning": "가르치다",
    "level": "high"
  },
  {
    "word": "instrument",
    "pos": "n.",
    "meaning": "기구",
    "level": "high"
  },
  {
    "word": "insult",
    "pos": "v.",
    "meaning": "모욕하다",
    "level": "high"
  },
  {
    "word": "insure",
    "pos": "v.",
    "meaning": "보증하다",
    "level": "high"
  },
  {
    "word": "integrate",
    "pos": "v.",
    "meaning": "통합하다",
    "level": "high"
  },
  {
    "word": "intellectual",
    "pos": "a.",
    "meaning": "지적인",
    "level": "high"
  },
  {
    "word": "intelligent",
    "pos": "a.",
    "meaning": "지적인",
    "level": "high"
  },
  {
    "word": "intend",
    "pos": "v.",
    "meaning": "-할 작정이다",
    "level": "high"
  },
  {
    "word": "intense",
    "pos": "a.",
    "meaning": "강렬한",
    "level": "high"
  },
  {
    "word": "intent",
    "pos": "n.",
    "meaning": "의향",
    "level": "high"
  },
  {
    "word": "interact",
    "pos": "v.",
    "meaning": "서로 작용하다",
    "level": "high"
  },
  {
    "word": "interest",
    "pos": "n.",
    "meaning": "흥미",
    "level": "high"
  },
  {
    "word": "interfere",
    "pos": "v.",
    "meaning": "간섭하다",
    "level": "high"
  },
  {
    "word": "intermediate",
    "pos": "n.",
    "meaning": "중간의 중간물",
    "level": "high"
  },
  {
    "word": "internal",
    "pos": "a.",
    "meaning": "내부의",
    "level": "high"
  },
  {
    "word": "international",
    "pos": "a.",
    "meaning": "국제적인",
    "level": "high"
  },
  {
    "word": "interpret",
    "pos": "v.",
    "meaning": "해석하다",
    "level": "high"
  },
  {
    "word": "interrupt",
    "pos": "v.",
    "meaning": "훼방놓다",
    "level": "high"
  },
  {
    "word": "interval",
    "pos": "n.",
    "meaning": "간격",
    "level": "high"
  },
  {
    "word": "intervene",
    "pos": "v.",
    "meaning": "사이에 들다",
    "level": "high"
  },
  {
    "word": "intimate",
    "pos": "a.",
    "meaning": "친밀한",
    "level": "high"
  },
  {
    "word": "into",
    "pos": "ad.",
    "meaning": "-안으로",
    "level": "high"
  },
  {
    "word": "intrigue",
    "pos": "n.",
    "meaning": "음모",
    "level": "high"
  },
  {
    "word": "introduce",
    "pos": "v.",
    "meaning": "안으로 들이다",
    "level": "high"
  },
  {
    "word": "invade",
    "pos": "v.",
    "meaning": "침입하다",
    "level": "high"
  },
  {
    "word": "invent",
    "pos": "v.",
    "meaning": "발명하다",
    "level": "high"
  },
  {
    "word": "invest",
    "pos": "v.",
    "meaning": "투자하다",
    "level": "high"
  },
  {
    "word": "investigate",
    "pos": "v.",
    "meaning": "조사하다",
    "level": "high"
  },
  {
    "word": "invite",
    "pos": "v.",
    "meaning": "초대하다",
    "level": "high"
  },
  {
    "word": "involve",
    "pos": "v.",
    "meaning": "말아넣다",
    "level": "high"
  },
  {
    "word": "iron",
    "pos": "n.",
    "meaning": "쇠",
    "level": "high"
  },
  {
    "word": "irony",
    "pos": "n.",
    "meaning": "반어",
    "level": "high"
  },
  {
    "word": "irritate",
    "pos": "v.",
    "meaning": "노하게 하다",
    "level": "high"
  },
  {
    "word": "island",
    "pos": "n.",
    "meaning": "섬",
    "level": "high"
  },
  {
    "word": "isolate",
    "pos": "v.",
    "meaning": "고립시키다",
    "level": "high"
  },
  {
    "word": "it",
    "pos": "n.",
    "meaning": "그것은",
    "level": "high"
  },
  {
    "word": "item",
    "pos": "n.",
    "meaning": "조항",
    "level": "high"
  },
  {
    "word": "jail",
    "pos": "n.",
    "meaning": "교도소",
    "level": "high"
  },
  {
    "word": "jar",
    "pos": "n.",
    "meaning": "(아가리가 넓은)항아리",
    "level": "high"
  },
  {
    "word": "jaw",
    "pos": "n.",
    "meaning": "턱",
    "level": "high"
  },
  {
    "word": "jeans",
    "pos": "n.",
    "meaning": "청바지",
    "level": "high"
  },
  {
    "word": "jet",
    "pos": "n.",
    "meaning": "(가스등의)분출",
    "level": "high"
  },
  {
    "word": "job",
    "pos": "n.",
    "meaning": "일",
    "level": "high"
  },
  {
    "word": "jog",
    "pos": "v.",
    "meaning": "살짝 밀다 덜커덕 움직이다 고르지 않음",
    "level": "high"
  },
  {
    "word": "join",
    "pos": "v.",
    "meaning": "결합하다",
    "level": "high"
  },
  {
    "word": "joint",
    "pos": "n.",
    "meaning": "이음매",
    "level": "high"
  },
  {
    "word": "joke",
    "pos": "n.",
    "meaning": "농담",
    "level": "high"
  },
  {
    "word": "journal",
    "pos": "n.",
    "meaning": "일간신문",
    "level": "high"
  },
  {
    "word": "journey",
    "pos": "n.",
    "meaning": "여행",
    "level": "high"
  },
  {
    "word": "joy",
    "pos": "n.",
    "meaning": "즐거움",
    "level": "high"
  },
  {
    "word": "judge",
    "pos": "n.",
    "meaning": "재판관",
    "level": "high"
  },
  {
    "word": "judicial",
    "pos": "a.",
    "meaning": "사법의",
    "level": "high"
  },
  {
    "word": "junior",
    "pos": "n.",
    "meaning": "손아래사람",
    "level": "high"
  },
  {
    "word": "jury",
    "pos": "n.",
    "meaning": "배심",
    "level": "high"
  },
  {
    "word": "just",
    "pos": "n.",
    "meaning": "올바른",
    "level": "high"
  },
  {
    "word": "justice",
    "pos": "a.",
    "meaning": "정의",
    "level": "high"
  },
  {
    "word": "justify",
    "pos": "v.",
    "meaning": "옳다고 하다",
    "level": "high"
  },
  {
    "word": "keen",
    "pos": "a.",
    "meaning": "날카로운",
    "level": "high"
  },
  {
    "word": "keep",
    "pos": "v.",
    "meaning": "계속하다",
    "level": "high"
  },
  {
    "word": "key",
    "pos": "n.",
    "meaning": "열쇠",
    "level": "high"
  },
  {
    "word": "kick",
    "pos": "v.",
    "meaning": "걷어차다",
    "level": "high"
  },
  {
    "word": "kid",
    "pos": "n.",
    "meaning": "아이",
    "level": "high"
  },
  {
    "word": "kill",
    "pos": "v.",
    "meaning": "죽이다",
    "level": "high"
  },
  {
    "word": "kind",
    "pos": "a.",
    "meaning": "친절한",
    "level": "high"
  },
  {
    "word": "king",
    "pos": "n.",
    "meaning": "왕",
    "level": "high"
  },
  {
    "word": "kit",
    "pos": "n.",
    "meaning": "연장통",
    "level": "high"
  },
  {
    "word": "kitchen",
    "pos": "n.",
    "meaning": "부엌",
    "level": "high"
  },
  {
    "word": "knee",
    "pos": "n.",
    "meaning": "무릎",
    "level": "high"
  },
  {
    "word": "knife",
    "pos": "n.",
    "meaning": "나이프",
    "level": "high"
  },
  {
    "word": "knight",
    "pos": "n.",
    "meaning": "(중세의)기사",
    "level": "high"
  },
  {
    "word": "knock",
    "pos": "v.",
    "meaning": "치다",
    "level": "high"
  },
  {
    "word": "knot",
    "pos": "n.",
    "meaning": "매듭(=tie)",
    "level": "high"
  },
  {
    "word": "know",
    "pos": "v.",
    "meaning": "알다",
    "level": "high"
  },
  {
    "word": "label",
    "pos": "n.",
    "meaning": "라벨",
    "level": "high"
  },
  {
    "word": "labor",
    "pos": "n.",
    "meaning": "노동",
    "level": "high"
  },
  {
    "word": "laboratory",
    "pos": "n.",
    "meaning": "실험실",
    "level": "high"
  },
  {
    "word": "lack",
    "pos": "n.",
    "meaning": "결핍",
    "level": "high"
  },
  {
    "word": "ladder",
    "pos": "n.",
    "meaning": "사닥다리",
    "level": "high"
  },
  {
    "word": "lady",
    "pos": "a.",
    "meaning": "귀부인",
    "level": "high"
  },
  {
    "word": "lake",
    "pos": "n.",
    "meaning": "호수",
    "level": "high"
  },
  {
    "word": "lamb",
    "pos": "n.",
    "meaning": "어린 양",
    "level": "high"
  },
  {
    "word": "lamp",
    "pos": "n.",
    "meaning": "등",
    "level": "high"
  },
  {
    "word": "land",
    "pos": "n.",
    "meaning": "뭍",
    "level": "high"
  },
  {
    "word": "landscape",
    "pos": "n.",
    "meaning": "풍경",
    "level": "high"
  },
  {
    "word": "lane",
    "pos": "n.",
    "meaning": "좁은길",
    "level": "high"
  },
  {
    "word": "language",
    "pos": "n.",
    "meaning": "언어",
    "level": "high"
  },
  {
    "word": "lap",
    "pos": "n.",
    "meaning": "무릎",
    "level": "high"
  },
  {
    "word": "large",
    "pos": "n.",
    "meaning": "큰",
    "level": "high"
  },
  {
    "word": "last",
    "pos": "v.",
    "meaning": "계속하다",
    "level": "high"
  },
  {
    "word": "late",
    "pos": "n.",
    "meaning": "늦은",
    "level": "high"
  },
  {
    "word": "latter",
    "pos": "a.",
    "meaning": "뒤쪽의",
    "level": "high"
  },
  {
    "word": "laugh",
    "pos": "v.",
    "meaning": "(소리내어)웃다",
    "level": "high"
  },
  {
    "word": "launch",
    "pos": "v.",
    "meaning": "진수시키다",
    "level": "high"
  },
  {
    "word": "laundry",
    "pos": "n.",
    "meaning": "세탁물",
    "level": "high"
  },
  {
    "word": "law",
    "pos": "n.",
    "meaning": "법률",
    "level": "high"
  },
  {
    "word": "lawn",
    "pos": "n.",
    "meaning": "잔디밭",
    "level": "high"
  },
  {
    "word": "lawyer",
    "pos": "n.",
    "meaning": "법률가",
    "level": "high"
  },
  {
    "word": "lay",
    "pos": "v.",
    "meaning": "눕히다",
    "level": "high"
  },
  {
    "word": "layer",
    "pos": "n.",
    "meaning": "층",
    "level": "high"
  },
  {
    "word": "lazy",
    "pos": "n.",
    "meaning": "게으른",
    "level": "high"
  },
  {
    "word": "lead",
    "pos": "v.",
    "meaning": "이끌다",
    "level": "high"
  },
  {
    "word": "leaf",
    "pos": "n.",
    "meaning": "잎",
    "level": "high"
  },
  {
    "word": "leak",
    "pos": "n.",
    "meaning": "샘",
    "level": "high"
  },
  {
    "word": "lean",
    "pos": "v.",
    "meaning": "기대다",
    "level": "high"
  },
  {
    "word": "leap",
    "pos": "v.",
    "meaning": "껑충 뛰다",
    "level": "high"
  },
  {
    "word": "learn",
    "pos": "v.",
    "meaning": "배우다",
    "level": "high"
  },
  {
    "word": "lease",
    "pos": "n.",
    "meaning": "임대차",
    "level": "high"
  },
  {
    "word": "leather",
    "pos": "n.",
    "meaning": "무두질한 가죽",
    "level": "high"
  },
  {
    "word": "leave",
    "pos": "v.",
    "meaning": "남기고가다",
    "level": "high"
  },
  {
    "word": "lecture",
    "pos": "a.",
    "meaning": "강의",
    "level": "high"
  },
  {
    "word": "left",
    "pos": "a.",
    "meaning": "왼쪽의",
    "level": "high"
  },
  {
    "word": "leg",
    "pos": "n.",
    "meaning": "다리",
    "level": "high"
  },
  {
    "word": "legal",
    "pos": "a.",
    "meaning": "법률상의",
    "level": "high"
  },
  {
    "word": "legend",
    "pos": "n.",
    "meaning": "전설",
    "level": "high"
  },
  {
    "word": "legislate",
    "pos": "v.",
    "meaning": "법률을 제정하다",
    "level": "high"
  },
  {
    "word": "legitimate",
    "pos": "a.",
    "meaning": "합법의",
    "level": "high"
  },
  {
    "word": "leisure",
    "pos": "n.",
    "meaning": "틈",
    "level": "high"
  },
  {
    "word": "lend",
    "pos": "v.",
    "meaning": "빌리다",
    "level": "high"
  },
  {
    "word": "lesson",
    "pos": "n.",
    "meaning": "학과",
    "level": "high"
  },
  {
    "word": "let",
    "pos": "v.",
    "meaning": "시키다",
    "level": "high"
  },
  {
    "word": "letter",
    "pos": "n.",
    "meaning": "편지",
    "level": "high"
  },
  {
    "word": "level",
    "pos": "a.",
    "meaning": "수평의",
    "level": "high"
  },
  {
    "word": "liberal",
    "pos": "a.",
    "meaning": "자유주의의",
    "level": "high"
  },
  {
    "word": "liberty",
    "pos": "n.",
    "meaning": "자유",
    "level": "high"
  },
  {
    "word": "library",
    "pos": "n.",
    "meaning": "도서관",
    "level": "high"
  },
  {
    "word": "license",
    "pos": "n.",
    "meaning": "면허",
    "level": "high"
  },
  {
    "word": "lid",
    "pos": "n.",
    "meaning": "뚜껑",
    "level": "high"
  },
  {
    "word": "lie",
    "pos": "v.",
    "meaning": "눕다",
    "level": "high"
  },
  {
    "word": "lift",
    "pos": "v.",
    "meaning": "끌어올리다",
    "level": "high"
  },
  {
    "word": "light",
    "pos": "n.",
    "meaning": "빛",
    "level": "high"
  },
  {
    "word": "like",
    "pos": "v.",
    "meaning": "좋아하다",
    "level": "high"
  },
  {
    "word": "likely",
    "pos": "a.",
    "meaning": "있을 법한",
    "level": "high"
  },
  {
    "word": "likewise",
    "pos": "ad.",
    "meaning": "같이, 마찬가지로",
    "level": "high"
  },
  {
    "word": "limit",
    "pos": "n.",
    "meaning": "한계",
    "level": "high"
  },
  {
    "word": "line",
    "pos": "n.",
    "meaning": "선",
    "level": "high"
  },
  {
    "word": "linguistic",
    "pos": "a.",
    "meaning": "말의",
    "level": "high"
  },
  {
    "word": "link",
    "pos": "n.",
    "meaning": "사슬의 고리",
    "level": "high"
  },
  {
    "word": "lion",
    "pos": "n.",
    "meaning": "사자",
    "level": "high"
  },
  {
    "word": "lip",
    "pos": "n.",
    "meaning": "입술",
    "level": "high"
  },
  {
    "word": "liquid",
    "pos": "n.",
    "meaning": "액체",
    "level": "high"
  },
  {
    "word": "list",
    "pos": "n.",
    "meaning": "일람표",
    "level": "high"
  },
  {
    "word": "listen",
    "pos": "v.",
    "meaning": "경청하다",
    "level": "high"
  },
  {
    "word": "literal",
    "pos": "a.",
    "meaning": "문자의",
    "level": "high"
  },
  {
    "word": "literature",
    "pos": "n.",
    "meaning": "문학",
    "level": "high"
  },
  {
    "word": "little",
    "pos": "n.",
    "meaning": "작은",
    "level": "high"
  },
  {
    "word": "live",
    "pos": "v.",
    "meaning": "살다",
    "level": "high"
  },
  {
    "word": "livingroom",
    "pos": "n.",
    "meaning": "거실",
    "level": "high"
  },
  {
    "word": "load",
    "pos": "n.",
    "meaning": "짐",
    "level": "high"
  },
  {
    "word": "loan",
    "pos": "n.",
    "meaning": "대부",
    "level": "high"
  },
  {
    "word": "local",
    "pos": "a.",
    "meaning": "장소의",
    "level": "high"
  },
  {
    "word": "locate",
    "pos": "v.",
    "meaning": "관청 등을 두다",
    "level": "high"
  },
  {
    "word": "lock",
    "pos": "n.",
    "meaning": "자물쇠",
    "level": "high"
  },
  {
    "word": "log",
    "pos": "n.",
    "meaning": "통나무",
    "level": "high"
  },
  {
    "word": "logic",
    "pos": "n.",
    "meaning": "논리학",
    "level": "high"
  },
  {
    "word": "lone",
    "pos": "a.",
    "meaning": "혼자의",
    "level": "high"
  },
  {
    "word": "long",
    "pos": "n.",
    "meaning": "(길이,시간 등)긴",
    "level": "high"
  },
  {
    "word": "look",
    "pos": "v.",
    "meaning": "보다",
    "level": "high"
  },
  {
    "word": "loose",
    "pos": "n.",
    "meaning": "풀어진",
    "level": "high"
  },
  {
    "word": "lose",
    "pos": "v.",
    "meaning": "잃다",
    "level": "high"
  },
  {
    "word": "loss",
    "pos": "n.",
    "meaning": "잃음",
    "level": "high"
  },
  {
    "word": "lot",
    "pos": "n.",
    "meaning": "제비",
    "level": "high"
  },
  {
    "word": "loud",
    "pos": "n.",
    "meaning": "시끄러운",
    "level": "high"
  },
  {
    "word": "lounge",
    "pos": "v.",
    "meaning": "빈둥거리다",
    "level": "high"
  },
  {
    "word": "love",
    "pos": "n.",
    "meaning": "사랑",
    "level": "high"
  },
  {
    "word": "low",
    "pos": "n.",
    "meaning": "낮은",
    "level": "high"
  },
  {
    "word": "loyal",
    "pos": "n.",
    "meaning": "충성스러운",
    "level": "high"
  },
  {
    "word": "luck",
    "pos": "n.",
    "meaning": "운",
    "level": "high"
  },
  {
    "word": "lump",
    "pos": "n.",
    "meaning": "덩어리",
    "level": "high"
  },
  {
    "word": "lunch",
    "pos": "n.",
    "meaning": "점심",
    "level": "high"
  },
  {
    "word": "luxury",
    "pos": "n.",
    "meaning": "사치",
    "level": "high"
  },
  {
    "word": "machine",
    "pos": "n.",
    "meaning": "기계",
    "level": "high"
  },
  {
    "word": "mad",
    "pos": "n.",
    "meaning": "미친",
    "level": "high"
  },
  {
    "word": "magazine",
    "pos": "n.",
    "meaning": "잡지",
    "level": "high"
  },
  {
    "word": "magnet",
    "pos": "n.",
    "meaning": "자석",
    "level": "high"
  },
  {
    "word": "magnificent",
    "pos": "a.",
    "meaning": "장대한",
    "level": "high"
  },
  {
    "word": "mail",
    "pos": "n.",
    "meaning": "우편물",
    "level": "high"
  },
  {
    "word": "main",
    "pos": "a.",
    "meaning": "주요한",
    "level": "high"
  },
  {
    "word": "maintain",
    "pos": "v.",
    "meaning": "계속하다",
    "level": "high"
  },
  {
    "word": "major",
    "pos": "a.",
    "meaning": "큰쪽의",
    "level": "high"
  },
  {
    "word": "majority",
    "pos": "n.",
    "meaning": "대다수",
    "level": "high"
  },
  {
    "word": "make",
    "pos": "v.",
    "meaning": "만들다",
    "level": "high"
  },
  {
    "word": "male",
    "pos": "a.",
    "meaning": "남성의",
    "level": "high"
  },
  {
    "word": "man",
    "pos": "n.",
    "meaning": "남자",
    "level": "high"
  },
  {
    "word": "manage",
    "pos": "v.",
    "meaning": "관리하다",
    "level": "high"
  },
  {
    "word": "manifest",
    "pos": "v.",
    "meaning": "명백히 하다",
    "level": "high"
  },
  {
    "word": "manipulate",
    "pos": "v.",
    "meaning": "(손으로)다루다",
    "level": "high"
  },
  {
    "word": "manner",
    "pos": "n.",
    "meaning": "방법",
    "level": "high"
  },
  {
    "word": "manufacture",
    "pos": "v.",
    "meaning": "제조하다",
    "level": "high"
  },
  {
    "word": "many",
    "pos": "n.",
    "meaning": "많은",
    "level": "high"
  },
  {
    "word": "map",
    "pos": "n.",
    "meaning": "지도",
    "level": "high"
  },
  {
    "word": "margin",
    "pos": "n.",
    "meaning": "가장자리",
    "level": "high"
  },
  {
    "word": "marine",
    "pos": "a.",
    "meaning": "바다의",
    "level": "high"
  },
  {
    "word": "mark",
    "pos": "n.",
    "meaning": "표",
    "level": "high"
  },
  {
    "word": "marry",
    "pos": "v.",
    "meaning": "결혼하다",
    "level": "high"
  },
  {
    "word": "marvel",
    "pos": "n.",
    "meaning": "경이",
    "level": "high"
  },
  {
    "word": "mass",
    "pos": "n.",
    "meaning": "덩어리",
    "level": "high"
  },
  {
    "word": "master",
    "pos": "n.",
    "meaning": "장",
    "level": "high"
  },
  {
    "word": "match",
    "pos": "n.",
    "meaning": "성냥",
    "level": "high"
  },
  {
    "word": "mate",
    "pos": "n.",
    "meaning": "상대",
    "level": "high"
  },
  {
    "word": "material",
    "pos": "n.",
    "meaning": "원료",
    "level": "high"
  },
  {
    "word": "mathematics",
    "pos": "n.",
    "meaning": "수학",
    "level": "high"
  },
  {
    "word": "matter",
    "pos": "n.",
    "meaning": "물질",
    "level": "high"
  },
  {
    "word": "mature",
    "pos": "n.",
    "meaning": "익은",
    "level": "high"
  },
  {
    "word": "maximum",
    "pos": "n.",
    "meaning": "최고점",
    "level": "high"
  },
  {
    "word": "may",
    "pos": "n.",
    "meaning": "5 월 청춘, 인생의 봄 산사나무, 아가위나무",
    "level": "high"
  },
  {
    "word": "maybe",
    "pos": "n.",
    "meaning": "아마",
    "level": "high"
  },
  {
    "word": "mayor",
    "pos": "n.",
    "meaning": "시장",
    "level": "high"
  },
  {
    "word": "meal",
    "pos": "n.",
    "meaning": "식사",
    "level": "high"
  },
  {
    "word": "mean",
    "pos": "v.",
    "meaning": "의미하다",
    "level": "high"
  },
  {
    "word": "meantime",
    "pos": "n.",
    "meaning": "그동안 그 사이에",
    "level": "high"
  },
  {
    "word": "meanwhile",
    "pos": "n.",
    "meaning": "그동안",
    "level": "high"
  },
  {
    "word": "measure",
    "pos": "v.",
    "meaning": "재다",
    "level": "high"
  },
  {
    "word": "meat",
    "pos": "n.",
    "meaning": "(식용짐승의)고기",
    "level": "high"
  },
  {
    "word": "mechanic",
    "pos": "n.",
    "meaning": "직공",
    "level": "high"
  },
  {
    "word": "mechanism",
    "pos": "n.",
    "meaning": "(기계)장치",
    "level": "high"
  },
  {
    "word": "mediate",
    "pos": "v.",
    "meaning": "중재하다",
    "level": "high"
  },
  {
    "word": "medical",
    "pos": "a.",
    "meaning": "의학의",
    "level": "high"
  },
  {
    "word": "medicine",
    "pos": "n.",
    "meaning": "약",
    "level": "high"
  },
  {
    "word": "medieval",
    "pos": "a.",
    "meaning": "중세(풍)의",
    "level": "high"
  },
  {
    "word": "medium",
    "pos": "n.",
    "meaning": "중간",
    "level": "high"
  },
  {
    "word": "meet",
    "pos": "v.",
    "meaning": "-을 만나다",
    "level": "high"
  },
  {
    "word": "melt",
    "pos": "v.",
    "meaning": "녹다",
    "level": "high"
  },
  {
    "word": "memory",
    "pos": "n.",
    "meaning": "기억",
    "level": "high"
  },
  {
    "word": "mental",
    "pos": "a.",
    "meaning": "마음의",
    "level": "high"
  },
  {
    "word": "mention",
    "pos": "v.",
    "meaning": "말하다",
    "level": "high"
  },
  {
    "word": "merchant",
    "pos": "a.",
    "meaning": "상인",
    "level": "high"
  },
  {
    "word": "merge",
    "pos": "v.",
    "meaning": "합병하다",
    "level": "high"
  },
  {
    "word": "merit",
    "pos": "n.",
    "meaning": "장점",
    "level": "high"
  },
  {
    "word": "mess",
    "pos": "n.",
    "meaning": "혼란",
    "level": "high"
  },
  {
    "word": "metal",
    "pos": "n.",
    "meaning": "금속",
    "level": "high"
  },
  {
    "word": "method",
    "pos": "n.",
    "meaning": "방법",
    "level": "high"
  },
  {
    "word": "metropolitan",
    "pos": "n.",
    "meaning": "수도권(의)",
    "level": "high"
  },
  {
    "word": "microphone",
    "pos": "n.",
    "meaning": "확성기",
    "level": "high"
  },
  {
    "word": "microwave",
    "pos": "v.",
    "meaning": "극초단파 전자레인지로 요리하다",
    "level": "high"
  },
  {
    "word": "middle",
    "pos": "a.",
    "meaning": "한복판의",
    "level": "high"
  },
  {
    "word": "might",
    "pos": "n.",
    "meaning": "힘",
    "level": "high"
  },
  {
    "word": "migrate",
    "pos": "v.",
    "meaning": "이주하다",
    "level": "high"
  },
  {
    "word": "mild",
    "pos": "a.",
    "meaning": "온후한",
    "level": "high"
  },
  {
    "word": "military",
    "pos": "a.",
    "meaning": "군의",
    "level": "high"
  },
  {
    "word": "milk",
    "pos": "n.",
    "meaning": "젖",
    "level": "high"
  },
  {
    "word": "mill",
    "pos": "n.",
    "meaning": "멧돌",
    "level": "high"
  },
  {
    "word": "million",
    "pos": "n.",
    "meaning": "백만",
    "level": "high"
  },
  {
    "word": "mind",
    "pos": "n.",
    "meaning": "마음",
    "level": "high"
  },
  {
    "word": "miner",
    "pos": "n.",
    "meaning": "광산업자",
    "level": "high"
  },
  {
    "word": "mineral",
    "pos": "n.",
    "meaning": "광물",
    "level": "high"
  },
  {
    "word": "minimal",
    "pos": "a.",
    "meaning": "최소(한도)의",
    "level": "high"
  },
  {
    "word": "minimum",
    "pos": "n.",
    "meaning": "최소 한도",
    "level": "high"
  },
  {
    "word": "ministry",
    "pos": "n.",
    "meaning": "장관(목사)의 직(소임)",
    "level": "high"
  },
  {
    "word": "minor",
    "pos": "a.",
    "meaning": "작은 편의",
    "level": "high"
  },
  {
    "word": "minute",
    "pos": "n.",
    "meaning": "분",
    "level": "high"
  },
  {
    "word": "miracle",
    "pos": "a.",
    "meaning": "기적",
    "level": "high"
  },
  {
    "word": "mirror",
    "pos": "n.",
    "meaning": "거울",
    "level": "high"
  },
  {
    "word": "miss",
    "pos": "v.",
    "meaning": "미혼 여성 실수하다",
    "level": "high"
  },
  {
    "word": "missile",
    "pos": "n.",
    "meaning": "미사일",
    "level": "high"
  },
  {
    "word": "mission",
    "pos": "n.",
    "meaning": "사명",
    "level": "high"
  },
  {
    "word": "mistake",
    "pos": "v.",
    "meaning": "틀리다",
    "level": "high"
  },
  {
    "word": "mix",
    "pos": "v.",
    "meaning": "섞다",
    "level": "high"
  },
  {
    "word": "mobile",
    "pos": "n.",
    "meaning": "움직이기 쉬운",
    "level": "high"
  },
  {
    "word": "mock",
    "pos": "v.",
    "meaning": "조롱하다",
    "level": "high"
  },
  {
    "word": "mode",
    "pos": "n.",
    "meaning": "방법",
    "level": "high"
  },
  {
    "word": "moderate",
    "pos": "a.",
    "meaning": "절제하는",
    "level": "high"
  },
  {
    "word": "modern",
    "pos": "a.",
    "meaning": "현대의",
    "level": "high"
  },
  {
    "word": "modest",
    "pos": "a.",
    "meaning": "겸손한",
    "level": "high"
  },
  {
    "word": "modify",
    "pos": "v.",
    "meaning": "변경하다",
    "level": "high"
  },
  {
    "word": "moisture",
    "pos": "n.",
    "meaning": "습기",
    "level": "high"
  },
  {
    "word": "molecule",
    "pos": "n.",
    "meaning": "분자",
    "level": "high"
  },
  {
    "word": "moment",
    "pos": "n.",
    "meaning": "순간",
    "level": "high"
  },
  {
    "word": "money",
    "pos": "n.",
    "meaning": "금전",
    "level": "high"
  },
  {
    "word": "monitor",
    "pos": "n.",
    "meaning": "충고자",
    "level": "high"
  },
  {
    "word": "monkey",
    "pos": "n.",
    "meaning": "원숭이",
    "level": "high"
  },
  {
    "word": "monster",
    "pos": "n.",
    "meaning": "괴물",
    "level": "high"
  },
  {
    "word": "month",
    "pos": "n.",
    "meaning": "월",
    "level": "high"
  },
  {
    "word": "monument",
    "pos": "n.",
    "meaning": "기념비",
    "level": "high"
  },
  {
    "word": "mood",
    "pos": "n.",
    "meaning": "(일시적인)기분",
    "level": "high"
  },
  {
    "word": "moon",
    "pos": "n.",
    "meaning": "달",
    "level": "high"
  },
  {
    "word": "moral",
    "pos": "a.",
    "meaning": "도덕의",
    "level": "high"
  },
  {
    "word": "moreover",
    "pos": "n.",
    "meaning": "그 위에",
    "level": "high"
  },
  {
    "word": "morning",
    "pos": "n.",
    "meaning": "아침",
    "level": "high"
  },
  {
    "word": "mortal",
    "pos": "a.",
    "meaning": "죽을운명의",
    "level": "high"
  },
  {
    "word": "mother",
    "pos": "n.",
    "meaning": "어머니",
    "level": "high"
  },
  {
    "word": "motion",
    "pos": "n.",
    "meaning": "운동",
    "level": "high"
  },
  {
    "word": "motive",
    "pos": "n.",
    "meaning": "동기",
    "level": "high"
  },
  {
    "word": "mount",
    "pos": "n.",
    "meaning": "산",
    "level": "high"
  },
  {
    "word": "mountain",
    "pos": "n.",
    "meaning": "산",
    "level": "high"
  },
  {
    "word": "mouse",
    "pos": "n.",
    "meaning": "새앙쥐",
    "level": "high"
  },
  {
    "word": "mouth",
    "pos": "n.",
    "meaning": "입",
    "level": "high"
  },
  {
    "word": "move",
    "pos": "v.",
    "meaning": "움직이다",
    "level": "high"
  },
  {
    "word": "movie",
    "pos": "n.",
    "meaning": "영화",
    "level": "high"
  },
  {
    "word": "much",
    "pos": "n.",
    "meaning": "많은",
    "level": "high"
  },
  {
    "word": "mud",
    "pos": "n.",
    "meaning": "진흙",
    "level": "high"
  },
  {
    "word": "multiple",
    "pos": "a.",
    "meaning": "복합의",
    "level": "high"
  },
  {
    "word": "multiply",
    "pos": "v.",
    "meaning": "늘리다",
    "level": "high"
  },
  {
    "word": "murder",
    "pos": "a.",
    "meaning": "살인",
    "level": "high"
  },
  {
    "word": "muscle",
    "pos": "n.",
    "meaning": "근육",
    "level": "high"
  },
  {
    "word": "museum",
    "pos": "n.",
    "meaning": "박물관",
    "level": "high"
  },
  {
    "word": "mushroom",
    "pos": "n.",
    "meaning": "버섯",
    "level": "high"
  },
  {
    "word": "music",
    "pos": "n.",
    "meaning": "음악",
    "level": "high"
  },
  {
    "word": "must",
    "pos": "v.",
    "meaning": "-해야 한다",
    "level": "high"
  },
  {
    "word": "mutual",
    "pos": "a.",
    "meaning": "상호의",
    "level": "high"
  },
  {
    "word": "myth",
    "pos": "n.",
    "meaning": "신화",
    "level": "high"
  },
  {
    "word": "nail",
    "pos": "n.",
    "meaning": "손톱",
    "level": "high"
  },
  {
    "word": "naive",
    "pos": "a.",
    "meaning": "소박한",
    "level": "high"
  },
  {
    "word": "naked",
    "pos": "n.",
    "meaning": "발가벗은",
    "level": "high"
  },
  {
    "word": "name",
    "pos": "n.",
    "meaning": "이름",
    "level": "high"
  },
  {
    "word": "nanny",
    "pos": "n.",
    "meaning": "유모",
    "level": "high"
  },
  {
    "word": "narrate",
    "pos": "v.",
    "meaning": "이야기하다",
    "level": "high"
  },
  {
    "word": "narrow",
    "pos": "n.",
    "meaning": "좁은",
    "level": "high"
  },
  {
    "word": "nasty",
    "pos": "a.",
    "meaning": "불쾌한",
    "level": "high"
  },
  {
    "word": "nation",
    "pos": "n.",
    "meaning": "국가",
    "level": "high"
  },
  {
    "word": "native",
    "pos": "n.",
    "meaning": "타고난",
    "level": "high"
  },
  {
    "word": "nature",
    "pos": "n.",
    "meaning": "자연",
    "level": "high"
  },
  {
    "word": "navy",
    "pos": "n.",
    "meaning": "해군(력)",
    "level": "high"
  },
  {
    "word": "near",
    "pos": "v.",
    "meaning": "가까이 -의 가까이에 가까운 접근하다",
    "level": "high"
  },
  {
    "word": "neat",
    "pos": "a.",
    "meaning": "산뜻한",
    "level": "high"
  },
  {
    "word": "necessary",
    "pos": "a.",
    "meaning": "필요한",
    "level": "high"
  },
  {
    "word": "neck",
    "pos": "n.",
    "meaning": "목",
    "level": "high"
  },
  {
    "word": "need",
    "pos": "n.",
    "meaning": "필요",
    "level": "high"
  },
  {
    "word": "needle",
    "pos": "v.",
    "meaning": "바늘 바늘로 꿰매다 바느질하다 아슬아슬한",
    "level": "high"
  },
  {
    "word": "negative",
    "pos": "a.",
    "meaning": "부정적인",
    "level": "high"
  },
  {
    "word": "neglect",
    "pos": "v.",
    "meaning": "게을리 하다",
    "level": "high"
  },
  {
    "word": "negotiate",
    "pos": "v.",
    "meaning": "교섭하다",
    "level": "high"
  },
  {
    "word": "neighbor",
    "pos": "n.",
    "meaning": "이웃사람(나라)",
    "level": "high"
  },
  {
    "word": "neither",
    "pos": "v.",
    "meaning": "(둘중)어느쪽도 -아니다 -도 아니다",
    "level": "high"
  },
  {
    "word": "nephew",
    "pos": "n.",
    "meaning": "조카",
    "level": "high"
  },
  {
    "word": "nervous",
    "pos": "a.",
    "meaning": "신경의",
    "level": "high"
  },
  {
    "word": "nest",
    "pos": "n.",
    "meaning": "보금자리",
    "level": "high"
  },
  {
    "word": "net",
    "pos": "n.",
    "meaning": "그물",
    "level": "high"
  },
  {
    "word": "network",
    "pos": "n.",
    "meaning": "그물세공",
    "level": "high"
  },
  {
    "word": "neutral",
    "pos": "a.",
    "meaning": "중립의",
    "level": "high"
  },
  {
    "word": "never",
    "pos": "v.",
    "meaning": "결코 -아니다",
    "level": "high"
  },
  {
    "word": "nevertheless",
    "pos": "n.",
    "meaning": "그럼에도 불구하고",
    "level": "high"
  },
  {
    "word": "new",
    "pos": "a.",
    "meaning": "새로운",
    "level": "high"
  },
  {
    "word": "newspaper",
    "pos": "n.",
    "meaning": "신문",
    "level": "high"
  },
  {
    "word": "next",
    "pos": "a.",
    "meaning": "다음의",
    "level": "high"
  },
  {
    "word": "nice",
    "pos": "n.",
    "meaning": "니스(프랑스 남부의 항구도시)",
    "level": "high"
  },
  {
    "word": "night",
    "pos": "n.",
    "meaning": "밤",
    "level": "high"
  },
  {
    "word": "nightmare",
    "pos": "n.",
    "meaning": "악몽",
    "level": "high"
  },
  {
    "word": "no",
    "pos": "a.",
    "meaning": "무의",
    "level": "high"
  },
  {
    "word": "noble",
    "pos": "a.",
    "meaning": "고귀한",
    "level": "high"
  },
  {
    "word": "nobody",
    "pos": "v.",
    "meaning": "아무도 -않다 하찮은 사람",
    "level": "high"
  },
  {
    "word": "nod",
    "pos": "v.",
    "meaning": "끄덕이다",
    "level": "high"
  },
  {
    "word": "noise",
    "pos": "n.",
    "meaning": "소리",
    "level": "high"
  },
  {
    "word": "nominate",
    "pos": "v.",
    "meaning": "추천하다",
    "level": "high"
  },
  {
    "word": "none",
    "pos": "v.",
    "meaning": "아무도(조금도)-않다 조금도(결코)-않다",
    "level": "high"
  },
  {
    "word": "nonetheless",
    "pos": "n.",
    "meaning": "역시",
    "level": "high"
  },
  {
    "word": "nonsense",
    "pos": "n.",
    "meaning": "허튼 소리",
    "level": "high"
  },
  {
    "word": "noon",
    "pos": "n.",
    "meaning": "정오",
    "level": "high"
  },
  {
    "word": "nor",
    "pos": "v.",
    "meaning": "-도 또한-않다",
    "level": "high"
  },
  {
    "word": "norm",
    "pos": "n.",
    "meaning": "표준",
    "level": "high"
  },
  {
    "word": "normal",
    "pos": "n.",
    "meaning": "표준(의)",
    "level": "high"
  },
  {
    "word": "north",
    "pos": "n.",
    "meaning": "북, 북 쪽, 북부",
    "level": "high"
  },
  {
    "word": "nose",
    "pos": "n.",
    "meaning": "코",
    "level": "high"
  },
  {
    "word": "not",
    "pos": "v.",
    "meaning": "아니다",
    "level": "high"
  },
  {
    "word": "note",
    "pos": "n.",
    "meaning": "기록",
    "level": "high"
  },
  {
    "word": "nothing",
    "pos": "v.",
    "meaning": "아무것도 …없다",
    "level": "high"
  },
  {
    "word": "notice",
    "pos": "n.",
    "meaning": "통지, 통보",
    "level": "high"
  },
  {
    "word": "notion",
    "pos": "n.",
    "meaning": "n,관념",
    "level": "high"
  },
  {
    "word": "novel",
    "pos": "n.",
    "meaning": "소설",
    "level": "high"
  },
  {
    "word": "now",
    "pos": "n.",
    "meaning": "지금",
    "level": "high"
  },
  {
    "word": "nowadays",
    "pos": "a.",
    "meaning": "오늘날에는, 요즈음에는",
    "level": "high"
  },
  {
    "word": "nowhere",
    "pos": "v.",
    "meaning": "아무데도 …없다",
    "level": "high"
  },
  {
    "word": "nuclear",
    "pos": "a.",
    "meaning": "핵의, 핵을 형성하는 원자핵의",
    "level": "high"
  },
  {
    "word": "number",
    "pos": "n.",
    "meaning": "수",
    "level": "high"
  },
  {
    "word": "numerous",
    "pos": "v.",
    "meaning": "다 수의, 수많은, 셀 수 없이 많은",
    "level": "high"
  },
  {
    "word": "nun",
    "pos": "n.",
    "meaning": "수녀 집비둘기의 일종",
    "level": "high"
  },
  {
    "word": "nurse",
    "pos": "n.",
    "meaning": "유모",
    "level": "high"
  },
  {
    "word": "nut",
    "pos": "n.",
    "meaning": "견과",
    "level": "high"
  },
  {
    "word": "oak",
    "pos": "n.",
    "meaning": "참나무",
    "level": "high"
  },
  {
    "word": "obey",
    "pos": "v.",
    "meaning": "따르다",
    "level": "high"
  },
  {
    "word": "object",
    "pos": "n.",
    "meaning": "사물",
    "level": "high"
  },
  {
    "word": "objective",
    "pos": "a.",
    "meaning": "객관적인",
    "level": "high"
  },
  {
    "word": "oblige",
    "pos": "v.",
    "meaning": "(의무를)별수없이 -하게하다",
    "level": "high"
  },
  {
    "word": "observe",
    "pos": "v.",
    "meaning": "관찰하다",
    "level": "high"
  },
  {
    "word": "obsess",
    "pos": "v.",
    "meaning": "늘러붙다",
    "level": "high"
  },
  {
    "word": "obtain",
    "pos": "v.",
    "meaning": "얻다",
    "level": "high"
  },
  {
    "word": "obvious",
    "pos": "a.",
    "meaning": "명백한",
    "level": "high"
  },
  {
    "word": "occasion",
    "pos": "n.",
    "meaning": "경우",
    "level": "high"
  },
  {
    "word": "occupation",
    "pos": "n.",
    "meaning": "일직업",
    "level": "high"
  },
  {
    "word": "occupy",
    "pos": "v.",
    "meaning": "차지하다",
    "level": "high"
  },
  {
    "word": "occur",
    "pos": "v.",
    "meaning": "일어나다",
    "level": "high"
  },
  {
    "word": "ocean",
    "pos": "n.",
    "meaning": "대양",
    "level": "high"
  },
  {
    "word": "odd",
    "pos": "a.",
    "meaning": "묘한",
    "level": "high"
  },
  {
    "word": "of",
    "pos": "a.",
    "meaning": "출신의",
    "level": "high"
  },
  {
    "word": "off",
    "pos": "n.",
    "meaning": "떨어져",
    "level": "high"
  },
  {
    "word": "offend",
    "pos": "v.",
    "meaning": "성나게 하다",
    "level": "high"
  },
  {
    "word": "offer",
    "pos": "v.",
    "meaning": "권하다",
    "level": "high"
  },
  {
    "word": "office",
    "pos": "n.",
    "meaning": "임무",
    "level": "high"
  },
  {
    "word": "officer",
    "pos": "n.",
    "meaning": "공무원",
    "level": "high"
  },
  {
    "word": "official",
    "pos": "n.",
    "meaning": "공무원",
    "level": "high"
  },
  {
    "word": "often",
    "pos": "n.",
    "meaning": "자주",
    "level": "high"
  },
  {
    "word": "oil",
    "pos": "n.",
    "meaning": "기름",
    "level": "high"
  },
  {
    "word": "old",
    "pos": "n.",
    "meaning": "늙은",
    "level": "high"
  },
  {
    "word": "olive",
    "pos": "n.",
    "meaning": "올리브나무",
    "level": "high"
  },
  {
    "word": "on",
    "pos": "n.",
    "meaning": "위에",
    "level": "high"
  },
  {
    "word": "once",
    "pos": "n.",
    "meaning": "한번",
    "level": "high"
  },
  {
    "word": "one",
    "pos": "n.",
    "meaning": "하나(의)",
    "level": "high"
  },
  {
    "word": "only",
    "pos": "a.",
    "meaning": "유일한",
    "level": "high"
  },
  {
    "word": "open",
    "pos": "v.",
    "meaning": "열다",
    "level": "high"
  },
  {
    "word": "operate",
    "pos": "v.",
    "meaning": "움직이다",
    "level": "high"
  },
  {
    "word": "opinion",
    "pos": "n.",
    "meaning": "의견",
    "level": "high"
  },
  {
    "word": "opportunity",
    "pos": "n.",
    "meaning": "기회",
    "level": "high"
  },
  {
    "word": "oppose",
    "pos": "v.",
    "meaning": "반대하다",
    "level": "high"
  },
  {
    "word": "optimist",
    "pos": "n.",
    "meaning": "낙천가",
    "level": "high"
  },
  {
    "word": "option",
    "pos": "n.",
    "meaning": "선택(권의 자유)",
    "level": "high"
  },
  {
    "word": "or",
    "pos": "n.",
    "meaning": "혹은",
    "level": "high"
  },
  {
    "word": "oral",
    "pos": "a.",
    "meaning": "구두의",
    "level": "high"
  },
  {
    "word": "orbit",
    "pos": "n.",
    "meaning": "궤도",
    "level": "high"
  },
  {
    "word": "orchestra",
    "pos": "n.",
    "meaning": "관현악단",
    "level": "high"
  },
  {
    "word": "order",
    "pos": "n.",
    "meaning": "순서",
    "level": "high"
  },
  {
    "word": "ordinary",
    "pos": "a.",
    "meaning": "보통의",
    "level": "high"
  },
  {
    "word": "organ",
    "pos": "n.",
    "meaning": "(생물의)기관",
    "level": "high"
  },
  {
    "word": "organic",
    "pos": "a.",
    "meaning": "유기체의",
    "level": "high"
  },
  {
    "word": "organize",
    "pos": "v.",
    "meaning": "조직하다",
    "level": "high"
  },
  {
    "word": "orient",
    "pos": "v.",
    "meaning": "동양 동양의 동쪽으로 향하게 하다",
    "level": "high"
  },
  {
    "word": "origin",
    "pos": "n.",
    "meaning": "기원",
    "level": "high"
  },
  {
    "word": "other",
    "pos": "n.",
    "meaning": "다른 다른 것 그렇지 않고",
    "level": "high"
  },
  {
    "word": "otherwise",
    "pos": "a.",
    "meaning": "딴 방법으로는",
    "level": "high"
  },
  {
    "word": "ought au",
    "pos": "v.",
    "meaning": "해야만 하다",
    "level": "high"
  },
  {
    "word": "ounce",
    "pos": "n.",
    "meaning": "삵괭이",
    "level": "high"
  },
  {
    "word": "out",
    "pos": "ad.",
    "meaning": "밖으로",
    "level": "high"
  },
  {
    "word": "outcome",
    "pos": "n.",
    "meaning": "결과",
    "level": "high"
  },
  {
    "word": "outline",
    "pos": "n.",
    "meaning": "윤곽",
    "level": "high"
  },
  {
    "word": "output",
    "pos": "n.",
    "meaning": "산출",
    "level": "high"
  },
  {
    "word": "outrage",
    "pos": "n.",
    "meaning": "불법(적인 행위)",
    "level": "high"
  },
  {
    "word": "outstanding",
    "pos": "a.",
    "meaning": "눈에 띄는",
    "level": "high"
  },
  {
    "word": "over",
    "pos": "n.",
    "meaning": "위쪽",
    "level": "high"
  },
  {
    "word": "overall",
    "pos": "n.",
    "meaning": "포괄(전면)적인 덧옷",
    "level": "high"
  },
  {
    "word": "overcome",
    "pos": "v.",
    "meaning": "이기다",
    "level": "high"
  },
  {
    "word": "overhead",
    "pos": "a.",
    "meaning": "머리위에 머리 위의",
    "level": "high"
  },
  {
    "word": "overlap",
    "pos": "v.",
    "meaning": "겹치다",
    "level": "high"
  },
  {
    "word": "overlook",
    "pos": "v.",
    "meaning": "내려다 보다",
    "level": "high"
  },
  {
    "word": "overnight",
    "pos": "a.",
    "meaning": "전날밤의",
    "level": "high"
  },
  {
    "word": "oversea",
    "pos": "a.",
    "meaning": "해외(로부터)의",
    "level": "high"
  },
  {
    "word": "overwhelm",
    "pos": "v.",
    "meaning": "압도하다",
    "level": "high"
  },
  {
    "word": "owe",
    "pos": "v.",
    "meaning": "지불할 의무가 있다",
    "level": "high"
  },
  {
    "word": "own",
    "pos": "v.",
    "meaning": "자기자신의 소유하다",
    "level": "high"
  },
  {
    "word": "pace",
    "pos": "n.",
    "meaning": "한걸음",
    "level": "high"
  },
  {
    "word": "pack",
    "pos": "n.",
    "meaning": "꾸러미",
    "level": "high"
  },
  {
    "word": "packet",
    "pos": "n.",
    "meaning": "다발",
    "level": "high"
  },
  {
    "word": "pad",
    "pos": "n.",
    "meaning": "(및에)덧대는 것",
    "level": "high"
  },
  {
    "word": "pain",
    "pos": "n.",
    "meaning": "고통",
    "level": "high"
  },
  {
    "word": "paint",
    "pos": "n.",
    "meaning": "도료",
    "level": "high"
  },
  {
    "word": "pair",
    "pos": "n.",
    "meaning": "한쌍",
    "level": "high"
  },
  {
    "word": "palace",
    "pos": "n.",
    "meaning": "궁전",
    "level": "high"
  },
  {
    "word": "pale",
    "pos": "a.",
    "meaning": "창백한",
    "level": "high"
  },
  {
    "word": "palm",
    "pos": "n.",
    "meaning": "손바닥",
    "level": "high"
  },
  {
    "word": "pan",
    "pos": "v.",
    "meaning": "남비 사금 등을 남비로 가려내다",
    "level": "high"
  },
  {
    "word": "panel",
    "pos": "n.",
    "meaning": "판벽널",
    "level": "high"
  },
  {
    "word": "panic",
    "pos": "n.",
    "meaning": "돌연한공포",
    "level": "high"
  },
  {
    "word": "pants",
    "pos": "n.",
    "meaning": "바지",
    "level": "high"
  },
  {
    "word": "paper",
    "pos": "n.",
    "meaning": "종이",
    "level": "high"
  },
  {
    "word": "paragraph",
    "pos": "n.",
    "meaning": "(문장의)절",
    "level": "high"
  },
  {
    "word": "parallel",
    "pos": "a.",
    "meaning": "평행의",
    "level": "high"
  },
  {
    "word": "pardon",
    "pos": "v.",
    "meaning": "용서하다 용서",
    "level": "high"
  },
  {
    "word": "parent",
    "pos": "n.",
    "meaning": "어버이",
    "level": "high"
  },
  {
    "word": "park",
    "pos": "n.",
    "meaning": "공원",
    "level": "high"
  },
  {
    "word": "parliament",
    "pos": "n.",
    "meaning": "의회",
    "level": "high"
  },
  {
    "word": "part",
    "pos": "n.",
    "meaning": "부분",
    "level": "high"
  },
  {
    "word": "participate",
    "pos": "v.",
    "meaning": "참가하다",
    "level": "high"
  },
  {
    "word": "particle",
    "pos": "n.",
    "meaning": "입자",
    "level": "high"
  },
  {
    "word": "particular",
    "pos": "a.",
    "meaning": "특수한",
    "level": "high"
  },
  {
    "word": "pass",
    "pos": "v.",
    "meaning": "지나가다",
    "level": "high"
  },
  {
    "word": "passage",
    "pos": "n.",
    "meaning": "통행, 통과",
    "level": "high"
  },
  {
    "word": "passenger",
    "pos": "n.",
    "meaning": "승객",
    "level": "high"
  },
  {
    "word": "passion",
    "pos": "n.",
    "meaning": "정열",
    "level": "high"
  },
  {
    "word": "passport",
    "pos": "n.",
    "meaning": "여권",
    "level": "high"
  },
  {
    "word": "past",
    "pos": "n.",
    "meaning": "과거",
    "level": "high"
  },
  {
    "word": "pat",
    "pos": "v.",
    "meaning": "톡톡 가볍게 치다",
    "level": "high"
  },
  {
    "word": "patch",
    "pos": "n.",
    "meaning": "깁는 헝겊",
    "level": "high"
  },
  {
    "word": "patent",
    "pos": "a.",
    "meaning": "전매특허권 전매특허의",
    "level": "high"
  },
  {
    "word": "path",
    "pos": "n.",
    "meaning": "작은 길",
    "level": "high"
  },
  {
    "word": "patient",
    "pos": "n.",
    "meaning": "인내심이 강한 환자",
    "level": "high"
  },
  {
    "word": "patrol",
    "pos": "n.",
    "meaning": "순회",
    "level": "high"
  },
  {
    "word": "pattern",
    "pos": "n.",
    "meaning": "모범",
    "level": "high"
  },
  {
    "word": "pause",
    "pos": "n.",
    "meaning": "중지",
    "level": "high"
  },
  {
    "word": "pave",
    "pos": "v.",
    "meaning": "(도로를)포장하다",
    "level": "high"
  },
  {
    "word": "pay",
    "pos": "v.",
    "meaning": "지불하다",
    "level": "high"
  },
  {
    "word": "peace",
    "pos": "n.",
    "meaning": "평화",
    "level": "high"
  },
  {
    "word": "peak",
    "pos": "n.",
    "meaning": "(뾰족한)끝",
    "level": "high"
  },
  {
    "word": "pear",
    "pos": "n.",
    "meaning": "서양배",
    "level": "high"
  },
  {
    "word": "peasant",
    "pos": "n.",
    "meaning": "농부",
    "level": "high"
  },
  {
    "word": "peel",
    "pos": "v.",
    "meaning": "껍질을 벗기다 벗어지다 껍질",
    "level": "high"
  },
  {
    "word": "peer",
    "pos": "n.",
    "meaning": "동료",
    "level": "high"
  },
  {
    "word": "penalty",
    "pos": "n.",
    "meaning": "벌",
    "level": "high"
  },
  {
    "word": "pencil",
    "pos": "v.",
    "meaning": "연필 연필로 쓰다",
    "level": "high"
  },
  {
    "word": "people",
    "pos": "n.",
    "meaning": "사람들",
    "level": "high"
  },
  {
    "word": "pepper",
    "pos": "n.",
    "meaning": "고추",
    "level": "high"
  },
  {
    "word": "per",
    "pos": "n.",
    "meaning": "-에 의하여",
    "level": "high"
  },
  {
    "word": "perceive",
    "pos": "v.",
    "meaning": "지각하다",
    "level": "high"
  },
  {
    "word": "perfect",
    "pos": "a.",
    "meaning": "완전한",
    "level": "high"
  },
  {
    "word": "perform",
    "pos": "v.",
    "meaning": "다하다",
    "level": "high"
  },
  {
    "word": "perhaps",
    "pos": "n.",
    "meaning": "아마",
    "level": "high"
  },
  {
    "word": "period",
    "pos": "n.",
    "meaning": "시간",
    "level": "high"
  },
  {
    "word": "permanent",
    "pos": "a.",
    "meaning": "영구의",
    "level": "high"
  },
  {
    "word": "permit",
    "pos": "v.",
    "meaning": "허가하다",
    "level": "high"
  },
  {
    "word": "persist",
    "pos": "v.",
    "meaning": "고집하다",
    "level": "high"
  },
  {
    "word": "person",
    "pos": "n.",
    "meaning": "사람",
    "level": "high"
  },
  {
    "word": "personality",
    "pos": "n.",
    "meaning": "개성",
    "level": "high"
  },
  {
    "word": "perspective",
    "pos": "n.",
    "meaning": "원근법의 원근 화법",
    "level": "high"
  },
  {
    "word": "persuade",
    "pos": "v.",
    "meaning": "설득하다",
    "level": "high"
  },
  {
    "word": "pet",
    "pos": "n.",
    "meaning": "애완동물",
    "level": "high"
  },
  {
    "word": "phase",
    "pos": "n.",
    "meaning": "국면",
    "level": "high"
  },
  {
    "word": "phenomenon",
    "pos": "n.",
    "meaning": "현상",
    "level": "high"
  },
  {
    "word": "philosophy",
    "pos": "n.",
    "meaning": "철학",
    "level": "high"
  },
  {
    "word": "photograph",
    "pos": "v.",
    "meaning": "사진 촬영하다",
    "level": "high"
  },
  {
    "word": "phrase",
    "pos": "n.",
    "meaning": "구",
    "level": "high"
  },
  {
    "word": "physical",
    "pos": "a.",
    "meaning": "물질의",
    "level": "high"
  },
  {
    "word": "physics",
    "pos": "n.",
    "meaning": "물리학",
    "level": "high"
  },
  {
    "word": "pick",
    "pos": "v.",
    "meaning": "따다",
    "level": "high"
  },
  {
    "word": "picnic",
    "pos": "n.",
    "meaning": "소풍",
    "level": "high"
  },
  {
    "word": "picture",
    "pos": "n.",
    "meaning": "그림",
    "level": "high"
  },
  {
    "word": "piece",
    "pos": "n.",
    "meaning": "한 조각",
    "level": "high"
  },
  {
    "word": "pig",
    "pos": "n.",
    "meaning": "돼지",
    "level": "high"
  },
  {
    "word": "pile",
    "pos": "n.",
    "meaning": "쌓아 올린 것",
    "level": "high"
  },
  {
    "word": "pill",
    "pos": "n.",
    "meaning": "알약",
    "level": "high"
  },
  {
    "word": "pin",
    "pos": "v.",
    "meaning": "핀 핀으로 꽂다",
    "level": "high"
  },
  {
    "word": "pinch",
    "pos": "v.",
    "meaning": "꼬집다",
    "level": "high"
  },
  {
    "word": "pine",
    "pos": "v.",
    "meaning": "소나무 수척해 지다",
    "level": "high"
  },
  {
    "word": "pink",
    "pos": "n.",
    "meaning": "연분홍색",
    "level": "high"
  },
  {
    "word": "pioneer",
    "pos": "n.",
    "meaning": "개척자",
    "level": "high"
  },
  {
    "word": "pitch",
    "pos": "v.",
    "meaning": "던지다",
    "level": "high"
  },
  {
    "word": "pity",
    "pos": "n.",
    "meaning": "불쌍히 여김",
    "level": "high"
  },
  {
    "word": "place",
    "pos": "n.",
    "meaning": "장소",
    "level": "high"
  },
  {
    "word": "plain",
    "pos": "a.",
    "meaning": "분명한",
    "level": "high"
  },
  {
    "word": "plan",
    "pos": "n.",
    "meaning": "계획",
    "level": "high"
  },
  {
    "word": "planet",
    "pos": "n.",
    "meaning": "행성",
    "level": "high"
  },
  {
    "word": "plant",
    "pos": "n.",
    "meaning": "실물",
    "level": "high"
  },
  {
    "word": "plate",
    "pos": "n.",
    "meaning": "판",
    "level": "high"
  },
  {
    "word": "platform",
    "pos": "n.",
    "meaning": "단",
    "level": "high"
  },
  {
    "word": "play",
    "pos": "v.",
    "meaning": "놀다",
    "level": "high"
  },
  {
    "word": "pleasant",
    "pos": "n.",
    "meaning": "기분 좋은",
    "level": "high"
  },
  {
    "word": "please",
    "pos": "v.",
    "meaning": "기쁘게 하다",
    "level": "high"
  },
  {
    "word": "pleasure",
    "pos": "n.",
    "meaning": "즐거움",
    "level": "high"
  },
  {
    "word": "plenty",
    "pos": "n.",
    "meaning": "많음",
    "level": "high"
  },
  {
    "word": "plot",
    "pos": "n.",
    "meaning": "음모",
    "level": "advanced"
  },
  {
    "word": "plus",
    "pos": "n.",
    "meaning": "더하기의 -외에",
    "level": "advanced"
  },
  {
    "word": "P.M.",
    "pos": "n.",
    "meaning": "오후",
    "level": "advanced"
  },
  {
    "word": "pocket",
    "pos": "n.",
    "meaning": "포켓",
    "level": "advanced"
  },
  {
    "word": "poem",
    "pos": "n.",
    "meaning": "시",
    "level": "advanced"
  },
  {
    "word": "poet",
    "pos": "a.",
    "meaning": "시인",
    "level": "advanced"
  },
  {
    "word": "point",
    "pos": "n.",
    "meaning": "점",
    "level": "advanced"
  },
  {
    "word": "poison",
    "pos": "n.",
    "meaning": "독",
    "level": "advanced"
  },
  {
    "word": "polar",
    "pos": "a.",
    "meaning": "남극의",
    "level": "advanced"
  },
  {
    "word": "pole",
    "pos": "n.",
    "meaning": "폴란드사람",
    "level": "advanced"
  },
  {
    "word": "police",
    "pos": "v.",
    "meaning": "경찰 경비하다",
    "level": "advanced"
  },
  {
    "word": "policy",
    "pos": "n.",
    "meaning": "정책",
    "level": "advanced"
  },
  {
    "word": "polish",
    "pos": "v.",
    "meaning": "닦다, 갈다, 윤내다",
    "level": "advanced"
  },
  {
    "word": "polite",
    "pos": "a.",
    "meaning": "공손한",
    "level": "advanced"
  },
  {
    "word": "politics",
    "pos": "n.",
    "meaning": "정치",
    "level": "advanced"
  },
  {
    "word": "poll",
    "pos": "n.",
    "meaning": "투표",
    "level": "advanced"
  },
  {
    "word": "pollute -",
    "pos": "v.",
    "meaning": "을 더럽히다",
    "level": "advanced"
  },
  {
    "word": "pond",
    "pos": "n.",
    "meaning": "못, 연못",
    "level": "advanced"
  },
  {
    "word": "pool",
    "pos": "n.",
    "meaning": "판돈",
    "level": "advanced"
  },
  {
    "word": "poor",
    "pos": "a.",
    "meaning": "가난한 부족한, 불충분한, 빈약한",
    "level": "advanced"
  },
  {
    "word": "pop",
    "pos": "n.",
    "meaning": "팝",
    "level": "advanced"
  },
  {
    "word": "pope",
    "pos": "n.",
    "meaning": "로마 교황 최고 권위자로 자처하는 사람",
    "level": "advanced"
  },
  {
    "word": "popular",
    "pos": "a.",
    "meaning": "민중 의, 대중의",
    "level": "advanced"
  },
  {
    "word": "population",
    "pos": "n.",
    "meaning": "인구",
    "level": "advanced"
  },
  {
    "word": "pork",
    "pos": "n.",
    "meaning": "돼지고기",
    "level": "advanced"
  },
  {
    "word": "port",
    "pos": "n.",
    "meaning": "항구, 항만, 상항",
    "level": "advanced"
  },
  {
    "word": "portion",
    "pos": "n.",
    "meaning": "일부, 부분",
    "level": "advanced"
  },
  {
    "word": "portrait",
    "pos": "n.",
    "meaning": "초상",
    "level": "advanced"
  },
  {
    "word": "pose",
    "pos": "n.",
    "meaning": "자세, 포즈 마음가짐 꾸민 태도",
    "level": "advanced"
  },
  {
    "word": "position",
    "pos": "n.",
    "meaning": "위치",
    "level": "advanced"
  },
  {
    "word": "positive",
    "pos": "a.",
    "meaning": "명확한, 의문의 여지가 없는, 부정할 수 없는",
    "level": "advanced"
  },
  {
    "word": "possess",
    "pos": "v.",
    "meaning": "소유하다",
    "level": "advanced"
  },
  {
    "word": "possible",
    "pos": "a.",
    "meaning": "가능한",
    "level": "advanced"
  },
  {
    "word": "post",
    "pos": "n.",
    "meaning": "기둥",
    "level": "advanced"
  },
  {
    "word": "poster",
    "pos": "n.",
    "meaning": "포스터",
    "level": "advanced"
  },
  {
    "word": "pot",
    "pos": "n.",
    "meaning": "단지",
    "level": "advanced"
  },
  {
    "word": "potato",
    "pos": "n.",
    "meaning": "감자",
    "level": "advanced"
  },
  {
    "word": "potential",
    "pos": "a.",
    "meaning": "가능한",
    "level": "advanced"
  },
  {
    "word": "pour",
    "pos": "v.",
    "meaning": "따르다",
    "level": "advanced"
  },
  {
    "word": "powder",
    "pos": "n.",
    "meaning": "가루",
    "level": "advanced"
  },
  {
    "word": "power",
    "pos": "n.",
    "meaning": "힘",
    "level": "advanced"
  },
  {
    "word": "practical",
    "pos": "a.",
    "meaning": "실제의",
    "level": "advanced"
  },
  {
    "word": "practice",
    "pos": "n.",
    "meaning": "연습",
    "level": "advanced"
  },
  {
    "word": "praise",
    "pos": "n.",
    "meaning": "칭찬",
    "level": "advanced"
  },
  {
    "word": "pray",
    "pos": "v.",
    "meaning": "빌다",
    "level": "advanced"
  },
  {
    "word": "preach",
    "pos": "v.",
    "meaning": "설교하다",
    "level": "advanced"
  },
  {
    "word": "precede -",
    "pos": "v.",
    "meaning": "에 앞서다",
    "level": "advanced"
  },
  {
    "word": "precious",
    "pos": "n.",
    "meaning": "비싼",
    "level": "advanced"
  },
  {
    "word": "precise",
    "pos": "a.",
    "meaning": "정확한",
    "level": "advanced"
  },
  {
    "word": "predator",
    "pos": "n.",
    "meaning": "약탈자",
    "level": "advanced"
  },
  {
    "word": "predict",
    "pos": "v.",
    "meaning": "예연하다, 예보하다 예언하다",
    "level": "advanced"
  },
  {
    "word": "prefer",
    "pos": "n.",
    "meaning": "오히려 …을 좋아하다,",
    "level": "advanced"
  },
  {
    "word": "pregnant",
    "pos": "a.",
    "meaning": "임신한 충만한",
    "level": "advanced"
  },
  {
    "word": "prejudice",
    "pos": "n.",
    "meaning": "편견, 선입관",
    "level": "advanced"
  },
  {
    "word": "premier",
    "pos": "n.",
    "meaning": "국무 총리, 수상",
    "level": "advanced"
  },
  {
    "word": "premium",
    "pos": "n.",
    "meaning": "할증금, 액면 초과액, 프리미엄",
    "level": "advanced"
  },
  {
    "word": "prepare",
    "pos": "v.",
    "meaning": "준비하 다, 마련하다, 채비를 갖추다",
    "level": "advanced"
  },
  {
    "word": "prescribe",
    "pos": "v.",
    "meaning": "명령하다, 지령하다",
    "level": "advanced"
  },
  {
    "word": "presence",
    "pos": "n.",
    "meaning": "존재, 현존, 실재 출석, 임석, 참석",
    "level": "advanced"
  },
  {
    "word": "present",
    "pos": "a.",
    "meaning": "있는, 존재하는",
    "level": "advanced"
  },
  {
    "word": "preserve",
    "pos": "v.",
    "meaning": "보호하다, 지키다",
    "level": "advanced"
  },
  {
    "word": "president",
    "pos": "n.",
    "meaning": "대통령 회장",
    "level": "advanced"
  },
  {
    "word": "press",
    "pos": "v.",
    "meaning": "강제로 모집하다",
    "level": "advanced"
  },
  {
    "word": "presume",
    "pos": "v.",
    "meaning": "가정하다",
    "level": "advanced"
  },
  {
    "word": "pretend",
    "pos": "v.",
    "meaning": "핑계삼다",
    "level": "advanced"
  },
  {
    "word": "pretty",
    "pos": "a.",
    "meaning": "예쁜, 귀여운, 참 한, 조촐한",
    "level": "advanced"
  },
  {
    "word": "prevail",
    "pos": "v.",
    "meaning": "이기다, 극복하다, 압도하다 우세하다, 보급되다",
    "level": "advanced"
  },
  {
    "word": "prevent",
    "pos": "v.",
    "meaning": "막다, 방해하다",
    "level": "advanced"
  },
  {
    "word": "previous",
    "pos": "a.",
    "meaning": "앞의, 이전의",
    "level": "advanced"
  },
  {
    "word": "prey",
    "pos": "n.",
    "meaning": "먹이",
    "level": "advanced"
  },
  {
    "word": "price",
    "pos": "n.",
    "meaning": "값, 가격, 대가, 정가",
    "level": "advanced"
  },
  {
    "word": "pride",
    "pos": "n.",
    "meaning": "자존심",
    "level": "advanced"
  },
  {
    "word": "priest",
    "pos": "n.",
    "meaning": "성직자",
    "level": "advanced"
  },
  {
    "word": "primary",
    "pos": "a.",
    "meaning": "첫째의, 제 1 위의, 수위의 초등의, 초보의",
    "level": "advanced"
  },
  {
    "word": "prime",
    "pos": "a.",
    "meaning": "수위의, 최초의, 원시적인",
    "level": "advanced"
  },
  {
    "word": "primitive",
    "pos": "a.",
    "meaning": "원시의, 초기의",
    "level": "advanced"
  },
  {
    "word": "prince",
    "pos": "n.",
    "meaning": "왕자, 태자, 세자, 대군",
    "level": "advanced"
  },
  {
    "word": "principal",
    "pos": "a.",
    "meaning": "주요한, 주된, 제일의, 앞장서는",
    "level": "advanced"
  },
  {
    "word": "principle",
    "pos": "n.",
    "meaning": "원리, 원칙, 법칙, 공리",
    "level": "advanced"
  },
  {
    "word": "print",
    "pos": "v.",
    "meaning": "인쇄하다, 프린트하다",
    "level": "advanced"
  },
  {
    "word": "prior",
    "pos": "a.",
    "meaning": "이전의, 앞의",
    "level": "advanced"
  },
  {
    "word": "prison",
    "pos": "n.",
    "meaning": "교도소",
    "level": "advanced"
  },
  {
    "word": "privacy",
    "pos": "n.",
    "meaning": "남의 눈을 피함, 은거, 은둔, 은퇴 생활 사생활",
    "level": "advanced"
  },
  {
    "word": "private",
    "pos": "a.",
    "meaning": "사적인, 사사로운, 개인에 속한",
    "level": "advanced"
  },
  {
    "word": "privilege",
    "pos": "n.",
    "meaning": "특권, 특전, 특별 취급",
    "level": "advanced"
  },
  {
    "word": "prize",
    "pos": "n.",
    "meaning": "상, 포상, 우등상, 선행상",
    "level": "advanced"
  },
  {
    "word": "probably",
    "pos": "n.",
    "meaning": "아마, 십중팔구",
    "level": "advanced"
  },
  {
    "word": "problem",
    "pos": "n.",
    "meaning": "문제",
    "level": "advanced"
  },
  {
    "word": "procedure",
    "pos": "n.",
    "meaning": "진행, 경과 절차",
    "level": "advanced"
  },
  {
    "word": "proceed",
    "pos": "v.",
    "meaning": "나아가다, 가다",
    "level": "advanced"
  },
  {
    "word": "process",
    "pos": "n.",
    "meaning": "진행, 작용",
    "level": "advanced"
  },
  {
    "word": "produce",
    "pos": "n.",
    "meaning": "생산하다, 산출하다, 생기게 하다,",
    "level": "advanced"
  },
  {
    "word": "profession",
    "pos": "n.",
    "meaning": "직업 공언, 선언, 고백",
    "level": "advanced"
  },
  {
    "word": "professor",
    "pos": "n.",
    "meaning": "교수",
    "level": "advanced"
  },
  {
    "word": "profile",
    "pos": "n.",
    "meaning": "옆 얼굴, 반면상 인물 소개 태도, 자세",
    "level": "advanced"
  },
  {
    "word": "profit",
    "pos": "n.",
    "meaning": "이익, 이득, 벌이",
    "level": "advanced"
  },
  {
    "word": "profound",
    "pos": "a.",
    "meaning": "깊은, 심원한",
    "level": "advanced"
  },
  {
    "word": "progress",
    "pos": "n.",
    "meaning": "진행, 전진, 진척 진보, 향상, 발달, 발전",
    "level": "advanced"
  },
  {
    "word": "prohibit",
    "pos": "v.",
    "meaning": "금하다, 금지하다",
    "level": "advanced"
  },
  {
    "word": "prominent",
    "pos": "a.",
    "meaning": "두드러진, 돌기한, 양각된 현저한, 탁월한, 중요한",
    "level": "advanced"
  },
  {
    "word": "promise",
    "pos": "n.",
    "meaning": "약속, 서약, 계약",
    "level": "advanced"
  },
  {
    "word": "promote",
    "pos": "v.",
    "meaning": "승진시키다 진행시키다,",
    "level": "advanced"
  },
  {
    "word": "prompt",
    "pos": "a.",
    "meaning": "재빠른, 신속한, 즉시 …하는",
    "level": "advanced"
  },
  {
    "word": "pronounce",
    "pos": "v.",
    "meaning": "발음하다, 음독하다",
    "level": "advanced"
  },
  {
    "word": "proof",
    "pos": "n.",
    "meaning": "증명",
    "level": "advanced"
  },
  {
    "word": "proper",
    "pos": "a.",
    "meaning": "고유의, 독특한, 본연의, 특유한",
    "level": "advanced"
  },
  {
    "word": "property",
    "pos": "n.",
    "meaning": "재산, 자산",
    "level": "advanced"
  },
  {
    "word": "proportion",
    "pos": "n.",
    "meaning": "비율, 비 균형, 조화",
    "level": "advanced"
  },
  {
    "word": "propose",
    "pos": "v.",
    "meaning": "제의하다, 제출하다 추천하다, 지명하다",
    "level": "advanced"
  },
  {
    "word": "prospect",
    "pos": "n.",
    "meaning": "전망, 조망, 경치",
    "level": "advanced"
  },
  {
    "word": "prosper",
    "pos": "v.",
    "meaning": "번영하다",
    "level": "advanced"
  },
  {
    "word": "protect",
    "pos": "v.",
    "meaning": "보호하다, 막다, 지키다, 비호하다",
    "level": "advanced"
  },
  {
    "word": "protein",
    "pos": "n.",
    "meaning": "IG1s",
    "level": "advanced"
  },
  {
    "word": "protest",
    "pos": "v.",
    "meaning": "단언하다",
    "level": "advanced"
  },
  {
    "word": "proud",
    "pos": "a.",
    "meaning": "뽐내는, 자랑하는 자긍하는, 영광 으로 여기는",
    "level": "advanced"
  },
  {
    "word": "prove",
    "pos": "v.",
    "meaning": "시험하다, 실험하다, 경험하다, 시험해 보다",
    "level": "advanced"
  },
  {
    "word": "provide",
    "pos": "v.",
    "meaning": "준비하다, 미리 …에 대비하다 규정하다",
    "level": "advanced"
  },
  {
    "word": "province",
    "pos": "n.",
    "meaning": "주, 성, 도 범위, 영역, 분야",
    "level": "advanced"
  },
  {
    "word": "provoke",
    "pos": "v.",
    "meaning": "화나게 하다",
    "level": "advanced"
  },
  {
    "word": "psychology",
    "pos": "n.",
    "meaning": "심리학",
    "level": "advanced"
  },
  {
    "word": "pub",
    "pos": "n.",
    "meaning": "펍",
    "level": "advanced"
  },
  {
    "word": "public",
    "pos": "n.",
    "meaning": "심리, 심리 상태",
    "level": "advanced"
  },
  {
    "word": "publish",
    "pos": "v.",
    "meaning": "발표 하다, 널리 알리다",
    "level": "advanced"
  },
  {
    "word": "pull",
    "pos": "v.",
    "meaning": "끌다, 당기다, 끌어 당기다, 잡아 끌다",
    "level": "advanced"
  },
  {
    "word": "pump",
    "pos": "n.",
    "meaning": "펌프스 댄스용 구두",
    "level": "advanced"
  },
  {
    "word": "punch",
    "pos": "n.",
    "meaning": "주먹질, 펀치 힘, 활기",
    "level": "advanced"
  },
  {
    "word": "punish",
    "pos": "v.",
    "meaning": "벌하다, 응징하다, 처형하다",
    "level": "advanced"
  },
  {
    "word": "pupil",
    "pos": "n.",
    "meaning": "흔히 국민학교 중학교 학생",
    "level": "advanced"
  },
  {
    "word": "puppy",
    "pos": "n.",
    "meaning": "강아지",
    "level": "advanced"
  },
  {
    "word": "purchase",
    "pos": "v.",
    "meaning": "사다, 구입하다",
    "level": "advanced"
  },
  {
    "word": "pure",
    "pos": "a.",
    "meaning": "순수한 깨끗한, 순전한, 결백한",
    "level": "advanced"
  },
  {
    "word": "purple",
    "pos": "a.",
    "meaning": "자줏빛의 새빨간 제왕의",
    "level": "advanced"
  },
  {
    "word": "purpose",
    "pos": "a.",
    "meaning": "목적",
    "level": "advanced"
  },
  {
    "word": "pursue",
    "pos": "v.",
    "meaning": "쫓다, 추적하다, 몰다",
    "level": "advanced"
  },
  {
    "word": "push",
    "pos": "v.",
    "meaning": "밀다, 밀치다, 밀어서 움직 이다, 밀어 내다",
    "level": "advanced"
  },
  {
    "word": "put",
    "pos": "v.",
    "meaning": "놓다, 두다",
    "level": "advanced"
  },
  {
    "word": "puzzle",
    "pos": "n.",
    "meaning": "당황, 혼란 괴롭히는 사람, 어려운 문제",
    "level": "advanced"
  },
  {
    "word": "qualify",
    "pos": "v.",
    "meaning": "자격을 부여하다",
    "level": "advanced"
  },
  {
    "word": "quality",
    "pos": "n.",
    "meaning": "질",
    "level": "advanced"
  },
  {
    "word": "quantity",
    "pos": "n.",
    "meaning": "양",
    "level": "advanced"
  },
  {
    "word": "quarter",
    "pos": "n.",
    "meaning": "1",
    "level": "advanced"
  },
  {
    "word": "queen",
    "pos": "n.",
    "meaning": "여왕",
    "level": "advanced"
  },
  {
    "word": "question",
    "pos": "a.",
    "meaning": "물음, 질문, 질의",
    "level": "advanced"
  },
  {
    "word": "questionnaire",
    "pos": "n.",
    "meaning": "질문표",
    "level": "advanced"
  },
  {
    "word": "quick",
    "pos": "n.",
    "meaning": "빠른",
    "level": "advanced"
  },
  {
    "word": "quiet",
    "pos": "a.",
    "meaning": "조용한",
    "level": "advanced"
  },
  {
    "word": "quit (",
    "pos": "v.",
    "meaning": "의무,책임을)벗어난 떠나다",
    "level": "advanced"
  },
  {
    "word": "quite",
    "pos": "n.",
    "meaning": "아주",
    "level": "advanced"
  },
  {
    "word": "quote",
    "pos": "v.",
    "meaning": "인용하다",
    "level": "advanced"
  },
  {
    "word": "rabbit",
    "pos": "n.",
    "meaning": "집토끼",
    "level": "advanced"
  },
  {
    "word": "race",
    "pos": "n.",
    "meaning": "인종",
    "level": "advanced"
  },
  {
    "word": "racial",
    "pos": "a.",
    "meaning": "인종(상)의",
    "level": "advanced"
  },
  {
    "word": "rage",
    "pos": "n.",
    "meaning": "격노",
    "level": "advanced"
  },
  {
    "word": "rail",
    "pos": "n.",
    "meaning": "가로장",
    "level": "advanced"
  },
  {
    "word": "rain",
    "pos": "n.",
    "meaning": "비",
    "level": "advanced"
  },
  {
    "word": "rainbow",
    "pos": "n.",
    "meaning": "무지개",
    "level": "advanced"
  },
  {
    "word": "raise",
    "pos": "v.",
    "meaning": "올리다",
    "level": "advanced"
  },
  {
    "word": "rally",
    "pos": "v.",
    "meaning": "규합하다",
    "level": "advanced"
  },
  {
    "word": "random",
    "pos": "a.",
    "meaning": "닥치는 대로의",
    "level": "advanced"
  },
  {
    "word": "range",
    "pos": "n.",
    "meaning": "줄",
    "level": "advanced"
  },
  {
    "word": "rank",
    "pos": "n.",
    "meaning": "열",
    "level": "advanced"
  },
  {
    "word": "rapid",
    "pos": "n.",
    "meaning": "빠른",
    "level": "advanced"
  },
  {
    "word": "rare",
    "pos": "a.",
    "meaning": "희귀한",
    "level": "advanced"
  },
  {
    "word": "rat",
    "pos": "n.",
    "meaning": "쥐",
    "level": "advanced"
  },
  {
    "word": "rate",
    "pos": "n.",
    "meaning": "율",
    "level": "advanced"
  },
  {
    "word": "rather",
    "pos": "n.",
    "meaning": "오히려",
    "level": "advanced"
  },
  {
    "word": "rational",
    "pos": "a.",
    "meaning": "합리적인",
    "level": "advanced"
  },
  {
    "word": "raw",
    "pos": "a.",
    "meaning": "날것의",
    "level": "advanced"
  },
  {
    "word": "reach",
    "pos": "v.",
    "meaning": "도착하다",
    "level": "advanced"
  },
  {
    "word": "react",
    "pos": "v.",
    "meaning": "반응을 나타내다",
    "level": "advanced"
  },
  {
    "word": "read",
    "pos": "v.",
    "meaning": "읽다",
    "level": "advanced"
  },
  {
    "word": "ready",
    "pos": "a.",
    "meaning": "준비가 된",
    "level": "advanced"
  },
  {
    "word": "real",
    "pos": "a.",
    "meaning": "실재하는",
    "level": "advanced"
  },
  {
    "word": "realize",
    "pos": "v.",
    "meaning": "깨닫다",
    "level": "advanced"
  },
  {
    "word": "rear",
    "pos": "n.",
    "meaning": "뒤",
    "level": "advanced"
  },
  {
    "word": "reason",
    "pos": "n.",
    "meaning": "이성",
    "level": "advanced"
  },
  {
    "word": "rebel",
    "pos": "n.",
    "meaning": "반역자",
    "level": "advanced"
  },
  {
    "word": "recall",
    "pos": "v.",
    "meaning": "되부르다",
    "level": "advanced"
  },
  {
    "word": "receipt",
    "pos": "n.",
    "meaning": "수령",
    "level": "advanced"
  },
  {
    "word": "receive",
    "pos": "v.",
    "meaning": "받다",
    "level": "advanced"
  },
  {
    "word": "recent",
    "pos": "a.",
    "meaning": "최근의",
    "level": "advanced"
  },
  {
    "word": "reception",
    "pos": "n.",
    "meaning": "받음",
    "level": "advanced"
  },
  {
    "word": "recipe",
    "pos": "n.",
    "meaning": "조리법",
    "level": "advanced"
  },
  {
    "word": "recognize",
    "pos": "v.",
    "meaning": "인정하다",
    "level": "advanced"
  },
  {
    "word": "recommend",
    "pos": "v.",
    "meaning": "추천하다",
    "level": "advanced"
  },
  {
    "word": "record",
    "pos": "v.",
    "meaning": "기록하다",
    "level": "advanced"
  },
  {
    "word": "recover",
    "pos": "v.",
    "meaning": "되찾다",
    "level": "advanced"
  },
  {
    "word": "recruit",
    "pos": "n.",
    "meaning": "신병",
    "level": "advanced"
  },
  {
    "word": "recycle",
    "pos": "v.",
    "meaning": "재생 이용하다",
    "level": "advanced"
  },
  {
    "word": "red",
    "pos": "n.",
    "meaning": "붉은",
    "level": "advanced"
  },
  {
    "word": "reduce",
    "pos": "v.",
    "meaning": "줄이다",
    "level": "advanced"
  },
  {
    "word": "refer",
    "pos": "v.",
    "meaning": "조회시키다",
    "level": "advanced"
  },
  {
    "word": "refine",
    "pos": "v.",
    "meaning": "정제정련하다",
    "level": "advanced"
  },
  {
    "word": "reflect",
    "pos": "v.",
    "meaning": "반사하다",
    "level": "advanced"
  },
  {
    "word": "reform",
    "pos": "v.",
    "meaning": "개정(개혁)하다",
    "level": "advanced"
  },
  {
    "word": "refrigerator",
    "pos": "n.",
    "meaning": "냉장고",
    "level": "advanced"
  },
  {
    "word": "refuse",
    "pos": "v.",
    "meaning": "거절하다",
    "level": "advanced"
  },
  {
    "word": "regard",
    "pos": "v.",
    "meaning": "주목해서 보다",
    "level": "advanced"
  },
  {
    "word": "region",
    "pos": "n.",
    "meaning": "지방",
    "level": "advanced"
  },
  {
    "word": "register",
    "pos": "n.",
    "meaning": "기록",
    "level": "advanced"
  },
  {
    "word": "regret",
    "pos": "n.",
    "meaning": "유감",
    "level": "advanced"
  },
  {
    "word": "regular",
    "pos": "a.",
    "meaning": "규칙적인",
    "level": "advanced"
  },
  {
    "word": "regulate",
    "pos": "v.",
    "meaning": "규정하다",
    "level": "advanced"
  },
  {
    "word": "reinforce",
    "pos": "v.",
    "meaning": "보강하다",
    "level": "advanced"
  },
  {
    "word": "reject",
    "pos": "v.",
    "meaning": "거절하다",
    "level": "advanced"
  },
  {
    "word": "relate",
    "pos": "v.",
    "meaning": "이야기하다",
    "level": "advanced"
  },
  {
    "word": "relative",
    "pos": "n.",
    "meaning": "친척",
    "level": "advanced"
  },
  {
    "word": "relax",
    "pos": "v.",
    "meaning": "늦추다",
    "level": "advanced"
  },
  {
    "word": "release",
    "pos": "v.",
    "meaning": "도와주다",
    "level": "advanced"
  },
  {
    "word": "relevant",
    "pos": "a.",
    "meaning": "관련된",
    "level": "advanced"
  },
  {
    "word": "relieve",
    "pos": "v.",
    "meaning": "구출하다",
    "level": "advanced"
  },
  {
    "word": "religion",
    "pos": "n.",
    "meaning": "종교",
    "level": "advanced"
  },
  {
    "word": "reluctant",
    "pos": "a.",
    "meaning": "마음이 내키지 않는",
    "level": "advanced"
  },
  {
    "word": "rely",
    "pos": "v.",
    "meaning": "믿다",
    "level": "advanced"
  },
  {
    "word": "remain",
    "pos": "v.",
    "meaning": "남다",
    "level": "advanced"
  },
  {
    "word": "remark",
    "pos": "v.",
    "meaning": "깨닫다",
    "level": "advanced"
  },
  {
    "word": "remedy",
    "pos": "n.",
    "meaning": "치료",
    "level": "advanced"
  },
  {
    "word": "remember",
    "pos": "v.",
    "meaning": "기억하고 있다",
    "level": "advanced"
  },
  {
    "word": "remind",
    "pos": "v.",
    "meaning": "생각나게 하다",
    "level": "advanced"
  },
  {
    "word": "remote",
    "pos": "n.",
    "meaning": "먼",
    "level": "advanced"
  },
  {
    "word": "remove",
    "pos": "v.",
    "meaning": "옮기다",
    "level": "advanced"
  },
  {
    "word": "rent",
    "pos": "n.",
    "meaning": "지대",
    "level": "advanced"
  },
  {
    "word": "repair",
    "pos": "v.",
    "meaning": "수선(수정)하다",
    "level": "advanced"
  },
  {
    "word": "repeat",
    "pos": "v.",
    "meaning": "반복하다",
    "level": "advanced"
  },
  {
    "word": "replace",
    "pos": "v.",
    "meaning": "되돌려 놓다",
    "level": "advanced"
  },
  {
    "word": "reply",
    "pos": "v.",
    "meaning": "대답하다",
    "level": "advanced"
  },
  {
    "word": "report",
    "pos": "n.",
    "meaning": "보고",
    "level": "advanced"
  },
  {
    "word": "represent",
    "pos": "v.",
    "meaning": "표현(묘사)하다",
    "level": "advanced"
  },
  {
    "word": "republic",
    "pos": "n.",
    "meaning": "공화국",
    "level": "advanced"
  },
  {
    "word": "reputation",
    "pos": "n.",
    "meaning": "평판",
    "level": "advanced"
  },
  {
    "word": "request",
    "pos": "v.",
    "meaning": "부탁하다",
    "level": "advanced"
  },
  {
    "word": "require",
    "pos": "v.",
    "meaning": "요구하다",
    "level": "advanced"
  },
  {
    "word": "rescue",
    "pos": "v.",
    "meaning": "구하다",
    "level": "advanced"
  },
  {
    "word": "research",
    "pos": "n.",
    "meaning": "연구",
    "level": "advanced"
  },
  {
    "word": "resemble",
    "pos": "v.",
    "meaning": "닮다",
    "level": "advanced"
  },
  {
    "word": "reserve",
    "pos": "v.",
    "meaning": "따로 두다",
    "level": "advanced"
  },
  {
    "word": "reside",
    "pos": "v.",
    "meaning": "거주하다",
    "level": "advanced"
  },
  {
    "word": "resign",
    "pos": "v.",
    "meaning": "사임하다",
    "level": "advanced"
  },
  {
    "word": "resist",
    "pos": "v.",
    "meaning": "저항하다",
    "level": "advanced"
  },
  {
    "word": "resolve",
    "pos": "v.",
    "meaning": "분해하다",
    "level": "advanced"
  },
  {
    "word": "resort (",
    "pos": "v.",
    "meaning": "자주)가다",
    "level": "advanced"
  },
  {
    "word": "resource",
    "pos": "n.",
    "meaning": "자원",
    "level": "advanced"
  },
  {
    "word": "respect",
    "pos": "v.",
    "meaning": "존경하다",
    "level": "advanced"
  },
  {
    "word": "respective",
    "pos": "a.",
    "meaning": "각각의",
    "level": "advanced"
  },
  {
    "word": "respond",
    "pos": "v.",
    "meaning": "대답하다",
    "level": "advanced"
  },
  {
    "word": "responsible",
    "pos": "n.",
    "meaning": "책임을 져야할",
    "level": "advanced"
  },
  {
    "word": "rest",
    "pos": "n.",
    "meaning": "휴식",
    "level": "advanced"
  },
  {
    "word": "restaurant",
    "pos": "n.",
    "meaning": "요리점",
    "level": "advanced"
  },
  {
    "word": "restore",
    "pos": "v.",
    "meaning": "반환하다",
    "level": "advanced"
  },
  {
    "word": "restrain",
    "pos": "v.",
    "meaning": "제지하다",
    "level": "advanced"
  },
  {
    "word": "restrict",
    "pos": "v.",
    "meaning": "제한하다",
    "level": "advanced"
  },
  {
    "word": "restroom",
    "pos": "n.",
    "meaning": "화장실",
    "level": "advanced"
  },
  {
    "word": "result",
    "pos": "n.",
    "meaning": "결과",
    "level": "advanced"
  },
  {
    "word": "resume",
    "pos": "v.",
    "meaning": "다시 잡다",
    "level": "advanced"
  },
  {
    "word": "retail",
    "pos": "n.",
    "meaning": "소매",
    "level": "advanced"
  },
  {
    "word": "retain",
    "pos": "v.",
    "meaning": "보유하다",
    "level": "advanced"
  },
  {
    "word": "retire",
    "pos": "v.",
    "meaning": "퇴직하다",
    "level": "advanced"
  },
  {
    "word": "retreat",
    "pos": "n.",
    "meaning": "후퇴",
    "level": "advanced"
  },
  {
    "word": "return",
    "pos": "v.",
    "meaning": "돌아가다",
    "level": "advanced"
  },
  {
    "word": "reveal",
    "pos": "v.",
    "meaning": "나타내다",
    "level": "advanced"
  },
  {
    "word": "revenge",
    "pos": "n.",
    "meaning": "복수",
    "level": "advanced"
  },
  {
    "word": "reverse",
    "pos": "n.",
    "meaning": "역",
    "level": "advanced"
  },
  {
    "word": "review",
    "pos": "n.",
    "meaning": "재조사",
    "level": "advanced"
  },
  {
    "word": "revise",
    "pos": "v.",
    "meaning": "교정하다",
    "level": "advanced"
  },
  {
    "word": "revive",
    "pos": "v.",
    "meaning": "소생하다",
    "level": "advanced"
  },
  {
    "word": "revolution",
    "pos": "n.",
    "meaning": "혁명",
    "level": "advanced"
  },
  {
    "word": "reward",
    "pos": "n.",
    "meaning": "보수",
    "level": "advanced"
  },
  {
    "word": "rhythm",
    "pos": "n.",
    "meaning": "율동",
    "level": "advanced"
  },
  {
    "word": "rice",
    "pos": "n.",
    "meaning": "쌀",
    "level": "advanced"
  },
  {
    "word": "rich",
    "pos": "a.",
    "meaning": "부자인",
    "level": "advanced"
  },
  {
    "word": "rid",
    "pos": "v.",
    "meaning": "면하게하다",
    "level": "advanced"
  },
  {
    "word": "ride",
    "pos": "v.",
    "meaning": "타다",
    "level": "advanced"
  },
  {
    "word": "ridiculous",
    "pos": "n.",
    "meaning": "어리석은",
    "level": "advanced"
  },
  {
    "word": "right",
    "pos": "n.",
    "meaning": "올바른",
    "level": "advanced"
  },
  {
    "word": "ring",
    "pos": "n.",
    "meaning": "고리",
    "level": "advanced"
  },
  {
    "word": "riot",
    "pos": "n.",
    "meaning": "폭동, 소요, 소동 야단법석, 다채로움,",
    "level": "advanced"
  },
  {
    "word": "rise",
    "pos": "v.",
    "meaning": "올리다",
    "level": "advanced"
  },
  {
    "word": "risk",
    "pos": "v.",
    "meaning": "위험 걸다",
    "level": "advanced"
  },
  {
    "word": "rival",
    "pos": "v.",
    "meaning": "경쟁자 경쟁하는 경쟁하다",
    "level": "advanced"
  },
  {
    "word": "river",
    "pos": "n.",
    "meaning": "강",
    "level": "advanced"
  },
  {
    "word": "road",
    "pos": "n.",
    "meaning": "길",
    "level": "advanced"
  },
  {
    "word": "roar",
    "pos": "v.",
    "meaning": "으르렁거리다 으르렁소리",
    "level": "advanced"
  },
  {
    "word": "roast",
    "pos": "v.",
    "meaning": "불에 쬐어 굽다 불고기 구운",
    "level": "advanced"
  },
  {
    "word": "rob",
    "pos": "v.",
    "meaning": "강탈하다, 약탈하다, 빼앗다",
    "level": "advanced"
  },
  {
    "word": "rock",
    "pos": "n.",
    "meaning": "바위",
    "level": "advanced"
  },
  {
    "word": "rod",
    "pos": "n.",
    "meaning": "막대",
    "level": "advanced"
  },
  {
    "word": "role (",
    "pos": "n.",
    "meaning": "배우의)역",
    "level": "advanced"
  },
  {
    "word": "roll",
    "pos": "v.",
    "meaning": "구르다",
    "level": "advanced"
  },
  {
    "word": "romantic",
    "pos": "a.",
    "meaning": "전기소설적인",
    "level": "advanced"
  },
  {
    "word": "roof",
    "pos": "n.",
    "meaning": "지붕",
    "level": "advanced"
  },
  {
    "word": "room",
    "pos": "n.",
    "meaning": "방",
    "level": "advanced"
  },
  {
    "word": "root",
    "pos": "n.",
    "meaning": "뿌리",
    "level": "advanced"
  },
  {
    "word": "rope",
    "pos": "n.",
    "meaning": "새끼",
    "level": "advanced"
  },
  {
    "word": "rot",
    "pos": "v.",
    "meaning": "썩다",
    "level": "advanced"
  },
  {
    "word": "rough",
    "pos": "n.",
    "meaning": "거친",
    "level": "advanced"
  },
  {
    "word": "round",
    "pos": "n.",
    "meaning": "둥근 원 돌아서",
    "level": "advanced"
  },
  {
    "word": "route",
    "pos": "n.",
    "meaning": "길",
    "level": "advanced"
  },
  {
    "word": "routine",
    "pos": "n.",
    "meaning": "정해진 일",
    "level": "advanced"
  },
  {
    "word": "row",
    "pos": "n.",
    "meaning": "줄",
    "level": "advanced"
  },
  {
    "word": "royal",
    "pos": "a.",
    "meaning": "왕의",
    "level": "advanced"
  },
  {
    "word": "rub",
    "pos": "v.",
    "meaning": "마찰하다",
    "level": "advanced"
  },
  {
    "word": "rubber",
    "pos": "n.",
    "meaning": "맛사지사",
    "level": "advanced"
  },
  {
    "word": "rude",
    "pos": "a.",
    "meaning": "버릇없는",
    "level": "advanced"
  },
  {
    "word": "ruin",
    "pos": "n.",
    "meaning": "파멸",
    "level": "advanced"
  },
  {
    "word": "rule",
    "pos": "n.",
    "meaning": "규칙",
    "level": "advanced"
  },
  {
    "word": "rumor",
    "pos": "n.",
    "meaning": "소문",
    "level": "advanced"
  },
  {
    "word": "run",
    "pos": "v.",
    "meaning": "달리다",
    "level": "advanced"
  },
  {
    "word": "rural",
    "pos": "a.",
    "meaning": "시골의",
    "level": "advanced"
  },
  {
    "word": "rush",
    "pos": "v.",
    "meaning": "돌진하다",
    "level": "advanced"
  },
  {
    "word": "sack",
    "pos": "n.",
    "meaning": "마대",
    "level": "advanced"
  },
  {
    "word": "sacred",
    "pos": "a.",
    "meaning": "신성한",
    "level": "advanced"
  },
  {
    "word": "sacrifice",
    "pos": "n.",
    "meaning": "희생",
    "level": "advanced"
  },
  {
    "word": "sad",
    "pos": "n.",
    "meaning": "슬픈",
    "level": "advanced"
  },
  {
    "word": "safe",
    "pos": "a.",
    "meaning": "안전한",
    "level": "advanced"
  },
  {
    "word": "sail",
    "pos": "n.",
    "meaning": "돛",
    "level": "advanced"
  },
  {
    "word": "salary",
    "pos": "v.",
    "meaning": "봉급 봉급을 주다",
    "level": "advanced"
  },
  {
    "word": "sale",
    "pos": "n.",
    "meaning": "판매",
    "level": "advanced"
  },
  {
    "word": "salon",
    "pos": "n.",
    "meaning": "객실",
    "level": "advanced"
  },
  {
    "word": "salt",
    "pos": "n.",
    "meaning": "소금",
    "level": "advanced"
  },
  {
    "word": "same",
    "pos": "n.",
    "meaning": "같은",
    "level": "advanced"
  },
  {
    "word": "sand",
    "pos": "n.",
    "meaning": "모래사장",
    "level": "advanced"
  },
  {
    "word": "satellite",
    "pos": "n.",
    "meaning": "위성",
    "level": "advanced"
  },
  {
    "word": "satisfy",
    "pos": "v.",
    "meaning": "만족시키다",
    "level": "advanced"
  },
  {
    "word": "save",
    "pos": "v.",
    "meaning": "위험에서 구하다",
    "level": "advanced"
  },
  {
    "word": "say",
    "pos": "v.",
    "meaning": "말하다",
    "level": "advanced"
  },
  {
    "word": "scale",
    "pos": "n.",
    "meaning": "비늘(모양의 것)",
    "level": "advanced"
  },
  {
    "word": "scan",
    "pos": "v.",
    "meaning": "시의 운율을살피다",
    "level": "advanced"
  },
  {
    "word": "scandal",
    "pos": "n.",
    "meaning": "추문",
    "level": "advanced"
  },
  {
    "word": "scarce",
    "pos": "a.",
    "meaning": "부족한",
    "level": "advanced"
  },
  {
    "word": "scare",
    "pos": "v.",
    "meaning": "위협하다",
    "level": "advanced"
  },
  {
    "word": "scatter",
    "pos": "v.",
    "meaning": "뿔뿔이 흩어 버리다",
    "level": "advanced"
  },
  {
    "word": "scene",
    "pos": "n.",
    "meaning": "장면",
    "level": "advanced"
  },
  {
    "word": "scheme",
    "pos": "n.",
    "meaning": "계획",
    "level": "advanced"
  },
  {
    "word": "scholar",
    "pos": "n.",
    "meaning": "학자",
    "level": "advanced"
  },
  {
    "word": "school",
    "pos": "n.",
    "meaning": "학교",
    "level": "advanced"
  },
  {
    "word": "science",
    "pos": "n.",
    "meaning": "과학",
    "level": "advanced"
  },
  {
    "word": "scissors",
    "pos": "n.",
    "meaning": "가위",
    "level": "advanced"
  },
  {
    "word": "scold",
    "pos": "v.",
    "meaning": "꾸짖다 잔소리 심한 사람",
    "level": "advanced"
  },
  {
    "word": "scope",
    "pos": "n.",
    "meaning": "범위",
    "level": "advanced"
  },
  {
    "word": "score",
    "pos": "n.",
    "meaning": "득점",
    "level": "advanced"
  },
  {
    "word": "scramble",
    "pos": "v.",
    "meaning": "기다",
    "level": "advanced"
  },
  {
    "word": "scratch",
    "pos": "v.",
    "meaning": "할퀴다, 할퀴어 상처 를 내다 긁다",
    "level": "advanced"
  },
  {
    "word": "scream",
    "pos": "v.",
    "meaning": "비명을 지르다",
    "level": "advanced"
  },
  {
    "word": "screen",
    "pos": "n.",
    "meaning": "병풍",
    "level": "advanced"
  },
  {
    "word": "screw",
    "pos": "n.",
    "meaning": "나사",
    "level": "advanced"
  },
  {
    "word": "scrub (",
    "pos": "n.",
    "meaning": "관목의)숲",
    "level": "advanced"
  },
  {
    "word": "sculpture",
    "pos": "v.",
    "meaning": "조각 조각하다",
    "level": "advanced"
  },
  {
    "word": "sea",
    "pos": "v.",
    "meaning": "바다",
    "level": "advanced"
  },
  {
    "word": "seal",
    "pos": "n.",
    "meaning": "인장",
    "level": "advanced"
  },
  {
    "word": "search",
    "pos": "v.",
    "meaning": "찾다",
    "level": "advanced"
  },
  {
    "word": "season",
    "pos": "n.",
    "meaning": "계절",
    "level": "advanced"
  },
  {
    "word": "seat",
    "pos": "n.",
    "meaning": "좌석",
    "level": "advanced"
  },
  {
    "word": "secret",
    "pos": "a.",
    "meaning": "비밀의",
    "level": "advanced"
  },
  {
    "word": "secretary",
    "pos": "n.",
    "meaning": "비서",
    "level": "advanced"
  },
  {
    "word": "sector",
    "pos": "n.",
    "meaning": "부채꼴",
    "level": "advanced"
  },
  {
    "word": "secure",
    "pos": "a.",
    "meaning": "안전한",
    "level": "advanced"
  },
  {
    "word": "see",
    "pos": "v.",
    "meaning": "보다",
    "level": "advanced"
  },
  {
    "word": "seed",
    "pos": "n.",
    "meaning": "씨앗",
    "level": "advanced"
  },
  {
    "word": "seek",
    "pos": "v.",
    "meaning": "찾다",
    "level": "advanced"
  },
  {
    "word": "seem -",
    "pos": "v.",
    "meaning": "으로 보이다",
    "level": "advanced"
  },
  {
    "word": "seize",
    "pos": "v.",
    "meaning": "붙잡다",
    "level": "advanced"
  },
  {
    "word": "select",
    "pos": "v.",
    "meaning": "고르다",
    "level": "advanced"
  },
  {
    "word": "self",
    "pos": "n.",
    "meaning": "자기",
    "level": "advanced"
  },
  {
    "word": "sell",
    "pos": "v.",
    "meaning": "팔다",
    "level": "advanced"
  },
  {
    "word": "send",
    "pos": "v.",
    "meaning": "보내다",
    "level": "advanced"
  },
  {
    "word": "senior",
    "pos": "a.",
    "meaning": "연상의",
    "level": "advanced"
  },
  {
    "word": "sensation",
    "pos": "n.",
    "meaning": "감각",
    "level": "advanced"
  },
  {
    "word": "sense",
    "pos": "n.",
    "meaning": "감각",
    "level": "advanced"
  },
  {
    "word": "sensible",
    "pos": "a.",
    "meaning": "분별있는",
    "level": "advanced"
  },
  {
    "word": "sentence",
    "pos": "n.",
    "meaning": "문장",
    "level": "advanced"
  },
  {
    "word": "sentiment",
    "pos": "n.",
    "meaning": "정서",
    "level": "advanced"
  },
  {
    "word": "separate",
    "pos": "a.",
    "meaning": "분리된",
    "level": "advanced"
  },
  {
    "word": "sequence",
    "pos": "n.",
    "meaning": "연속",
    "level": "advanced"
  },
  {
    "word": "series",
    "pos": "n.",
    "meaning": "연속",
    "level": "advanced"
  },
  {
    "word": "serious",
    "pos": "a.",
    "meaning": "진지한",
    "level": "advanced"
  },
  {
    "word": "serve",
    "pos": "v.",
    "meaning": "섬기다",
    "level": "advanced"
  },
  {
    "word": "session",
    "pos": "n.",
    "meaning": "개회",
    "level": "advanced"
  },
  {
    "word": "settle",
    "pos": "v.",
    "meaning": "등받이가 높은 긴 의자 놓다",
    "level": "advanced"
  },
  {
    "word": "several",
    "pos": "a.",
    "meaning": "수개의",
    "level": "advanced"
  },
  {
    "word": "severe",
    "pos": "a.",
    "meaning": "호된",
    "level": "advanced"
  },
  {
    "word": "sew",
    "pos": "v.",
    "meaning": "꿰매다",
    "level": "advanced"
  },
  {
    "word": "sex",
    "pos": "n.",
    "meaning": "성",
    "level": "advanced"
  },
  {
    "word": "shade",
    "pos": "n.",
    "meaning": "그늘",
    "level": "advanced"
  },
  {
    "word": "shadow",
    "pos": "n.",
    "meaning": "그림자",
    "level": "advanced"
  },
  {
    "word": "shake",
    "pos": "v.",
    "meaning": "흔들어 움직이다",
    "level": "advanced"
  },
  {
    "word": "shall au-",
    "pos": "v.",
    "meaning": "하겠다",
    "level": "advanced"
  },
  {
    "word": "shallow",
    "pos": "v.",
    "meaning": "얕은 얕은 곳 얕아지다",
    "level": "advanced"
  },
  {
    "word": "shame",
    "pos": "n.",
    "meaning": "부끄럼",
    "level": "advanced"
  },
  {
    "word": "shape",
    "pos": "n.",
    "meaning": "모양",
    "level": "advanced"
  },
  {
    "word": "share",
    "pos": "n.",
    "meaning": "몫",
    "level": "advanced"
  },
  {
    "word": "sharp",
    "pos": "a.",
    "meaning": "날카로운",
    "level": "advanced"
  },
  {
    "word": "shave",
    "pos": "v.",
    "meaning": "깎다",
    "level": "advanced"
  },
  {
    "word": "she",
    "pos": "a.",
    "meaning": "그녀는",
    "level": "advanced"
  },
  {
    "word": "sheep",
    "pos": "n.",
    "meaning": "양",
    "level": "advanced"
  },
  {
    "word": "sheet",
    "pos": "n.",
    "meaning": "깔천",
    "level": "advanced"
  },
  {
    "word": "shelf",
    "pos": "n.",
    "meaning": "선반",
    "level": "advanced"
  },
  {
    "word": "shell",
    "pos": "n.",
    "meaning": "겉껍질",
    "level": "advanced"
  },
  {
    "word": "shelter",
    "pos": "n.",
    "meaning": "피난처",
    "level": "advanced"
  },
  {
    "word": "shield",
    "pos": "n.",
    "meaning": "방패",
    "level": "advanced"
  },
  {
    "word": "shift",
    "pos": "v.",
    "meaning": "옮기다",
    "level": "advanced"
  },
  {
    "word": "shine",
    "pos": "v.",
    "meaning": "빛나다",
    "level": "advanced"
  },
  {
    "word": "ship",
    "pos": "n.",
    "meaning": "배",
    "level": "advanced"
  },
  {
    "word": "shock",
    "pos": "n.",
    "meaning": "격돌",
    "level": "advanced"
  },
  {
    "word": "shoe",
    "pos": "n.",
    "meaning": "구두",
    "level": "advanced"
  },
  {
    "word": "shoot",
    "pos": "v.",
    "meaning": "쏘다",
    "level": "advanced"
  },
  {
    "word": "shop",
    "pos": "n.",
    "meaning": "상점",
    "level": "advanced"
  },
  {
    "word": "shore",
    "pos": "n.",
    "meaning": "물가",
    "level": "advanced"
  },
  {
    "word": "short",
    "pos": "n.",
    "meaning": "짧은",
    "level": "advanced"
  },
  {
    "word": "should aushall",
    "pos": "n.",
    "meaning": "의 과거",
    "level": "advanced"
  },
  {
    "word": "shoulder",
    "pos": "n.",
    "meaning": "어깨",
    "level": "advanced"
  },
  {
    "word": "shout",
    "pos": "v.",
    "meaning": "외치다",
    "level": "advanced"
  },
  {
    "word": "show",
    "pos": "v.",
    "meaning": "보이다",
    "level": "advanced"
  },
  {
    "word": "shower",
    "pos": "n.",
    "meaning": "소나기 빗발치듯 퍼붓다(쏟다)",
    "level": "advanced"
  },
  {
    "word": "shrink",
    "pos": "v.",
    "meaning": "줄어들다",
    "level": "advanced"
  },
  {
    "word": "shut",
    "pos": "v.",
    "meaning": "닫다",
    "level": "advanced"
  },
  {
    "word": "shy",
    "pos": "n.",
    "meaning": "수줍은",
    "level": "advanced"
  },
  {
    "word": "sick",
    "pos": "n.",
    "meaning": "병난",
    "level": "advanced"
  },
  {
    "word": "side",
    "pos": "n.",
    "meaning": "쪽",
    "level": "advanced"
  },
  {
    "word": "sigh",
    "pos": "n.",
    "meaning": "한숨",
    "level": "advanced"
  },
  {
    "word": "sight",
    "pos": "n.",
    "meaning": "광경",
    "level": "advanced"
  },
  {
    "word": "sign",
    "pos": "n.",
    "meaning": "부호",
    "level": "advanced"
  },
  {
    "word": "significant",
    "pos": "a.",
    "meaning": "중요한",
    "level": "advanced"
  },
  {
    "word": "silent",
    "pos": "a.",
    "meaning": "조용한",
    "level": "advanced"
  },
  {
    "word": "silk",
    "pos": "n.",
    "meaning": "비단",
    "level": "advanced"
  },
  {
    "word": "silly",
    "pos": "n.",
    "meaning": "어리석은 바보",
    "level": "advanced"
  },
  {
    "word": "silver",
    "pos": "n.",
    "meaning": "은",
    "level": "advanced"
  },
  {
    "word": "similar",
    "pos": "a.",
    "meaning": "유사한",
    "level": "advanced"
  },
  {
    "word": "simple",
    "pos": "a.",
    "meaning": "단일의",
    "level": "advanced"
  },
  {
    "word": "simulate",
    "pos": "v.",
    "meaning": "흉내내다",
    "level": "advanced"
  },
  {
    "word": "simultaneous",
    "pos": "n.",
    "meaning": "동시에 일어나는(존재하는)",
    "level": "advanced"
  },
  {
    "word": "sin",
    "pos": "a.",
    "meaning": "사인",
    "level": "advanced"
  },
  {
    "word": "since -",
    "pos": "n.",
    "meaning": "이래",
    "level": "advanced"
  },
  {
    "word": "sing",
    "pos": "v.",
    "meaning": "노래하다",
    "level": "advanced"
  },
  {
    "word": "single",
    "pos": "a.",
    "meaning": "단 하나의",
    "level": "advanced"
  },
  {
    "word": "sink",
    "pos": "v.",
    "meaning": "가라앉다",
    "level": "advanced"
  },
  {
    "word": "sister",
    "pos": "n.",
    "meaning": "여자형제",
    "level": "advanced"
  },
  {
    "word": "sit",
    "pos": "v.",
    "meaning": "앉다",
    "level": "advanced"
  },
  {
    "word": "site",
    "pos": "n.",
    "meaning": "부지",
    "level": "advanced"
  },
  {
    "word": "situation",
    "pos": "n.",
    "meaning": "장소",
    "level": "advanced"
  },
  {
    "word": "size",
    "pos": "n.",
    "meaning": "크기",
    "level": "advanced"
  },
  {
    "word": "skill",
    "pos": "n.",
    "meaning": "숙련",
    "level": "advanced"
  },
  {
    "word": "skin",
    "pos": "n.",
    "meaning": "피부",
    "level": "advanced"
  },
  {
    "word": "skip",
    "pos": "n.",
    "meaning": "도약",
    "level": "advanced"
  },
  {
    "word": "skirt",
    "pos": "n.",
    "meaning": "스커어트",
    "level": "advanced"
  },
  {
    "word": "sky",
    "pos": "n.",
    "meaning": "하늘",
    "level": "advanced"
  },
  {
    "word": "slaughter",
    "pos": "n.",
    "meaning": "도살",
    "level": "advanced"
  },
  {
    "word": "slave",
    "pos": "v.",
    "meaning": "노예 노예처럼 일하다",
    "level": "advanced"
  },
  {
    "word": "sleep",
    "pos": "v.",
    "meaning": "잠자다",
    "level": "advanced"
  },
  {
    "word": "slice",
    "pos": "n.",
    "meaning": "얇은조각",
    "level": "advanced"
  },
  {
    "word": "slide",
    "pos": "v.",
    "meaning": "미끄러지다",
    "level": "advanced"
  },
  {
    "word": "slight",
    "pos": "a.",
    "meaning": "약간의",
    "level": "advanced"
  },
  {
    "word": "slim",
    "pos": "a.",
    "meaning": "호리호리한",
    "level": "advanced"
  },
  {
    "word": "slip (",
    "pos": "v.",
    "meaning": "때가)어느덧 지나가다",
    "level": "advanced"
  },
  {
    "word": "slope",
    "pos": "n.",
    "meaning": "비탈",
    "level": "advanced"
  },
  {
    "word": "slow",
    "pos": "n.",
    "meaning": "느린",
    "level": "advanced"
  },
  {
    "word": "small",
    "pos": "ad.",
    "meaning": "작은 작은 부분 적게",
    "level": "advanced"
  },
  {
    "word": "smart",
    "pos": "a.",
    "meaning": "재치있는",
    "level": "advanced"
  },
  {
    "word": "smash",
    "pos": "v.",
    "meaning": "박살내다",
    "level": "advanced"
  },
  {
    "word": "smell",
    "pos": "n.",
    "meaning": "냄새",
    "level": "advanced"
  },
  {
    "word": "smile",
    "pos": "v.",
    "meaning": "미소짓다 미소",
    "level": "advanced"
  },
  {
    "word": "smoke",
    "pos": "n.",
    "meaning": "연기",
    "level": "advanced"
  },
  {
    "word": "smooth",
    "pos": "n.",
    "meaning": "매끄러운",
    "level": "advanced"
  },
  {
    "word": "snake",
    "pos": "n.",
    "meaning": "뱀",
    "level": "advanced"
  },
  {
    "word": "snap",
    "pos": "v.",
    "meaning": "덥석 물다",
    "level": "advanced"
  },
  {
    "word": "sneak",
    "pos": "v.",
    "meaning": "몰래 움직이다",
    "level": "advanced"
  },
  {
    "word": "sniff",
    "pos": "v.",
    "meaning": "코를 킁킁거리다",
    "level": "advanced"
  },
  {
    "word": "snow",
    "pos": "v.",
    "meaning": "눈 눈이 내리다",
    "level": "advanced"
  },
  {
    "word": "so",
    "pos": "n.",
    "meaning": "그와 같이",
    "level": "advanced"
  },
  {
    "word": "soak",
    "pos": "v.",
    "meaning": "담그다",
    "level": "advanced"
  },
  {
    "word": "soap",
    "pos": "v.",
    "meaning": "비누 비누로 씻다",
    "level": "advanced"
  },
  {
    "word": "soccer",
    "pos": "n.",
    "meaning": "축구",
    "level": "advanced"
  },
  {
    "word": "social",
    "pos": "a.",
    "meaning": "사회의",
    "level": "advanced"
  },
  {
    "word": "society",
    "pos": "n.",
    "meaning": "사회",
    "level": "advanced"
  },
  {
    "word": "sociology",
    "pos": "n.",
    "meaning": "사회학",
    "level": "advanced"
  },
  {
    "word": "sock",
    "pos": "n.",
    "meaning": "짧은 양말",
    "level": "advanced"
  },
  {
    "word": "soft",
    "pos": "n.",
    "meaning": "부드러운",
    "level": "advanced"
  },
  {
    "word": "software",
    "pos": "n.",
    "meaning": "소프트웨어",
    "level": "advanced"
  },
  {
    "word": "soil",
    "pos": "n.",
    "meaning": "흙",
    "level": "advanced"
  },
  {
    "word": "soldier",
    "pos": "a.",
    "meaning": "군인",
    "level": "advanced"
  },
  {
    "word": "sole",
    "pos": "n.",
    "meaning": "유일한 발바닥",
    "level": "advanced"
  },
  {
    "word": "solid",
    "pos": "a.",
    "meaning": "고체의",
    "level": "advanced"
  },
  {
    "word": "solo",
    "pos": "n.",
    "meaning": "독주",
    "level": "advanced"
  },
  {
    "word": "solve",
    "pos": "v.",
    "meaning": "해결하다",
    "level": "advanced"
  },
  {
    "word": "some",
    "pos": "a.",
    "meaning": "얼만가의",
    "level": "advanced"
  },
  {
    "word": "somewhat",
    "pos": "n.",
    "meaning": "약간",
    "level": "advanced"
  },
  {
    "word": "son",
    "pos": "n.",
    "meaning": "아들",
    "level": "advanced"
  },
  {
    "word": "song",
    "pos": "n.",
    "meaning": "노래",
    "level": "advanced"
  },
  {
    "word": "soon",
    "pos": "n.",
    "meaning": "얼마 안 가서",
    "level": "advanced"
  },
  {
    "word": "sophisticated",
    "pos": "n.",
    "meaning": "물정에 닳고 닳은",
    "level": "advanced"
  },
  {
    "word": "sore",
    "pos": "n.",
    "meaning": "슬픈",
    "level": "advanced"
  },
  {
    "word": "sorry",
    "pos": "n.",
    "meaning": "가엾은",
    "level": "advanced"
  },
  {
    "word": "sort",
    "pos": "n.",
    "meaning": "종류",
    "level": "advanced"
  },
  {
    "word": "soul",
    "pos": "n.",
    "meaning": "혼",
    "level": "advanced"
  },
  {
    "word": "sound",
    "pos": "n.",
    "meaning": "소리",
    "level": "advanced"
  },
  {
    "word": "sour",
    "pos": "v.",
    "meaning": "시큼한 시어지다 시큼한 것",
    "level": "advanced"
  },
  {
    "word": "source",
    "pos": "n.",
    "meaning": "원천",
    "level": "advanced"
  },
  {
    "word": "south",
    "pos": "ad.",
    "meaning": "남쪽 남쪽의 남으로",
    "level": "advanced"
  },
  {
    "word": "space",
    "pos": "n.",
    "meaning": "공간",
    "level": "advanced"
  },
  {
    "word": "span",
    "pos": "n.",
    "meaning": "한 뼘",
    "level": "advanced"
  },
  {
    "word": "spare",
    "pos": "a.",
    "meaning": "여분의",
    "level": "advanced"
  },
  {
    "word": "spark",
    "pos": "n.",
    "meaning": "불꽃",
    "level": "advanced"
  },
  {
    "word": "speak",
    "pos": "v.",
    "meaning": "이야기하다",
    "level": "advanced"
  },
  {
    "word": "special",
    "pos": "a.",
    "meaning": "특별한",
    "level": "advanced"
  },
  {
    "word": "species",
    "pos": "n.",
    "meaning": "종",
    "level": "advanced"
  },
  {
    "word": "specific",
    "pos": "a.",
    "meaning": "특정한",
    "level": "advanced"
  },
  {
    "word": "spectacle",
    "pos": "n.",
    "meaning": "광경",
    "level": "advanced"
  },
  {
    "word": "spectrum",
    "pos": "n.",
    "meaning": "스펙트럼",
    "level": "advanced"
  },
  {
    "word": "speech",
    "pos": "n.",
    "meaning": "연설",
    "level": "advanced"
  },
  {
    "word": "speed",
    "pos": "n.",
    "meaning": "속도",
    "level": "advanced"
  },
  {
    "word": "spell",
    "pos": "v.",
    "meaning": "철자하다",
    "level": "advanced"
  },
  {
    "word": "spend",
    "pos": "v.",
    "meaning": "소비하다",
    "level": "advanced"
  },
  {
    "word": "sphere",
    "pos": "n.",
    "meaning": "구",
    "level": "advanced"
  },
  {
    "word": "spill",
    "pos": "v.",
    "meaning": "엎지르다",
    "level": "advanced"
  },
  {
    "word": "spin",
    "pos": "v.",
    "meaning": "잣다",
    "level": "advanced"
  },
  {
    "word": "spirit",
    "pos": "n.",
    "meaning": "정신",
    "level": "advanced"
  },
  {
    "word": "spit",
    "pos": "v.",
    "meaning": "침을 뱉다",
    "level": "advanced"
  },
  {
    "word": "spite",
    "pos": "a.",
    "meaning": "악의",
    "level": "advanced"
  },
  {
    "word": "splash",
    "pos": "v.",
    "meaning": "튀기다",
    "level": "advanced"
  },
  {
    "word": "split",
    "pos": "v.",
    "meaning": "쪼개다",
    "level": "advanced"
  },
  {
    "word": "spoil",
    "pos": "v.",
    "meaning": "망쳐놓다",
    "level": "advanced"
  },
  {
    "word": "spoon",
    "pos": "n.",
    "meaning": "숟가락",
    "level": "advanced"
  },
  {
    "word": "spot",
    "pos": "n.",
    "meaning": "장소",
    "level": "advanced"
  },
  {
    "word": "spouse",
    "pos": "n.",
    "meaning": "배우자",
    "level": "advanced"
  },
  {
    "word": "spread",
    "pos": "v.",
    "meaning": "펴다",
    "level": "advanced"
  },
  {
    "word": "square",
    "pos": "a.",
    "meaning": "정사각형의",
    "level": "advanced"
  },
  {
    "word": "squeeze",
    "pos": "v.",
    "meaning": "압착하다",
    "level": "advanced"
  },
  {
    "word": "stable",
    "pos": "a.",
    "meaning": "안정된",
    "level": "advanced"
  },
  {
    "word": "stack",
    "pos": "n.",
    "meaning": "낟가리",
    "level": "advanced"
  },
  {
    "word": "stage",
    "pos": "n.",
    "meaning": "무대",
    "level": "advanced"
  },
  {
    "word": "stain",
    "pos": "v.",
    "meaning": "더럽히다",
    "level": "advanced"
  },
  {
    "word": "stairs",
    "pos": "n.",
    "meaning": "계단",
    "level": "advanced"
  },
  {
    "word": "stamp",
    "pos": "n.",
    "meaning": "도장",
    "level": "advanced"
  },
  {
    "word": "stand",
    "pos": "v.",
    "meaning": "서다",
    "level": "advanced"
  },
  {
    "word": "standard",
    "pos": "n.",
    "meaning": "표준",
    "level": "advanced"
  },
  {
    "word": "stare",
    "pos": "v.",
    "meaning": "응시하다",
    "level": "advanced"
  },
  {
    "word": "start",
    "pos": "v.",
    "meaning": "시작하다",
    "level": "advanced"
  },
  {
    "word": "starve",
    "pos": "v.",
    "meaning": "굶어 죽다",
    "level": "advanced"
  },
  {
    "word": "state",
    "pos": "n.",
    "meaning": "상태",
    "level": "advanced"
  },
  {
    "word": "station",
    "pos": "n.",
    "meaning": "역",
    "level": "advanced"
  },
  {
    "word": "statistic",
    "pos": "n.",
    "meaning": "통계의 통계량",
    "level": "advanced"
  },
  {
    "word": "statue",
    "pos": "n.",
    "meaning": "조상",
    "level": "advanced"
  },
  {
    "word": "status",
    "pos": "n.",
    "meaning": "신분",
    "level": "advanced"
  },
  {
    "word": "stay",
    "pos": "v.",
    "meaning": "머무르다",
    "level": "advanced"
  },
  {
    "word": "steady",
    "pos": "a.",
    "meaning": "확고한",
    "level": "advanced"
  },
  {
    "word": "steal",
    "pos": "v.",
    "meaning": "훔치다",
    "level": "advanced"
  },
  {
    "word": "steam",
    "pos": "n.",
    "meaning": "증기",
    "level": "advanced"
  },
  {
    "word": "steel",
    "pos": "n.",
    "meaning": "강철",
    "level": "advanced"
  },
  {
    "word": "steep",
    "pos": "v.",
    "meaning": "가파른 -에 담그다 잠기다 담그기",
    "level": "advanced"
  },
  {
    "word": "stem",
    "pos": "n.",
    "meaning": "줄기",
    "level": "advanced"
  },
  {
    "word": "step",
    "pos": "v.",
    "meaning": "걷다",
    "level": "advanced"
  },
  {
    "word": "stick",
    "pos": "n.",
    "meaning": "나무토막",
    "level": "advanced"
  },
  {
    "word": "stiff",
    "pos": "n.",
    "meaning": "굳은",
    "level": "advanced"
  },
  {
    "word": "still",
    "pos": "n.",
    "meaning": "소리가 없는 아직(도)",
    "level": "advanced"
  },
  {
    "word": "stimulate",
    "pos": "v.",
    "meaning": "자극하다",
    "level": "advanced"
  },
  {
    "word": "stir",
    "pos": "v.",
    "meaning": "휘젓다",
    "level": "advanced"
  },
  {
    "word": "stitch",
    "pos": "n.",
    "meaning": "한 바늘",
    "level": "advanced"
  },
  {
    "word": "stock",
    "pos": "n.",
    "meaning": "줄기",
    "level": "advanced"
  },
  {
    "word": "stomach",
    "pos": "n.",
    "meaning": "위",
    "level": "advanced"
  },
  {
    "word": "stone",
    "pos": "n.",
    "meaning": "돌",
    "level": "advanced"
  },
  {
    "word": "stop",
    "pos": "v.",
    "meaning": "멈추다",
    "level": "advanced"
  },
  {
    "word": "store",
    "pos": "ad.",
    "meaning": "가게",
    "level": "advanced"
  },
  {
    "word": "storm",
    "pos": "n.",
    "meaning": "폭풍",
    "level": "advanced"
  },
  {
    "word": "story",
    "pos": "n.",
    "meaning": "층",
    "level": "advanced"
  },
  {
    "word": "stove stave",
    "pos": "n.",
    "meaning": "의 과거(분사)",
    "level": "advanced"
  },
  {
    "word": "straight",
    "pos": "n.",
    "meaning": "곧은",
    "level": "advanced"
  },
  {
    "word": "strain",
    "pos": "v.",
    "meaning": "잡아당기다",
    "level": "advanced"
  },
  {
    "word": "strange",
    "pos": "a.",
    "meaning": "이상한",
    "level": "advanced"
  },
  {
    "word": "strategy",
    "pos": "n.",
    "meaning": "용병학",
    "level": "advanced"
  },
  {
    "word": "straw",
    "pos": "n.",
    "meaning": "짚",
    "level": "advanced"
  },
  {
    "word": "strawberry",
    "pos": "n.",
    "meaning": "딸기",
    "level": "advanced"
  },
  {
    "word": "stream",
    "pos": "n.",
    "meaning": "시내",
    "level": "advanced"
  },
  {
    "word": "street",
    "pos": "n.",
    "meaning": "거리",
    "level": "advanced"
  },
  {
    "word": "stress",
    "pos": "n.",
    "meaning": "압박",
    "level": "advanced"
  },
  {
    "word": "stretch",
    "pos": "v.",
    "meaning": "뻗치다",
    "level": "advanced"
  },
  {
    "word": "strict",
    "pos": "a.",
    "meaning": "엄중한",
    "level": "advanced"
  },
  {
    "word": "strike",
    "pos": "v.",
    "meaning": "치다",
    "level": "advanced"
  },
  {
    "word": "string",
    "pos": "n.",
    "meaning": "끈",
    "level": "advanced"
  },
  {
    "word": "strip",
    "pos": "v.",
    "meaning": "벗기다",
    "level": "advanced"
  },
  {
    "word": "stripe",
    "pos": "n.",
    "meaning": "줄무늬",
    "level": "advanced"
  },
  {
    "word": "stroke",
    "pos": "n.",
    "meaning": "한번치기",
    "level": "advanced"
  },
  {
    "word": "strong",
    "pos": "a.",
    "meaning": "강한",
    "level": "advanced"
  },
  {
    "word": "structure",
    "pos": "n.",
    "meaning": "구조",
    "level": "advanced"
  },
  {
    "word": "struggle",
    "pos": "v.",
    "meaning": "버둥거리다",
    "level": "advanced"
  },
  {
    "word": "student",
    "pos": "n.",
    "meaning": "학생",
    "level": "advanced"
  },
  {
    "word": "study",
    "pos": "n.",
    "meaning": "학문",
    "level": "advanced"
  },
  {
    "word": "stuff",
    "pos": "n.",
    "meaning": "재료",
    "level": "advanced"
  },
  {
    "word": "subject",
    "pos": "v.",
    "meaning": "복종시키다",
    "level": "advanced"
  },
  {
    "word": "subjective",
    "pos": "a.",
    "meaning": "주관의",
    "level": "advanced"
  },
  {
    "word": "submarine",
    "pos": "n.",
    "meaning": "잠수함",
    "level": "advanced"
  },
  {
    "word": "submit",
    "pos": "v.",
    "meaning": "복종시키다",
    "level": "advanced"
  },
  {
    "word": "subscribe",
    "pos": "v.",
    "meaning": "서명승락하다",
    "level": "advanced"
  },
  {
    "word": "substance",
    "pos": "n.",
    "meaning": "물질",
    "level": "advanced"
  },
  {
    "word": "substantial",
    "pos": "a.",
    "meaning": "실체의",
    "level": "advanced"
  },
  {
    "word": "substitute",
    "pos": "v.",
    "meaning": "대용하다 대신하다 대리(인)",
    "level": "advanced"
  },
  {
    "word": "subtle",
    "pos": "a.",
    "meaning": "미묘한",
    "level": "advanced"
  },
  {
    "word": "suburb",
    "pos": "n.",
    "meaning": "교외",
    "level": "advanced"
  },
  {
    "word": "subway",
    "pos": "n.",
    "meaning": "지하도",
    "level": "advanced"
  },
  {
    "word": "succeed",
    "pos": "v.",
    "meaning": "성공하다",
    "level": "advanced"
  },
  {
    "word": "such",
    "pos": "a.",
    "meaning": "이러한",
    "level": "advanced"
  },
  {
    "word": "suck",
    "pos": "v.",
    "meaning": "빨다",
    "level": "advanced"
  },
  {
    "word": "sudden",
    "pos": "a.",
    "meaning": "별안간의",
    "level": "advanced"
  },
  {
    "word": "suffer",
    "pos": "v.",
    "meaning": "경험하다",
    "level": "advanced"
  },
  {
    "word": "sufficient",
    "pos": "a.",
    "meaning": "충분한",
    "level": "advanced"
  },
  {
    "word": "sugar",
    "pos": "n.",
    "meaning": "설탕",
    "level": "advanced"
  },
  {
    "word": "suggest",
    "pos": "v.",
    "meaning": "암시하다",
    "level": "advanced"
  },
  {
    "word": "suicide",
    "pos": "v.",
    "meaning": "자살 자살하다",
    "level": "advanced"
  },
  {
    "word": "suit",
    "pos": "n.",
    "meaning": "소송",
    "level": "advanced"
  },
  {
    "word": "suite",
    "pos": "n.",
    "meaning": "수행원",
    "level": "advanced"
  },
  {
    "word": "sum",
    "pos": "n.",
    "meaning": "총계",
    "level": "advanced"
  },
  {
    "word": "summary",
    "pos": "n.",
    "meaning": "요약",
    "level": "advanced"
  },
  {
    "word": "summit",
    "pos": "n.",
    "meaning": "꼭대기",
    "level": "advanced"
  },
  {
    "word": "sun",
    "pos": "n.",
    "meaning": "태양",
    "level": "advanced"
  },
  {
    "word": "super",
    "pos": "n.",
    "meaning": "임시고용배우",
    "level": "advanced"
  },
  {
    "word": "superb",
    "pos": "a.",
    "meaning": "장려한",
    "level": "advanced"
  },
  {
    "word": "superior",
    "pos": "n.",
    "meaning": "뛰어난",
    "level": "advanced"
  },
  {
    "word": "supervise",
    "pos": "v.",
    "meaning": "감독하다",
    "level": "advanced"
  },
  {
    "word": "supper",
    "pos": "n.",
    "meaning": "저녁식사",
    "level": "advanced"
  },
  {
    "word": "supplement",
    "pos": "n.",
    "meaning": "부록",
    "level": "advanced"
  },
  {
    "word": "supply",
    "pos": "v.",
    "meaning": "공급하다",
    "level": "advanced"
  },
  {
    "word": "support",
    "pos": "v.",
    "meaning": "지탱하다",
    "level": "advanced"
  },
  {
    "word": "suppose",
    "pos": "v.",
    "meaning": "상상하다",
    "level": "advanced"
  },
  {
    "word": "sure",
    "pos": "a.",
    "meaning": "확신하는, 확실한 , 틀림없는",
    "level": "advanced"
  },
  {
    "word": "surface",
    "pos": "n.",
    "meaning": "표면",
    "level": "advanced"
  },
  {
    "word": "surgery",
    "pos": "n.",
    "meaning": "외과",
    "level": "advanced"
  },
  {
    "word": "surprise",
    "pos": "n.",
    "meaning": "놀람",
    "level": "advanced"
  },
  {
    "word": "surrender",
    "pos": "v.",
    "meaning": "넘겨주다",
    "level": "advanced"
  },
  {
    "word": "surround",
    "pos": "v.",
    "meaning": "에워싸다",
    "level": "advanced"
  },
  {
    "word": "survey",
    "pos": "v.",
    "meaning": "둘러보다",
    "level": "advanced"
  },
  {
    "word": "survive",
    "pos": "v.",
    "meaning": "살아 남다",
    "level": "advanced"
  },
  {
    "word": "suspect",
    "pos": "v.",
    "meaning": "짐작하다",
    "level": "advanced"
  },
  {
    "word": "suspend",
    "pos": "v.",
    "meaning": "매달다",
    "level": "advanced"
  },
  {
    "word": "sustain",
    "pos": "v.",
    "meaning": "떠받치다",
    "level": "advanced"
  },
  {
    "word": "swallow",
    "pos": "v.",
    "meaning": "삼키다",
    "level": "advanced"
  },
  {
    "word": "swear",
    "pos": "v.",
    "meaning": "맹세하다",
    "level": "advanced"
  },
  {
    "word": "sweat",
    "pos": "n.",
    "meaning": "땀",
    "level": "advanced"
  },
  {
    "word": "sweep",
    "pos": "v.",
    "meaning": "청소하다",
    "level": "advanced"
  },
  {
    "word": "sweet",
    "pos": "n.",
    "meaning": "단",
    "level": "advanced"
  },
  {
    "word": "swell",
    "pos": "v.",
    "meaning": "부풀다",
    "level": "advanced"
  },
  {
    "word": "swift",
    "pos": "n.",
    "meaning": "빠른",
    "level": "advanced"
  },
  {
    "word": "swim",
    "pos": "v.",
    "meaning": "헤엄치다",
    "level": "advanced"
  },
  {
    "word": "swing",
    "pos": "v.",
    "meaning": "흔들리다",
    "level": "advanced"
  },
  {
    "word": "switch",
    "pos": "n.",
    "meaning": "회초리",
    "level": "advanced"
  },
  {
    "word": "symbol",
    "pos": "n.",
    "meaning": "상징",
    "level": "advanced"
  },
  {
    "word": "sympathy",
    "pos": "n.",
    "meaning": "동정",
    "level": "advanced"
  },
  {
    "word": "symphony",
    "pos": "n.",
    "meaning": "교향곡",
    "level": "advanced"
  },
  {
    "word": "symptom",
    "pos": "n.",
    "meaning": "조짐",
    "level": "advanced"
  },
  {
    "word": "system",
    "pos": "n.",
    "meaning": "조직",
    "level": "advanced"
  },
  {
    "word": "table",
    "pos": "n.",
    "meaning": "테이블",
    "level": "advanced"
  },
  {
    "word": "tackle",
    "pos": "n.",
    "meaning": "고패",
    "level": "advanced"
  },
  {
    "word": "tag",
    "pos": "n.",
    "meaning": "손잡이가죽",
    "level": "advanced"
  },
  {
    "word": "tail",
    "pos": "n.",
    "meaning": "꼬리",
    "level": "advanced"
  },
  {
    "word": "take",
    "pos": "v.",
    "meaning": "잡다",
    "level": "advanced"
  },
  {
    "word": "tale",
    "pos": "n.",
    "meaning": "이야기",
    "level": "advanced"
  },
  {
    "word": "talent",
    "pos": "n.",
    "meaning": "재주",
    "level": "advanced"
  },
  {
    "word": "talk",
    "pos": "v.",
    "meaning": "말하다",
    "level": "advanced"
  },
  {
    "word": "tall",
    "pos": "n.",
    "meaning": "키큰",
    "level": "advanced"
  },
  {
    "word": "tap",
    "pos": "n.",
    "meaning": "가볍게 치기",
    "level": "advanced"
  },
  {
    "word": "tape",
    "pos": "n.",
    "meaning": "테이프",
    "level": "advanced"
  },
  {
    "word": "target",
    "pos": "n.",
    "meaning": "과녁",
    "level": "advanced"
  },
  {
    "word": "task",
    "pos": "n.",
    "meaning": "일",
    "level": "advanced"
  },
  {
    "word": "taste",
    "pos": "n.",
    "meaning": "맛",
    "level": "advanced"
  },
  {
    "word": "tattoo",
    "pos": "n.",
    "meaning": "귀영나팔",
    "level": "advanced"
  },
  {
    "word": "tax",
    "pos": "n.",
    "meaning": "세금",
    "level": "advanced"
  },
  {
    "word": "tea",
    "pos": "n.",
    "meaning": "차",
    "level": "advanced"
  },
  {
    "word": "teach",
    "pos": "v.",
    "meaning": "가르치다",
    "level": "advanced"
  },
  {
    "word": "tear",
    "pos": "n.",
    "meaning": "눈물",
    "level": "advanced"
  },
  {
    "word": "tease",
    "pos": "v.",
    "meaning": "괴롭히다",
    "level": "advanced"
  },
  {
    "word": "teen",
    "pos": "n.",
    "meaning": "슬픔",
    "level": "advanced"
  },
  {
    "word": "teenage 10",
    "pos": "n.",
    "meaning": "대",
    "level": "advanced"
  },
  {
    "word": "telegraph",
    "pos": "n.",
    "meaning": "전신",
    "level": "advanced"
  },
  {
    "word": "telephone",
    "pos": "n.",
    "meaning": "전화",
    "level": "advanced"
  },
  {
    "word": "tell",
    "pos": "v.",
    "meaning": "말하다",
    "level": "advanced"
  },
  {
    "word": "temperature",
    "pos": "n.",
    "meaning": "온도",
    "level": "advanced"
  },
  {
    "word": "temple",
    "pos": "n.",
    "meaning": "관자놀이",
    "level": "advanced"
  },
  {
    "word": "temporary",
    "pos": "a.",
    "meaning": "일시적인",
    "level": "advanced"
  },
  {
    "word": "tempt",
    "pos": "v.",
    "meaning": "유혹하다",
    "level": "advanced"
  },
  {
    "word": "tenant",
    "pos": "a.",
    "meaning": "차지인",
    "level": "advanced"
  },
  {
    "word": "tend (-",
    "pos": "v.",
    "meaning": "의)경향이 있다",
    "level": "advanced"
  },
  {
    "word": "tender",
    "pos": "n.",
    "meaning": "제공",
    "level": "advanced"
  },
  {
    "word": "tense",
    "pos": "n.",
    "meaning": "시제",
    "level": "advanced"
  },
  {
    "word": "term",
    "pos": "n.",
    "meaning": "기간",
    "level": "advanced"
  },
  {
    "word": "terminal",
    "pos": "a.",
    "meaning": "종점의",
    "level": "advanced"
  },
  {
    "word": "terminate",
    "pos": "v.",
    "meaning": "끝내다",
    "level": "advanced"
  },
  {
    "word": "terrace",
    "pos": "n.",
    "meaning": "계단모양의 뜰(광장)",
    "level": "advanced"
  },
  {
    "word": "terrible",
    "pos": "a.",
    "meaning": "무시무시한",
    "level": "advanced"
  },
  {
    "word": "terrific",
    "pos": "n.",
    "meaning": "무서운",
    "level": "advanced"
  },
  {
    "word": "territory",
    "pos": "n.",
    "meaning": "영토",
    "level": "advanced"
  },
  {
    "word": "test",
    "pos": "n.",
    "meaning": "시험",
    "level": "advanced"
  },
  {
    "word": "testify",
    "pos": "v.",
    "meaning": "증명하다",
    "level": "advanced"
  },
  {
    "word": "text",
    "pos": "n.",
    "meaning": "원문",
    "level": "advanced"
  },
  {
    "word": "textbook",
    "pos": "n.",
    "meaning": "교과서",
    "level": "advanced"
  },
  {
    "word": "than -",
    "pos": "n.",
    "meaning": "보다도",
    "level": "advanced"
  },
  {
    "word": "thank",
    "pos": "v.",
    "meaning": "감사하다 감사",
    "level": "advanced"
  },
  {
    "word": "that",
    "pos": "n.",
    "meaning": "저",
    "level": "advanced"
  },
  {
    "word": "the art.",
    "pos": "n.",
    "meaning": "저",
    "level": "advanced"
  },
  {
    "word": "theater",
    "pos": "n.",
    "meaning": "극장",
    "level": "advanced"
  },
  {
    "word": "theme",
    "pos": "n.",
    "meaning": "논제",
    "level": "advanced"
  },
  {
    "word": "then",
    "pos": "n.",
    "meaning": "그때",
    "level": "advanced"
  },
  {
    "word": "theory",
    "pos": "n.",
    "meaning": "이론",
    "level": "advanced"
  },
  {
    "word": "therapy",
    "pos": "n.",
    "meaning": "치료법",
    "level": "advanced"
  },
  {
    "word": "there",
    "pos": "n.",
    "meaning": "거기에",
    "level": "advanced"
  },
  {
    "word": "therefore",
    "pos": "n.",
    "meaning": "그런 까닭에",
    "level": "advanced"
  },
  {
    "word": "they",
    "pos": "n.",
    "meaning": "그들",
    "level": "advanced"
  },
  {
    "word": "thick",
    "pos": "n.",
    "meaning": "두꺼운",
    "level": "advanced"
  },
  {
    "word": "thief",
    "pos": "n.",
    "meaning": "도둑",
    "level": "advanced"
  },
  {
    "word": "thin",
    "pos": "n.",
    "meaning": "얇은",
    "level": "advanced"
  },
  {
    "word": "thing",
    "pos": "n.",
    "meaning": "물건",
    "level": "advanced"
  },
  {
    "word": "think",
    "pos": "v.",
    "meaning": "생각하다",
    "level": "advanced"
  },
  {
    "word": "thirst",
    "pos": "n.",
    "meaning": "갈증",
    "level": "advanced"
  },
  {
    "word": "this",
    "pos": "n.",
    "meaning": "이",
    "level": "advanced"
  },
  {
    "word": "thorough",
    "pos": "a.",
    "meaning": "완전한",
    "level": "advanced"
  },
  {
    "word": "though -",
    "pos": "n.",
    "meaning": "임에도 불구하고 그러나",
    "level": "advanced"
  },
  {
    "word": "thousand",
    "pos": "n.",
    "meaning": "천",
    "level": "advanced"
  },
  {
    "word": "thread",
    "pos": "n.",
    "meaning": "실",
    "level": "advanced"
  },
  {
    "word": "threat",
    "pos": "n.",
    "meaning": "협박",
    "level": "advanced"
  },
  {
    "word": "thrill",
    "pos": "v.",
    "meaning": "오싹하다 오싹함",
    "level": "advanced"
  },
  {
    "word": "throat",
    "pos": "n.",
    "meaning": "목",
    "level": "advanced"
  },
  {
    "word": "through (-",
    "pos": "a.",
    "meaning": "을)통하여 통하여 직통의",
    "level": "advanced"
  },
  {
    "word": "throw",
    "pos": "v.",
    "meaning": "던지다",
    "level": "advanced"
  },
  {
    "word": "thumb",
    "pos": "v.",
    "meaning": "엄지손가락 엄지손가락으로 만지다",
    "level": "advanced"
  },
  {
    "word": "thus",
    "pos": "ad.",
    "meaning": "이렇게",
    "level": "advanced"
  },
  {
    "word": "tick",
    "pos": "n.",
    "meaning": "시계소리",
    "level": "advanced"
  },
  {
    "word": "tide",
    "pos": "n.",
    "meaning": "조수",
    "level": "advanced"
  },
  {
    "word": "tidy",
    "pos": "a.",
    "meaning": "말쑥한",
    "level": "advanced"
  },
  {
    "word": "tie",
    "pos": "v.",
    "meaning": "매다",
    "level": "advanced"
  },
  {
    "word": "tiger",
    "pos": "n.",
    "meaning": "호랑이",
    "level": "advanced"
  },
  {
    "word": "tight",
    "pos": "a.",
    "meaning": "단단한",
    "level": "advanced"
  },
  {
    "word": "till -",
    "pos": "n.",
    "meaning": "까지",
    "level": "advanced"
  },
  {
    "word": "timber",
    "pos": "n.",
    "meaning": "재목",
    "level": "advanced"
  },
  {
    "word": "time",
    "pos": "n.",
    "meaning": "때",
    "level": "advanced"
  },
  {
    "word": "tin",
    "pos": "n.",
    "meaning": "주석",
    "level": "advanced"
  },
  {
    "word": "tiny",
    "pos": "a.",
    "meaning": "자그마한",
    "level": "advanced"
  },
  {
    "word": "tip",
    "pos": "n.",
    "meaning": "끝",
    "level": "advanced"
  },
  {
    "word": "tire",
    "pos": "v.",
    "meaning": "피로하게 하다",
    "level": "advanced"
  },
  {
    "word": "tissue",
    "pos": "n.",
    "meaning": "조직",
    "level": "advanced"
  },
  {
    "word": "title",
    "pos": "n.",
    "meaning": "표제",
    "level": "advanced"
  },
  {
    "word": "to -",
    "pos": "ad.",
    "meaning": "로",
    "level": "advanced"
  },
  {
    "word": "tobacco",
    "pos": "n.",
    "meaning": "담배",
    "level": "advanced"
  },
  {
    "word": "today",
    "pos": "n.",
    "meaning": "오늘은",
    "level": "advanced"
  },
  {
    "word": "toe",
    "pos": "n.",
    "meaning": "발가락",
    "level": "advanced"
  },
  {
    "word": "together",
    "pos": "n.",
    "meaning": "같이",
    "level": "advanced"
  },
  {
    "word": "toilet",
    "pos": "n.",
    "meaning": "화장실",
    "level": "advanced"
  },
  {
    "word": "tomorrow",
    "pos": "n.",
    "meaning": "내일(은)",
    "level": "advanced"
  },
  {
    "word": "tone",
    "pos": "n.",
    "meaning": "음조",
    "level": "advanced"
  },
  {
    "word": "tongue",
    "pos": "n.",
    "meaning": "혀",
    "level": "advanced"
  },
  {
    "word": "tonight",
    "pos": "n.",
    "meaning": "오늘밤에 오늘밤",
    "level": "advanced"
  },
  {
    "word": "too (-",
    "pos": "a.",
    "meaning": "도)또한",
    "level": "advanced"
  },
  {
    "word": "tool",
    "pos": "n.",
    "meaning": "사용세",
    "level": "advanced"
  },
  {
    "word": "tooth",
    "pos": "n.",
    "meaning": "이",
    "level": "advanced"
  },
  {
    "word": "top",
    "pos": "n.",
    "meaning": "정상",
    "level": "advanced"
  },
  {
    "word": "torture",
    "pos": "n.",
    "meaning": "고문",
    "level": "advanced"
  },
  {
    "word": "toss",
    "pos": "v.",
    "meaning": "던지다",
    "level": "advanced"
  },
  {
    "word": "total",
    "pos": "v.",
    "meaning": "총계 전체의 합계하다",
    "level": "advanced"
  },
  {
    "word": "touch",
    "pos": "v.",
    "meaning": "닿다",
    "level": "advanced"
  },
  {
    "word": "tough",
    "pos": "a.",
    "meaning": "단단한",
    "level": "advanced"
  },
  {
    "word": "tour",
    "pos": "n.",
    "meaning": "일주",
    "level": "advanced"
  },
  {
    "word": "toward -",
    "pos": "ad.",
    "meaning": "쪽으로",
    "level": "advanced"
  },
  {
    "word": "tower",
    "pos": "n.",
    "meaning": "탑",
    "level": "advanced"
  },
  {
    "word": "town",
    "pos": "n.",
    "meaning": "읍",
    "level": "advanced"
  },
  {
    "word": "toxic",
    "pos": "a.",
    "meaning": "독의",
    "level": "advanced"
  },
  {
    "word": "toy",
    "pos": "v.",
    "meaning": "장난감 장난하다",
    "level": "advanced"
  },
  {
    "word": "trace",
    "pos": "n.",
    "meaning": "발자국",
    "level": "advanced"
  },
  {
    "word": "trade",
    "pos": "n.",
    "meaning": "매매",
    "level": "advanced"
  },
  {
    "word": "tradition",
    "pos": "n.",
    "meaning": "전설",
    "level": "advanced"
  },
  {
    "word": "traffic",
    "pos": "n.",
    "meaning": "교통",
    "level": "advanced"
  },
  {
    "word": "tragic",
    "pos": "a.",
    "meaning": "비극의",
    "level": "advanced"
  },
  {
    "word": "trail",
    "pos": "v.",
    "meaning": "질질 끌다",
    "level": "advanced"
  },
  {
    "word": "train",
    "pos": "n.",
    "meaning": "기차",
    "level": "advanced"
  },
  {
    "word": "transact",
    "pos": "v.",
    "meaning": "처리하다",
    "level": "advanced"
  },
  {
    "word": "transfer",
    "pos": "v.",
    "meaning": "옮기다",
    "level": "advanced"
  },
  {
    "word": "transform",
    "pos": "v.",
    "meaning": "변형(변용,변태)시키다",
    "level": "advanced"
  },
  {
    "word": "transition",
    "pos": "n.",
    "meaning": "변천",
    "level": "advanced"
  },
  {
    "word": "translate",
    "pos": "v.",
    "meaning": "번역하다",
    "level": "advanced"
  },
  {
    "word": "transmit",
    "pos": "v.",
    "meaning": "보내다",
    "level": "advanced"
  },
  {
    "word": "transport",
    "pos": "v.",
    "meaning": "수송(운송)하다",
    "level": "advanced"
  },
  {
    "word": "trap",
    "pos": "n.",
    "meaning": "덫",
    "level": "advanced"
  },
  {
    "word": "travel",
    "pos": "v.",
    "meaning": "여행하다",
    "level": "advanced"
  },
  {
    "word": "tray",
    "pos": "n.",
    "meaning": "쟁반",
    "level": "advanced"
  },
  {
    "word": "treasure",
    "pos": "n.",
    "meaning": "보물",
    "level": "advanced"
  },
  {
    "word": "treat",
    "pos": "v.",
    "meaning": "대우하다",
    "level": "advanced"
  },
  {
    "word": "treaty",
    "pos": "n.",
    "meaning": "조약",
    "level": "advanced"
  },
  {
    "word": "tree",
    "pos": "n.",
    "meaning": "나무",
    "level": "advanced"
  },
  {
    "word": "tremendous",
    "pos": "n.",
    "meaning": "무서운",
    "level": "advanced"
  },
  {
    "word": "trend",
    "pos": "n.",
    "meaning": "방향",
    "level": "advanced"
  },
  {
    "word": "trial",
    "pos": "n.",
    "meaning": "시험",
    "level": "advanced"
  },
  {
    "word": "triangle",
    "pos": "n.",
    "meaning": "각형",
    "level": "advanced"
  },
  {
    "word": "tribe",
    "pos": "n.",
    "meaning": "종족",
    "level": "advanced"
  },
  {
    "word": "trick",
    "pos": "n.",
    "meaning": "책략",
    "level": "advanced"
  },
  {
    "word": "trigger",
    "pos": "n.",
    "meaning": "방아쇠 재빠른",
    "level": "advanced"
  },
  {
    "word": "trim",
    "pos": "v.",
    "meaning": "산뜻한 정돈하다",
    "level": "advanced"
  },
  {
    "word": "trip",
    "pos": "n.",
    "meaning": "여행",
    "level": "advanced"
  },
  {
    "word": "triumph",
    "pos": "n.",
    "meaning": "승리",
    "level": "advanced"
  },
  {
    "word": "troop",
    "pos": "n.",
    "meaning": "대",
    "level": "advanced"
  },
  {
    "word": "trophy",
    "pos": "n.",
    "meaning": "전리품",
    "level": "advanced"
  },
  {
    "word": "trouble",
    "pos": "n.",
    "meaning": "고생",
    "level": "advanced"
  },
  {
    "word": "trouser",
    "pos": "n.",
    "meaning": "즈봉",
    "level": "advanced"
  },
  {
    "word": "TRUE",
    "pos": "n.",
    "meaning": "진실",
    "level": "advanced"
  },
  {
    "word": "trunk",
    "pos": "n.",
    "meaning": "줄기",
    "level": "advanced"
  },
  {
    "word": "trust",
    "pos": "n.",
    "meaning": "신용",
    "level": "advanced"
  },
  {
    "word": "truth",
    "pos": "n.",
    "meaning": "진리",
    "level": "advanced"
  },
  {
    "word": "try",
    "pos": "v.",
    "meaning": "시험해보다",
    "level": "advanced"
  },
  {
    "word": "tube",
    "pos": "n.",
    "meaning": "관",
    "level": "advanced"
  },
  {
    "word": "tune",
    "pos": "n.",
    "meaning": "곡",
    "level": "advanced"
  },
  {
    "word": "tunnel",
    "pos": "n.",
    "meaning": "터널",
    "level": "advanced"
  },
  {
    "word": "turn",
    "pos": "v.",
    "meaning": "돌리다",
    "level": "advanced"
  },
  {
    "word": "turnover",
    "pos": "n.",
    "meaning": "전복",
    "level": "advanced"
  },
  {
    "word": "tutor",
    "pos": "n.",
    "meaning": "가정교사",
    "level": "advanced"
  },
  {
    "word": "twice",
    "pos": "n.",
    "meaning": "두 번",
    "level": "advanced"
  },
  {
    "word": "twin",
    "pos": "n.",
    "meaning": "쌍동이",
    "level": "advanced"
  },
  {
    "word": "twist",
    "pos": "v.",
    "meaning": "꼬이다",
    "level": "advanced"
  },
  {
    "word": "type",
    "pos": "n.",
    "meaning": "형",
    "level": "advanced"
  },
  {
    "word": "typical",
    "pos": "a.",
    "meaning": "전형적인",
    "level": "advanced"
  },
  {
    "word": "ugly",
    "pos": "a.",
    "meaning": "추한",
    "level": "advanced"
  },
  {
    "word": "ultimate",
    "pos": "a.",
    "meaning": "최후의",
    "level": "advanced"
  },
  {
    "word": "umbrella",
    "pos": "n.",
    "meaning": "우산",
    "level": "advanced"
  },
  {
    "word": "uncle",
    "pos": "n.",
    "meaning": "아저씨",
    "level": "advanced"
  },
  {
    "word": "under -",
    "pos": "n.",
    "meaning": "아래에",
    "level": "advanced"
  },
  {
    "word": "undergo (",
    "pos": "v.",
    "meaning": "영향 등을)받다",
    "level": "advanced"
  },
  {
    "word": "underlie -",
    "pos": "v.",
    "meaning": "의 밑에 있다",
    "level": "advanced"
  },
  {
    "word": "undermine -",
    "pos": "v.",
    "meaning": "밑을 파다",
    "level": "advanced"
  },
  {
    "word": "understand",
    "pos": "v.",
    "meaning": "이해하다",
    "level": "advanced"
  },
  {
    "word": "undertake",
    "pos": "v.",
    "meaning": "떠맡다",
    "level": "advanced"
  },
  {
    "word": "uniform",
    "pos": "n.",
    "meaning": "한결같은",
    "level": "advanced"
  },
  {
    "word": "unify",
    "pos": "v.",
    "meaning": "하나로 하다",
    "level": "advanced"
  },
  {
    "word": "union",
    "pos": "n.",
    "meaning": "결합",
    "level": "advanced"
  },
  {
    "word": "unique",
    "pos": "a.",
    "meaning": "유일무이한",
    "level": "advanced"
  },
  {
    "word": "unit",
    "pos": "n.",
    "meaning": "단위",
    "level": "advanced"
  },
  {
    "word": "unite",
    "pos": "v.",
    "meaning": "결합하다",
    "level": "advanced"
  },
  {
    "word": "universe",
    "pos": "n.",
    "meaning": "우주",
    "level": "advanced"
  },
  {
    "word": "university",
    "pos": "n.",
    "meaning": "종합대학(교) 대학의(에 관계 있는)",
    "level": "advanced"
  },
  {
    "word": "unless -",
    "pos": "n.",
    "meaning": "하지 않으면",
    "level": "advanced"
  },
  {
    "word": "until -",
    "pos": "n.",
    "meaning": "까지",
    "level": "advanced"
  },
  {
    "word": "up",
    "pos": "ad.",
    "meaning": "위로",
    "level": "advanced"
  },
  {
    "word": "update",
    "pos": "v.",
    "meaning": "새롭게 하다 최신정보",
    "level": "advanced"
  },
  {
    "word": "upon -",
    "pos": "n.",
    "meaning": "의 위에",
    "level": "advanced"
  },
  {
    "word": "upper",
    "pos": "a.",
    "meaning": "위쪽의",
    "level": "advanced"
  },
  {
    "word": "upset",
    "pos": "v.",
    "meaning": "뒤집어 엎다",
    "level": "advanced"
  },
  {
    "word": "upward",
    "pos": "a.",
    "meaning": "위로 향한",
    "level": "advanced"
  },
  {
    "word": "urban",
    "pos": "a.",
    "meaning": "도시의",
    "level": "advanced"
  },
  {
    "word": "urge",
    "pos": "v.",
    "meaning": "몰아대다",
    "level": "advanced"
  },
  {
    "word": "urgent",
    "pos": "a.",
    "meaning": "긴급한",
    "level": "advanced"
  },
  {
    "word": "use",
    "pos": "v.",
    "meaning": "쓰다",
    "level": "advanced"
  },
  {
    "word": "usual",
    "pos": "a.",
    "meaning": "평소의",
    "level": "advanced"
  },
  {
    "word": "utilize -",
    "pos": "v.",
    "meaning": "을 이용하다",
    "level": "advanced"
  },
  {
    "word": "utter",
    "pos": "a.",
    "meaning": "전적인",
    "level": "advanced"
  },
  {
    "word": "vacation",
    "pos": "n.",
    "meaning": "휴가",
    "level": "advanced"
  },
  {
    "word": "vacuum",
    "pos": "n.",
    "meaning": "진공",
    "level": "advanced"
  },
  {
    "word": "vague",
    "pos": "a.",
    "meaning": "막연한",
    "level": "advanced"
  },
  {
    "word": "valid",
    "pos": "a.",
    "meaning": "유효한",
    "level": "advanced"
  },
  {
    "word": "valley",
    "pos": "n.",
    "meaning": "골짜기",
    "level": "advanced"
  },
  {
    "word": "value",
    "pos": "n.",
    "meaning": "가치",
    "level": "advanced"
  },
  {
    "word": "van",
    "pos": "n.",
    "meaning": "유개트럭",
    "level": "advanced"
  },
  {
    "word": "vanish",
    "pos": "v.",
    "meaning": "자취를 감추다",
    "level": "advanced"
  },
  {
    "word": "various",
    "pos": "a.",
    "meaning": "가지가지의",
    "level": "advanced"
  },
  {
    "word": "vary",
    "pos": "v.",
    "meaning": "바꾸다",
    "level": "advanced"
  },
  {
    "word": "vast",
    "pos": "a.",
    "meaning": "광대한, 광막한 막대한",
    "level": "advanced"
  },
  {
    "word": "vegetable",
    "pos": "n.",
    "meaning": "식물 야채, 푸성귀, 남새, 채소",
    "level": "advanced"
  },
  {
    "word": "vehicle",
    "pos": "n.",
    "meaning": "운반 기구, 운송 수단, 수레, 차량, 탈것",
    "level": "advanced"
  },
  {
    "word": "venture",
    "pos": "n.",
    "meaning": "모험",
    "level": "advanced"
  },
  {
    "word": "verbal",
    "pos": "a.",
    "meaning": "말의, 말에 관한, 언어상의, 말로 나타낸, 말로 된",
    "level": "advanced"
  },
  {
    "word": "verse",
    "pos": "n.",
    "meaning": "시의 한 줄, 시구 일련의 시구",
    "level": "advanced"
  },
  {
    "word": "version",
    "pos": "n.",
    "meaning": "번역, 번역문 개작, 각색, 번안",
    "level": "advanced"
  },
  {
    "word": "versus …",
    "pos": "a.",
    "meaning": "대, …에 대한",
    "level": "advanced"
  },
  {
    "word": "vertical",
    "pos": "a.",
    "meaning": "수평면에 직각인, 수직의",
    "level": "advanced"
  },
  {
    "word": "very",
    "pos": "n.",
    "meaning": "매우",
    "level": "advanced"
  },
  {
    "word": "vessel",
    "pos": "n.",
    "meaning": "그릇",
    "level": "advanced"
  },
  {
    "word": "veteran",
    "pos": "n.",
    "meaning": "노련가, 경험 많은 대가, 베테랑",
    "level": "advanced"
  },
  {
    "word": "veterinarian",
    "pos": "n.",
    "meaning": "수의사",
    "level": "advanced"
  },
  {
    "word": "via …",
    "pos": "n.",
    "meaning": "을 거쳐, …을 경유하여",
    "level": "advanced"
  },
  {
    "word": "vice",
    "pos": "n.",
    "meaning": "악덕, 비행, 타락 행위",
    "level": "advanced"
  },
  {
    "word": "victim",
    "pos": "n.",
    "meaning": "희생, 산 제물, 인신 제물",
    "level": "advanced"
  },
  {
    "word": "victory",
    "pos": "n.",
    "meaning": "승리, 전승",
    "level": "advanced"
  },
  {
    "word": "view",
    "pos": "n.",
    "meaning": "봄, 관찰, 개관, 실지 검증 보는 힘, 시계, 시야",
    "level": "advanced"
  },
  {
    "word": "vigorous",
    "pos": "a.",
    "meaning": "정력적인, 강건한, 활기 있는, 격렬한",
    "level": "advanced"
  },
  {
    "word": "village",
    "pos": "n.",
    "meaning": "마을, 촌락",
    "level": "advanced"
  },
  {
    "word": "violent",
    "pos": "a.",
    "meaning": "격렬한, 맹렬한",
    "level": "advanced"
  },
  {
    "word": "virgin",
    "pos": "n.",
    "meaning": "처녀, 동정녀, 미혼 여성, 동정녀 마리아",
    "level": "advanced"
  },
  {
    "word": "virtual",
    "pos": "a.",
    "meaning": "사실상의, 실질상의, 실제의 허상의",
    "level": "advanced"
  },
  {
    "word": "virtue",
    "pos": "n.",
    "meaning": "덕, 덕행, 선, 선행",
    "level": "advanced"
  },
  {
    "word": "visible",
    "pos": "a.",
    "meaning": "눈에 보이는, 볼 수 있는",
    "level": "advanced"
  },
  {
    "word": "visit",
    "pos": "v.",
    "meaning": "방문하다, …의 손님으로 묵다",
    "level": "advanced"
  },
  {
    "word": "visual",
    "pos": "a.",
    "meaning": "시각의, 물건을 보기 위한",
    "level": "advanced"
  },
  {
    "word": "vital",
    "pos": "a.",
    "meaning": "생명의, 생명에 관한, 생명유지에 필요한, 살아 있는",
    "level": "advanced"
  },
  {
    "word": "vivid",
    "pos": "a.",
    "meaning": "발랄한, 약동적인, 힘찬, 생기있는",
    "level": "advanced"
  },
  {
    "word": "vocabulary",
    "pos": "n.",
    "meaning": "어휘, 용어수, 용어 범위",
    "level": "advanced"
  },
  {
    "word": "vocation",
    "pos": "n.",
    "meaning": "천직, 사명 직업, 생업, 장사 적성, 소질, 재능",
    "level": "advanced"
  },
  {
    "word": "voice",
    "pos": "n.",
    "meaning": "목소리, 음성, 음성",
    "level": "advanced"
  },
  {
    "word": "volume",
    "pos": "n.",
    "meaning": "책 권",
    "level": "advanced"
  },
  {
    "word": "voluntary",
    "pos": "a.",
    "meaning": "자발적인, 수의의",
    "level": "advanced"
  },
  {
    "word": "vote",
    "pos": "n.",
    "meaning": "찬부 표시, 투표, 표결",
    "level": "advanced"
  },
  {
    "word": "voyage",
    "pos": "n.",
    "meaning": "여행",
    "level": "advanced"
  },
  {
    "word": "wage",
    "pos": "n.",
    "meaning": "임금",
    "level": "advanced"
  },
  {
    "word": "wagon",
    "pos": "n.",
    "meaning": "짐마차",
    "level": "advanced"
  },
  {
    "word": "wait",
    "pos": "v.",
    "meaning": "기다리다",
    "level": "advanced"
  },
  {
    "word": "wake",
    "pos": "v.",
    "meaning": "잠깨다",
    "level": "advanced"
  },
  {
    "word": "walk",
    "pos": "v.",
    "meaning": "걷다",
    "level": "advanced"
  },
  {
    "word": "wall",
    "pos": "n.",
    "meaning": "벽",
    "level": "advanced"
  },
  {
    "word": "wander",
    "pos": "v.",
    "meaning": "헤매다",
    "level": "advanced"
  },
  {
    "word": "want",
    "pos": "n.",
    "meaning": "결핍",
    "level": "advanced"
  },
  {
    "word": "war",
    "pos": "n.",
    "meaning": "전쟁",
    "level": "advanced"
  },
  {
    "word": "warehouse",
    "pos": "n.",
    "meaning": "창고",
    "level": "advanced"
  },
  {
    "word": "warm",
    "pos": "a.",
    "meaning": "따뜻한",
    "level": "advanced"
  },
  {
    "word": "warn",
    "pos": "v.",
    "meaning": "경고하다",
    "level": "advanced"
  },
  {
    "word": "warrant",
    "pos": "v.",
    "meaning": "보증하다 보증",
    "level": "advanced"
  },
  {
    "word": "warrior",
    "pos": "n.",
    "meaning": "병사",
    "level": "advanced"
  },
  {
    "word": "wash",
    "pos": "v.",
    "meaning": "씻다",
    "level": "advanced"
  },
  {
    "word": "waste",
    "pos": "v.",
    "meaning": "낭비하다",
    "level": "advanced"
  },
  {
    "word": "watch",
    "pos": "n.",
    "meaning": "손목시계",
    "level": "advanced"
  },
  {
    "word": "water",
    "pos": "n.",
    "meaning": "물",
    "level": "advanced"
  },
  {
    "word": "watermelon",
    "pos": "n.",
    "meaning": "수박",
    "level": "advanced"
  },
  {
    "word": "wave",
    "pos": "n.",
    "meaning": "물결",
    "level": "advanced"
  },
  {
    "word": "way",
    "pos": "n.",
    "meaning": "길",
    "level": "advanced"
  },
  {
    "word": "we",
    "pos": "n.",
    "meaning": "우리가",
    "level": "advanced"
  },
  {
    "word": "weak",
    "pos": "a.",
    "meaning": "약한",
    "level": "advanced"
  },
  {
    "word": "wealth",
    "pos": "n.",
    "meaning": "재산",
    "level": "advanced"
  },
  {
    "word": "weapon",
    "pos": "n.",
    "meaning": "무기",
    "level": "advanced"
  },
  {
    "word": "wear",
    "pos": "v.",
    "meaning": "입다",
    "level": "advanced"
  },
  {
    "word": "weather",
    "pos": "n.",
    "meaning": "날씨",
    "level": "advanced"
  },
  {
    "word": "weave",
    "pos": "v.",
    "meaning": "짜다",
    "level": "advanced"
  },
  {
    "word": "wedding",
    "pos": "n.",
    "meaning": "혼례",
    "level": "advanced"
  },
  {
    "word": "weed",
    "pos": "v.",
    "meaning": "잡초 잡초를 뽑다",
    "level": "advanced"
  },
  {
    "word": "week",
    "pos": "n.",
    "meaning": "주",
    "level": "advanced"
  },
  {
    "word": "weekend",
    "pos": "v.",
    "meaning": "주말 주말의 주말을 지내다",
    "level": "advanced"
  },
  {
    "word": "weigh",
    "pos": "v.",
    "meaning": "무게를 달다",
    "level": "advanced"
  },
  {
    "word": "weight",
    "pos": "ad.",
    "meaning": "무게",
    "level": "advanced"
  },
  {
    "word": "weird",
    "pos": "a.",
    "meaning": "불가사의한",
    "level": "advanced"
  },
  {
    "word": "welcome",
    "pos": "a.",
    "meaning": "환영 환영받는",
    "level": "advanced"
  },
  {
    "word": "welfare",
    "pos": "n.",
    "meaning": "행복",
    "level": "advanced"
  },
  {
    "word": "well",
    "pos": "n.",
    "meaning": "잘",
    "level": "advanced"
  },
  {
    "word": "west",
    "pos": "n.",
    "meaning": "서쪽",
    "level": "advanced"
  },
  {
    "word": "wet",
    "pos": "a.",
    "meaning": "축축한",
    "level": "advanced"
  },
  {
    "word": "whale",
    "pos": "n.",
    "meaning": "고래",
    "level": "advanced"
  },
  {
    "word": "what",
    "pos": "n.",
    "meaning": "무엇 무슨",
    "level": "advanced"
  },
  {
    "word": "wheat",
    "pos": "n.",
    "meaning": "밀",
    "level": "advanced"
  },
  {
    "word": "wheel",
    "pos": "n.",
    "meaning": "바퀴",
    "level": "advanced"
  },
  {
    "word": "when",
    "pos": "n.",
    "meaning": "언제",
    "level": "advanced"
  },
  {
    "word": "where",
    "pos": "n.",
    "meaning": "어디에 (-하는)곳에 pr.어디 (문제의)장소",
    "level": "advanced"
  },
  {
    "word": "whereas cnj.(-",
    "pos": "n.",
    "meaning": "인)까닭에",
    "level": "advanced"
  },
  {
    "word": "whether -",
    "pos": "n.",
    "meaning": "인지 어떤지",
    "level": "advanced"
  },
  {
    "word": "which",
    "pos": "n.",
    "meaning": "어느 쪽",
    "level": "advanced"
  },
  {
    "word": "while",
    "pos": "n.",
    "meaning": "동안 -하는 동안",
    "level": "advanced"
  },
  {
    "word": "whip",
    "pos": "v.",
    "meaning": "채찍 채찍질하다",
    "level": "advanced"
  },
  {
    "word": "whisper",
    "pos": "v.",
    "meaning": "속삭이다",
    "level": "advanced"
  },
  {
    "word": "whistle",
    "pos": "n.",
    "meaning": "휘파람",
    "level": "advanced"
  },
  {
    "word": "white",
    "pos": "n.",
    "meaning": "흰",
    "level": "advanced"
  },
  {
    "word": "who",
    "pos": "n.",
    "meaning": "누구",
    "level": "advanced"
  },
  {
    "word": "whole",
    "pos": "a.",
    "meaning": "전체의",
    "level": "advanced"
  },
  {
    "word": "why",
    "pos": "n.",
    "meaning": "왜",
    "level": "advanced"
  },
  {
    "word": "wicked",
    "pos": "a.",
    "meaning": "사악한",
    "level": "advanced"
  },
  {
    "word": "wide",
    "pos": "n.",
    "meaning": "폭넓은",
    "level": "advanced"
  },
  {
    "word": "widespread",
    "pos": "a.",
    "meaning": "널리 보급되어 있는",
    "level": "advanced"
  },
  {
    "word": "widow",
    "pos": "a.",
    "meaning": "미망인",
    "level": "advanced"
  },
  {
    "word": "wife",
    "pos": "n.",
    "meaning": "아내",
    "level": "advanced"
  },
  {
    "word": "wild",
    "pos": "a.",
    "meaning": "야생의",
    "level": "advanced"
  },
  {
    "word": "will",
    "pos": "n.",
    "meaning": "의지",
    "level": "advanced"
  },
  {
    "word": "win",
    "pos": "v.",
    "meaning": "이기다",
    "level": "advanced"
  },
  {
    "word": "wind",
    "pos": "n.",
    "meaning": "바람",
    "level": "advanced"
  },
  {
    "word": "window",
    "pos": "n.",
    "meaning": "창",
    "level": "advanced"
  },
  {
    "word": "wing",
    "pos": "n.",
    "meaning": "날개",
    "level": "advanced"
  },
  {
    "word": "wipe",
    "pos": "v.",
    "meaning": "닦다",
    "level": "advanced"
  },
  {
    "word": "wire",
    "pos": "n.",
    "meaning": "철사",
    "level": "advanced"
  },
  {
    "word": "wise",
    "pos": "a.",
    "meaning": "슬기로운",
    "level": "advanced"
  },
  {
    "word": "wish",
    "pos": "v.",
    "meaning": "바라다",
    "level": "advanced"
  },
  {
    "word": "wit",
    "pos": "n.",
    "meaning": "기지",
    "level": "advanced"
  },
  {
    "word": "with",
    "pos": "n.",
    "meaning": "함께",
    "level": "advanced"
  },
  {
    "word": "withdraw",
    "pos": "v.",
    "meaning": "물러나다",
    "level": "advanced"
  },
  {
    "word": "within prop.-",
    "pos": "n.",
    "meaning": "의 안쪽에 안으로 내부",
    "level": "advanced"
  },
  {
    "word": "without prop.-",
    "pos": "n.",
    "meaning": "없이 밖은",
    "level": "advanced"
  },
  {
    "word": "witness",
    "pos": "n.",
    "meaning": "증언",
    "level": "advanced"
  },
  {
    "word": "woman",
    "pos": "a.",
    "meaning": "부인",
    "level": "advanced"
  },
  {
    "word": "wonder",
    "pos": "n.",
    "meaning": "경이",
    "level": "advanced"
  },
  {
    "word": "wood",
    "pos": "n.",
    "meaning": "숲",
    "level": "advanced"
  },
  {
    "word": "wool",
    "pos": "n.",
    "meaning": "양모",
    "level": "advanced"
  },
  {
    "word": "word",
    "pos": "n.",
    "meaning": "낱말",
    "level": "advanced"
  },
  {
    "word": "work",
    "pos": "n.",
    "meaning": "일",
    "level": "advanced"
  },
  {
    "word": "world",
    "pos": "n.",
    "meaning": "세계",
    "level": "advanced"
  },
  {
    "word": "worry",
    "pos": "v.",
    "meaning": "근심하다",
    "level": "advanced"
  },
  {
    "word": "worship",
    "pos": "n.",
    "meaning": "숭배",
    "level": "advanced"
  },
  {
    "word": "worth",
    "pos": "n.",
    "meaning": "가치가 있는 가치",
    "level": "advanced"
  },
  {
    "word": "would auwill",
    "pos": "n.",
    "meaning": "의 과거",
    "level": "advanced"
  },
  {
    "word": "wound",
    "pos": "n.",
    "meaning": "부상",
    "level": "advanced"
  },
  {
    "word": "wrap",
    "pos": "v.",
    "meaning": "싸다",
    "level": "advanced"
  },
  {
    "word": "wreck",
    "pos": "n.",
    "meaning": "난파",
    "level": "advanced"
  },
  {
    "word": "write",
    "pos": "v.",
    "meaning": "쓰다",
    "level": "advanced"
  },
  {
    "word": "wrong",
    "pos": "n.",
    "meaning": "나쁜",
    "level": "advanced"
  },
  {
    "word": "year",
    "pos": "n.",
    "meaning": "연",
    "level": "advanced"
  },
  {
    "word": "yell",
    "pos": "v.",
    "meaning": "고함치다",
    "level": "advanced"
  },
  {
    "word": "yellow",
    "pos": "n.",
    "meaning": "황색의 황색",
    "level": "advanced"
  },
  {
    "word": "yes",
    "pos": "n.",
    "meaning": "예",
    "level": "advanced"
  },
  {
    "word": "yesterday",
    "pos": "n.",
    "meaning": "어제",
    "level": "advanced"
  },
  {
    "word": "yet",
    "pos": "n.",
    "meaning": "아직",
    "level": "advanced"
  },
  {
    "word": "yield",
    "pos": "v.",
    "meaning": "산출하다",
    "level": "advanced"
  },
  {
    "word": "you",
    "pos": "n.",
    "meaning": "당신",
    "level": "advanced"
  },
  {
    "word": "young",
    "pos": "n.",
    "meaning": "젊은",
    "level": "advanced"
  },
  {
    "word": "zebra",
    "pos": "n.",
    "meaning": "얼룩말",
    "level": "advanced"
  },
  {
    "word": "zone",
    "pos": "n.",
    "meaning": "구역",
    "level": "advanced"
  },
  {
    "word": "zoo",
    "pos": "n.",
    "meaning": "동물원",
    "level": "advanced"
  }
];

export const SEED_WORDS: Omit<Word, 'id' | 'status' | 'createdAt'>[] = SEED_WORDS_RAW.map(sw => ({
  ...sw,
  examples: (EXAMPLES as any)[sw.word] || sw.examples
}));
