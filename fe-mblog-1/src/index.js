import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ImageUploader from "./service/imageUploader";

const root = ReactDOM.createRoot(document.getElementById("root"));
const imageUploader = new ImageUploader();
root.render(
  <>
    <BrowserRouter>
      <App imageUploader={imageUploader} />
    </BrowserRouter>
  </>
);
