import { ActionTypes, Action } from "../types";
import { Dispatch } from "redux";
import { Istate } from "..";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "../../services/firebase";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import moment from "moment";

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
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionTypes.LOADING });
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      // const userInfo = await getDoc(doc(db, `users/${user.uid}`));

      dispatch({
        type: ActionTypes.LOGIN_SUCESS,
        payload: "userInfo",
      });
    } catch (error: any) {
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

export const Register = (formData: Record<string, string>) => {
  const { password, email } = formData;

  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionTypes.LOADING });
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, `users/${user.uid}`), {
        id: user.uid,
        email,
        created: serverTimestamp(),
      });
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("User already exist");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      dispatch({ type: ActionTypes.LOADING });
    }
  };
};

export const isAuthed = () => {
  return (dispatch: Dispatch<Action>) => {
    onAuthStateChanged(auth, (user) => {
      const dateToCheck = moment(user?.metadata.lastSignInTime).add(20, "minutes");

      if (moment().isAfter(dateToCheck)) {
        signOut(auth);
      }

      if (user && !moment().isAfter(dateToCheck)) {
        dispatch({
          type: ActionTypes.LOGIN_SUCESS,
        });
      }
      dispatch({ type: ActionTypes.ISAUTH });
    });
  };
};
