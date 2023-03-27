import { SET_AUTH } from "./action";
import { userAuth } from "./state";

const userInfo = (state = userAuth, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        auth: action.auth,
        googleProvider: action.googleProvider,
      };

    default:
      return { ...state };
  }
};

export default userInfo;
