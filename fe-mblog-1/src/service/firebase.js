import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMz4xkxzUAxjVMTEnwaXloySPpAhUEwRs",
  authDomain: "kh-221128-8754d.firebaseapp.com",
  projectId: "kh-221128-8754d",
  storageBucket: "kh-221128-8754d.appspot.com",
  messagingSenderId: "47611448403",
  appId: "1:47611448403:web:0d461be5e15aa98051caa6",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
