import { SET_FALSE, SET_MSG } from "./action";
import { toastStatus } from "./state";

const toastInfo = (state = toastStatus, action) => {
  switch (action.type) {
    case SET_MSG:
      return {
        ...state,
        status: action.bool,
        msg: action.msg,
      };
    case SET_FALSE:
      return {
        ...state,
        status: action.bool,
        msg: action.msg,
      };

    default:
      return { ...state };
  }
};

export default toastInfo;
