import MemberPage from "./components/page/MemberPage";
import { Routes, Route } from "react-router-dom";

import KakaoRedirectHandler from "./components/kakao/KakaoRedirectHandler";
import Profile from "./components/page/Profile";
import HomePage from "./components/page/HomePage";
import DeptPage from "./components/page/DeptPage";
import LoginPage from "./components/auth/LoginPage";
import { toastStatus } from "./redux/toastStatus/state";
import Toast from "./components/Toast";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setToastMsg } from "./redux/toastStatus/action";

function App({ imageUploader }) {
  /* useSelector(꺼낼 때), useDispatch(전달하할 때) */
  const toastStatus = useSelector((store) => store.toastStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setToastMsg("로그인하세요"));
  }, []);

  return (
    <>
      <div style={{ height: "100vh" }}>
        {toastStatus.status && <Toast />}
        <Routes>
          <Route path="/login" exact={true} element={<LoginPage />} />
          <Route path="/" exact={true} element={<HomePage />} />
          <Route
            path="/dept"
            exact={true}
            element={<DeptPage imageUploader={imageUploader} />}
          />
          <Route path="/profile" exact={true} element={<Profile />} />
          <Route
            path="/oauth/kakao/callback"
            exact={true}
            element={<KakaoRedirectHandler />}
          />

          <Route
            path="/member"
            exact={true}
            element={<MemberPage imageUploader={imageUploader} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
