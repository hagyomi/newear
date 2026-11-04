import './Footer.css';

const columns = [
  {title:'ABOUT NEW ERA',items:['뉴에라 22단계 공정','글로벌 플래그십 스토어','매장 개설문의','단체 주문 안내','채용 공고']},
  {title:'GUIDE',items:['오프라인 매장 안내','손질 및 세탁법','룩북','실루엣 가이드','사이즈 차트','상품 리뷰']},
  {title:'CUSTOMER',items:['주문조회','1 : 1 문의','Q&A','자주 묻는 질문','교환 / 반품 안내','A / S 수선 서비스']},
  {title:'MEMBERSHIP',items:['뉴에라 멤버십 서비스']},
  {title:'GLOBAL',items:['US','JAPAN','AUSTRALIA','BRAZIL','CHINA']},
];
const legal = ['개인정보 처리방침','구매 이용약관','이용안내','이메일 무단 수집 거부'];
export default function Footer() {
  return <footer className="footer section-flow" data-node-id="192:410">
    <div className="section-inner" data-node-id="192:417">
      <ul className="footer__legal">{legal.map(item => <li key={item}>{item}</li>)}</ul>
      <div className="footer__logo-slot" data-node-id="192:416"><img src={`${import.meta.env.BASE_URL}images/figma/imgObject.png`} alt="NEW ERA" width="340" height="86" loading="lazy" /></div>
      <img className="footer__background" src={`${import.meta.env.BASE_URL}images/figma/imgImage50.png`} alt="" width="1920" height="640" loading="lazy" data-node-id="192:412" />
      <div className="footer__columns">
        {columns.map((column,index) => <section className={`footer__column footer__column--${index}`} key={column.title} aria-label={column.title}>
          <h2 className="footer__title">{column.title}</h2>
          <ul className="footer__links">{column.items.map(item=><li key={item}>{item}</li>)}</ul>
        </section>)}
      </div>
    </div>
  </footer>;
}
