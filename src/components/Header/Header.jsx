import { HeaderBasilSearchOutline, HeaderIconamoonShoppingBagThin, HeaderMdiLightAccount } from './Icons';
import './Header.css';

const menus = ['Men', 'Women', 'Kids', 'BlackLabel'];
const actions = [
  { label: '검색', Icon: HeaderBasilSearchOutline },
  { label: '쇼핑백', Icon: HeaderIconamoonShoppingBagThin },
  { label: '계정', Icon: HeaderMdiLightAccount },
];
export default function Header() {
  return <header className="header section-flow" data-node-id="110:885">
    <div className="section-inner">
      <img className="header__logo" src={`${import.meta.env.BASE_URL}images/figma/imgImage11.png`} alt="NEW ERA" width="128" height="85" data-node-id="110:887" />
      <nav className="header__nav" aria-label="카테고리"><ul className="header__menus">{menus.map(menu => <li key={menu}>{menu}</li>)}</ul></nav>
      <div className="header__actions">
        {actions.map(({label, Icon}) => <button type="button" disabled className="header__action" aria-label={label + ' — 정적 시안'} key={label}><Icon className="header__icon" /></button>)}
      </div>
    </div>
  </header>;
}
