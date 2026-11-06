const categoryLink = slug => `#/category/${slug}`;
const filtered = slug => categoryTypes[slug].filter(type => type !== '전체').map(label => ({ label, href: `${categoryLink(slug)}?filter=${encodeURIComponent(label)}` }));
export const menuGroups = [
  { slug: 'fw26', label: 'COLLECTIONS', items: [
    ['FW26','fw26'],['MLB AUTHENTIC','authentic'],['NEW ERA X ORACLE RED BULL RACING','redbull'],['NEW ERA X FEAR OF GOD X MLB','fearofgod'],['NEW ERA X RALPH LAUREN X MLB','ralphlauren'],['NEW ERA X LACOSTE','lacoste'],['NEW ERA X Timberland®','timberland'],
  ].map(([label,slug]) => ({label,href:categoryLink(slug)})) },
  { slug: 'headwear', label: '모자', items: [['59FIFTY','59fifty'],['9FORTY','9forty'],['39THIRTY','39thirty'],['K-FRAME','kframe'],['BUCKET','bucket'],['JET CAP','jetcap']].map(([label,slug]) => ({label,href:categoryLink(slug)})) },
  { slug: 'apparel', label: '의류', items: filtered('apparel') },
  { slug: 'accessories', label: '액세서리', items: filtered('accessories') },
  { slug: 'kids', label: '키즈', items: filtered('kids') },
  { slug: 'blacklabel', label: 'BlackLabel', items: filtered('blacklabel') },
];
import { categoryTypes } from '../../data/catalogTypes';
