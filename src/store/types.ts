export enum ActionTypes {
  //theme
  THEME = "THEME",
  TOGGLETHEME = "TOGGLETHEME",
  LOADING = "LOADING",

  //auth
  LOGIN_FAIL = "LOGIN_FAIL",
  LOGIN_SUCESS = "LOGIN_SUCESS",
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

//Auth types
interface LOGIN_SUCESS {
  type: typeof ActionTypes.LOGIN_SUCESS;
  payload?: string | null;
}
interface LOGIN_FAIL {
  type: typeof ActionTypes.LOGIN_FAIL;
  payload?: string | null;
}

export type Auth = LOGIN_SUCESS | LOGIN_FAIL | LOADING;
export type Theme = THEME | TOGGLETHEME | LOADING;
export type Action = Theme | Auth;
