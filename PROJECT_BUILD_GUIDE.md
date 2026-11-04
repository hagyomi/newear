# NEW ERA Renewal React 프로젝트 통합 개발 가이드

## 1. 프로젝트 개요

- 디자인 출처: 아래 Figma 메인 프레임(공식 사이트 URL은 이번 분석에서 별도로 확인하지 않음)
- 프로젝트명: NEW ERA Renewal — DEFINE YOUR ERA.
- 목적: NEW ERA 브랜드 경험을 재해석한 반응형 패션 웹사이트 팀 프로젝트
- 형태: 쇼핑몰 결제 연동 전 단계의 프런트엔드 데모
- 기존 후속 기능 기획(이번 Figma 검증 범위 외): 컬렉션, 검색, 상품 상세, 장바구니, 좋아요, 게시판, 아이디·비밀번호 로그인, 회원가입, 카카오 소셜 로그인·최초 가입, 테스트 로그인, 마이페이지
- 기술 기준: React + Vite + JavaScript + CSS + GSAP

외부 API 키나 백엔드가 없어도 테스트 로그인과 로컬 데이터로 모든 핵심 화면을 확인할 수 있어야 한다.

---

## 1-1. Figma 메인페이지 분석 — 2026-11-04

- [Figma 디자인 출처](https://www.figma.com/design/SdB8jlIU73d8d5oC4sBaB4/?node-id=110-884): Page 1, `110:884` 뉴에라, **1920×14564px**.
- Figma MCP로 노드 속성과 전체 스크린샷을 읽기 전용으로 확인했다. Figma는 수정하지 않았다.
- 요청 파일명 PROJECT.md / design-tokens.md는 현재 폴더에 없다. 같은 역할의 기존 PROJECT_BUILD_GUIDE.md / Design-token.md를 파일명 그대로 수정했다.
- **현재 범위는 메인 디자인 분석과 문서 수정이다. React 컴포넌트·CSS·UI는 구현하지 않는다.** 아래 설치 명령과 완료 체크리스트는 후속 개발용이다.
- 기존 인증·회원가입·마이페이지·게시판·고객문의 규칙은 후속 기능 기획으로 유지한다. 이 메인 Figma에서 검증된 화면이나 기능으로 간주하지 않는다.
- 문서 내 기존 샘플 상품·카테고리·데모 계정은 예시 데이터이며 실제 뉴에라 상품/계정 명세가 아니다.

### 전체 섹션 순서

y는 메인 프레임 기준, 단위는 px. 높이는 데스크톱 구성 기록이며 모든 화면의 고정 높이 명세가 아니다.

| 순서 | 노드 / 원본 이름 | y / 크기 | 실제 콘텐츠 |
|---|---|---|---|
| 1 | `110:885` header | 0 / 1920×100 | 로고, 4개 메뉴, 검색·쇼핑백·계정 |
| 2 | `110:897` hero | 98 / 1920×981 | DEFINE YOUR ERA., 영문 카피, 중앙 이미지 |
| 3 | `110:903` visual | 1079 / 1920×822 | 3×3 폴라로이드 형태의 상품 콜라주 이미지 |
| 4 | `110:905` con1 | 1901 / 1920×875 | 01 THE NEW ERA ATTITUDE / Style Is an Expression. |
| 5 | `110:912` FW26 | 2776 / 1920×539 | 이미지 채움의 대형 FOR YOU. 노드 이름과 실제 문구 구분 |
| 6 | `110:915` con2 | 3315 / 1920×924 | HeadWear, apparel, accessories, kids, black label |
| 7 | `110:928` brand stroy | 4239 / 1920×1424 | 02 A LEGACY BEYOND TIME. / 100 Years. Still Iconic. |
| 8 | `110:956` Frame 35 | 5663 / 1920×1093 | 03 MLB AUTHENTIC COLLECTION / The Authentic 59FIFTY |
| 9 | `110:965` Frame 38 | 6756 / 1920×1654 | 04 EXPLORE THE FIT / Find Your Silhouette. |
| 10 | `110:978` Frame 46 | 8410 / 1920×1598 | 05 COLLABORATION / BEYOND BOUNDARIES. |
| 11 | `110:996` Frame 52 | 10008 / 1920×3916 | FW26 WITH RIIZE SOHEE / 룩북 5개 행 |
| 12 | `192:410` footer | 13924 / 1920×640 | ABOUT NEW ERA, GUIDE, CUSTOMER, MEMBERSHIP, GLOBAL, 약관·로고 |

hero 이미지 `182:336`은 메인 직속 사각형(x=720, y=306, 480×710)으로 hero 위에 겹친다. 별도 섹션으로 세지 않는다. header 끝(y=100)과 hero 시작(y=98)은 2px 겹친다. 룩북 프레임 x=-1도 원본 값으로 기록하며 임의로 수정하지 않는다.

### 레이아웃과 여백

- 주요 inner는 x=160, 폭 1600. 1920 시안에서 좌우 160px이다. CSS max-width 적용 여부는 후속 구현 결정이다.
- 섹션 01~05 구분선은 inner x=162, y=167, 길이 1276, 검정 1px. 페이지 x=322에서 시작하며 계산상 좌우 약 322px이다. 라벨은 x=155, y=130으로 선과 시작점이 7px 다르다.
- 섹션 제목은 y=247 또는 297 등으로 다르다. 하나의 공통 섹션 padding으로 강제하지 않는다.
- 실루엣 카드: 390×522, inner x=162/605/1048, y=430/1002. 계산상 가로 간격 53, 세로 간격 50인 3열×2행, 전체 폭 1276.
- 룩북: inner x=100, 폭 1400, 행 높이 544. y=416/1090/1764/2438/3112, 계산상 행 간격 130. 내부는 폭 700씩 두 패널, 인물 컷아웃은 경계 밖으로 돌출한다.
- 주요 프레임은 layoutMode=NONE이다. padding=0을 시각적 여백 0으로 해석하지 않는다. 메뉴·아이콘·일부 텍스트·버튼·푸터 그룹은 Auto Layout이다.

### 이미지와 콘텐츠

- 카테고리: 254×325 카드 5개, 회전·Caveat 손글씨 라벨 조합. 균일 그리드로 바꾸지 않는다.
- 히스토리: 중앙 1920 카드 500×513, 좌측 2020 / 우측 1930 카드 361×367이 겹친다. 화살표 48×48와 점 11개가 보인다. 보이지 않는 슬라이드 내용·자동 재생은 미확인이다.
- 59FIFTY: 675×675 원형 파랑 배경, Black 100px 제목(흰 외곽선 5px), 상품 이미지 716×323, 로고 이미지 314×105.
- 실루엣 첫 행은 59FIFTY / 9FORTY / 39THIRTY, 둘째 행은 K-FRAME / BUCKET / JET CAP. 각 카드에 모델명 pill, 설명, 330×339 이미지가 있다.
- 협업: 293×366 카드 5개, 위 3개·아래 2개 비정형 구성. Oracle Red Bull Racing / Fear of God×MLB / Ralph Lauren×MLB / Lacoste / Timberland.
- 룩북: ORIGINATORS BIG SCRIPT HOODIE / NEW ERA LOGO CREW NECK / MLB AUTHENTIC STADIUM JACKET / MLB CORDUROY STADIUM JACKET / MLB COOPERS TOWN HOODIE. 각 행은 제목·한글 설명·바로가기·인물 이미지 조합이다.
- footer는 검정 배경과 밝은 텍스트로 보인다. 내부 흰 fill 위에 1920×640 이미지 레이어(`192:412`)가 겹쳐 있으므로 이미지와 개별 텍스트의 중복 렌더 여부를 에셋 확보 단계에서 확인한다.
- 이미지 표시 크기·비율·FILL/CROP, 컬러·타이포는 Design-token.md 참조. 표시 프레임과 원본 이미지 해상도는 구분한다.

### 반복 요소와 컴포넌트 구조

React 이름은 후속 분리 제안이며 파일을 생성하지 않았다.

| 역할 | Figma 근거 | 후속 분리 제안 |
|---|---|---|
| 전체 메인 | `110:884` | Home → Header / 각 섹션 / Footer |
| 번호·라벨·선 | 섹션 01~05 반복, 별도 인스턴스 아님 | SectionHeader |
| 히스토리 | `110:935~937`, 원본 `23:252` / `17:206` | BrandHistory → HistoryCard + controls |
| 실루엣 | `110:972~977`, 원본 `29:311` | FitGuide → FitCard 6개 |
| 룩북 | `110:998~1002`, 원본 `29:446` | SoheeLookbook → LookbookRow 5개 |
| 바로가기 | 룩북 중첩 인스턴스, 원본 `29:433` | LookbookLink |
| 카테고리·협업 | 이미지 프레임 반복, 공통 인스턴스 미확인 | CategoryCollage / CollaborationCard |
| 헤더 아이콘 | 원본 `69:314` / `69:315` / `69:316` | 검색·카트·계정 링크 |

### 미확인 사항

- 모바일·태블릿 시안, 반응형 전환점, sticky 헤더, 메뉴 펼침, hover/focus/disabled 디자인, 링크 목적지.
- GSAP 타이밍·easing·스크롤 연동. GSAP + ScrollTrigger는 지정 기술 스택이며 정적 회전·겹침을 모션 명세로 추정하지 않는다.
- 조회한 메인 서브트리의 변수 바인딩은 0개, 로컬 변수 컬렉션도 0개. 문서 토큰 이름은 Figma 기존 변수명이 아니라 실측값에서 정리한 이름이다.
- 기존 BEM, CSS 인접 배치, 이미지 출처 관리, service 계층, 접근성, 이벤트·타이머·GSAP 정리 규칙은 유지한다.

---
## 2. 기술 스택

- React Vite, JavaScript
- React Router DOM
- Zustand + persist middleware
- CSS, BEM 네이밍, global.css의 기본 스타일 초기화
- Pretendard, Caveat, Roboto, Inter — Figma 실측 스타일은 Design-token.md 참조(Variable 배포 방식 미확인)
- GSAP + ScrollTrigger
- Swiper
- Lucide React
- localStorage 기반 데모 데이터
- Kakao Login 기반 카카오 소셜 로그인
- Kakao 우편번호 서비스

Redux는 사용하지 않는다.

---

## 3. 공통 개발 원칙

- 모든 컴포넌트는 함수형 컴포넌트로 작성한다.
- CSS 클래스는 BEM 규칙을 사용한다.
- 컴포넌트 전용 CSS는 해당 컴포넌트와 같은 폴더에 작성한다.
- 페이지 전용 CSS는 해당 페이지와 같은 폴더에 작성한다.
- `src/styles`에는 reset, 디자인 토큰, 폰트, 전역 공통 스타일만 작성한다.
- 모바일 퍼스트로 작성하고 태블릿·데스크톱으로 확장한다.
- 반복 데이터는 배열과 `map()`으로 렌더링한다.
- 데이터, 상태 로직, UI 컴포넌트를 분리한다.
- 모든 버튼에 `type`을 명시한다.
- 아이콘 버튼에는 `aria-label`을 제공한다.
- 키보드 포커스가 보이도록 한다.
- 사용하지 않는 import, 변수, 콘솔 로그를 남기지 않는다.
- 이미지의 크기와 비율을 지정해 레이아웃 이동을 줄인다.
- GSAP, 이벤트 리스너, 타이머는 컴포넌트 종료 시 정리한다.
- 라우팅 경로는 한곳에서 관리한다.
- 새로고침해도 직접 접근한 경로가 정상 표시되어야 한다.

---

## 3-1. 이미지 저장 및 API 전환 기준

### 이미지 출처

- 상품 목록·상세, 컬렉션, 메인 히어로, 배너에 사용하는 이미지는 제공된 Figma의 원본 상품·캠페인 이미지를 사용한다.
- 임의의 스톡 사진이나 AI 생성 이미지로 상품·배너 이미지를 대체하지 않는다.
- 사용할 이미지는 `public/images/products` 또는 `public/images/banners`에 저장하고, 상품 정보와 이미지가 일치하도록 연결한다.
- 이미지 원본 페이지 URL과 사용 위치를 README에 기록한다.
- 사용자 프로필 사진, 기본 캐릭터, 오류 대체 이미지는 각 항목의 별도 기준을 따른다.

### 이미지 저장 위치

프로젝트에서 직접 관리하는 상품, 배너, 캐릭터, 대체 이미지는 `public/images`에 저장한다.

```text
public/
└── images/
    ├── products/
    ├── banners/
    ├── characters/
    ├── placeholders/
    └── common/
```

이미지는 React에서 import하지 않고 루트 기준 URL 문자열로 사용한다.

```js
const products = [
    {
        id: 1,
        name: '오버사이즈 재킷',
        image: '/images/products/jacket-01.webp',
    },
    {
        id: 2,
        name: '와이드 팬츠',
        image: '/images/products/pants-01.webp',
    },
];
```

```jsx
<img src={product.image} alt={product.name} width='600' height='800' />
```

`public` 폴더의 파일은 빌드 결과에서 루트 경로로 제공되므로 다음처럼 작성하지 않는다.

```text
잘못된 경로: public/images/products/jacket-01.webp
올바른 경로: /images/products/jacket-01.webp
```

### 이미지 폴더 역할

| 폴더           | 용도                         | 예시                    |
| -------------- | ---------------------------- | ----------------------- |
| `products`     | 상품 목록·상세 이미지        | `jacket-01.webp`        |
| `banners`      | 메인 히어로·프로모션 배너    | `hero-woman-01.webp`    |
| `characters`   | 마이페이지 기본 캐릭터       | `character-01.webp`     |
| `placeholders` | 이미지 없음·오류 대체 이미지 | `product-fallback.webp` |
| `common`       | 로고·공통 장식 이미지        | `logo-symbol.svg`       |

파일명은 영문 소문자와 하이픈을 사용한다.

### 이미지 오류 처리

- 상품 데이터의 이미지가 없으면 placeholder 이미지를 사용한다.
- 이미지 로드가 실패해도 무한 오류가 발생하지 않도록 한 번만 대체한다.
- 이미지에는 크기 또는 `aspect-ratio`를 지정한다.
- 상품 목록 하단 이미지는 `loading="lazy"`를 사용할 수 있다.
- 첫 화면 히어로와 LCP 이미지는 lazy loading을 사용하지 않는다.
- 사용자 업로드 이미지는 `public`에 저장할 수 없으므로 미리보기 URL 또는 서버 스토리지 URL을 사용한다.

### 가상 데이터와 API 데이터의 공통 모델

현재는 `src/data`의 가상 데이터를 사용하되 나중에 API 응답으로 교체할 수 있도록 같은 필드 구조를 유지한다.

```js
{
  id: 1,
  name: "오버사이즈 재킷",
  category: "WOMAN",
  price: 129000,
  image: "/images/products/jacket-01.webp",
  images: [
    "/images/products/jacket-01.webp",
    "/images/products/jacket-02.webp"
  ],
  colors: ["BLACK", "BEIGE"],
  sizes: ["S", "M", "L"],
  isNew: true
}
```

API도 같은 이미지 URL 필드를 반환한다. 외부 이미지 서버나 CDN을 사용하면 전체 URL을 반환해도 된다.

```json
{
    "id": 1,
    "name": "오버사이즈 재킷",
    "image": "/images/products/jacket-01.webp"
}
```

컴포넌트는 로컬 경로인지 외부 URL인지 구분하지 않고 `product.image`를 그대로 사용한다.

### 데이터 접근 계층

페이지와 컴포넌트에서 가상 데이터를 직접 import하지 않는다. `services`의 함수로 데이터를 가져오도록 구성해 API 전환 범위를 줄인다.

```js
// src/services/productService.js
import { products } from '../data/products';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getProducts() {
    if (!API_BASE_URL) return products;

    const response = await fetch(`${API_BASE_URL}/products`);

    if (!response.ok) {
        throw new Error('상품 목록을 불러오지 못했습니다.');
    }

    return response.json();
}
```

```env
VITE_API_BASE_URL=
```

같은 방식으로 `productService.js`, `boardService.js`, `inquiryService.js`, `authService.js`를 분리한다.

### API 전환 원칙

- UI 컴포넌트는 데이터 출처를 알지 못하게 한다.
- 데이터 요청, 로딩, 오류 처리는 서비스 또는 전용 Hook에서 담당한다.
- API 응답은 필요한 경우 adapter 함수로 화면 데이터 구조에 맞춘다.
- API 주소는 환경변수로 관리한다.
- 비밀키는 `VITE_` 환경변수에 저장하지 않는다.
- API가 없을 때 가상 데이터를 fallback으로 사용한다.
- API 연결 후 게시판과 고객문의의 localStorage CRUD를 서버 CRUD로 교체한다.

---

## 4. 프로젝트 생성 및 필수 명령

```bash
npm create vite@latest newera-renewal -- --template react
cd newera-renewal
npm install
npm install react-router-dom zustand gsap swiper lucide-react
npm run dev
```

최종 검증:

```bash
npm run lint
npm run build
npm run dev
```

오류가 발생하면 원인을 수정한 후 다시 검증한다.

---

## 5. 페이지 및 라우터

| 경로                         | 페이지            | 접근 권한 | 역할             |
| ---------------------------- | ----------------- | --------- | ---------------- |
| `/`                          | Home          | 전체      | 브랜드 메인      |
| `/collections`               | CollectionPage    | 전체      | 상품 컬렉션      |
| `/products/:productId`       | ProductDetailPage | 전체      | 상품 상세        |
| `/search`                    | SearchPage        | 전체      | 상품 검색        |
| `/cart`                      | CartPage          | 전체      | 장바구니         |
| `/login`                     | LoginPage         | 비로그인  | 로그인           |
| `/signup`                    | SignUpPage        | 비로그인  | 회원가입         |
| `/auth/kakao/callback`       | KakaoCallbackPage | 전체      | 카카오 인증 결과 |
| `/auth/error`                | AuthErrorPage     | 전체      | 인증 오류        |
| `/board`                     | BoardListPage     | 전체      | 게시글 목록      |
| `/board/:postId`             | BoardDetailPage   | 전체      | 게시글 상세      |
| `/board/write`               | BoardWritePage    | 로그인    | 글 작성          |
| `/board/:postId/edit`        | BoardEditPage     | 작성자    | 글 수정          |
| `/inquiries`                 | InquiryListPage   | 로그인    | 내 고객문의 목록 |
| `/inquiries/write`           | InquiryWritePage  | 로그인    | 고객문의 작성    |
| `/inquiries/:inquiryId`      | InquiryDetailPage | 작성자    | 고객문의 상세    |
| `/inquiries/:inquiryId/edit` | InquiryEditPage   | 작성자    | 고객문의 수정    |
| `/mypage`                    | MyPage            | 로그인    | 사용자 대시보드  |
| `/mypage/profile`            | ProfileEditPage   | 로그인    | 내 정보 수정     |
| `/mypage/posts`              | MyPostsPage       | 로그인    | 내가 작성한 글   |
| `*`                          | NotFoundPage      | 전체      | 404              |

보호 페이지는 `ProtectedRoute`로 감싼다. 비로그인 사용자는 `/login`으로 이동시키며 로그인 후 처음 접근했던 경로로 되돌린다.

---

## 6. 헤더 메뉴 — Figma 확인 기준

- header `110:885`: 1920×100, inner `110:886`: x=160, 폭 1600.
- 좌측 로고 이미지 128×85, 중앙 Men / Women / Kids / BlackLabel.
- 메뉴 Pretendard Medium 20px, Auto Layout 간격 100px.
- 우측 검색 / 쇼핑백 / 계정 아이콘 30×30, 간격 30px.
- 기존 컬렉션·게시판·고객문의·로그인·회원가입 텍스트 메뉴는 이 메인 시안에 추가하지 않는다. 후속 화면 진입 경로는 별도 설계한다.
- 로그인 전후 표시, 카트 개수 배지, 계정 아이콘의 프로필 사진 대체, sticky 동작은 미확인이다. 아래 기존 기능 기획의 헤더 배지·프로필 규칙은 후속 상태 설계 검토 항목으로 유지한다.
- 좋아요 메뉴는 헤더에서 제외하고 마이페이지 내부에 제공하는 기존 정책을 유지한다.

---
## 7. 로그인 화면

로그인 화면은 아이디·비밀번호를 입력하는 일반 로그인, 카카오 소셜 로그인, 테스트 로그인 버튼을 함께 제공한다. `회원가입` 링크를 누르면 `/signup`으로 이동한다. 최초 카카오 로그인 성공 시 사용자 계정을 생성하고, 이후에는 동일한 카카오 계정으로 로그인한다.

로그인 화면에는 아래 순서로 입력 필드와 버튼을 배치한다.

```text
아이디 [아이디를 입력하세요]
비밀번호 [비밀번호를 입력하세요]
[로그인]

──────── 또는 ────────

[카카오로 시작하기]
[테스트 계정으로 로그인]
```

### 아이디·비밀번호 로그인

- 아이디 입력은 `type="text"`, `autoComplete="username"`을 사용한다.
- 비밀번호 입력은 `type="password"`, `autoComplete="current-password"`를 사용해 입력값을 가린다.
- 각 입력 필드에 연결된 `label`을 제공하고, 빈 값으로 제출하면 해당 필드 아래에 오류를 표시한다.
- `로그인` 버튼 또는 Enter 키로 제출하며, 처리 중에는 중복 제출을 막는다.
- `authService.js`를 통해 인증하고, 실패하면 오류 메시지를 표시한다.
- 서버가 없는 데모에서는 공개된 데모 계정 `demo` / `newera-demo-1234`로 일반 로그인 흐름을 확인할 수 있게 하고 README에 안내한다.
- 실제 계정의 비밀번호는 프런트엔드 데이터나 localStorage에 저장하지 않는다.
- 로그인 성공 시 이전 접근 경로가 있으면 그 경로로, 없으면 `/mypage`로 이동한다.

### 테스트 로그인 버튼

카카오 키와 서버가 없어도 프로젝트를 즉시 검토할 수 있도록 반드시 제공한다.

```js
export const TEST_USER = {
    id: 'test-user-001',
    name: '테스트 사용자',
    email: 'test@newera-renewal.com',
    profileImage: '/images/characters/character-01.webp',
    profileImageType: 'avatar',
    loginProvider: 'test',
    grade: 'MEMBER',
    interests: ['WOMAN', 'NEW'],
    address: {
        zonecode: '04524',
        roadAddress: '서울특별시 중구 세종대로 110',
        jibunAddress: '',
        detailAddress: '',
        extraAddress: '',
    },
};
```

테스트 로그인 동작:

- 아이디와 비밀번호 입력 없이 버튼만 눌러 즉시 로그인한다.
- 이전 접근 경로가 있으면 그 경로로, 없으면 `/mypage`로 이동한다.
- `테스트 계정으로 로그인되었습니다.` 토스트를 표시한다.
- 새로고침 후에도 로그인 상태를 유지한다.
- 게시글 작성, 좋아요, 최근 본 상품, 장바구니, 프로필 수정을 모두 테스트할 수 있다.
- 로그아웃하면 인증 상태를 제거한다.

```env
VITE_ENABLE_TEST_LOGIN=true
```

테스트 로그인 버튼 BEM 클래스:

```css
.login-form__test-button {
}
.login-form__test-description {
}
```

버튼 안내 문구:

```text
포트폴리오 기능을 바로 확인할 수 있는 테스트 계정입니다.
```

---

## 7-1. 회원가입 화면

`/signup`에서 아이디·비밀번호·이름 입력란과 카카오 로그인·가입·취소 버튼을 제공한다.

```text
아이디 [아이디를 입력하세요]
비밀번호 [비밀번호를 입력하세요]
이름 [이름을 입력하세요]

[카카오로 시작하기]

[가입] [취소]
```

### 입력 및 버튼 동작

- 아이디와 이름은 `type="text"`를 사용하고, 각각 `autoComplete="username"`, `autoComplete="name"`을 지정한다.
- 비밀번호는 `type="password"`, `autoComplete="new-password"`로 설정해 입력값을 가린다.
- 모든 입력 필드에 연결된 `label`을 제공하며 아이디·비밀번호·이름을 필수로 입력받는다.
- `가입` 버튼은 `type="submit"`으로 설정하고, Enter 키로도 제출할 수 있게 한다.
- 가입 시 필수 입력과 아이디 중복을 검사하고, 오류를 해당 필드 아래에 표시한다.
- `authService.js`를 통해 가입 처리하며, 처리 중에는 중복 제출을 막는다.
- 가입 성공 시 `회원가입이 완료되었습니다. 로그인해 주세요.` 토스트를 표시하고 `/login`으로 이동한다. 가입한 아이디·비밀번호로 일반 로그인할 수 있어야 한다.
- 서버가 없는 데모에서는 가상 계정을 메모리에서만 관리해 가입 후 로그인을 확인한다. 새로고침하면 가상 계정이 초기화됨을 안내하고 실제 비밀번호 입력을 요청하지 않는다.
- 실제 가입 정보는 서버에서 처리하며, 비밀번호를 localStorage나 Zustand `persist`에 저장하지 않는다.
- `카카오로 시작하기`는 `type="button"`으로 설정하고, 일반 가입 필드 입력 여부와 무관하게 기존 카카오 인증 흐름을 실행한다.
- `취소`는 `type="button"`으로 설정하고, 입력 내용을 저장하지 않고 비운 뒤 `/login`으로 이동한다.

---

## 8. 카카오 소셜 로그인

- 카카오 소셜 로그인은 아이디·비밀번호 로그인과 함께 제공한다. 카카오 계정의 최초 가입은 카카오 로그인 성공 시 처리한다.
- 테스트 로그인은 데모 검토용으로 유지한다.
- 프런트엔드는 카카오 인가 요청과 콜백 화면까지만 담당한다.
- 인가 코드로 토큰을 요청하고 사용자 정보를 조회하는 처리는 서버에서 담당한다.
- REST API 키, Client Secret, 액세스 토큰을 프런트엔드 코드나 localStorage에 저장하지 않는다.
- OAuth `state` 값을 생성하고 서버에서 검증한다.
- URL의 인가 코드는 처리 후 제거한다.
- 카카오 키 또는 서버가 없으면 앱을 중단하지 않고 테스트 로그인을 안내한다.

```env
VITE_KAKAO_JAVASCRIPT_KEY=
VITE_KAKAO_REDIRECT_URI=http://localhost:5173/auth/kakao/callback
VITE_ENABLE_KAKAO_LOGIN=true
VITE_ENABLE_TEST_LOGIN=true
```

---

## 9. 인증 상태 관리

`src/store/useAuthStore.js`

```js
{
  user: null,
  isAuthenticated: false,
  authProvider: null,
  isAuthLoading: false,
  authError: null,
  signUp: ({ username, password, name }) => {},
  loginWithCredentials: (username, password) => {},
  loginWithKakao: () => {},
  handleKakaoCallback: () => {},
  loginAsTestUser: () => {},
  updateProfile: () => {},
  logout: () => {},
  clearAuthError: () => {}
}
```

테스트 프로젝트에서는 사용자 정보와 테스트 인증 상태를 Zustand `persist`로 유지한다. 실제 서비스 전환 시 HttpOnly 쿠키 기반 서버 세션으로 교체한다.

---

## 10. 마이페이지

마이페이지는 로그인한 사용자의 정보와 활동을 보여주는 대시보드로 구성한다.

### 프로필 영역

- 프로필 사진 또는 선택한 캐릭터
- 이름
- 이메일
- 회원 등급
- 로그인 방식
- `프로필 수정` 버튼
- 로그아웃 버튼

### 활동 요약

- 좋아요 상품 수
- 최근 본 상품 수
- 장바구니 상품 수
- 작성 게시글 수
- 받은 게시글 좋아요 수

좋아요와 최근 본 상품 요약 카드를 누르면 마이페이지 내부의 해당 섹션으로 스크롤 이동한다. 별도의 상위 메뉴나 독립 목록 페이지로 이동하지 않는다.

### 최근 본 상품 리스트

마이페이지에 `최근 본 상품` 섹션을 표시한다.

- 로그인 사용자가 상품 상세 페이지를 열었을 때 최근 본 상품에 추가한다.
- 동일한 상품을 다시 보면 중복으로 추가하지 않고 가장 앞으로 이동한다.
- 가장 최근에 본 상품부터 표시한다.
- 최대 10개까지만 저장한다.
- 상품 이미지, 상품명, 가격, 컬러, 신상품 여부를 표시한다.
- 상품을 선택하면 해당 상품 상세 페이지로 이동한다.
- `전체 삭제` 버튼으로 최근 본 기록을 비울 수 있다.
- 개별 상품 삭제 버튼을 제공한다.
- 새로고침 후에도 유지한다.
- 로그인 사용자별로 기록이 섞이지 않도록 사용자 ID를 기준으로 관리한다.

최근 본 상품이 없으면 다음 빈 상태를 표시한다.

```text
최근 본 상품이 없습니다.
새로운 컬렉션을 둘러보세요.

[컬렉션 둘러보기]
```

### 좋아요 상품 리스트

마이페이지에 `좋아요 상품` 섹션을 표시한다.

- 별도의 `/wishlist` 또는 `/mypage/likes` 페이지를 만들지 않는다.
- 좋아요 상품은 마이페이지 대시보드 안에서 직접 출력한다.
- 상품 이미지, 상품명, 가격, 컬러, 신상품 여부를 표시한다.
- 하트 버튼을 다시 누르면 좋아요 목록에서 즉시 제거한다.
- 상품을 선택하면 상품 상세 페이지로 이동한다.
- 장바구니 담기 버튼을 제공한다.
- 새로고침 후에도 목록을 유지한다.
- 로그인 사용자별로 좋아요 목록이 섞이지 않도록 사용자 ID를 기준으로 관리한다.

좋아요 상품이 없으면 다음 빈 상태를 표시한다.

```text
아직 좋아요를 누른 상품이 없습니다.
마음에 드는 상품을 저장해 보세요.

[컬렉션 둘러보기]
```

### 마이페이지 상품 섹션 배치

```text
프로필 영역
활동 요약
최근 본 상품
좋아요 상품
내가 작성한 글
고객문의 내역
```

- 모바일에서는 상품 카드를 가로 스크롤 또는 2열 그리드로 표시한다.
- 태블릿에서는 3열, 데스크톱에서는 4열 그리드를 사용할 수 있다.
- 각 섹션은 제목, 상품 수, 빈 상태, 상품 리스트를 포함한다.

---

## 11. 프로필 수정 및 이미지·캐릭터 변경

마이페이지에서 `프로필 수정` 버튼을 누르면 `/mypage/profile`로 이동한다. 이 화면에서 일반 회원정보와 프로필 이미지를 함께 수정할 수 있어야 한다.

### 수정 항목

- 이름
- 이메일
- 프로필 사진 또는 기본 캐릭터
- 관심 카테고리
- 주소
- 마케팅 수신 동의

### 이미지 선택 방식

다음 두 가지 방식을 제공한다.

1. 기기에서 사진 선택
2. 프로젝트에 포함된 기본 캐릭터 선택

화면 구성:

```text
프로필 이미지

        [현재 이미지 미리보기]

[사진 선택] [사진 삭제]

기본 캐릭터 선택
( 캐릭터 1 ) ( 캐릭터 2 ) ( 캐릭터 3 )
( 캐릭터 4 ) ( 캐릭터 5 ) ( 캐릭터 6 )

[취소] [변경사항 저장]
```

### 기본 캐릭터 데이터

`src/data/profileAvatars.js`

```js
export const PROFILE_AVATARS = [
    { id: 'character-01', name: '블랙 캣', src: '/images/characters/character-01.webp' },
    { id: 'character-02', name: '화이트 래빗', src: '/images/characters/character-02.webp' },
    { id: 'character-03', name: '브라운 베어', src: '/images/characters/character-03.webp' },
    { id: 'character-04', name: '레드 폭스', src: '/images/characters/character-04.webp' },
    { id: 'character-05', name: '그레이 울프', src: '/images/characters/character-05.webp' },
    { id: 'character-06', name: '크림 퍼피', src: '/images/characters/character-06.webp' },
];
```

캐릭터 이미지는 프로젝트용으로 직접 제작하거나 사용 권한이 명확한 에셋을 사용한다. 특정 브랜드·게임 캐릭터를 그대로 복제하지 않는다.

### 사진 업로드 기준

- 허용 형식: JPEG, PNG, WebP
- 최대 크기: 5MB
- 파일을 선택하는 즉시 원형 미리보기를 표시한다.
- 허용되지 않는 형식과 용량 초과 시 오류 메시지를 표시한다.
- 같은 파일을 다시 선택할 수 있도록 필요 시 input 값을 초기화한다.
- 데모 버전은 `FileReader` 또는 `URL.createObjectURL()`로 미리보기를 제공한다.
- `URL.createObjectURL()` 사용 시 이전 Object URL을 해제한다.
- 서버가 없는 데모에서 큰 원본 파일을 localStorage에 직접 저장하지 않는다.
- 저장이 꼭 필요하면 Canvas로 정사각형 리사이즈 후 WebP로 압축하고 500KB 이하인지 확인한다.
- 실제 서비스에서는 서버 또는 스토리지 업로드 URL만 사용자 정보에 저장한다.

### 캐릭터 선택 동작

- 캐릭터 카드는 버튼으로 구현한다.
- 선택된 카드에 테두리와 체크 아이콘을 표시한다.
- `aria-pressed`로 선택 상태를 전달한다.
- 키보드 Tab과 Enter/Space로 선택할 수 있어야 한다.
- 캐릭터를 선택하면 사진 업로드 선택은 해제한다.
- 사진을 선택하면 캐릭터 선택은 해제한다.
- 기본값은 현재 저장된 프로필 이미지다.

### 저장 및 취소

- `변경사항 저장`을 누를 때만 `useAuthStore.updateProfile()`을 실행한다.
- 저장 후 `/mypage`로 이동하고 성공 토스트를 표시한다.
- 마이페이지 프로필 이미지는 즉시 변경한다. 헤더 계정 아이콘의 사진 대체는 Figma 미확인 상태로 별도 검토한다.
- 새로고침 후에도 선택한 기본 캐릭터 또는 압축된 데모 이미지가 유지되어야 한다.
- `취소`를 누르면 저장하지 않고 마이페이지로 돌아간다.
- 저장하지 않은 변경사항이 있을 때 페이지를 벗어나면 확인 안내를 제공한다.
- 사진 삭제 시 첫 번째 기본 캐릭터를 대체 이미지로 사용한다.

### 사용자 데이터 추가 필드

```js
{
  profileImage: "/images/characters/character-01.webp",
  profileImageType: "avatar",
  selectedAvatarId: "character-01"
}
```

`profileImageType` 값:

```text
avatar
upload
kakao
```

### 컴포넌트

```text
src/components/mypage/ProfileImageEditor.jsx
src/components/mypage/ProfileImagePreview.jsx
src/components/mypage/AvatarSelector.jsx
src/components/mypage/AvatarOption.jsx
src/components/mypage/ProfileEditForm.jsx
```

### BEM 클래스

```css
.profile-image-editor {
}
.profile-image-editor__preview {
}
.profile-image-editor__actions {
}
.profile-image-editor__upload-button {
}
.profile-image-editor__remove-button {
}
.avatar-selector {
}
.avatar-selector__list {
}
.avatar-selector__option {
}
.avatar-selector__option--selected {
}
.avatar-selector__image {
}
.avatar-selector__name {
}
.profile-edit-form__actions {
}
.profile-edit-form__cancel-button {
}
.profile-edit-form__submit-button {
}
```

---

## 12. 카카오 주소검색

카카오 최초 가입 후 추가 정보 입력, 마이페이지 프로필 수정, 배송지 입력에 재사용한다.

```js
{
  zonecode: "",
  roadAddress: "",
  jibunAddress: "",
  detailAddress: "",
  extraAddress: ""
}
```

- 우편번호와 기본 주소는 `readOnly`로 설정한다.
- `주소 검색` 버튼으로 우편번호 검색 창을 연다.
- 선택 완료 후 상세 주소 입력란으로 포커스를 이동한다.
- 스크립트는 한 번만 로드한다.
- 로드 실패, 네트워크 오류, 팝업 차단 상태를 안내한다.

공통 파일:

```text
src/components/common/AddressSearch.jsx
src/hooks/useKakaoPostcode.js
src/services/kakaoPostcode.js
```

---

## 13. 좋아요·최근 본 상품·장바구니

### 상품 좋아요

- 상품 좋아요는 `useWishlistStore`로 관리한다.
- 좋아요 메뉴를 Header에 표시하지 않는다.
- `/wishlist` 독립 페이지를 만들지 않는다.
- 로그인 사용자의 마이페이지 안에서 좋아요 리스트를 출력한다.
- 상품 카드, 상품 상세, 검색, 추천 상품에서 같은 좋아요 상태를 사용한다.
- 마이페이지에서 하트를 해제하면 모든 화면에 즉시 반영한다.
- 비로그인 사용자가 하트를 누르면 로그인 안내를 표시한다.
- 로그인 완료 후 처음 하트를 누른 상품 화면으로 돌아갈 수 있도록 경로를 저장한다.
- 좋아요 데이터는 사용자 ID별로 구분하고 Zustand persist로 유지한다.

### 최근 본 상품

- 최근 본 상품은 `useRecentlyViewedStore`로 관리한다.
- 로그인 사용자가 상품 상세 페이지에 들어가면 `addRecentlyViewed()`를 실행한다.
- 상품 ID가 이미 있으면 기존 항목을 제거한 후 목록 맨 앞에 추가한다.
- 최근 본 상품은 최대 10개까지 저장한다.
- `removeRecentlyViewed()`로 개별 기록을 삭제한다.
- `clearRecentlyViewed()`로 전체 기록을 삭제한다.
- 사용자 ID별로 기록을 분리한다.
- 상품 전체 객체를 반복 저장하지 않고 상품 ID와 조회 시간을 저장한다.
- 화면에서는 ID를 기준으로 최신 상품 데이터를 조회해 출력한다.

```js
{
  recentlyViewedByUser: {
    "test-user-001": [
      {
        productId: 1,
        viewedAt: "2026-09-17T12:00:00.000Z"
      }
    ]
  },
  addRecentlyViewed: () => {},
  removeRecentlyViewed: () => {},
  clearRecentlyViewed: () => {},
  getRecentlyViewed: () => {}
}
```

### 장바구니

- 장바구니는 `useCartStore`로 관리한다.
- 장바구니 개수의 Header 배지 표시는 기존 기능 기획이며 Figma 메인 기본 상태에는 없다. 후속 상태 설계에서 별도로 검토한다.
- Zustand persist로 새로고침 후에도 유지한다.

### 공통 빈 상태

좋아요 상품 또는 최근 본 상품이 없으면 설명과 컬렉션 이동 버튼을 표시한다.

---

## 14. 게시판

카테고리:

- NOTICE
- STYLE
- REVIEW
- Q&A

주요 기능:

- 목록, 상세, 작성, 수정, 삭제
- 제목 검색, 카테고리 필터
- 최신순, 조회순, 좋아요순 정렬
- 페이지네이션
- 게시글 좋아요
- 작성자만 수정·삭제 가능
- 삭제 전 확인 모달
- 모바일 목록은 표가 아니라 카드 레이아웃
- 기본 게시글 최소 10개
- `useBoardStore`와 localStorage 사용

게시글 작성·수정 유효성:

- 카테고리 필수
- 제목 2자 이상 100자 이하
- 내용 10자 이상

---

## 15. 고객문의 CRUD

고객문의는 로그인한 사용자가 문의를 등록하고 자신의 처리 현황을 확인하는 1:1 문의 기능으로 구현한다. 초기 프로젝트에서는 Zustand와 localStorage를 사용하며, 실제 서비스 전환 시 서버 데이터베이스와 인증 기반 API로 교체한다.

### 문의 카테고리

- PRODUCT: 상품 문의
- DELIVERY: 배송 문의
- RETURN: 교환·반품 문의
- ACCOUNT: 회원정보 문의
- ETC: 기타 문의

### 문의 상태

```text
PENDING    접수 완료
IN_REVIEW  확인 중
ANSWERED   답변 완료
```

상태는 사용자가 직접 변경할 수 없다. 데모 데이터에는 상태별 예시 문의를 포함하고, 실제 서비스에서는 관리자만 변경한다.

### 목록 조회 — Read

`/inquiries`에는 현재 로그인 사용자가 작성한 문의만 표시한다.

- 문의 번호
- 카테고리
- 제목
- 문의 상태
- 작성일
- 최종 수정일
- 상세 보기
- 새 문의 작성 버튼
- 상태 필터
- 제목 검색
- 최신순 정렬
- 페이지네이션

모바일에서는 표를 카드 레이아웃으로 변경한다. 문의가 없으면 다음 빈 상태를 표시한다.

```text
등록한 고객문의가 없습니다.
궁금한 내용을 문의해 주세요.

[문의 작성하기]
```

### 문의 작성 — Create

`/inquiries/write`에서 다음 정보를 입력한다.

- 문의 카테고리
- 제목
- 문의 내용
- 주문번호(선택)
- 첨부 이미지(선택, 최대 3개)
- 답변 알림 수신 동의

유효성 검사:

- 카테고리는 필수다.
- 제목은 2자 이상 100자 이하로 작성한다.
- 내용은 10자 이상 2,000자 이하로 작성한다.
- 주문번호를 입력한 경우 허용된 형식을 검사한다.
- 첨부 파일은 JPEG, PNG, WebP만 허용한다.
- 첨부 파일은 개별 5MB 이하, 최대 3개로 제한한다.
- 오류는 각 입력 요소 아래에 안내한다.
- 등록 완료 후 생성된 문의 상세 페이지로 이동하고 성공 토스트를 표시한다.

데모에서는 첨부 파일의 미리보기만 제공한다. 실제 문의 이미지나 개인정보가 포함된 파일을 localStorage에 저장하지 않는다.

### 문의 상세 — Read

`/inquiries/:inquiryId`에 다음 정보를 표시한다.

- 카테고리와 문의 상태
- 제목과 문의 내용
- 주문번호
- 첨부 이미지 미리보기
- 작성일과 수정일
- 고객센터 답변
- 답변 등록일
- 목록으로 이동
- 문의 수정 버튼
- 문의 삭제 버튼

작성자가 아닌 사용자가 URL로 직접 접근하면 권한 없음 화면을 표시하거나 `/inquiries`로 이동시킨다.

### 문의 수정 — Update

- 작성자만 자신의 문의를 수정할 수 있다.
- `PENDING`, `IN_REVIEW` 상태의 문의만 수정할 수 있다.
- 기존 값을 폼의 초기값으로 표시한다.
- 작성 화면과 같은 유효성 검사를 적용한다.
- 수정 시 `updatedAt`을 갱신한다.
- 수정 완료 후 문의 상세 페이지로 이동한다.
- `ANSWERED` 상태에서는 수정 버튼을 숨기고 `답변 완료 문의는 수정할 수 없습니다.`를 표시한다.

### 문의 삭제 — Delete

- 작성자만 자신의 문의를 삭제할 수 있다.
- `PENDING` 상태에서만 삭제할 수 있다.
- 삭제 버튼을 누르면 확인 모달을 표시한다.

```text
고객문의를 삭제하시겠습니까?
삭제한 문의는 복구할 수 없습니다.

[취소] [삭제]
```

- 삭제 완료 후 `/inquiries`로 이동하고 성공 토스트를 표시한다.
- `IN_REVIEW`, `ANSWERED` 상태에서는 삭제 버튼을 숨기고 고객센터 안내를 표시한다.
- 실제 서비스에서는 감사 기록과 분쟁 대응 정책에 따라 소프트 삭제를 적용한다.

### 고객센터 답변 표시

답변이 없으면 다음 문구를 표시한다.

```text
문의 내용을 확인하고 있습니다.
답변이 등록되면 이 화면에서 확인할 수 있습니다.
```

답변이 있으면 답변 내용, 담당 부서, 답변 등록일을 표시한다. 고객 화면에는 답변 작성 기능을 제공하지 않는다.

### 데이터 구조

`src/data/inquiries.js`에 테스트용 문의를 상태별로 최소 3개 작성한다.

```js
{
  id: "inquiry-001",
  userId: "test-user-001",
  category: "DELIVERY",
  title: "배송 예정일을 확인하고 싶습니다.",
  content: "주문한 상품의 배송 예정일을 알려주세요.",
  orderNumber: "ZR-20260917-001",
  attachments: [],
  status: "PENDING",
  answerNotification: true,
  answer: null,
  answeredBy: null,
  answeredAt: null,
  createdAt: "2026-09-17T10:00:00.000Z",
  updatedAt: null
}
```

### 상태 관리

`src/store/useInquiryStore.js`

```js
{
  inquiries: [],
  addInquiry: () => {},
  updateInquiry: () => {},
  deleteInquiry: () => {},
  getInquiryById: () => {},
  getMyInquiries: () => {},
  canEditInquiry: () => {},
  canDeleteInquiry: () => {}
}
```

- Zustand `persist`를 사용한다.
- 상태 변경 전 현재 로그인 사용자가 작성자인지 다시 검사한다.
- 컴포넌트에서 배열을 직접 수정하지 않는다.
- ID는 배열 index가 아니라 충돌하지 않는 고유값을 사용한다.
- 삭제 후 상세 URL에 다시 접근하면 404 또는 문의 없음 화면을 표시한다.

### 고객문의 컴포넌트

```text
src/components/inquiry/InquiryList.jsx
src/components/inquiry/InquiryCard.jsx
src/components/inquiry/InquiryFilter.jsx
src/components/inquiry/InquiryForm.jsx
src/components/inquiry/InquiryStatusBadge.jsx
src/components/inquiry/InquiryAnswer.jsx
src/components/inquiry/InquiryDeleteModal.jsx
src/pages/inquiry/InquiryListPage.jsx
src/pages/inquiry/InquiryWritePage.jsx
src/pages/inquiry/InquiryDetailPage.jsx
src/pages/inquiry/InquiryEditPage.jsx
```

### BEM 클래스

```css
.inquiry-list {
}
.inquiry-list__toolbar {
}
.inquiry-list__empty {
}
.inquiry-card {
}
.inquiry-card__category {
}
.inquiry-card__title {
}
.inquiry-card__meta {
}
.inquiry-status {
}
.inquiry-status--pending {
}
.inquiry-status--in-review {
}
.inquiry-status--answered {
}
.inquiry-form {
}
.inquiry-form__field {
}
.inquiry-form__error {
}
.inquiry-detail {
}
.inquiry-detail__answer {
}
.inquiry-delete-modal {
}
```

### 개인정보 및 보안

- 문의 데이터는 작성자 본인만 조회할 수 있다.
- 화면에서 숨기는 것만으로 권한 처리를 끝내지 않고 Store 함수에서도 작성자 ID를 확인한다.
- 실제 서버 연동 시 모든 CRUD API에서 인증과 리소스 소유권을 검증한다.
- 문의 내용, 주문번호, 주소, 연락처를 콘솔에 출력하지 않는다.
- 문의 내용에 HTML 문자열을 직접 삽입하지 않는다.
- 실제 서비스에서는 문의 데이터와 첨부 파일을 localStorage에 저장하지 않는다.

---

## 16. 페이지 및 폴더 구조 — 사용자 지정 기준

아래는 후속 구현의 기준 구조다. 현재 문서 수정 단계에서는 폴더나 React 파일을 생성하지 않는다. PROJECT.md / design-tokens.md는 목표 프로젝트의 문서명이며, 현재 작업 폴더의 기존 PROJECT_BUILD_GUIDE.md / Design-token.md는 이름을 유지한다.

```text
newera-renewal/
├── index.html
├── public/                 # 이미지, 영상, 아이콘
├── PROJECT.md
├── design-tokens.md
└── src/
    ├── main.jsx            # React 진입점
    ├── App.jsx             # 전체 페이지 조립
    ├── App.css
    ├── index.css           # 공통 CSS 불러오기
    ├── page/
    │   └── Home.jsx        # 뉴에라 메인페이지
    ├── components/
    │   ├── Header/
    │   ├── Hero/
    │   ├── History/
    │   ├── Silhouette/
    │   ├── Collaboration/
    │   ├── ShopAll/
    │   └── Footer/
    └── styles/
        ├── tokens.css
        ├── typography.css
        └── global.css
```

### 페이지 조립과 Figma 대응

App은 Header → Home → Footer를 조립한다. Home은 본문 섹션을 Figma 순서대로 배치한다. Header와 Footer를 Home에 다시 넣어 중복 렌더링하지 않는다.

| 배치 순서 | 담당 위치 | Figma 섹션 / 역할 |
|---|---|---|
| 1 | Header | 로고·메뉴·검색·쇼핑백·계정 |
| 2 | Home → Hero | DEFINE YOUR ERA.와 중앙 이미지 |
| 3 | Home 본문 | visual 상품 콜라주 |
| 4 | Home 본문 | 01 THE NEW ERA ATTITUDE |
| 5 | Home 본문 | FOR YOU 타이포 |
| 6 | Home 본문 | 카테고리 콜라주 |
| 7 | Home → History | 02 브랜드 히스토리 |
| 8 | Home 본문 | 03 MLB AUTHENTIC COLLECTION / 59FIFTY |
| 9 | Home → Silhouette | 04 EXPLORE THE FIT / 실루엣 6종 |
| 10 | Home → Collaboration | 05 COLLABORATION / 협업 5개 |
| 11 | Home → ShopAll | FW26 WITH RIIZE SOHEE / 룩북 5개 행 |
| 12 | Footer | 안내·고객센터·멤버십·글로벌·약관·로고 |

ShopAll은 사용자 지정 폴더명으로 룩북 영역을 담당하도록 매핑한다. Figma에 Shop All 제목이나 추가 상품 그리드가 확인된 것은 아니므로 새 섹션을 추가하지 않는다. 별도 폴더가 없는 visual·브랜드 메시지·FOR YOU·카테고리·59FIFTY는 우선 Home의 본문 영역으로 명시하고, 실제 구현에서 분리가 필요할 때 구성 범위를 검토한다. 폴더 수에 맞추기 위해 이 섹션들을 생략하거나 순서를 바꾸지 않는다.

### 파일과 CSS 책임

| 파일/폴더 | 책임 |
|---|---|
| `main.jsx` | React 마운트, `index.css` 한 번 불러오기 |
| `App.jsx` / `App.css` | Header·Home·Footer 조립, 앱 외곽 레이아웃 |
| `page/Home.jsx` | 메인 본문 섹션 구성·순서 관리 |
| `index.css` | tokens.css → typography.css → global.css 순서로 공통 CSS 불러오기 |
| `styles/tokens.css` | 확인된 색상·크기·간격 등 공통 토큰 |
| `styles/typography.css` | 폰트 연결, 확인된 타이포 역할 |
| `styles/global.css` | 기본 초기화, body, 공통 컨테이너, 접근성 유틸리티 |
| `components/각 컴포넌트/` | 해당 JSX 및 같은 폴더의 전용 CSS |
| `public/` | 이미지·영상·아이콘. 기존 public/images 분류 규칙 유지 가능 |

- 기존 variables.css는 tokens.css, fonts.css는 typography.css 역할로 통합한다. 별도 reset.css 대신 global.css의 기본 초기화 영역을 사용한다.
- 페이지 전용 CSS가 필요하면 Home.jsx 옆에 둔다. 이는 필요 시 추가하는 파일이며 위 최소 구조에 자동으로 생성하지 않는다.
- 전역 CSS를 main.jsx와 각 컴포넌트에서 중복 import하지 않는다.
- BEM, 컴포넌트·페이지 CSS 인접 배치, 데이터·상태·UI 분리 규칙을 유지한다.
- 앞의 인증·게시판·마이페이지 경로 예시는 후속 기능 기획이다. 이번 메인 전용 구조에 해당 폴더를 미리 생성하지 않는다.

---
## 17. 반응형 기준 — 기존 개발 정책, Figma 미확인

아래 전환점은 기존 개발 정책이다. 이번 대상은 1920px 데스크톱 시안으로, 모바일 구성과 전환점은 Figma에서 확인되지 않았다.

- 기본: 0px 이상, 모바일 퍼스트
- 태블릿: 768px 이상
- 데스크톱: 1024px 이상
- 와이드: 1440px 이상

모바일 프로필 캐릭터 목록은 3열, 태블릿 이상은 6열을 기본으로 한다. 터치 영역은 최소 44×44px를 확보한다.

---

## 18. 접근성

- 문서 언어를 한국어로 설정한다.
- 모든 이미지에 의미에 맞는 `alt`를 제공한다.
- 장식 이미지는 빈 `alt`를 사용한다.
- 폼 입력에는 연결된 `label`을 제공한다.
- 오류 메시지는 입력 요소와 연결한다.
- 색상만으로 선택 상태를 표현하지 않는다.
- 모달의 초점 이동과 ESC 닫기를 지원한다.
- `prefers-reduced-motion` 사용자는 과도한 모션을 줄인다.
- 프로필 캐릭터의 이름을 스크린 리더가 읽을 수 있어야 한다.

---

## 19. SEO 및 문서 정보

`index.html`에 다음 내용을 설정한다.

- `<html lang="ko">`
- 프로젝트 제목과 설명
- viewport
- theme-color
- favicon
- 기본 Open Graph 정보

제목 예시:

```text
NEW ERA Renewal — DEFINE YOUR ERA.
```

---

## 20. README 필수 내용

- 프로젝트 소개와 목적
- 주요 기능
- 기술 스택
- 폴더 구조
- 설치·실행·빌드 방법
- 테스트 로그인 사용 방법
- 아이디·비밀번호 로그인 사용 방법과 공개 데모 계정
- 회원가입 입력 항목, 가입·취소 동작, 데모 계정의 메모리 저장 및 초기화 기준
- 카카오 로그인 설정 방법과 서버 필요 범위
- 카카오 주소검색 설정
- 고객문의 CRUD와 상태·권한 정책
- 헤더에서 좋아요 메뉴를 제외하는 기준
- 마이페이지 최근 본 상품과 좋아요 상품 구성
- `useRecentlyViewedStore` 저장·삭제·최대 개수 기준
- 상태 관리 구조
- 반응형 기준
- GSAP과 Swiper 사용 위치
- 상품·캐릭터 이미지 교체 방법
- Figma 에셋 노드 ID 및 추가 공식 자료의 출처와 사용 위치
- `public/images` 폴더별 이미지 관리 방법
- 가상 데이터에서 API 데이터로 전환하는 방법
- 컴포넌트·페이지 CSS 인접 배치 규칙
- `src/styles`에 작성할 전역 공통 스타일 범위
- 프로필 사진 저장 방식과 데모 제약
- 팀 협업 규칙
- 추후 개선 사항

---

## 21. 완료 체크리스트

### 프로젝트 기본

- [ ] React + Vite + JavaScript 프로젝트가 생성되었다.
- [ ] React Router 이동과 새로고침이 정상 작동한다.
- [ ] Figma에서 확인된 폰트와 기본 스타일 초기화가 적용되었다.
- [ ] 모든 CSS가 BEM 규칙을 따른다.
- [ ] 모바일 퍼스트 반응형이 구현되었다.
- [ ] 상품·배너·캐릭터 이미지가 `public/images`의 해당 폴더에 저장되었다.
- [ ] 상품·컬렉션·히어로·배너에 Figma 원본과 일치하는 에셋을 사용하고 노드 ID와 출처를 기록했다.
- [ ] 이미지 경로가 `/images/...` 형식으로 작성되었다.
- [ ] 가상 데이터와 API 응답이 같은 이미지 필드 구조를 사용한다.
- [ ] UI 컴포넌트가 가상 데이터를 직접 import하지 않고 service를 통해 전달받는다.
- [ ] 컴포넌트 전용 CSS가 해당 컴포넌트 폴더에 있다.
- [ ] 페이지 전용 CSS가 해당 페이지 폴더에 있다.
- [ ] `src/styles`에는 전역 공통 스타일만 있다.
- [ ] 콘솔 오류와 경고가 없다.

### 로그인 및 회원가입

- [ ] 아이디·비밀번호 입력 필드와 일반 로그인 버튼이 표시된다.
- [ ] 일반 로그인의 필수 입력 검사, 성공 이동, 실패 안내가 동작한다.
- [ ] 후속 인증 화면에서 `/signup`으로 이동할 수 있다(메인 헤더에 텍스트 메뉴를 임의로 추가하지 않는다).
- [ ] 회원가입 화면에 아이디·비밀번호·이름 입력란과 카카오 로그인·가입·취소 버튼이 표시된다.
- [ ] 가입 시 필수 입력과 아이디 중복을 검사하고 오류를 안내한다.
- [ ] 가입 성공 후 로그인 화면으로 이동하며 가입한 계정으로 로그인할 수 있다.
- [ ] 회원가입의 카카오 로그인 버튼이 일반 입력 필드와 독립적으로 동작한다.
- [ ] 취소 시 입력 내용을 저장하지 않고 로그인 화면으로 이동한다.
- [ ] 최초 카카오 로그인 시 가입 처리되고, 이후 동일 계정으로 로그인된다.
- [ ] 카카오 로그인 버튼과 콜백 경로가 구현되었다.
- [ ] 카카오 키가 없어도 앱이 중단되지 않는다.
- [ ] 로그인 화면에 `테스트 계정으로 로그인` 버튼이 표시된다.
- [ ] 테스트 버튼만 눌러 즉시 마이페이지에 들어갈 수 있다.
- [ ] 테스트 로그인 상태가 새로고침 후 유지된다.
- [ ] 로그아웃이 정상 작동한다.

### 마이페이지 및 프로필

- [ ] 마이페이지에 사용자 정보와 활동 요약이 표시된다.
- [ ] Header에 좋아요 메뉴와 좋아요 개수 배지가 표시되지 않는다.
- [ ] 로그인 후 마이페이지에 최근 본 상품 리스트가 표시된다.
- [ ] 로그인 후 마이페이지에 좋아요 상품 리스트가 표시된다.
- [ ] `/wishlist`와 `/mypage/likes` 독립 페이지를 사용하지 않는다.
- [ ] 최근 본 상품이 최신순으로 표시된다.
- [ ] 동일 상품을 다시 보면 중복 없이 목록 맨 앞으로 이동한다.
- [ ] 최근 본 상품이 최대 10개로 제한된다.
- [ ] 최근 본 상품을 개별 삭제하거나 전체 삭제할 수 있다.
- [ ] 최근 본 상품과 좋아요 상품이 사용자별로 구분된다.
- [ ] 최근 본 상품과 좋아요 상품의 빈 상태가 구현되었다.
- [ ] `프로필 수정` 버튼으로 수정 화면에 이동한다.
- [ ] 사진 선택 후 미리보기가 표시된다.
- [ ] 허용 형식과 5MB 용량 제한을 검사한다.
- [ ] 6개의 기본 캐릭터가 표시된다.
- [ ] 캐릭터를 키보드로 선택할 수 있다.
- [ ] 선택한 캐릭터에 시각적 표시와 `aria-pressed`가 적용된다.
- [ ] 사진과 캐릭터 선택이 서로 충돌하지 않는다.
- [ ] 저장 후 마이페이지와 헤더 이미지가 즉시 변경된다.
- [ ] 새로고침 후에도 프로필 이미지가 유지된다.
- [ ] 취소 시 변경 내용이 저장되지 않는다.
- [ ] 사진 삭제 시 기본 캐릭터가 표시된다.
- [ ] 카카오 주소검색이 회원정보 수정 화면에서 작동한다.

### 상품·게시판

- [ ] 검색, 좋아요, 장바구니가 작동한다.
- [ ] 비로그인 사용자가 좋아요를 누르면 로그인 안내가 표시된다.
- [ ] 좋아요·최근 본 상품·장바구니가 새로고침 후 유지된다.
- [ ] 게시글 검색, 필터, 정렬, 페이지네이션이 작동한다.
- [ ] 로그인 사용자가 글을 작성할 수 있다.
- [ ] 작성자만 자신의 글을 수정·삭제할 수 있다.
- [ ] 모바일 게시판이 카드 레이아웃으로 표시된다.

### 고객문의 CRUD

- [ ] 로그인 사용자만 고객문의 페이지에 접근할 수 있다.
- [ ] 테스트 로그인으로 문의를 작성할 수 있다.
- [ ] 문의 작성 후 상세 페이지로 이동한다.
- [ ] 내 문의만 목록과 상세 화면에서 조회할 수 있다.
- [ ] 제목 검색, 상태 필터, 정렬, 페이지네이션이 작동한다.
- [ ] `PENDING`, `IN_REVIEW` 문의를 작성자가 수정할 수 있다.
- [ ] `ANSWERED` 문의는 수정할 수 없다.
- [ ] `PENDING` 문의만 작성자가 삭제할 수 있다.
- [ ] 삭제 전 확인 모달이 표시된다.
- [ ] 작성자가 아닌 사용자는 조회·수정·삭제할 수 없다.
- [ ] 문의 상태와 고객센터 답변이 올바르게 표시된다.
- [ ] 빈 목록과 존재하지 않는 문의 상태가 구현되었다.
- [ ] 모바일에서 문의 목록이 카드 형태로 표시된다.
- [ ] 문의 CRUD 결과가 새로고침 후에도 유지된다.

### 최종 검증

- [ ] 접근성 기본 검사를 통과한다.
- [ ] 빈 화면과 오류 상태가 구현되었다.
- [ ] `npm run lint`가 성공한다.
- [ ] `npm run build`가 성공한다.
- [ ] README가 작성되었다.

---

## 22. 작업 완료 보고 형식

```text
프로젝트 생성 완료

프로젝트명:
프로젝트 경로:
개발 서버 주소:

구현된 페이지:
구현된 주요 기능:
테스트 로그인 확인 결과:
프로필 사진·캐릭터 변경 확인 결과:
카카오 주소검색 확인 결과:
고객문의 CRUD 확인 결과:
반응형 확인 결과:
접근성 확인 결과:
ESLint 결과:
프로덕션 빌드 결과:

실행 명령:
cd newera-renewal
npm install
npm run dev
```

위 완료 조건은 후속 구현 단계에 적용한다. 이번 작업은 문서만 수정하며 UI 구현과 개발 서버 실행은 진행하지 않는다.
