import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FS_APIKEY,
//   authDomain: process.env.REACT_APP_FS_AUTHDOMAIN,
//   databaseURL: process.env.REACT_APP_FS_DATABASEURL,
//   projectId: process.env.REACT_APP_FS_PROJECTID,
//   storageBucket: process.env.REACT_APP_FS_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_FS_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_FS_APPID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBMz4xkxzUAxjVMTEnwaXloySPpAhUEwRs",
  authDomain: "kh-221128-8754d.firebaseapp.com",
  databaseURL:
    "https://kh-221128-8754d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kh-221128-8754d",
  storageBucket: "kh-221128-8754d.appspot.com",
  messagingSenderId: "47611448403",
  appId: "1:47611448403:web:0d461be5e15aa98051caa6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
