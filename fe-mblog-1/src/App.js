import "./App.css";
import MemberPage from "./components/page/MemberPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/member" exact={true} element={<MemberPage />} />
    </Routes>
  );
}

export default App;
