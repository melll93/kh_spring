//상태는 createStore() 안에 있다.
const createStore = () => {
  let state; //상태를 담아두는 저장소
  let handlers = [];

  //상태를 바꾸는 일을 함 - send함수가
  const send = () => {
    console.log("send호출");
    //새로운 객체가 만들어 진다.
    state = worker(state);
  };

  const subscribe = (handlerFunc) => {};

  const getState = () => {
    return state;
  };
  //함수 안에서 함수를 리턴하도록 처리를 해야 바깥쪽에서 해당함수를 요청할 수 있다.
  return {
    send, //함수==객체  파라미터로 들어온 상태를 받아서 가공해서 새로운 객체로 내보냄
    getState, //함수 - 상태정보를 담은 state 를 반환해줌
  };
};

const worker = (state = { count: 0 }) => {
  return { ...state, count: state.count + 1 };
};

const store = createStore(worker);

store.send();
store.send();

/*
함수는 객체다.
소문자로 선언하면 함수이고, 
대문자로 선언하면 화면을 렌더링하는 컴포넌트이다. 
return 에서는 상태값을 직접 넘겨주지 않는다. 
상태는 createStore 함수에 있지만, 
변경하거나 읽거나 하는 코드들은 UI의 Component들이다. 
이 컴포넌트들은 createStore의 함수바깥쪽에 위치한다. 
1. UI한테는 직접적인 상태를 주지 않는다. 


문제제기
컴포넌트(HomePage.jsx, LoginPage.jsx)가 여러개 있는 상황에서 어떤 컴포넌트가
데이터가 변경되었는지 어떻게 알고서 getState함수를 호출할까?
구독발행모델 - Pub and Subscribe
*/
