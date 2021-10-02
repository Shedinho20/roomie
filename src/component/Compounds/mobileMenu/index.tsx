import { useSelector, useDispatch } from "react-redux";
import { Istate } from "../../../store";
import { ActionTypes } from "../../../store/types";
import { Button } from "../../Atoms/";
import "./MobileMenu.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Avatar } from "@mui/material";

export const MobileMenu = () => {
  const dispatch = useDispatch();
  const { theme, auth } = useSelector((state: Istate) => state);
  const { navMobile } = theme;
  console.log(auth.login);
  const handleClick = (e: any) => {
    e.target.className === "mobile-menu openNavmob" && dispatch({ type: ActionTypes.NAVMOIBILE });
  };
  return (
    <div className={`${!navMobile ? "mobile-menu" : "mobile-menu openNavmob"}`} onClick={(e) => handleClick(e)}>
      <div className={`${!navMobile ? "mobNav-container" : "mobNav-container openNavmobIn"}`}>
        {auth.login ? (
          <>
            <Avatar alt="User Name" src="/static/images/avatar/1.jpg" sx={{ width: 80, height: 80 }} />
            <div className="userIcons">
              <NotificationsNoneIcon id="notification" />
              <FavoriteBorderIcon id="like" />
            </div>
          </>
        ) : (
          <>
            <div style={{ marginBottom: "10px" }}>
              <Button width="120px" label="Sign up" bckColor="#27ae60" />
            </div>
            <Button width="120px" label="Sign in" bckColor="#2b67f6" />
          </>
        )}
      </div>
    </div>
  );
};
