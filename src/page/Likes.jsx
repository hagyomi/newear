import { useShop } from '../store/shop';
import ProductCard from '../components/ProductCard';
import './UtilityPages.css';
import '../components/Fw26Products/Fw26Products.css';
export default function Likes() {
  const { likes } = useShop();
  return <main id="main-content" className="utility-page"><h1>좋아요</h1><p className="fw26-products__count" role="status">{likes.length}개 상품</p>
    {likes.length ? <ul className="fw26-products__grid">{likes.map(product => <li key={product.id}><ProductCard product={product} showEnglishName={false} /></li>)}</ul> : <div className="cart-empty"><p>좋아요한 상품이 없습니다.</p><a href="#/category/fw26" className="utility-page__primary">상품 둘러보기</a></div>}
  </main>;
}
