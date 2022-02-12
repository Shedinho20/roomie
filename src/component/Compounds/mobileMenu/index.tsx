import { useSelector, useDispatch } from "react-redux";
import { actionCreators, Istate } from "../../../store";
import { ActionTypes } from "../../../store/types";
import { Button } from "../../Atoms/";
import "./MobileMenu.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import defaultAvatar from "../../../images/Avatar.svg";
import { useEffect } from "react";
import { bindActionCreators } from "redux";

export const MobileMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme, auth } = useSelector((state: Istate) => state);
  const { navMobile } = theme;

  const handleClick = (e: any) => {
    e.target.className === "mobile-menu openNavmob" && dispatch({ type: ActionTypes.NAVMOIBILE });
  };

  const { setUserAccountInfo } = bindActionCreators(actionCreators, dispatch);
  const { account } = useSelector((state: Istate) => state);
  const { accountInfo, loading } = account;

  const navigateTo = (route: string) => {
    navigate(route);
    dispatch({ type: ActionTypes.NAVMOIBILE });
  };

  useEffect(() => {
    if (loading) {
      setUserAccountInfo();
    }
  }, [loading]);

  return (
    <div className={`${!navMobile ? "mobile-menu" : "mobile-menu openNavmob"}`} onClick={(e) => handleClick(e)}>
      <div className={`${!navMobile ? "mobNav-container" : "mobNav-container openNavmobIn"}`}>
        {auth.login ? (
          <>
            <Avatar srcSet={defaultAvatar} className="avatar" onClick={() => navigateTo("/account")} />
            <div className="userIcons">{!loading && <p>{accountInfo.username}</p>}</div>
          </>
        ) : (
          <>
            <div style={{ marginBottom: "10px" }}>
              <Button width="120px" bckColor="#27ae60" onClick={() => navigateTo("auth/register")}>
                Sign up
              </Button>
            </div>
            <Button width="120px" bckColor="#2b67f6" onClick={() => navigateTo("auth/login")}>
              Sign in
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
