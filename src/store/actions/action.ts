import { ActionTypes, Action } from "../types";
import { Dispatch } from "redux";
import { Istate } from "..";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../../services/firebase";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import moment from "moment";
import { FirebaseError } from "@firebase/util";

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

export const Login = (formData: Record<string, string>): ((dispatch: Dispatch<Action>) => Promise<void>) => {
  const { password, username } = formData;
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionTypes.LOADING });
    try {
      const userName = await getDoc(doc(db, `usernames/${username.toLowerCase()}`));

      if (!userName.exists()) {
        toast.error("User not found");
        return;
      }

      const { user } = await signInWithEmailAndPassword(auth, userName.data().email, password);
      // const userInfo = await getDoc(doc(db, `users/${user.uid}`));

      dispatch({
        type: ActionTypes.LOGIN_SUCESS,
        payload: user.uid,
      });
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/user-not-found") {
          toast.error("User not found");
        } else if (error.code === "auth/wrong-password") {
          toast.error("Incorrect password");
        } else {
          toast.error("Something went wrong");
        }
        dispatch({
          type: ActionTypes.LOGIN_FAIL,
          payload: error.code,
        });
      }
    } finally {
      dispatch({ type: ActionTypes.LOADING });
    }
  };
};

export const signInWithGoogle = (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
  setLoading(true);
  return async (dispatch: Dispatch<Action>) => {
    try {
      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);
      const userInfo = await getDoc(doc(db, `users/${res.user.uid}`));
      if (!userInfo.exists()) {
        await setDoc(doc(db, `users/${res.user.uid}`), {
          id: res.user.uid,
          email: res.user.email,
          created: serverTimestamp(),
        });
      }
      dispatch({
        type: ActionTypes.LOGIN_SUCESS,
        payload: res.user.uid,
      });
    } catch (error) {
      toast.error("Something went wrong");
      setLoading(false);
    } finally {
    }
  };
};

export const Register = (formData: Record<string, string>) => {
  const { password, email, username } = formData;

  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionTypes.LOADING });
    try {
      const userName = await getDoc(doc(db, `usernames/${username.toLowerCase()}`));

      if (userName.exists()) {
        toast.error("Username  already exist");
        return;
      }

      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, `users/${user.uid}`), {
        uid: user.uid,
        email,
        created: serverTimestamp(),
        username,
      });

      await setDoc(doc(db, `usernames/${username}`), { email });

      dispatch({ type: ActionTypes.REGISTER_SUCESS, payload: user.uid });
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email already exist");
        } else {
          toast.error("Something went wrong");
        }
      }
    } finally {
      dispatch({ type: ActionTypes.LOADING });
    }
  };
};

export const isAuthed = () => {
  return (dispatch: Dispatch<Action>) => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        dispatch({
          type: ActionTypes.LOGIN_FAIL,
        });
        dispatch({ type: ActionTypes.ISAUTH });
        return;
      }

      const dateToCheck = moment(user.metadata.lastSignInTime).add(1, "day");

      if (moment().isAfter(dateToCheck)) {
        signOut(auth);
      } else {
        dispatch({
          type: ActionTypes.LOGIN_SUCESS,
          payload: user.uid,
        });
      }
      dispatch({ type: ActionTypes.ISAUTH });
    });
  };
};

//User Account page  InfoSection

export const setUserAccountInfo = () => {
  return async (dispatch: Dispatch<Action>, getstate: () => Istate) => {
    const id = getstate().auth.uID;
    try {
      const userInfo = (await getDoc(doc(db, `users/${id}`))).data();
      dispatch({
        type: ActionTypes.SETACCOUNT,
        payload: userInfo,
      });
    } catch (error) {}
  };
};
