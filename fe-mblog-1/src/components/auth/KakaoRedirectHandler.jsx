import React from "react";
import axios from "axios";
import qs from "qs";

const KakaoRedirectHandler = () => {
  const GRANT_TYPE = "authorization_code";
  const CLIENT_ID = process.env.REACT_APP_KAKAO_API_KEY;
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";

  let params = new URL(document.location).searchParams;
  let code = params.get("code");

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: GRANT_TYPE,
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      code: code,
    });

    try {
      const res = await axios(
        {
          method: "POST",
          url: "https://kauth.kakao.com/oauth/token",
        },
        payload
      );
      window.kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
      console.log(res.data.access_token);
      window.kakao.Auth.setAccessToken(res.data.access_token);
    } catch (error) {
      console.log(error);
    }
  };

  return <div>code : {code}</div>;
};

export default KakaoRedirectHandler;
