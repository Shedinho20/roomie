import { ActionTypes, Theme } from "../types";

interface Istate {
  theme: string | null;
}
const initialstate: Istate = {
  theme: "",
};

const themeReducer = (state = initialstate, action: Theme) => {
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
