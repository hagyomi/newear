import { useState } from 'react';
import './Login.css';

export default function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isTestLogin, setIsTestLogin] = useState(false);

  function handleLogin(event) {
    event.preventDefault();
    setMessage(userId.trim()
      ? '현재 로그인 서버가 연결되어 있지 않습니다. 테스트용 로그인을 이용해 주세요.'
      : '아이디를 입력해 주세요.');
    setPassword('');
  }

  return <main id="main-content" className="login">
    <section className="login__panel" aria-labelledby="login-title">
      <p className="login__eyebrow">NEW ERA MEMBERSHIP</p>
      <h1 id="login-title">LOGIN</h1>
      <p className="login__intro">뉴에라와 함께 나만의 스타일을 만나보세요.</p>
      {isTestLogin ? <div className="login__success">
        <p role="status">테스트 계정으로 로그인했습니다.</p>
        <p>테스트 회원님, 환영합니다.</p>
        <a className="login__button login__button--primary" href="#/">홈으로 이동</a>
        <button className="login__button" type="button" onClick={() => {
          setIsTestLogin(false);
          setMessage('로그아웃했습니다.');
        }}>로그아웃</button>
      </div> : <>
        <form className="login__form" onSubmit={handleLogin}>
          <label htmlFor="login-id">아이디</label>
          <input id="login-id" name="username" autoComplete="username" placeholder="아이디를 입력해 주세요" required value={userId} onChange={event => { setUserId(event.target.value); setMessage(''); }} />
          <label htmlFor="login-password">비밀번호</label>
          <input id="login-password" name="password" type="password" autoComplete="current-password" placeholder="비밀번호를 입력해 주세요" required value={password} onChange={event => { setPassword(event.target.value); setMessage(''); }} />
          <button className="login__button login__button--primary" type="submit">로그인</button>
          <button className="login__button" type="button" onClick={() => {
            setUserId('');
            setPassword('');
            setMessage('');
            setIsTestLogin(true);
          }}>테스트용 로그인</button>
        </form>
        <p className="login__message" role="status">{message}</p>
        <p className="login__note">테스트용 로그인은 입력 없이 이용할 수 있으며, 이 페이지를 벗어나면 종료됩니다.</p>
        <a className="login__button" href="#/signup">회원가입</a>
      </>}
    </section>
  </main>;
}
