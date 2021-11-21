import { ActionTypes, Theme } from "../types";

interface Istate {
  theme: string | null;
  navMobile: boolean;
  focus: boolean;
}
const initialstate: Istate = {
  theme: "",
  navMobile: false,
  focus: false,
};

const themeReducer = (state = initialstate, action: Theme) => {
  switch (action.type) {
    case ActionTypes.THEME:
      return { ...state, theme: action.payload };
    case ActionTypes.TOGGLETHEME:
      return { ...state, theme: action.payload };
    case ActionTypes.NAVMOIBILE:
      return { ...state, navMobile: !state.navMobile };
    case ActionTypes.SEARCHFOCUS:
      return { ...state, focus: !state.focus };
    default:
      return state;
  }
};

export default themeReducer;
