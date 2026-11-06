import './Category.css';
import Fw26Products from '../components/Fw26Products/Fw26Products';
import { catalogs } from '../data/catalogs';
import { categoryTypes } from '../data/catalogTypes';

export default function Category({ category }) {
  return <main id="main-content" className="category">
    <div className="category__breadcrumb"><a href="#/">Home</a><span aria-hidden="true"> / </span>{category.label}</div>
    <section className="category__hero category__hero--text" aria-labelledby="category-title">
      <div className="category__intro">
        <p className="category__eyebrow">NEW ERA COLLECTION</p>
        <h1 id="category-title" className={category.label.length > 22 ? 'category__title--long' : undefined}>{category.label}</h1>
        <p className="category__description">{category.description}</p>
        <a className="category__back" href="#/">메인 컬렉션 둘러보기 ↗</a>
      </div>
    </section>
    <Fw26Products key={category.slug} catalog={catalogs[category.slug]} types={categoryTypes[category.slug]} label={category.label} sortId={`${category.slug}-sort`} />
  </main>;
}
