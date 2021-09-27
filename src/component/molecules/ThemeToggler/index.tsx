import { useDispatch, useSelector } from "react-redux";
import { actionCreators, Istate } from "../../../store";
import LightModeIcon from "@mui/icons-material/LightMode";
import Brightness3OutlinedIcon from "@mui/icons-material/Brightness3Outlined";
import "./ThemeToggler.scss";
import { bindActionCreators } from "redux";

export const ThemeToggler = () => {
  const dispatch = useDispatch();
  const { toggleTheme } = bindActionCreators(actionCreators, dispatch);

  const { theme } = useSelector((state: Istate) => state);
  return (
    <div className="ThemeToggler" onClick={toggleTheme}>
      {theme.theme === "dark" ? (
        <LightModeIcon className="lightSwitch" />
      ) : (
        <Brightness3OutlinedIcon className="darkSwitch" />
      )}
    </div>
  );
};
