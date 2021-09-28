import { ActionTypes, Auth } from "../types";

interface Istate {
  login: Boolean;
  loading: Boolean;
}
const initialstate: Istate = {
  login: false,
  loading: false,
};

const authReducer = (state = initialstate, action: Auth) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCESS:
      return { ...state, login: true };
    case ActionTypes.LOGIN_FAIL:
      return { ...state, login: false };
    case ActionTypes.LOADING:
      return { ...state, loading: !state.loading };
    default:
      return state;
  }
};

export default authReducer;
