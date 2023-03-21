import MemberPage from "./components/page/MemberPage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/kakao/LoginPage";
import KakaoRedirectHandler from "./components/kakao/KakaoRedirectHandler";
import Profile from "./components/page/Profile";
import HomePage from "./components/page/HomePage";
import DeptPage from "./components/page/DeptPage";

function App({ imageUploader }) {
  return (
    <Routes>
      <Route path="/" exact={true} element={<LoginPage />} />
      <Route path="/home" exact={true} element={<HomePage />} />
      <Route path="/dept" exact={true} element={<DeptPage />} />
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
  );
}

export default App;
