import { Account, ActionTypes } from "../types";

interface Istate {
  loading: boolean;
  accountInfo: any;
}
const initialstate: Istate = {
  loading: true,
  accountInfo: {},
};

const accountReducer = (state = initialstate, action: Account) => {
  switch (action.type) {
    case ActionTypes.SETACCOUNT:
      return { ...state, loading: false, accountInfo: action.payload };
    case ActionTypes.SETACCOUNTFAIL:
      return { ...state, login: true, uID: action.payload };
    default:
      return state;
  }
};

export default accountReducer;
