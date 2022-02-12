import "./Navbar.scss";
import logo from "../../../images/Logo.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Search } from "../../Atoms";
import { ChangeEvent, useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector, useDispatch } from "react-redux";
import { Istate } from "../../../store";
import { ActionTypes } from "../../../store/types";
import { useLocation, useNavigate } from "react-router-dom";
export const Navbar = () => {
  const [itsHome, setitsHome] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setstate] = useState({
    searchDetails: "",
    errr: "",
  });
  const location = useLocation();

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

  useEffect(() => {
    location.pathname.length === 1 ? setitsHome(true) : setitsHome(false);
  }, [location]);

  return (
    <div className="Navbar">
      <div className="navbarMain">
        <div className="logo">
          <img src={logo} alt="roomie" id="logo" onClick={() => navigate("/")} />
          <h3>
            Room<span>ie</span>
          </h3>
        </div>
      </div>
      {itsHome && (
        <div className="serchFieldContainer">
          <div className="searchField">
            <SearchIcon id="search" />
            <Search type="text" placeholder="Search" name="search" handleChange={handleChange} />
          </div>
        </div>
      )}
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
          <Button width="100px" bckColor="#2b67f6" border="#2b67f6" onClick={() => navigate("/auth/login")}>
            Sign in
          </Button>
          <Button
            width="150px"
            bckColor="transparent"
            border="#2b67f6"
            onClick={() => navigate("/auth/register")}
            extraStyles={{ marginLeft: "20px" }}
          >
            Open an Account
          </Button>
        </div>
      )}
      <MenuIcon className="menuIcon" fontSize="large" onClick={handleClick} />
    </div>
  );
};
