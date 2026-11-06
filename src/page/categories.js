export const categories = [
  { slug: 'fw26', label: 'FW26', description: 'RIIZE 소희와 함께하는 뉴에라 FW26 컬렉션.', image: 'imgImgi30152.png' },
  { slug: 'headwear', label: '모자', description: '나만의 스타일로 완성하는 뉴에라 헤드웨어.', image: 'imgFrame16.png' },
  { slug: 'apparel', label: '의류', description: '일상에 새로운 감각을 더하는 스타일.', image: 'imgFrame17.png' },
  { slug: 'accessories', label: '액세서리', description: '나만의 스타일을 완성하는 작은 디테일.', image: 'imgFrame18.png' },
  { slug: 'kids', label: '키즈', description: '작은 개성으로 시작하는 새로운 스타일.', image: 'imgFrame19.png' },
  { slug: 'blacklabel', label: 'BlackLabel', description: '뉴에라의 또 다른 감각, 블랙라벨.', image: 'imgFrame20.png' },
];
export const authenticCategory = { slug: 'authentic', label: 'MLB AUTHENTIC COLLECTION', description: '뉴에라 MLB 어센틱 컬렉션을 만나보세요.' };
export const fiftynineCategory = { slug: '59fifty', label: '59FIFTY', description: '뉴에라의 시그니처 피티드캡, 59FIFTY 컬렉션을 만나보세요.' };
export const ninefortyCategory = { slug: '9forty', label: '9FORTY', description: '뉴에라의 볼캡을 상징하는 9FORTY 컬렉션을 만나보세요.' };
export const thirtynineCategory = { slug: '39thirty', label: '39THIRTY', description: '편안한 착용감과 신축성을 갖춘 39THIRTY 컬렉션을 만나보세요.' };
export const kframeCategory = { slug: 'kframe', label: 'K-FRAME', description: '다이나믹하고 안정적인 형태의 K-FRAME 컬렉션을 만나보세요.' };
export const bucketCategory = { slug: 'bucket', label: 'BUCKET', description: '둥근 챙과 편안한 실루엣의 버킷 햇 컬렉션을 만나보세요.' };
export const jetcapCategory = { slug: 'jetcap', label: 'JET CAP', description: '편안한 피팅감의 클래식한 제트캡 컬렉션을 만나보세요.' };
export const redbullCategory = { slug: 'redbull', label: 'NEW ERA X ORACLE RED BULL RACING', description: '뉴에라와 오라클 레드불 레이싱의 협업 컬렉션을 만나보세요.' };
export const fearofgodCategory = { slug: 'fearofgod', label: 'NEW ERA X FEAR OF GOD X MLB', description: '뉴에라와 FEAR OF GOD, MLB의 협업 컬렉션을 만나보세요.' };
export const collaborationCategories = [
  { slug: 'ralphlauren', label: 'NEW ERA X RALPH LAUREN X MLB', description: '뉴에라와 랄프 로렌, MLB의 협업 컬렉션을 만나보세요.' },
  { slug: 'lacoste', label: 'NEW ERA X LACOSTE', description: '뉴에라와 라코스테의 협업 컬렉션을 만나보세요.' },
  { slug: 'timberland', label: 'NEW ERA X Timberland®', description: '뉴에라와 팀버랜드의 협업 컬렉션을 만나보세요.' },
];
export const allCategories = [
  ...categories, authenticCategory, fiftynineCategory, ninefortyCategory,
  thirtynineCategory, kframeCategory, bucketCategory, jetcapCategory,
  redbullCategory, fearofgodCategory, ...collaborationCategories,
];
export const categoryBySlug = Object.fromEntries(allCategories.map(category => [category.slug, category]));
