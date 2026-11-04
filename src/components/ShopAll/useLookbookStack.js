import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useLookbookStack(rootRef) {
  useLayoutEffect(() => {
    // Use the reference's native view timelines when available. Sticky holds
    // extend these timelines, so a single fixed-length GSAP timeline is not equivalent.
    const nativeEntry = CSS.supports('animation-timeline: view()');
    const root = rootRef.current;
    const rows = root.querySelector('.shopall__rows');
    const panels = [...root.querySelectorAll('.shopall__panel')];
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      panels.forEach((panel, index) => {
        const row = panel.querySelector('.shopall__row');
        // Measure the normal-flow slots, never the moving/sticky card bounds.
        const entryTop = () => {
          const style = getComputedStyle(rows);
          const gap = parseFloat(getComputedStyle(panel).marginTop) || 0;
          return rows.getBoundingClientRect().top + window.scrollY +
            parseFloat(style.paddingTop) + index * (panel.offsetHeight + gap);
        };
        const coverStart = () => entryTop() - window.innerHeight;
        const coverEnd = () => rows.getBoundingClientRect().bottom + window.scrollY;
        if (!nativeEntry) gsap.fromTo(panel, { '--entry-angle': '30deg', '--entry-y': '40px' }, {
          '--entry-angle': '0deg', '--entry-y': '0px', ease: 'none',
          scrollTrigger: {
            id: `lookbook-entry-${index}`,
            trigger: rows,
            start: coverStart,
            end: () => coverStart() + (coverEnd() - coverStart()) * 0.1,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
        media.add('(min-width: 768px)', () => {
          row.querySelectorAll('.shopall__image--full').forEach((image, imageIndex) => {
            gsap.fromTo(image, { scale: 2 }, { scale: 1, ease: 'none',
              scrollTrigger: {
                id: `lookbook-image-${index}-${imageIndex}`, trigger: rows,
                start: coverStart,
                end: () => entryTop() - parseFloat(getComputedStyle(panel).top),
                scrub: true, invalidateOnRefresh: true,
              },
            });
          });
        });
      });
    }, root);

    let disposed = false;
    document.fonts.ready.then(() => {
      if (!disposed) ScrollTrigger.refresh();
    });
    return () => {
      disposed = true;
      media.revert();
      context.revert();
    };
  }, [rootRef]);
}
