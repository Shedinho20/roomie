import { ActionTypes, Action } from "../types";

interface Istate {
  theme: string | undefined;
}
const initialstate: Istate = {
  theme: "",
};

const themeReducer = (state = initialstate, action: Action) => {
  switch (action.type) {
    case ActionTypes.THEME:
      return { ...state, theme: action.payload };
    case ActionTypes.TOGGLETHEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export default themeReducer;
