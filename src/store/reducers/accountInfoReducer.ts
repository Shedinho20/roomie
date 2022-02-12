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
      return { ...state, loading: false };
    case ActionTypes.SAVINGACCT:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default accountReducer;
