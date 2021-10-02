import { ActionTypes, Theme } from "../types";

interface Istate {
  theme: string | null;
  navMobile: boolean;
}
const initialstate: Istate = {
  theme: "",
  navMobile: false,
};

const themeReducer = (state = initialstate, action: Theme) => {
  switch (action.type) {
    case ActionTypes.THEME:
      return { ...state, theme: action.payload };
    case ActionTypes.TOGGLETHEME:
      return { ...state, theme: action.payload };
    case ActionTypes.NAVMOIBILE:
      return { ...state, navMobile: !state.navMobile };
    default:
      return state;
  }
};

export default themeReducer;
