import './ShopAll.css';
import { useRef } from 'react';
import { useLookbookStack } from './useLookbookStack';

const products = [
  ['ORIGINATORS BIG SCRIPT HOODIE', '오리지네이터스 빅 스크립트 후드 데저트 올리브', 'lavender', 'purple'],
  ['NEW ERA LOGO CREW NECK', '뉴에라 로고 크루넥 맨투맨 차콜', 'pink-1', 'burgundy'],
  ['MLB AUTHENTIC STADIUM JACKET', 'MLB 뉴욕 양키스 어센틱 스타디움 재킷 네이비', 'pink-2', 'burgundy'],
  ['MLB CORDUROY STADIUM JACKET', 'MLB 뉴욕 양키스 코듀로이 스타디움 재킷 코퍼', 'mint', 'green'],
  ['MLB COOPERS TOWN HOODIE', 'MLB 쿠퍼스 타운 뉴욕 양키스 후드 레드', 'lavender', 'purple'],
];
const productIds = ['11263705', '11263633', '11260660', '11263773', '11263697'];
// Keep each pair's original paint order and coordinates within its product panel.
const cutouts = [
  ['imgImgi35162', '121:1139', 556, 438, 489, 522, 'portrait'],
  ['imgImgi30152', '121:1138', 894, 314, 700, 747, 'full'],
  ['imgImgi5011', '121:1142', 882, 1112, 489, 522, 'portrait'],
  ['imgImgi24121', '121:1131', 1011, 2460, 489, 522, 'portrait'],
  ['imgImgi22101', '121:1148', 562, 2336, 700, 747, 'full'],
  ['imgImgi7022', '121:1141', 450, 988, 700, 747, 'full'],
  ['imgImgi10031', '121:1145', 558, 1791, 484, 517, 'portrait'],
  ['imgImgi14051', '121:1146', 912, 1691, 700, 747, 'full'],
  ['imgImgi29142', '130:1154', 800, 2908, 700, 746, 'portrait'],
  ['imgImgi25132', '130:1155', 331, 3039, 700, 747, 'full'],
];

export default function ShopAll() {
  const rootRef = useRef(null);
  useLookbookStack(rootRef);
  const panelNodes = [
    ['121:1139', '121:1138'], ['121:1142', '121:1141'],
    ['121:1145', '121:1146'], ['121:1131', '121:1148'],
    ['130:1154', '130:1155'],
  ];
  return <section ref={rootRef} className="shopall section-flow" aria-labelledby="lookbook-title" data-node-id="110:996">
    <div className="section-inner">
      <div className="shopall__rows">
        {products.map(([name, description, left, right], index) => <div className="shopall__panel" key={name}
          style={{ zIndex: index + 1 }}>
          <article className="shopall__row" data-node-id={`110:${998 + index}`}
          style={{ '--panel-left': `var(--color-lookbook-${left})`, '--panel-right': `var(--color-lookbook-${right})` }}>
          <div className="shopall__copy">
            <div className="shopall__text"><h3>{name}</h3><p>{description}</p></div>
            <a className="shopall__link" href={`#/product/${productIds[index]}`} aria-label={description + ' 상세 보기'}>
              <span>바로가기</span><img src={`${import.meta.env.BASE_URL}images/figma/imgFrame60.svg`} alt="" />
            </a>
          </div>
          {cutouts.filter(([, node]) => panelNodes[index].includes(node)).map(([image, node, x, y, w, h, framing]) =>
            <div className={`shopall__cutout${framing === 'full' ? ' shopall__cutout--full' : ''}`} key={node} data-node-id={node}
              style={{ '--x': x - 100, '--y': y - (416 + index * 674), '--w': w, '--h': h }}>
              <img className={`shopall__image${framing === 'full' ? ' shopall__image--full' : ''}${image === 'imgImgi29142' ? ' shopall__image--cropped' : ''}`}
                src={`${import.meta.env.BASE_URL}images/figma/${image}.png`} alt="RIIZE 소희 뉴에라 FW26 룩북" width={w} height={h} loading="lazy" draggable="false" />
            </div>
          )}
        </article></div>)}
        <div className="shopall__tail" aria-hidden="true" />
      </div>
      <h2 className="shopall__title" id="lookbook-title" data-node-id="110:1003">FW26 WITH RIIZE SOHEE</h2>
    </div>
  </section>;
}
