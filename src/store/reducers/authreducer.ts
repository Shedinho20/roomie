import { DocumentSnapshot, DocumentData } from "firebase/firestore";
import { ActionTypes, Auth } from "../types";

interface Istate {
  login: boolean;
  loading: boolean;
  isAuth: boolean;
  uID: string | DocumentSnapshot<DocumentData>;
}
const initialstate: Istate = {
  login: false,
  loading: false,
  isAuth: false,
  uID: "",
};

const authReducer = (state = initialstate, action: Auth) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCESS:
      return { ...state, login: true, uID: action.payload };
    case ActionTypes.LOGIN_FAIL:
      return { ...state, login: false };
    case ActionTypes.LOADING:
      return { ...state, loading: !state.loading };
    case ActionTypes.ISAUTH:
      return { ...state, isAuth: true };
    case ActionTypes.REGISTER_SUCESS:
      return { ...state, isAuth: true };
    case ActionTypes.REGISTER_SUCESS:
      return { ...state, uID: action.payload };
    default:
      return state;
  }
};

export default authReducer;
