import ProductActions from './ProductActions';

export default function ProductCard({ product, showEnglishName = true }) {
  return <article className="fw26-product">
    <div className="fw26-product__image"><img src={`${import.meta.env.BASE_URL}${product.image}`} alt={product.name} width="500" height="500" loading="lazy" /></div>
    <div className="fw26-product__info">
      <h3>{product.name}</h3>
      {showEnglishName && <p className="fw26-product__english">{product.englishName}</p>}
      <p className="fw26-product__price">{product.price.toLocaleString('ko-KR')}원</p>
    </div>
    <ProductActions product={product} />
  </article>;
}
