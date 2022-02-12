import { combineReducers } from "redux";
import accountReducer from "./accountInfoReducer";
import authReducer from "./authreducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
  account: accountReducer,
});

export default rootReducer;

export type Istate = ReturnType<typeof rootReducer>;
