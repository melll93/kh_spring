import React from 'react'
import { Link } from 'react-router-dom'
import './loginpage.css'
​
const LoginPage = () => {
    const handleGoogle = (event) => {
      } //end of handleGoogle    
  return (
    <>
    <div className="bg"></div>
    <form className="login__form" action="">
      <h1>로그인</h1>
      <p>신규 사용자이신가요? <Link to="#">계정 만들기</Link></p>
      <label htmlFor="useremail">이메일 주소
        <input type="email" id="useremail" placeholder="이메일 주소를 입력해주세요."/>
      </label>
      <input type="submit" className="btn__submit" value="계속" />
      <div className="divider">
        <hr />
        <span>또는</span>
      </div>
      <button className="btn__google" onClick={handleGoogle}>
        <i className="icon icon-google"></i>Google으로 계속
      </button>
      <button className="btn__facebook">
        <i className="icon icon-facebook"></i>Facebook으로 계속
      </button>
      <p className="captcha__text">
        reCAPTCHA로 보호되며 Google <Link to="#">개인정보보호 정책</Link> 및
        <Link to="#">서비스 약관</Link>의 적용을 받습니다.
      </p>
      </form>
    </>
  )
}
​
export default LoginPage