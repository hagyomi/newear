import { useState } from 'react';
import { categories, allCategories } from './categories';
import { catalogs } from '../data/catalogs';
import './UtilityPages.css';

const keywords = {
  fw26: ['가을', '겨울', '소희', '라이즈', 'riize'],
  headwear: ['헤드웨어', 'headwear', 'cap', 'hat'],
  apparel: ['어패럴', 'apparel', '옷'],
  accessories: ['악세서리', 'accessories', '가방'],
  kids: ['kids', '아동', '어린이'],
  blacklabel: ['블랙라벨', '블랙 라벨', 'blacklabel', 'black label'],
};

const normalize = value => value.normalize('NFKC').toLowerCase().replace(/\s+/g, '');
const products = [...new Map(allCategories.flatMap(category =>
  (catalogs[category.slug]?.products ?? []).map(product => [product.id, { ...product, category }])
)).values()];

export default function Search() {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const normalizedQuery = normalize(query);
  const productResults = normalizedQuery ? products.filter(product =>
    [product.name, product.englishName ?? '', product.category.label, product.category.slug, ...(keywords[product.category.slug] ?? [])].some(term => normalize(term).includes(normalizedQuery))
  ) : [];

  return <main id="main-content" className="utility-page">
    <p className="utility-page__eyebrow">FIND YOUR NEW ERA</p>
    <h1>SEARCH</h1>
    <form className="search-form" role="search" onSubmit={event => { event.preventDefault(); setQuery(input.trim()); }}>
      <label htmlFor="search-query">제품 검색</label>
      <div className="search-form__row">
        <input id="search-query" type="search" placeholder="카테고리 또는 제품명을 입력해 주세요" value={input} onChange={event => setInput(event.target.value)} required />
        <button type="submit">검색</button>
      </div>
    </form>
    <p className="utility-page__note">카테고리명이나 제품명의 일부만 입력해도 검색할 수 있습니다.</p>
    <div className="search-suggestions" aria-label="추천 검색어">
      {categories.map(category => <button key={category.slug} type="button" onClick={() => { setInput(category.label); setQuery(category.label); }}>{category.label}</button>)}
    </div>
    {query && <section className="search-results" aria-labelledby="search-results-title">
      <h2 id="search-results-title" role="status">“{query}” 검색 결과 {productResults.length}건</h2>
      {productResults.length > 0 && <><h3>제품 {productResults.length}건</h3><ul>{productResults.map(product => <li key={product.id}>
        <a href={`#/category/${product.category.slug}`}>
          <img src={`${import.meta.env.BASE_URL}${product.image}`} alt="" loading="lazy" />
          <span>{product.name}<small>{product.category.label} · {product.price.toLocaleString('ko-KR')}원</small></span><span aria-hidden="true">↗</span>
        </a>
      </li>)}</ul></>}
      {!productResults.length && <p className="utility-page__empty">검색 결과가 없습니다. 다른 카테고리명이나 제품명으로 검색해 주세요.</p>}
    </section>}
  </main>;
}
