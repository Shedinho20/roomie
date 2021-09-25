export enum ActionTypes {
  THEME = "THEME",
  TOGGLETHEME = "TOGGLETHEME",
}

interface THEME {
  type: typeof ActionTypes.THEME;
  payload: string;
}
interface TOGGLETHEME {
  type: typeof ActionTypes.TOGGLETHEME;
  payload: string;
}

export type Action = THEME | TOGGLETHEME;
