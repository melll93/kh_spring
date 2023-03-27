export const SET_MSG = "USER_AUTH/SET_MSG";
export const SET_FALSE = "USER_AUTH/SET_FALSE";

// action을 dispatch를 통해 전달할 때 호출되는 함수
// 이것이 reducer에 전달되면 switch 문에서 변화
export const setToastMsg = (msg) => {
  return {
    type: SET_MSG,
    msg: msg,
    bool: true,
  };
};

export const setToastFalse = (msg) => {
  return {
    type: SET_FALSE,
    msg: "",
    bool: false,
  };
};
