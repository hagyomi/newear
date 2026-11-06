import { useState } from 'react';
import { categories } from './categories';
import './UtilityPages.css';

const keywords = {
  fw26: ['가을', '겨울', '소희', '라이즈', 'riize'],
  headwear: ['헤드웨어', 'headwear', 'cap', 'hat'],
  apparel: ['어패럴', 'apparel', '옷'],
  accessories: ['악세서리', 'accessories', '가방'],
  kids: ['kids', '아동', '어린이'],
  blacklabel: ['블랙라벨', '블랙 라벨', 'blacklabel', 'black label'],
};

export default function Search() {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const normalizedQuery = query.toLowerCase();
  const results = query ? categories.filter(category =>
    [category.label, ...keywords[category.slug]].some(term => term.toLowerCase().includes(normalizedQuery))
  ) : [];

  return <main id="main-content" className="utility-page">
    <p className="utility-page__eyebrow">FIND YOUR NEW ERA</p>
    <h1>SEARCH</h1>
    <form className="search-form" role="search" onSubmit={event => { event.preventDefault(); setQuery(input.trim()); }}>
      <label htmlFor="search-query">카테고리 검색</label>
      <div className="search-form__row">
        <input id="search-query" type="search" placeholder="FW26, 모자, 의류, 액세서리, 키즈, BlackLabel" value={input} onChange={event => setInput(event.target.value)} required />
        <button type="submit">검색</button>
      </div>
    </form>
    <p className="utility-page__note">현재 등록된 카테고리를 검색할 수 있습니다.</p>
    <div className="search-suggestions" aria-label="추천 검색어">
      {categories.map(category => <button key={category.slug} type="button" onClick={() => { setInput(category.label); setQuery(category.label); }}>{category.label}</button>)}
    </div>
    {query && <section className="search-results" aria-labelledby="search-results-title">
      <h2 id="search-results-title" role="status">“{query}” 검색 결과 {results.length}건</h2>
      {results.length ? <ul>{results.map(category => <li key={category.slug}>
        <a href={`#/category/${category.slug}`}>
          <img src={`${import.meta.env.BASE_URL}images/figma/${category.image}`} alt="" />
          <span>{category.label}<small>{category.description}</small></span><span aria-hidden="true">↗</span>
        </a>
      </li>)}</ul> : <p className="utility-page__empty">검색 결과가 없습니다. 다른 카테고리 이름으로 검색해 주세요.</p>}
    </section>}
  </main>;
}
