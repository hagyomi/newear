import { HeaderBasilSearchOutline, HeaderIconamoonShoppingBagThin, HeaderMdiLightAccount } from './Icons';
import './Header.css';
import { menuGroups } from './menuGroups';
import { useEffect, useState } from 'react';
import { useShop } from '../../store/shop';

const actions = [
  { label: '검색', Icon: HeaderBasilSearchOutline, href: '#/search' },
  { label: '장바구니', Icon: HeaderIconamoonShoppingBagThin, href: '#/cart' },
  { label: '로그인', Icon: HeaderMdiLightAccount, href: '#/login' },
];
export default function Header({ activeCategory }) {
  const { cart, likes } = useShop();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    let previousY = Math.max(0, window.scrollY);
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = Math.max(0, window.scrollY);
      if (y <= 100) {
        setVisible(true);
        previousY = y;
      } else if (Math.abs(y - previousY) >= 8) {
        const scrollingUp = y < previousY;
        setVisible(scrollingUp);
        if (!scrollingUp) setOpen(false);
        previousY = y;
      }
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(frame); };
  }, []);
  const cartCount = cart.reduce((sum,item) => sum + item.quantity,0);
  return <header className={`header section-flow${visible ? '' : ' header--hidden'}`} data-node-id="110:885" onFocusCapture={() => setVisible(true)} onMouseLeave={() => setOpen(false)} onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); event.target.blur(); } }} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
    <div className="section-inner">
      <a href="#/" aria-label="뉴에라 홈"><img className="header__logo" src={`${import.meta.env.BASE_URL}images/figma/imgImage11.png`} alt="NEW ERA" width="128" height="85" data-node-id="110:887" /></a>
      <nav className="header__nav" aria-label="카테고리" onMouseEnter={() => setOpen(true)}><ul className="header__menus">{menuGroups.map(menu => <li key={menu.slug}><a href={`#/category/${menu.slug}`} aria-current={activeCategory === menu.slug ? 'page' : undefined} aria-expanded={open} aria-controls="header-megamenu" onFocus={() => setOpen(true)} onClick={event => {
        if (window.matchMedia('(hover: none)').matches && !open) { event.preventDefault(); setOpen(true); } else setOpen(false);
      }}>{menu.label}</a></li>)}</ul></nav>
      <div className="header__actions">
        <a className="header__action header__action--link" href="#/likes" aria-label={`좋아요 ${likes.length}개`}><svg className="header__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true"><path d="M12 21 3.4 12.5C-2 7 6 0 12 6c6-6 14 1 8.6 6.5Z" /></svg>{likes.length > 0 && <span className="header__badge">{likes.length}</span>}</a>
        {actions.map(({label, Icon, href}) => <a href={href} className="header__action header__action--link" aria-label={label === '장바구니' ? `${label} ${cartCount}개` : label} key={label}><Icon className="header__icon" />{label === '장바구니' && cartCount > 0 && <span className="header__badge">{cartCount}</span>}</a>)}
      </div>
    </div>
    <div id="header-megamenu" className="header__megamenu" hidden={!open}>
      <div className="header__mega-inner">
        {menuGroups.map(group => <section className="header__mega-column" key={group.slug} aria-label={group.label}>
          <h2><a href={`#/category/${group.slug}`} onClick={() => setOpen(false)}>{group.label}</a></h2>
          <ul>
            {group.slug !== 'fw26' && <li><a href={`#/category/${group.slug}`} onClick={() => setOpen(false)}>{group.label} 전체</a></li>}
            {group.items.map(item => <li key={item.href}><a href={item.href} onClick={() => setOpen(false)}>{item.label}</a></li>)}
          </ul>
        </section>)}
      </div>
    </div>
  </header>;
}
