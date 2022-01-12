import { ActionTypes, Auth } from "../types";

interface Istate {
  login: boolean;
  loading: boolean;
  isAuth: boolean;
}
const initialstate: Istate = {
  login: false,
  loading: false,
  isAuth: false,
};

const authReducer = (state = initialstate, action: Auth) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCESS:
      console.log(11);
      return { ...state, login: true };
    case ActionTypes.LOGIN_FAIL:
      return { ...state, login: false };
    case ActionTypes.LOADING:
      return { ...state, loading: !state.loading };
    case ActionTypes.ISAUTH:
      return { ...state, isAuth: true };
    default:
      return state;
  }
};

export default authReducer;
