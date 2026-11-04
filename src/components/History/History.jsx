import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, EffectCreative, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import SectionHeader from '../SectionHeader';
import HistoryHover from './HistoryHover';
import './History.css';

const cards = [
  { node: '110:937', title: '1920 - The Beginning', image: 'imgFrame24' },
  { node: '110:935', title: '1930 - The Turning Point', image: 'imgFrame26' },
  { node: '99:335', title: '1940 - The Expansion', image: 'history-1940', crop: true },
  { node: '99:359', title: '1950 - The Birth of an Icon', image: 'history-1950' },
  { node: '99:372', title: '1960 - The Major League', image: 'history-1960' },
  { node: '99:397', title: '1970 - The Next Generation', image: 'history-1970' },
  { node: '99:417', title: '1980 - Beyond the Field', image: 'history-1980' },
  { node: '99:436', title: '1990 - The Official Era', image: 'history-1990' },
  { node: '99:476', title: '2000 - A New Direction', image: 'history-2000' },
  { node: '99:493', title: '2010 - The Global Stage', image: 'history-2010' },
  { node: '99:514', title: '2020 - A Century of Legacy', image: 'history-2020' },
];
export default function History() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return <section className="history section-flow" aria-labelledby="history-title" data-node-id="110:928">
    <div className="section-inner">
      <SectionHeader number="02">A LEGACY BEYOND TIME.</SectionHeader>
      <h2 className="history__title" id="history-title">100 Years.<br />Still Iconic.</h2>
      <p className="history__intro">100년이 넘는 시간 동안 스포츠와 함께 성장한 뉴에라.<br />시대와 문화를 넘어 오늘날까지<br />자신만의 상징성을 이어가고 있습니다.</p>
      <Swiper className="history__swiper" modules={[A11y, EffectCreative, Keyboard]}
        effect="creative" creativeEffect={{ limitProgress: 1,
          prev: { translate: ['-56%', 0, -1], scale: 0.722 },
          next: { translate: ['62%', 0, -1], scale: 0.722 } }}
        slidesPerView={1} centeredSlides loop loopAdditionalSlides={2} speed={550} grabCursor
        keyboard={{ enabled: true, onlyInViewport: true }}
        a11y={{ containerMessage: '뉴에라 히스토리', slideLabelMessage: '{{index}} / {{slidesLength}}' }}
        onSwiper={swiper => { swiperRef.current = swiper; }}
        onSlideChange={swiper => setActiveIndex(swiper.realIndex)}>
        {cards.map((card, index) => <SwiperSlide key={card.node}>
          <article className="history__card" data-node-id={card.node}>
            <h3 className="history__year">{card.title}</h3>
            <div className="history__image-window" tabIndex={index === activeIndex ? 0 : -1}
              role="group" aria-label={`${card.title} 상세 이야기`}>
              <img className={`history__image${card.crop ? ' history__image--1940' : ''}`}
                src={`${import.meta.env.BASE_URL}images/figma/${card.image}.png`} alt={card.title} loading="lazy" draggable="false" />
              <HistoryHover year={Number(card.title.slice(0, 4))} />
            </div>
          </article>
        </SwiperSlide>)}
      </Swiper>
      {['previous', 'next'].map(direction => <button key={direction} type="button"
        onClick={() => direction === 'previous' ? swiperRef.current?.slidePrev() : swiperRef.current?.slideNext()}
        className={`history__arrow history__arrow--${direction}`} aria-label={direction === 'previous' ? '이전 히스토리' : '다음 히스토리'}>
        <img src={`${import.meta.env.BASE_URL}images/figma/imgMaterialSymbolsArrowBackIosNew.svg`} alt="" />
      </button>)}
      <div className="history__pagination" aria-label={`히스토리 ${cards.length}개 중 ${activeIndex + 1}번째`}>
        {cards.map((card, index) => <button key={card.node} type="button"
          className={`history__dot${index === activeIndex ? ' history__dot--active' : ''}`}
          aria-label={`${card.title} 보기`} aria-current={index === activeIndex ? 'true' : undefined}
          onClick={() => swiperRef.current?.slideToLoop(index)} />)}
      </div>
    </div>
  </section>;
}
