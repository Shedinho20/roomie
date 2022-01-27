import { useSelector, useDispatch } from "react-redux";
import { Istate } from "../../../store";
import { ActionTypes } from "../../../store/types";
import { Button } from "../../Atoms/";
import "./MobileMenu.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const MobileMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme, auth } = useSelector((state: Istate) => state);
  const { navMobile } = theme;
  const handleClick = (e: any) => {
    e.target.className === "mobile-menu openNavmob" && dispatch({ type: ActionTypes.NAVMOIBILE });
  };
  const navigateTo = (route: string) => {
    navigate(route);
    dispatch({ type: ActionTypes.NAVMOIBILE });
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
              <Button width="120px" bckColor="#27ae60" onClick={() => navigateTo("/register")}>
                Sign up
              </Button>
            </div>
            <Button width="120px" bckColor="#2b67f6" onClick={() => navigateTo("/login")}>
              Sign in
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
