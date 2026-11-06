import './UtilityPages.css';
import './Cart.css';
import { useShop, setQuantity, removeFromCart } from '../store/shop';

export default function Cart() {
  const { cart } = useShop();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return <main id="main-content" className="utility-page">
    <p className="utility-page__eyebrow">YOUR NEW ERA</p>
    <h1>SHOPPING BAG</h1>
    {cart.length ? <>
      <p className="cart-count" role="status">총 {cart.reduce((sum,item) => sum + item.quantity,0)}개 상품</p>
      <ul className="cart-list">{cart.map(item => <li key={item.id}>
        <img src={`${import.meta.env.BASE_URL}${item.image}`} alt={item.name} width="120" height="120" />
        <div className="cart-list__info"><h2>{item.name}</h2><p>{item.price.toLocaleString('ko-KR')}원</p>
          <div className="cart-quantity"><button type="button" disabled={item.quantity <= 1} aria-label={`${item.name} 수량 줄이기`} onClick={() => setQuantity(item.id,item.quantity - 1)}>−</button><span aria-label="수량">{item.quantity}</span><button type="button" disabled={item.quantity >= 99} aria-label={`${item.name} 수량 늘리기`} onClick={() => setQuantity(item.id,item.quantity + 1)}>+</button></div>
        </div><div className="cart-list__end"><strong>{(item.price * item.quantity).toLocaleString('ko-KR')}원</strong><button type="button" aria-label={`${item.name} 삭제`} onClick={() => removeFromCart(item.id)}>삭제</button></div>
      </li>)}</ul>
      <div className="cart-total"><span>상품 합계</span><strong>{total.toLocaleString('ko-KR')}원</strong></div>
      <a className="utility-page__primary" href="#/category/fw26">계속 쇼핑하기</a>
    </> : <section className="cart-empty" aria-labelledby="cart-empty-title">
      <svg width="56" height="64" viewBox="0 0 56 64" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M8 20h40l4 40H4L8 20Z" /><path d="M18 25V13a10 10 0 0 1 20 0v12" /></svg>
      <h2 id="cart-empty-title">장바구니가 비어 있습니다.</h2>
      <p>마음에 드는 뉴에라 컬렉션을 둘러보세요.</p>
      <a className="utility-page__primary" href="#/category/fw26">쇼핑하러 가기</a>
      <a className="cart-empty__home" href="#/">홈으로 이동</a>
    </section>}
  </main>;
}
