import axios from "axios";
import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const CALLBACK_URL = "http://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_API_KEY}&redirect_uri=${CALLBACK_URL}&response_type=code`;
  // const [data, setData] = useState();
  // axios({
  //   method: "GET",
  //   url: KAKAO_AUTH_URL,
  // })
  //   .then(console.log)
  //   .then(setData);
  return (
    <div>
      <a href={KAKAO_AUTH_URL}>
        <Image src="images/kakao/kakao_login_medium_narrow.png" />
      </a>
    </div>
  );
};

export default LoginPage;
