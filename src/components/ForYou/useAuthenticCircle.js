import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useAuthenticCircle(rootRef) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    const circle = root?.querySelector('.authentic__layer-153');
    if (!circle) return;
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          id: 'authentic-circle',
          trigger: root,
          start: () => `top+=${circle.offsetTop - circle.offsetHeight / 2} bottom`,
          end: () => `top+=${circle.offsetTop + circle.offsetHeight / 2} top`,
          scrub: 0.4,
          invalidateOnRefresh: true,
        },
      });
      timeline.fromTo(circle, {
        '--circle-x': 4, '--circle-y': 4, '--circle-offset': '-200%', '--circle-rotation': '30deg', opacity: 0,
      }, {
        '--circle-x': 1, '--circle-y': 1, '--circle-offset': '0%', '--circle-rotation': '0deg', opacity: 1,
        duration: 0.6, ease: 'power1.inOut',
      }).to(circle, {
        '--circle-x': 4, '--circle-y': 3, '--circle-offset': '30%',
        backgroundColor: '#ffffff',
        duration: 0.4, ease: 'power1.inOut',
      });
      return () => { timeline.scrollTrigger?.kill(); timeline.revert(); };
    }, root);
    return () => media.revert();
  }, [rootRef]);
}
