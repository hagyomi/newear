import { useState } from 'react';
import { addToCart, toggleLike, useShop } from '../store/shop';
import './ProductActions.css';
export default function ProductActions({ product }) {
  const { likes } = useShop();
  const liked = likes.some(item => item.id === product.id);
  const [message, setMessage] = useState('');
  return <div className="product-actions"><div className="product-actions__buttons">
    <button className="product-actions__cart" type="button" onClick={() => { addToCart(product); setMessage('장바구니에 추가했습니다.'); }}>장바구니에 추가</button>
    <button className="product-actions__like" type="button" aria-label={`${product.name} 좋아요`} aria-pressed={liked} onClick={() => { toggleLike(product); setMessage(liked ? '좋아요를 취소했습니다.' : '좋아요에 추가했습니다.'); }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M12 21 3.4 12.5C-2 7 6 0 12 6c6-6 14 1 8.6 6.5Z" /></svg>
    </button></div><p className="product-actions__status" role="status">{message}{message === '장바구니에 추가했습니다.' && <> <a href="#/cart">장바구니 보기</a></>}</p></div>;
}
