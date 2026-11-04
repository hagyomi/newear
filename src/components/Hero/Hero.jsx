import { useRef } from 'react';
import { polaroids } from './polaroids';
import { usePolaroidScroll } from './usePolaroidScroll';
import './Hero.css';

export default function Hero() {
    const rootRef = useRef(null);
    usePolaroidScroll(rootRef);
    return (
        <section ref={rootRef} className="hero section-flow" aria-labelledby="hero-title" data-node-id="110:897">
            <div className="hero__stage">
                <div className="hero__intro section-inner">
                    <h1 className="hero__title" id="hero-title" data-node-id="110:900">
                        <span>DEFINE </span>
                        <span>YOUR ERA.</span>
                    </h1>
                    <p className="hero__copy" data-node-id="110:899">
                        Your style. Your identity.
                        <br />
                        Make every moment your own.
                    </p>
                </div>
                <ul className="hero__cards" aria-label="뉴에라 폴라로이드 컬렉션" data-node-id="110:903">
                    {polaroids.map(card => (
                        <li className="hero__polaroid" key={card.id} data-polaroid={card.id}
                            style={{ '--card-width': card.width, '--stack-x': card.x, '--stack-y': card.y, '--stack-scale': card.stackScale, '--stack-rotation': `${card.rotation}deg`, '--card-layer': card.layer }}>
                            <img src={`${import.meta.env.BASE_URL}images/banners/polaroids/${card.file}`} alt={card.alt}
                                width={card.width} height={card.height}
                                fetchPriority={card.id === 'newera-logo' ? 'high' : 'auto'} draggable="false" />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
