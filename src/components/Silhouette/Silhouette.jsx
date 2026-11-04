import SectionHeader from '../SectionHeader';
import './Silhouette.css';

const fits = [
  { name: '59FIFTY', node: '110:975', image: 'imgFrame45', description: ['뉴에라의 시그니처 모델', 'FITTED CAP'] },
  { name: '9FORTY', node: '110:976', image: 'imgFrame46', description: ['뉴에라의 볼캡을 상징하는 실루엣'] },
  { name: '39THIRTY', node: '110:977', image: 'imgFrame47', description: ['STRETCH CAP 모델로 신축성이 탁월'] },
  { name: 'K-FRAME', node: '110:972', image: 'imgFrame42', description: ['전면 2개의 패널을 한 개의 패널로 구성하여', '보다 다이나믹하고 안정적인 형태'] },
  { name: 'BUCKET', node: '110:973', image: 'imgFrame43', description: ['양동이(BUCKET)을 쓴 것과 같은 실루엣', '둥근 챙으로 자외선 차단에 탁월'] },
  { name: 'JET CAP', node: '110:974', image: 'imgFrame44', description: ['편안한 피팅감의 클래식한 실루엣', '탁월한 땀 흡수력, 편안한 착용감'] },
];

export default function Silhouette() {
  return <section className="silhouette section-flow" aria-labelledby="silhouette-title" data-node-id="110:965">
    <div className="section-inner">
      <SectionHeader number="04">EXPLORE THE FIT</SectionHeader>
      <h2 className="silhouette__title" id="silhouette-title">Find Your Silhouette.</h2>
      <p className="silhouette__intro">다양한 실루엣 속에서<br />나만의 스타일을 발견해 보세요.</p>
      <div className="silhouette__grid">
        {fits.map(fit => <article className="silhouette__card" key={fit.name} data-node-id={fit.node}>
          <h3 className="silhouette__name">{fit.name}</h3>
          <p className="silhouette__description">{fit.description.map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</p>
          <img className="silhouette__image" src={`${import.meta.env.BASE_URL}images/figma/${fit.image}.png`} alt={fit.name + ' 실루엣'} width="330" height="339" loading="lazy" />
        </article>)}
      </div>
    </div>
  </section>;
}
