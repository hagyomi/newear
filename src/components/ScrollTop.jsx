import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './ScrollTop.css';

export default function ScrollTop({ route }) {
  const [appearance, setAppearance] = useState({ hidden: true, footer: false });
  useEffect(() => {
    const button = document.querySelector('.scroll-top');
    let frame = 0;
    const update = () => {
      frame = 0;
      const hero = document.querySelector('.home-cache:not(.home-cache--inactive) .hero')?.getBoundingClientRect();
      const footer = document.querySelector('.footer')?.getBoundingClientRect();
      const rect = button?.getBoundingClientRect();
      const next = {
        hidden: Boolean(hero && hero.bottom > 0 && hero.top < innerHeight),
        footer: Boolean(footer && rect && footer.top <= rect.top + rect.height / 2 && footer.bottom >= rect.top + rect.height / 2),
      };
      setAppearance(previous => previous.hidden === next.hidden && previous.footer === next.footer ? previous : next);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [route]);
  return createPortal(<button className={`scroll-top${appearance.footer ? ' scroll-top--footer' : ''}`} type="button" aria-label="맨 위로 이동" hidden={appearance.hidden} onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 10 12 3l7 7M12 3v18" /></svg>
  </button>, document.body);
}
