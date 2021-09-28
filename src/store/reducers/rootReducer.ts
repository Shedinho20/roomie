import { combineReducers } from "redux";
import authReducer from "./authreducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
});

export default rootReducer;

export type Istate = ReturnType<typeof rootReducer>;
