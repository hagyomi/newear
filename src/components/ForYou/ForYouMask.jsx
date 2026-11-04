import { useId } from 'react';

export default function ForYouMask() {
    const maskId = `foryou-mask-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
    return (
        <div className="foryou__mask-wrap" aria-hidden="true">
            <svg className="foryou__mask" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <mask id={maskId} maskUnits="userSpaceOnUse" maskType="luminance">
                        <rect className="foryou__mask-bounds" fill="white" />
                        <text className="foryou__mask-text" fill="black" textAnchor="middle"
                            dominantBaseline="central">FOR YOU</text>
                    </mask>
                </defs>
                <rect className="foryou__mask-bounds" fill="white" mask={`url(#${maskId})`} />
            </svg>
        </div>
    );
}
