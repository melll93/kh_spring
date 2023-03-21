import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = new useNavigate();
  const [userId, setUserId] = useState();
  const [userNickname, setUserNickname] = useState();
  const [userImage, setUserImage] = useState();
  const getProfile = async () => {
    try {
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });
      setUserId(data.id);
      window.localStorage.setItem("userId", userId);
      setUserNickname(data.properties.nickname);
      window.localStorage.setItem("userNickname", userNickname);
      setUserImage(data.properties.profile_image);
      window.localStorage.setItem("userImage", userImage);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const kakaoLogout = async () => {
    //insert here 로그아웃 처리
    await axios({
      method: "GET",
      url: `https://kauth.kakao.com/oauth/logout?client_id=${process.env.REACT_APP_KAKAO_API_KEY}&logout_redirect_uri=http://localhost:3000/`,
    })
      .then((res) => {
        console.log(res);
        window.localStorage.removeItem("userId");
        window.localStorage.removeItem("userNickname");
        window.localStorage.removeItem("userImage");
        // window.Kakao.Auth;
        // window.localStorage.clear();
        navigate("/");
      })
      .catch(console.log);
  };

  useEffect(() => {
    getProfile();
  });

  return (
    <>
      <div>{userId}</div>
      <div>{userNickname}</div>
      <div>
        <img src={userImage} alt={userNickname} />
      </div>
      <button onClick={kakaoLogout}>카카오로그아웃</button>
    </>
  );
};
export default Profile;
