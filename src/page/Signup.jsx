import { useState } from 'react';
import './Login.css';
import './Signup.css';

export default function Signup() {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  function handleSignup(event) {
    event.preventDefault();
    if (!name.trim() || !userId.trim()) {
      setMessage('이름과 아이디를 입력해 주세요.');
      return;
    }
    setPassword('');
    setMessage('현재 회원가입 서비스가 준비 중입니다. 입력한 정보는 저장되지 않았습니다.');
  }

  return <main id="main-content" className="login signup">
    <section className="login__panel" aria-labelledby="signup-title">
      <p className="login__eyebrow">NEW ERA MEMBERSHIP</p>
      <h1 id="signup-title">SIGN UP</h1>
      <p className="login__intro">뉴에라의 새로운 멤버가 되어보세요.</p>
      <form className="login__form" onSubmit={handleSignup} onChange={() => setMessage('')}>
        <label htmlFor="signup-name">이름</label>
        <input id="signup-name" name="name" autoComplete="name" placeholder="이름을 입력해 주세요" required value={name} onChange={event => setName(event.target.value)} />
        <label htmlFor="signup-id">아이디</label>
        <input id="signup-id" name="username" autoComplete="username" placeholder="아이디를 입력해 주세요" required value={userId} onChange={event => setUserId(event.target.value)} />
        <label htmlFor="signup-password">비밀번호</label>
        <input id="signup-password" name="password" type="password" autoComplete="new-password" placeholder="비밀번호를 입력해 주세요" required value={password} onChange={event => setPassword(event.target.value)} />
        <div className="signup__buttons">
          <button className="login__button login__button--primary" type="submit">가입하기</button>
          <a className="login__button" href="#/login">취소하기</a>
        </div>
      </form>
      <div className="signup__divider"><span>간편 로그인</span></div>
      <button className="login__button signup__kakao" type="button" onClick={() => setMessage('카카오 로그인은 현재 준비 중입니다.')}>
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3C6.5 3 2 6.5 2 10.8c0 2.7 1.8 5.1 4.5 6.5L5.4 21l4.4-2.5c.7.1 1.4.2 2.2.2 5.5 0 10-3.5 10-7.9S17.5 3 12 3Z" /></svg>
        카카오 로그인
      </button>
      <p className="login__message" role="status">{message}</p>
      <p className="login__note">이미 회원이신가요? <a className="signup__login-link" href="#/login">로그인</a></p>
    </section>
  </main>;
}
