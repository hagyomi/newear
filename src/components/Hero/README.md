# Hero → Visual 폴라로이드 스크롤

사용자가 제공한 투명 PNG 9장을 `public/images/banners/polaroids/`에 바이트 변경 없이 복사했다. 파일명의 밑줄만 하이픈으로 변경했다. 원본 출처는 사용자 첨부 `newera_9_polaroids_transparent/01_brown_cap.png`부터 `09_denim_pants.png`까지이며 제품·로고·색상·텍스트·비율을 편집하지 않았다.

배치 기준은 [Figma 메인](https://www.figma.com/design/SdB8jlIU73d8d5oC4sBaB4/?node-id=110-884)의 기존 `/images/figma/img017E708A4195493C8A7D19Bbca3B6C9D1.png`와 `/images/figma/imgVisual.png`다. 기존 합성 PNG는 참조용으로 보존하고 화면에는 개별 카드 9장을 한 번씩 렌더링한다. 시작 겹침 위치·각도·순서는 `polaroids.js`에서 관리한다. 제공된 정사각형에 가까운 카드의 비율을 유지하므로 Hero 합성본의 원근과 카드 형태를 픽셀 단위로 동일하게 재현하는 구성은 아니다.

`usePolaroidScroll.js`가 GSAP ScrollTrigger의 `pin`과 `scrub: true`를 연결한다. 각 카드가 시작 좌표에서 Visual의 3×3 좌표로 이동하며 회전이 0도가 된다. 타이틀과 카피는 내용·스타일을 유지하고 펼쳐지는 동안 위로 이동한다. 페이드나 합성 이미지 교체는 사용하지 않는다. 완료 후 그리드를 잠시 유지하고 pin을 해제하며 역스크롤은 같은 타임라인을 되감는다. pin 간격 때문에 전체 문서의 스크롤 길이는 늘어난다.

화면 리사이즈 시 좌표를 재계산한다. 사용자의 명시적인 인터랙션 요청에 따라 OS의 `prefers-reduced-motion` 설정과 관계없이 겹침·pin·스크롤 연결을 제공한다. 자동 재생이나 관성 없이 `scrub: true`로 사용자의 스크롤에 직접 연결한다. CSS 기본 상태도 중앙 겹침으로 지정해 애니메이션 초기화 전 카드를 Hero 아래로 보내지 않는다. `gsap.matchMedia().revert()`가 언마운트 시 애니메이션, pin spacer와 리스너를 정리한다. 공통 reset과 다른 섹션 스타일은 변경하지 않는다.

검증: `npm.cmd run lint`, `npm.cmd run build`. 실행 중인 Vite(5173)와 테스트용 Chrome CDP(9333) 환경에서 `node .tools/verify-polaroids.mjs`로 독립 이동, 최종 정렬, 역재생, pin 해제, 1440×900 / 390×844 / 1920×720 리사이즈, 모션 줄이기 전환, StrictMode pin 중복, 이미지 해시와 콘솔 오류를 확인한다. 결과와 시작·중간·완료 스크린샷은 `.tools/polaroids-*`에 저장한다.
