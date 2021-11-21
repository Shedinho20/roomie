import "./Navbar.scss";
import logo from "../../../images/Logo.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Search } from "../../Atoms";
import { ChangeEvent, useState } from "react";
import { Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector, useDispatch } from "react-redux";
import { Istate } from "../../../store";
import { ActionTypes } from "../../../store/types";
export const Navbar = () => {
  const dispatch = useDispatch();
  const [state, setstate] = useState({
    searchDetails: "",
    errr: "",
  });

  const { auth } = useSelector((state: Istate) => state);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    dispatch({ type: ActionTypes.NAVMOIBILE });
  };

  return (
    <div className="Navbar">
      <div className="navbarMain">
        <div className="logo">
          <img src={logo} alt="roomie" id="logo" />
          <h3>
            Room<span>ie</span>
          </h3>
        </div>
      </div>
      <div className="searchField">
        <SearchIcon id="search" />
        <Search type="text" placeholder="Search" name="search" handleChange={handleChange} />
      </div>
      {auth.login ? (
        <div className="userDetails">
          <div className="userIcons">
            <NotificationsNoneIcon id="notification" />
            <FavoriteBorderIcon id="like" />
          </div>
          <div className="divider"></div>
          <Avatar alt="User Name" src="/static/images/avatar/1.jpg" />
        </div>
      ) : (
        <div className="navBTN">
          <Button width="150px" label="Open an Account" bckColor="transparent" border="#2b67f6" />
        </div>
      )}
      <MenuIcon className="menuIcon" fontSize="large" onClick={handleClick} />
    </div>
  );
};
