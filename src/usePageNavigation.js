import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const stateKey = 'neweraScroll';
const getEntry = () => {
  const saved = history.state?.[stateKey];
  if (saved && saved.hash === location.hash && typeof saved.id === 'string') return saved;
  const entry = { id: crypto.randomUUID(), hash: location.hash, y: 0 };
  history.replaceState({ ...history.state, [stateKey]: entry }, '');
  return entry;
};
export function usePageNavigation() {
  const [page, setPage] = useState(getEntry);
  const activeEntry = useRef(page);
  const restoring = useRef(true);
  useEffect(() => {
    const previousRestoration = history.scrollRestoration;
    history.scrollRestoration = 'manual';
    const save = () => {
      if (!restoring.current && location.hash === activeEntry.current.hash && history.state?.[stateKey]?.id === activeEntry.current.id) {
        const entry = { ...activeEntry.current, y: window.scrollY };
        activeEntry.current = entry;
        history.replaceState({ ...history.state, [stateKey]: entry }, '');
      }
    };
    const onClick = event => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target.closest?.('a[href]');
      if (!anchor || anchor.hasAttribute('download') || (anchor.target && anchor.target !== '_self')) return;
      const url = new URL(anchor.href, location.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname || url.search !== location.search) return;
      if (url.hash === '#main-content') {
        event.preventDefault();
        const main = document.getElementById('main-content');
        main?.setAttribute('tabindex', '-1');
        main?.focus({ preventScroll: true });
        main?.scrollIntoView();
        return;
      }
      if (!url.hash.startsWith('#/')) return;
      save();
      // Let the browser create the history entry through the native anchor.
      if (url.hash !== location.hash) restoring.current = true;
    };
    const onLocationChange = () => {
      if (location.hash === '#main-content') return;
      const entry = getEntry();
      if (entry.id === activeEntry.current.id && entry.hash === activeEntry.current.hash) return;
      restoring.current = true;
      activeEntry.current = entry;
      setPage(entry);
    };
    document.addEventListener('click', onClick);
    window.addEventListener('popstate', onLocationChange);
    window.addEventListener('hashchange', onLocationChange);
    window.addEventListener('scroll', save, { passive: true });
    return () => {
      history.scrollRestoration = previousRestoration;
      document.removeEventListener('click', onClick);
      window.removeEventListener('popstate', onLocationChange);
      window.removeEventListener('hashchange', onLocationChange);
      window.removeEventListener('scroll', save);
    };
  }, []);
  useLayoutEffect(() => {
    let disposed = false;
    let frame;
    restoring.current = true;
    // Children initialize sticky layouts and scroll animations before restoring.
    document.fonts.ready.then(() => {
      if (disposed) return;
      frame = requestAnimationFrame(() => {
        if (disposed) return;
        ScrollTrigger.refresh();
        window.scrollTo({ top: page.y, behavior: 'instant' });
        ScrollTrigger.update();
        restoring.current = false;
        const entry = { ...page, y: window.scrollY };
        activeEntry.current = entry;
        history.replaceState({ ...history.state, [stateKey]: entry }, '');
      });
    });
    return () => { disposed = true; cancelAnimationFrame(frame); };
  }, [page]);
  return page.hash;
}
