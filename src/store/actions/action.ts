import { ActionTypes, Action } from "../types";
import { Dispatch } from "redux";
import { Istate } from "..";

export const setTheme = () => {
  let theme = localStorage.getItem("Theme");

  if (!theme) {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      theme = "light";
    } else {
      theme = "dark";
    }
  }

  return (dispatch: Dispatch<Action>) => {
    localStorage.setItem("Theme", theme ? theme : "");
    dispatch({
      type: ActionTypes.THEME,
      payload: theme,
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
