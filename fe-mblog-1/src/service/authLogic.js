import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
//import firebase from 'firebase';

class AuthLogic {
  // 생성자 정의 - 자바와는 다르게 선언없이 초기화 가능
  // firebaseAuth, googleProvider : 전역 변수명
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
  }

  // 로그인 시도 시, 구글 인증인지 / 깃허브 인증인지 문자열로 넘겨받음.
  // getProvider switch...case 처리 (Google, Github)
  login(providerName) {
    console.log("providerName : " + providerName);

    // 파라미터로 넘겨 받은 문자열을 비교하여 getProvider로부터 제공자(Google or Github)의 객체를 주입받는다.
    const authProvider = this.getProvider(providerName);

    // 제공자(Google or Github)의 정보이면 팝업을 띄워서 로그인을 진행하도록 함
    return signInWithPopup(this.firebaseAuth, authProvider);
  }

  logout() {
    this.firebaseAuth.signOut();
  }

  // 사용자가 변경되는지 StateChanged로 지속적으로 체크하여 변경될 때마다 호출됨.
  onAuthChange(onUserChanged) {
    // 사용자가 바뀌었을 때 콜백함수를 받아서
    this.firebaseAuth.onAuthStateChanged((user) => {
      //사용자가 바뀔 때마다
      onUserChanged(user);
    });
  }

  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return this.googleProvider;
      case "Github":
        return this.githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthLogic;
