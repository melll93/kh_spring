/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ImageUploader from "./service/imageUploader";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import rootReducer from "./redux/rootReducer";
import AuthLogic from "./service/authLogic";
import firebaseApp from "./service/firebase";
import { setAuth } from "./redux/userAuth/action";
const store = legacy_createStore(rootReducer);
const authLogic = new AuthLogic(firebaseApp);
store.dispatch(
  setAuth(authLogic.getUserAuth(), authLogic.getGoogleAuthProvider())
);
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
const imageUploader = new ImageUploader();
root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <App imageUploader={imageUploader} />
      </BrowserRouter>
    </Provider>
  </>
);
