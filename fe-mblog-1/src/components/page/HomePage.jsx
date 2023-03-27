import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ContainerDiv, FormDiv, HeaderDiv } from "../../styles/FormStyle";
import BlogHeader from "../include/BlogHeader";
import KakaoMap from "../kakao/KakaoMap";

const HomePage = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    console.log("로그인 요청");
    navigate("/login");
  };
  return (
    <>
      <ContainerDiv>
        <HeaderDiv>
          <h1 style={{ maginLeft: "10px" }}>홈페이지</h1>
          <BlogHeader />
          <Button onClick={handleLogin}>로그인</Button>
        </HeaderDiv>

        <FormDiv>
          <div>이벤트존</div>
          <hr style={{ height: "2px" }} />
          <div>추천수업존</div>
          <hr style={{ height: "2px" }} />
          <div>
            <KakaoMap />
          </div>
          <div>카카오맵존</div>
          <hr style={{ height: "2px" }} />
        </FormDiv>
      </ContainerDiv>
    </>
  );
};

export default HomePage;
