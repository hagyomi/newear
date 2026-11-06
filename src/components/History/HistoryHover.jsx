const details = {
  1920: { node: '99:297', top: 118,
    lines: ['1920년 에르하르트 코흐는', '동료에게 500달러를 빌려', '**‘E.Koch’라는 이름의**', '**모자 회사를 설립**합니다.'],
    cap: [30, 208, 79, 115], caption: [174.5, 289], notes: ['뉴에라의 첫 신사용 모자', '개츠비 햇'] },
  1930: { node: '99:305', top: 106,
    lines: ['1932년 코흐의 아들 해롤드 코흐는', '뉴에라 캡 컴퍼니의 사업에 동참하게 됩니다.', '해롤드는 프로 야구가 인기를 얻고 있는 동안', '패션 모자에 대한 수요가 감소하는 것을 알아채고', '**메이저리그의 캡을 생산하기 시작**합니다.'],
    cap: [77, 235, 119, 87], caption: [283.5, 255], notes: ['1934년 MLB를 위해 제작한', '첫 프로 야구 모자', '‘클리블랜드 인디언스’'] },
  1940: { node: '99:338', top: 118,
    lines: ['메이저리그 모자 생산 이후 소비자들의 요구에 따라', '다양한 스포츠 리그의 캡을 생산하기 시작하였으며,', '1940년대 후반에는 **크기 조정이 가능한**', '**59FIFTY 캡이 등장**하였습니다.'],
    cap: [101, 232, 122, 80], caption: [285, 258], notes: ['업무용 유니폼으로', '탄생한 워크웨어 캡'] },
  1950: { node: '99:362', top: 130,
    lines: ['1954년 헤롤드는 59FIFTY®의', '시초가 되는 모자를 개발,', '**야구모자 제조 업계의 기준을 확립**하였습니다.'] },
  1960: { node: '99:375', top: 142,
    lines: ['1965년 뉴에라가 **모든 MLB팀에**', '**모자를 공급**하기 시작하였습니다.'],
    cap: [58, 219, 138, 83], caption: [293, 240], notes: ['1969년부터 1995년까지 사용된', '뉴에라 캡 클래식 로고의', '컴퍼니 캡'] },
  1970: { node: '99:400', top: 118,
    lines: ['1974년 메이저리그 베이스볼', '24개 팀 중 20팀이 뉴에라와 계약하고', '**해롤드 쿡의 아들인 데이비드 쿡이**', '**경영자로 취임**하였습니다.'],
    cap: [70, 231, 131, 81], caption: [289, 262], notes: ['1977년 피츠버그 파이러츠의', '<팝 베어> 모델'] },
  1980: { node: '99:420', top: 118,
    lines: ['데이비드 코흐의 비전에 이끌려,', '1980년대는 지속적인 성장의 10년이 되었습니다.', '**우편 주문을 통해 팬들에게 MLB 온 필드 모자를**', '**처음으로 제공**하기도 했습니다.'],
    cap: [76, 230, 127, 82], caption: [287, 258], notes: ['뮤어 필드 빌리지 GC가', '1980년대 초에 제작한 모자'] },
  1990: { node: '99:447', top: 106,
    lines: ['마침내 뉴에라 캡은 수많은 실험과 경험을 통해 얻은', '고퀄리티의 로고와 완벽한 재봉 과정으로', '뛰어난 착용감을 인정받으며,', '**메이저 리그 전 구단의 선수용 모자를**', '**단독 체결하여 공식적으로 제작**하게 되었습니다.'],
    cap: [45, 236, 128, 86], caption: [288, 254], notes: ['영화 제작자인 스파이크 리의 요청으로', '레드 컬러의 양키스 모자를 제작하였고,', '엄청난 주목을 받았습니다'] },
  2000: { node: '99:479', top: 130,
    lines: ['2001년 코흐 가의 4대 크리스 코흐가 취임하고', '이후 **뉴에라 본사는 미국 뉴욕주 버팔로로**', '**이전**하게 됩니다'], cap: [157, 222, 125, 91] },
  2010: { node: '99:496', top: 130,
    lines: ['헤드웨어 브랜드로 지위를 확립한 뉴에라는', '**미식축구 대표 리그인**', '**NFL의 공식 공급처**가 됩니다.'],
    cap: [45, 224, 125, 86], caption: [287, 242], notes: ['2017년부터 MLB 공식 선수용 모자에는', '뉴에라의 트레이드 마크인', '플래그 로고가 자수되었습니다'] },
  2020: { node: '99:517', top: 130,
    lines: ['**2020년에 100주년을 맞이하는**', '**글로벌 브랜드 ‘뉴에라’**', '**앞으로의 100년도 기대해주세요**'] },
};

const position = (values, names) => Object.fromEntries(values.map((value, index) => [names[index], `calc(${value} * var(--u))`]));

export default function HistoryHover({ year }) {
  const detail = details[year];
  const background = year === 1920 ? 'imgFrame24' : year === 1930 ? 'imgFrame26' : year === 1940 ? 'history-hover-1940-background' : `history-${year}`;
  return <div className="history__hover" data-node-id={detail.node}>
    <img className="history__hover-background" src={`${import.meta.env.BASE_URL}images/figma/${background}.png`} alt="" loading="lazy" draggable="false" />
    <div className="history__hover-dim" />
    <div className="history__hover-circle" />
    <p className="history__hover-decade" aria-hidden="true">{year}’s</p>
    <div className="history__hover-copy" style={{ top: `calc(${detail.top} * var(--u))` }}>
      {detail.lines.map((line, index) => <p key={index}>{line.split(/(\*\*.*?\*\*)/).map((part, i) =>
        part.startsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part
      )}</p>)}
    </div>
    {detail.cap && <img className="history__hover-cap" src={`${import.meta.env.BASE_URL}images/figma/history-hover-${year}-cap.png`}
      style={position(detail.cap, ['left', 'top', 'width', 'height'])} alt="" loading="lazy" draggable="false" />}
    {detail.notes && <div className="history__hover-caption" style={position(detail.caption, ['left', 'top'])}>
      {detail.notes.map(note => <p key={note}>{note}</p>)}
    </div>}
  </div>;
}
