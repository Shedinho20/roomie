import "./Navbar.scss";
import logo from "../../../images/Logo.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import { Search } from "../../Atoms";
import { ChangeEvent, useState } from "react";
import { Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
export const Navbar = () => {
  const [state, setstate] = useState({
    searchDetails: "",
    errr: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
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
      <div className="userDetails">
        <div className="userIcons">
          <NotificationsNoneIcon id="notification" />
          <FavoriteBorderIcon id="like" />
        </div>
        <div className="divider"></div>
        <Avatar alt="User Name" src="/static/images/avatar/1.jpg" />
      </div>
      <MenuIcon className="menuIcon" fontSize="large" />
    </div>
  );
};
