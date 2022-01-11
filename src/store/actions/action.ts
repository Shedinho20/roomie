import { ActionTypes, Action } from "../types";
import { Dispatch } from "redux";
import { Istate } from "..";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../services/firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

//Theme Actions
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

//Auth Actions

export const Login = (formData: Record<string, string>) => {
  const { password, email } = formData;
  return async (dispatch: Dispatch<Action>, getstate: () => Istate) => {
    dispatch({ type: ActionTypes.LOADING });
    try {
      console.log(email);
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      // const userInfo = await getDoc(doc(db, `users/${user.uid}`));
      dispatch({
        type: ActionTypes.LOGIN_SUCESS,
        payload: "userInfo",
      });
    } catch (error: any) {
      console.log(error.code);
      if (error.code === "auth/user-not-found") {
        toast.error("User not found");
      }
      if (error.code === "auth/network-request-failed") {
        toast.error("Something went wrong");
      }
      dispatch({
        type: ActionTypes.LOGIN_FAIL,
        payload: error.code,
      });
    } finally {
      dispatch({ type: ActionTypes.LOADING });
    }
  };
};
