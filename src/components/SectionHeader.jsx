import './SectionHeader.css';

export default function SectionHeader({ number, children, inter = false }) {
  return <div className={`section-header${inter ? ' section-header--inter' : ''}`}>
    <ul className="section-header__label"><li>{children}</li></ul>
    <span className="section-header__number">{number}</span>
    <img className="section-header__rule" src={`${import.meta.env.BASE_URL}images/figma/imgVector3.svg`} alt="" />
  </div>;
}
