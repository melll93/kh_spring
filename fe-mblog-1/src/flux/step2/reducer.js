import * as ActionType from "./action-type.js";
import { initializeState } from "./state.js";

// store에서 관리해야 하는 상태값의 종류가 점점 늘어나겠지 - 객체리터럴 - 열거형연산자 - n개 - 초기화
// 상태 관리하는 변수 선언
// 선언된 변수들이 payload에 담김
// 상태를 변형하는 것 - reducer
// 첫번째 파라미터 : 상태 값
// 두번째 파라미터 : action => dispatch를 통해 store에 전달
// action에 담긴 정보를 dispatch가 store에 전달하기 - flux architecture
// One-way 방식
// action => dispatch => store => view
export const reducer = (state = initializeState, action) => {
  //state가 undefined되는 것 방지위해 객체선언
  //무엇을 해야 하나요?
  //상태를 바꾸면 createStore안에 state의 참조 무결성이 깨짐
  //리덕스에서는 상태를 바꾸는 함수는 반드시 새로운 상태를 반환하라
  //새로운 상태라는 입력(Action)으로 상태의 객체를 줄테니 이 객체를 Deep copy해서
  //기존의 참조를 끊어라 - 그래야 side effect방지 가능함
  switch (action.type) {
    case ActionType.INCREASE:
      return { ...state, count: state.count + 2 }; //이렇게 하면 새로운 객체가 만들어짐
    case ActionType.DECREASE:
      return { ...state, count: state.count - 1 };
    case ActionType.RESET:
      return { ...state, count: 0 };
    case ActionType.SET_MSG:
      return { ...state, status: action.bool, msg: action.msg };
    case ActionType.SET_FALSE:
      return { ...state, status: action.bool, msg: action.msg };
    default:
      return { ...state };
  }
};
