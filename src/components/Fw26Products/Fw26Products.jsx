import { useState } from 'react';
import defaultCatalog from '../../data/fw26.json';
import './Fw26Products.css';
import ProductCard from '../ProductCard';
import { categoryTypes } from '../../data/catalogTypes';

const defaultTypes = categoryTypes.fw26;

export default function Fw26Products({ catalog = defaultCatalog, types = defaultTypes, label = 'FW26', sortId = 'fw26-sort' }) {
  const [type, setType] = useState(() => {
    const requested = new URLSearchParams(window.location.hash.split('?')[1] || '').get('filter');
    return types.includes(requested) ? requested : '전체';
  });
  const [sort, setSort] = useState('official');
  const products = catalog.products.filter(product => type === '전체' || product.type === type);
  if (sort === 'price-asc') products.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') products.sort((a, b) => b.price - a.price);

  return <section className="fw26-products" aria-label={`${label} 상품 목록`}>
    <div className="fw26-products__toolbar">
      <div className="fw26-products__filters" role="group" aria-label="상품 종류">
        {types.map(item => <button type="button" key={item} aria-pressed={type === item} onClick={() => setType(item)}>{item}<span>{item === '전체' ? catalog.total : catalog.products.filter(product => product.type === item).length}</span></button>)}
      </div>
      <div className="fw26-products__sort"><label htmlFor={sortId}>정렬</label><select id={sortId} value={sort} onChange={event => setSort(event.target.value)}>
        <option value="official">기본순</option><option value="price-asc">낮은 가격순</option><option value="price-desc">높은 가격순</option>
      </select></div>
    </div>
    <p className="fw26-products__count" role="status">{type} · {products.length}개 상품</p>
    <ul className="fw26-products__grid">
      {products.map(product => <li key={product.id}>
        <ProductCard product={product} />
      </li>)}
    </ul>
   
  </section>;
}
