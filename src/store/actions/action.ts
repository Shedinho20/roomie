import { ActionTypes, Action } from "../types";
import { Dispatch } from "redux";
import { Istate } from "..";

export const setTheme = (mode: string) => {
  return (dispatch: Dispatch<Action>) => {
    localStorage.setItem("Theme", mode);
    dispatch({
      type: ActionTypes.THEME,
      payload: mode,
    });
  };
};

export const toggleTheme = () => {
  return (dispatch: Dispatch<Action>, getstate: () => Istate) => {
    const mode = getstate().theme.theme;
    let newMode;
    mode === "light" ? (newMode = "dark") : (newMode = "light");
    localStorage.setItem("Theme", newMode);

    dispatch({
      type: ActionTypes.TOGGLETHEME,
      payload: newMode,
    });
  };
};
