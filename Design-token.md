# NEW ERA Renewal 디자인 토큰 가이드

## 1. 목적과 근거

React + Vite + JavaScript + CSS + GSAP 프로젝트의 메인 디자인 기준을 정리한다. 이번 작업은 문서 수정이며 tokens.css나 React UI를 생성하지 않는다.

- 확인일: 2026-11-04.
- [Figma 메인 프레임](https://www.figma.com/design/SdB8jlIU73d8d5oC4sBaB4/?node-id=110-884): `110:884`, 1920×14564px.
- Figma MCP 속성 조회와 전체 스크린샷을 대조했다. 범위는 해당 메인 프레임과 그 자식이며 다른 화면의 디자인은 검증하지 않았다.
- **실측**: 노드 속성에서 확인. **계산**: 크기·좌표로 산출. **개발 정책**: 기존 규칙을 유지. **미확인**: 수치를 생성하거나 확정하지 않음.
- 메인 서브트리 변수 바인딩 0개, 로컬 변수 컬렉션 0개. 아래 CSS 토큰 이름은 문서에서 제안한 매핑이며 Figma 기존 변수명은 아니다.
- 요청된 design-tokens.md는 존재하지 않아 실제 기존 파일 Design-token.md를 수정했다.

페이지 진입은 `main.jsx` → `App.jsx` → `page/Home.jsx`를 기준으로 한다. App은 Header·Home·Footer를 조립하며 사용자 지정 컴포넌트 폴더를 사용한다. 전체 구조와 Figma 섹션 대응은 PROJECT_BUILD_GUIDE.md의 16절을 참조한다.

## 2. 토큰 관리 원칙 — 기존 유용한 규칙 유지

| 단계 | 역할 | 예시 |
|---|---|---|
| Primitive | 확인한 원시 값 | `--color-white` |
| Semantic | 사용하는 역할 | `--color-text-primary` |
| Component | 특정 반복 요소 | `--fit-card-width` |

- 컴포넌트에서는 가능하면 Semantic 또는 Component 토큰을 사용한다.
- 공통 토큰은 후속 구현 시 `src/styles/tokens.css`, 폰트 연결과 타이포는 `typography.css`, 기본 초기화와 전역 기본값은 `global.css`에서 관리한다.
- 컴포넌트·페이지 CSS는 해당 JSX와 같은 폴더에 두고 BEM을 사용한다. 페이지 전용 스타일을 global.css로 옮기지 않는다.
- 공통 CSS는 `index.css`에서 tokens.css → typography.css → global.css 순으로 불러오고, main.jsx에서 index.css를 한 번만 연결한다. 이 문서는 그 파일들을 생성하지 않는다.
- 새 토큰은 용도·중복·출처를 확인한 뒤 문서와 실제 선언을 함께 갱신한다.
- 한 번만 쓰이는 크기는 무조건 전역 토큰으로 만들지 않고 섹션 측정값으로 유지한다.

## 3. 컬러 — 실측

RGB 채널을 8bit HEX로 반올림한 값이다. 아래 확인된 SOLID paint의 opacity는 모두 1이다. 이미지 내부 픽셀 색상은 팔레트로 추정하지 않는다.

| Primitive 제안 | 값 | 확인 위치 |
|---|---|---|
| `--color-white` | `#FFFFFF` | 메인·일반 섹션 fill, 반전 텍스트 |
| `--color-black` | `#000000` | 메뉴·제목·본문, 선, 실루엣 카드, footer 바탕 |
| `--color-history-gray` | `#DFDEDF` | 히스토리 카드 `110:935~937` |
| `--color-pagination-gray` | `#898989` | 비활성 점 stroke `110:946` 등 |
| `--color-authentic-blue` | `#B3C2FF` | 59FIFTY 원형 배경 `110:961` |
| `--color-lookbook-lavender` | `#EEE9FF` | 룩북 1·5행 왼쪽 패널 |
| `--color-lookbook-purple` | `#3B3769` | 룩북 1·5행 오른쪽 패널 |
| `--color-lookbook-pink-1` | `#FFF2F2` | 룩북 2행 왼쪽 패널 |
| `--color-lookbook-pink-2` | `#FFF1F1` | 룩북 3행 왼쪽 패널 |
| `--color-lookbook-burgundy` | `#642E2E` | 룩북 2·3행 오른쪽 패널 |
| `--color-lookbook-mint` | `#E0FFE5` | 룩북 4행 왼쪽 패널 |
| `--color-lookbook-green` | `#25482A` | 룩북 4행 오른쪽 패널 |

비슷한 두 분홍색도 원본에서 서로 다른 값이므로 임의로 통합하지 않는다.

| Semantic 제안 | 매핑 | 범위 |
|---|---|---|
| `--color-bg-primary` | `--color-white` | 일반 섹션 |
| `--color-text-primary` | `--color-black` | 기본 제목·본문 |
| `--color-text-inverse` | `--color-white` | 검정 카드의 밝은 텍스트 |
| `--color-border-strong` | `--color-black` | 구분선·확인된 검정 선 |
| `--history-card-bg` | `--color-history-gray` | 히스토리 카드 |
| `--fit-card-bg` | `--color-black` | 실루엣 카드 |
| `--authentic-bg` | `--color-authentic-blue` | 59FIFTY 원형 |

footer `192:417`에는 흰 fill이 있지만 `192:412` 이미지가 겹쳐 최종 화면은 검정으로 보인다. footer 텍스트 전체를 이미지와 중복 구현하지 않도록 원본 에셋 구성을 먼저 확인한다.

## 4. 타이포그래피 — 실측

### 폰트

| 문서용 역할 | Figma 폰트/스타일 | 사용처 |
|---|---|---|
| base | Pretendard Thin / Light / Regular / Medium / SemiBold / Black | 본문·헤더·대형 제목·footer |
| handwritten | Caveat Regular, wght=400 | 카테고리 라벨 |
| card | Roboto SemiBold, wght=600, wdth=100 | 실루엣 모델명 |
| history | Roboto SemiBold Italic, wght=600, wdth=100 | 히스토리 연도 제목 |
| collaboration-label | Inter Light, wght=300, slnt=0 | COLLABORATION 라벨 |

Pretendard Variable은 기존 배포 선택이었으며 이번 Figma의 폰트명은 Pretendard다. 웹폰트 파일·라이선스·fallback·배포 방식은 미확인이다. Figma 스타일명과 실제 웹 font-weight 매핑은 폰트 파일 확보 후 검증한다.

### 역할별 크기·행간·자간

| 역할 / 근거 | 폰트 스타일 | 크기 | 행간 | 자간 |
|---|---|---:|---|---|
| header 메뉴 `110:889` 등 | Pretendard Medium | 20px | AUTO | 0% |
| hero 제목 `110:900` | Pretendard Black | 150px | 100% (=150px) | 0% |
| hero 영문 카피 `110:899` | Pretendard SemiBold | 20px | 120% (=24px) | -5% (=-0.05em) |
| 섹션 라벨 01·03·04 | Pretendard Light | 14px | AUTO | -4% |
| 섹션 02 번호 `110:930` | Pretendard Regular | 14px | AUTO | -4% |
| 협업 라벨 `110:982` | Inter Light | 14px | AUTO | -4% |
| 일반 섹션 제목 `110:910/933/970/994` | Pretendard SemiBold | 60px | 110% (=66px) | -4% (=-0.04em) |
| 일반 설명 `110:911/934/971/995` | Pretendard SemiBold | 20px | 120% (=24px) | -4% |
| FOR YOU `110:914` | Pretendard Black | 400px | 120% (=480px) | -6% (=-0.06em) |
| 카테고리 `158:345` 등 | Caveat Regular | 40px | AUTO | 0% |
| 히스토리 중앙 / 양옆 제목 | Roboto SemiBold Italic | 40 / 20px | AUTO | 0% |
| 59FIFTY 제목 `110:962` | Pretendard Black | 100px | 100% (=100px) | 0% |
| 실루엣 모델명 | Roboto SemiBold | 20px | AUTO | 0% |
| 실루엣 설명 | Pretendard Light | 20px | AUTO | 0% |
| 협업 카드 캡션 | Pretendard Regular | 20px | AUTO | 0% |
| 룩북 섹션 제목 `110:1003` | Pretendard Black | 130px | 120% (=156px) | 0% |
| 룩북 상품명 | Pretendard SemiBold | 30px | AUTO | -3% |
| 룩북 한글 설명 | Pretendard Light | 20px | AUTO | -3% |
| 룩북 바로가기 | Pretendard Light | 16px | AUTO | -3% |
| footer 제목·개인정보 처리방침 | Pretendard SemiBold | 20px | AUTO | 0% |
| footer 링크 | Pretendard Thin | 17px | AUTO | 0% |

AUTO는 Figma 자동 행간으로 CSS의 특정 숫자로 확정하지 않는다. 본문을 임의로 16px로 통일하지 않는다. 17px도 실제 사용 값이므로 금지하지 않는다. 폰트 크기 원시값은 **14, 16, 17, 20, 30, 40, 60, 100, 130, 150, 400px**가 확인됐다. 모든 크기를 전역 램프로 강제하기보다 위 역할별 조합을 우선한다.

## 5. 레이아웃·간격

실측과 계산을 구분한다. 좌표 기반 간격은 Figma Auto Layout gap과 같은 속성이 아니다.

| 토큰/측정 항목 | 값 | 상태·근거 |
|---|---:|---|
| `--layout-reference-width` | 1920px | 실측, 메인 폭 |
| `--container-main` | 1600px | 실측, 주요 inner |
| 데스크톱 inner 좌우 여백 | 160px | 실측 x 및 폭 기준 계산 |
| `--section-rule-width` | 1276px | 실측, `110:908` 등 |
| 라벨 top / 선 y | 130 / 167px | 실측, 섹션 01~05의 inner 기준 |
| `--header-menu-gap` | 100px | 실측 Auto Layout |
| `--header-actions-gap` | 30px | 실측 Auto Layout |
| 히스토리 페이지 표시 gap | 5px | 실측 Auto Layout `110:944` |
| 제목·설명 gap | 10px | 실측 Auto Layout, 협업 및 룩북 텍스트 |
| 룩북 텍스트 묶음·CTA gap | 80px | 실측 Auto Layout `I110:998;110:570` |
| 실루엣 카드 가로 / 세로 gap | 53 / 50px | 계산, x=162/605/1048, y=430/1002 |
| 룩북 행 gap | 130px | 계산, 행 시작 간격 674 - 높이 544 |
| footer 상단 그룹 gap | 170px | 실측 Auto Layout `196:474` |
| footer 링크 행 gap | 20px | 계산, 20px 텍스트의 y 간격 40 |
| footer 약관 가로 gap | 20px | 실측 Auto Layout `198:479` |

4px 배수로 보정하지 않는다. 주요 프레임은 layoutMode=NONE이므로 padding=0과 실제 콘텐츠 여백은 다르다. 콘텐츠 폭 1276, 룩북 폭 1400, inner 폭 1600을 하나의 값으로 합치지 않는다. 모바일·태블릿 padding, 유동 너비, CSS max-width 및 전환점은 미확인이다.

## 6. 이미지·표시 크기와 비율

아래는 원본 파일 해상도가 아닌 **Figma 표시 영역**이다. 비율은 폭÷높이 계산이며 회전 전 프레임 기준이다. FILL/CROP은 Figma image scaleMode이며 CSS object-fit에 무조건 일대일 대응시키지 않는다.

| 이미지/역할 | 표시 크기(px) | 폭/높이 비율 | 모드 / 근거 |
|---|---|---|---|
| 헤더 로고 | 128×85 | 약 1.506 | FILL, `110:887` |
| hero 중앙 | 480×710 | 48:71 | FILL, `182:336`, 메인 직속 |
| visual 콜라주 | 1920×822 | 320:137 | FILL, `110:903`, 하나의 이미지 fill |
| FOR YOU 글자 영역 | 1602×480 | 약 3.338 | IMAGE FILL, `110:914` |
| 카테고리 배경 | 1920×924 | 160:77 | FILL, `110:915` |
| 카테고리 카드 5개 | 254×325 | 약 0.782 | 첫 카드 FILL, 나머지 CROP |
| 히스토리 중앙 이미지 | 438×332 | 약 1.319 | FILL, `I110:937;17:204` |
| 히스토리 양옆 이미지 | 313×233 | 약 1.343 | FILL, `I110:935;21:244` 등 |
| 59FIFTY 상품 이미지 | 716×323 | 약 2.217 | CROP, `110:964` |
| 59FIFTY 하단 로고 | 314×105 | 약 2.990 | FILL, `110:963` |
| 실루엣 이미지 | 330×339 | 110:113 | FILL, 6개 공통 |
| 협업 카드 | 293×366 | 약 0.801 | CROP, `110:983/985/987/989/991` |
| 룩북 기본 컷아웃 | 489×522 | 약 0.937 | FILL, `121:1139` 등 |
| 룩북 변형 컷아웃 | 484×517 | 약 0.936 | FILL, `121:1145` |
| 룩북 확대 컷아웃 | 700×747 | 약 0.937 | FILL, `121:1138` 등 |
| 룩북 확대 예외 | 700×746 | 약 0.938 | CROP, `130:1154` |
| footer 로고 | 340×86 | 약 3.953 | CROP, `192:416` |
| footer 이미지 레이어 | 1920×640 | 3:1 | FILL, `192:412` |

이미지 다중 fill은 최종 보이는 레이어를 확인해야 한다. 원본 파일·투명도·크롭 변환·모바일 대체 에셋은 다운로드 후 검증할 항목이다. 임의 스톡/AI 이미지로 대체하지 않는다. 원본 에셋 노드와 출처를 기록하고 표시 크기 또는 aspect-ratio로 레이아웃 이동을 줄인다. 하단 이미지는 lazy loading을 고려하되 첫 hero/LCP 이미지는 지연 로딩하지 않는 기존 정책을 유지한다.

## 7. 반복 컴포넌트·크기·라운드

| 항목 | 확인 값 | 근거 |
|---|---|---|
| 데스크톱 header 높이 | 100px | `110:885`, 기존 72px 교체 |
| 헤더 아이콘 | 30×30px | 3개 인스턴스 |
| 히스토리 중앙 카드 | 500×513px, radius 약 15.5927px | `110:937`; 원본 변형값을 16으로 임의 보정하지 않음 |
| 히스토리 양옆 카드 | 361×367px, radius 20px | `110:935/936` |
| 히스토리 화살표 | 48×48px, radius 100px | `110:938/941` |
| 히스토리 활성 / 비활성 점 | 15×15 / 13×13px | `110:945/946`, radius 100px |
| 59FIFTY 배경 | 675×675px, radius 500px | `110:961`, 시각적으로 원형 |
| 59FIFTY 제목 외곽선 | 흰색 5px | `110:962` 활성 stroke |
| 실루엣 카드 | 390×522px, radius 20px | 원본 컴포넌트 `29:311` |
| 실루엣 이미지 | 330×339px, radius 20px | 카드 내 x=30, y=153, 하단 30px |
| 실루엣 모델명 pill | 높이 53px, radius 50px | 폭은 문구별 156~174px, 고정폭으로 일반화하지 않음 |
| 카테고리·협업 이미지 | radius 30px | 각 이미지 프레임 |
| 룩북 행 | 1400×544px, 내부 700px씩 | 원본 컴포넌트 `29:446` |
| 룩북 바로가기 | 148×56px, radius 50px | 원본 `29:433` |
| 섹션 구분선 | 검정 1px | `110:908` 등, 실제 stroke 존재 확인 |

카테고리 회전은 Figma 기준 -10 / +8 / +8 / -10 / +10도. 협업 회전은 +4 / -4 / +5 / +12 / -12도다. CSS 회전 부호·기준점은 구현 시 시각 대조하며 정적 회전을 모션으로 해석하지 않는다. 단순 strokeWeight 기본값만 있는 노드에 임의 테두리를 추가하지 않는다.

반복 인스턴스는 히스토리 `17:206` / `23:252`, 실루엣 `29:311`, 룩북 `29:446`, 바로가기 `29:433`, 헤더 아이콘 `69:314~316`이다. 섹션 번호·라벨·선은 시각적 반복이며 공통 컴포넌트 인스턴스로 확인된 것은 아니다.

## 8. 미확인 토큰과 기존 항목 정리

| 항목 | 처리 |
|---|---|
| 기존 neutral 50~950 및 성공·오류·문의 상태 팔레트 | 메인에서 미확인. 과거 제안값을 확정 토큰과 tokens.css 예시에서 제거. 후속 화면 설계 후 결정 |
| 기존 12~72px 폰트 램프, 본문 16px 통일 | 실제 역할별 크기·행간·자간으로 교체 |
| 기존 4px 간격 스케일 | 실측·계산값으로 교체. 53px/130px 등을 임의 반올림하지 않음 |
| 기존 640/960/1200/1440 컨테이너, header 72px | 메인 기준 1600 inner / 1276 구분선 / 1400 룩북 / header 100으로 교체 |
| 모바일 16px / 태블릿 24px padding | 미확인, 확정 토큰에서 제외 |
| 768/1024/1440 전환점 | 프로젝트 문서의 기존 개발 정책으로만 유지. Figma 실측으로 주장하지 않음 |
| hover / focus / disabled / modal / input 상태 | 대상 메인에서 미확인, 수치 미정 |
| shadow | 조회한 보이는 노드의 effects에 별도 효과가 확인되지 않음. 이미지 자체의 그림자와 구분, 기존 shadow 예시 제거 |
| z-index | 겹침 순서는 확인되나 CSS 숫자는 미확인. 기존 100~600 값을 디자인 실측에서 제외 |
| opacity-disabled / overlay / hover 등 | 미확인, 임의 비율 제거 |
| duration / easing / ScrollTrigger 설정 | 미확인. 기존 120/240/480/800ms 및 easing 예시 제거 |
| 범용 버튼·input·modal·상태 배지 크기 | 미확인. 룩북 CTA 실측을 모든 버튼으로 확대하지 않음 |
| 웹폰트 파일, 원본 이미지 해상도, 링크 목적지 | 미확인, 에셋·동작 명세 확보 후 추가 |

GSAP은 지정 기술 스택이다. hover 확대, 패럴랙스, pin, 자동 슬라이드 등을 시안에서 확인한 동작으로 추가하지 않는다.

## 9. 접근성·구현 규칙 — 개발 정책

- 모바일 퍼스트 개발 방향은 유지하되 모바일 배치는 시안 확인 후 결정한다.
- 기존 최소 터치 영역 44×44px는 접근성 개발 정책이며 Figma 아이콘 크기 30×30과 별개다. 실제 히트 영역과 시각 크기를 구분한다.
- 키보드 focus-visible을 보장하고 아이콘에 aria-label을 제공한다. focus 색상·두께는 후속 확정한다.
- 색상만으로 상태를 구분하지 않는다. 텍스트 대비는 실제 에셋·배경으로 검증한다.
- prefers-reduced-motion을 지원하고 모션을 줄인 경우에도 콘텐츠를 표시한다.
- GSAP·이벤트·타이머는 컴포넌트 종료 시 정리한다.
- CSS에 임의 HEX·중복 수치를 반복하지 않는다. z-index:9999나 확인되지 않은 그림자·라운드를 추가하지 않는다.
- 새 토큰 추가 시 문서와 실제 선언을 함께 수정한다. 이번에는 실제 CSS를 생성하지 않는다.

## 10. 후속 구현 체크리스트

- [ ] Figma와 동일한 폰트·스타일 파일을 확보하고 웹 렌더링을 대조했다.
- [ ] 이미지 원본과 표시 프레임·크롭을 구분해 검증했다.
- [ ] 1920 시안의 1600 inner / 1276 가이드 / 1400 룩북 폭을 구분했다.
- [ ] 실측과 계산값, 개발 정책과 미확인 항목을 혼합하지 않았다.
- [ ] footer 이미지와 개별 텍스트의 중복 여부를 확인했다.
- [ ] 반응형·상태·모션 명세를 별도로 확정했다.
- [ ] BEM, CSS 인접 배치, 공통 토큰 관리 규칙을 지켰다.
- [ ] 키보드 접근, 대체 텍스트, 대비, reduced-motion을 검증했다.