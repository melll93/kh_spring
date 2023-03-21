//상태는 createStore() 안에 있다.
const createStore = () => {
  let state; //상태를 담아두는 저장소
  //함수를 담아두는 배열 선언
  let handlers = [];
  //상태를 바꾸는 일을 함 - send함수가
  const send = (action) => {
    console.log("send호출");
    //새로운 객체가 만들어 진다.
    state = worker(state, action);
    handlers.forEach((handler) => handler());
  };

  const subscribe = (handler) => {
    handlers.push(handler);
  };

  const getState = () => {
    return state;
  };
  //함수 안에서 함수를 리턴하도록 처리를 해야 바깥쪽에서 해당함수를 요청할 수 있다.
  return {
    send, //함수==객체  파라미터로 들어온 상태를 받아서 가공해서 새로운 객체로 내보냄
    getState, //함수 - 상태정보를 담은 state 를 반환해줌
    subscribe,
  };
};

const worker = (state = { count: 0 }, action) => {
  //state가 undefined 되는 것 방지 위해 count 선언
  //무엇을 해야 하나요?
  //상태를 바꾸면 createStore안에 state의 참조 무결성이 깨짐.
  //리덕스에서는 상태를 바꾸는 함수는 반드시 새로운 상태를 반환하라.
  //새로운 상태라는 입력(Action)으로 상태의 객체를 줄테니 이 객체를 Deep copy해서
  //기존의 참조를 끊어라. - 그래야 side effect를 방지 가능함.
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + 1 };
    case "decrease":
      return { ...state, count: state.count - 1 };
    default:
      return { ...state };
  }
  return { ...state, count: state.count + 1 }; //Deep Copy
};
//자바 스크립트에서는 함수도 파라미터로 넘길 수 있다.
const store = createStore(worker);
//subscribe함수 호출 시 파라미터로 콜백함수를 넘김
store.subscribe(function () {
  console.log(store.getState());
});

//action의 내용은 send에서 만듦
store.send({ type: "increase" });
store.send({ type: "increase" });
store.send({ type: "decrease" });

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
