import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { polaroids } from './polaroids';

gsap.registerPlugin(ScrollTrigger);

export function usePolaroidScroll(rootRef) {
    useLayoutEffect(() => {
        const root = rootRef.current;
        const stage = root.querySelector('.hero__stage');
        const intro = root.querySelector('.hero__intro');
        const cards = gsap.utils.toArray('.hero__polaroid', root);
        const media = gsap.matchMedia();

        media.add(
            // This is an explicitly requested scroll interaction. Keep it
            // available under the host's reduced-motion preference as well;
            // scrub:true uses only direct scroll input, without autoplay or inertia.
            'all',
            () => {
                root.classList.add('hero--scroll');
                const unit = () => Math.min(1, stage.clientWidth / 1920);
                const stackUnit = () => Math.min(unit(), stage.clientHeight / 981);
                const gridUnit = () => Math.min(unit(), stage.clientHeight / 822);
                const gridTop = () => (stage.clientHeight - 822 * gridUnit()) / 2;

                gsap.set(cards, { left: '50%', top: 0, xPercent: -50, yPercent: -50 });
                const timeline = gsap.timeline({
                    defaults: { ease: 'none' },
                    scrollTrigger: {
                        id: 'hero-polaroids',
                        trigger: root,
                        start: 'top top',
                        end: () => `+=${Math.max(stage.clientHeight * 1.8, window.innerHeight)}`,
                        pin: stage,
                        // Transform pinning retains the app's container-query coordinate system.
                        pinType: 'transform',
                        pinSpacing: true,
                        scrub: true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    },
                });
                timeline.fromTo(
                    intro,
                    {
                        y: 0,
                        scale: () => stackUnit() / unit(),
                        transformOrigin: '50% 0%',
                    },
                    {
                        y: () => -stage.clientHeight,
                        scale: () => stackUnit() / unit(),
                        duration: 0.6,
                    },
                    0
                );
                timeline.fromTo(
                    cards,
                    {
                        x: (index) => polaroids[index].x * stackUnit(),
                        y: (index) => polaroids[index].y * stackUnit(),
                        rotation: (index) => polaroids[index].rotation,
                        scale: (index) => (polaroids[index].stackScale * stackUnit()) / unit(),
                    },
                    {
                        x: (index) =>
                            (polaroids[index].gridX + polaroids[index].width / 2 - 960) *
                            gridUnit(),
                        y: (index) =>
                            gridTop() +
                            (polaroids[index].gridY + polaroids[index].height / 2) * gridUnit(),
                        rotation: 0,
                        scale: () => gridUnit() / unit(),
                        duration: 1,
                    },
                    0
                );
                // Hold the completed grid briefly before releasing the section.
                timeline.to({}, { duration: 0.12 });

                let disposed = false;
                document.fonts.ready.then(() => {
                    if (!disposed) ScrollTrigger.refresh();
                });
                return () => {
                    disposed = true;
                    root.classList.remove('hero--scroll');
                };
            },
            root
        );
        // Also removes pin spacers and listeners on StrictMode remounts.
        return () => media.revert();
    }, [rootRef]);
}
