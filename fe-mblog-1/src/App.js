import "./App.css";
import MemberPage from "./components/page/MemberPage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/kakao/LoginPage";
import KakaoRedirectHandler from "./components/kakao/KakaoRedirectHandler";
import Profile from "./components/page/Profile";

function App({ imageUploader }) {
  return (
    <Routes>
      <Route path="/" exact={true} element={<LoginPage />} />
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
