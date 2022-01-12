import { DocumentData, DocumentSnapshot } from "firebase/firestore";

export enum ActionTypes {
  //theme
  THEME = "THEME",
  TOGGLETHEME = "TOGGLETHEME",
  LOADING = "LOADING",
  NAVMOIBILE = "NAVMOBILE",
  SEARCHFOCUS = "SEARCHFOCUS",
  //auth
  LOGIN_FAIL = "LOGIN_FAIL",
  LOGIN_SUCESS = "LOGIN_SUCESS",
  ISAUTH = "ISAUTH",
}

//Theme types
interface THEME {
  type: typeof ActionTypes.THEME;
  payload: string | null;
}
interface TOGGLETHEME {
  type: typeof ActionTypes.TOGGLETHEME;
  payload: string;
}
interface LOADING {
  type: typeof ActionTypes.LOADING;
}
interface NAVMOIBILE {
  type: typeof ActionTypes.NAVMOIBILE;
}
interface SEARCHFOCUS {
  type: typeof ActionTypes.SEARCHFOCUS;
}

//Auth types
interface LOGIN_SUCESS {
  type: typeof ActionTypes.LOGIN_SUCESS;
  payload?: string | DocumentSnapshot<DocumentData>;
}
interface LOGIN_FAIL {
  type: typeof ActionTypes.LOGIN_FAIL;
  payload: string | DocumentSnapshot<DocumentData>;
}
interface ISAUTH {
  type: typeof ActionTypes.ISAUTH;
  payload?: string | DocumentSnapshot<DocumentData>;
}

export type Auth = LOGIN_SUCESS | LOGIN_FAIL | LOADING | ISAUTH;
export type Theme = THEME | TOGGLETHEME | LOADING | NAVMOIBILE | SEARCHFOCUS;
export type Action = Theme | Auth;
