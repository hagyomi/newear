import './Product.css';
import ProductActions from '../components/ProductActions';

export default function Product({ product }) {
  return <main id="main-content" className="product-page">
    <nav className="product-page__breadcrumb" aria-label="현재 위치"><a href="#/">Home</a><span> / </span><a href="#/category/fw26">FW26</a><span> / 상품 상세</span></nav>
    <article className="product-page__layout">
      <div className="product-page__visual"><img src={`${import.meta.env.BASE_URL}${product.image}`} alt={product.name} width="600" height="600" /></div>
      <div className="product-page__info">
        <p className="product-page__eyebrow">FW26 WITH RIIZE SOHEE</p>
        <h1>{product.name}</h1>
        <p className="product-page__english">{product.englishName}</p>
        <p className="product-page__price">{product.price.toLocaleString('ko-KR')}원</p>
        <ProductActions product={product} />
        <dl><div><dt>상품 코드</dt><dd>{product.code}</dd></div><div><dt>분류</dt><dd>{product.type}</dd></div></dl>
        <a className="product-page__back" href="#/category/fw26">FW26 상품 더 보기 ↗</a>
      </div>
    </article>
  </main>;
}
