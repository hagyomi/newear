import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useForYouTransition(rootRef) {
    useLayoutEffect(() => {
        const root = rootRef.current;
        const stage = root.querySelector('.foryou-transition__stage');
        const context = gsap.context(() => {
            const cover = root.querySelector('.foryou');
            const maskWrap = root.querySelector('.foryou__mask-wrap');
            const svg = root.querySelector('.foryou__mask');
            const text = root.querySelector('.foryou__mask-text');
            const fitMask = () => {
                const width = cover.clientWidth;
                const height = cover.clientHeight;
                svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
                const mask = svg.querySelector('mask');
                for (const element of [mask, ...svg.querySelectorAll('.foryou__mask-bounds')]) {
                    element.setAttribute('x', 0);
                    element.setAttribute('y', 0);
                    element.setAttribute('width', width);
                    element.setAttribute('height', height);
                }
                text.setAttribute('font-size', 400);
                text.setAttribute('x', width / 2);
                text.setAttribute('y', height / 2);
                const bounds = text.getBBox();
                if (bounds.width && bounds.height) {
                    text.setAttribute('font-size', 400 * Math.min(width * 0.88 / bounds.width, height * 0.58 / bounds.height));
                }
            };
            fitMask();
            gsap.set(maskWrap, { scale: 1, opacity: 1, transformOrigin: '50% 50%' });

            const timeline = gsap.timeline({
                defaults: { ease: 'none' },
                scrollTrigger: {
                    id: 'foryou-zoom',
                    trigger: root,
                    start: 'top top',
                    end: () => `+=${root.offsetHeight - stage.offsetHeight}`,
                    // CSS sticky keeps the scene fixed on the browser's scroll thread.
                    // Only the mask animation follows JS, with a short wheel-input blend.
                    scrub: 0.35,
                    invalidateOnRefresh: true,
                    onRefreshInit: fitMask,
                },
            });
            // Only the mask moves; the category scene stays in its final layout.
            timeline.to(maskWrap, { scale: 13, duration: 0.8, ease: t => t ** 2.5 }, 0.05)
                .to(maskWrap, { opacity: 0, duration: 0.2, ease: 'power1.out' }, 0.65)
                .to({}, { duration: 0.15 }, 0.85);
        }, root);

        let disposed = false;
        document.fonts.ready.then(() => {
            if (!disposed) ScrollTrigger.refresh();
        });
        return () => {
            disposed = true;
            context.revert();
        };
    }, [rootRef]);
}
