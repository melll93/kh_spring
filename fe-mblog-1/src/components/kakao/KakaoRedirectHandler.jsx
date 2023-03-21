import React, { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

const KakaoRedirectHandler = () => {
  const GRANT_TYPE = "authorization_code";
  const CLIENT_ID = process.env.REACT_APP_KAKAO_API_KEY;
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";

  const navigate = useNavigate();
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
      // const res = await axios(
      //   {
      //     method: "POST",
      //     url: "https://kauth.kakao.com/oauth/token",
      //   },
      //   payload
      // );

      const res = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        payload
      );
      window.Kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
      console.log(res.data.access_token);
      window.Kakao.Auth.setAccessToken(res.data.access_token);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return <div>code : {code}</div>;
};

export default KakaoRedirectHandler;
