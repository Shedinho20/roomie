import "./search.scss";
import BedIcon from "@mui/icons-material/Bed";
import { ChangeEvent, InputHTMLAttributes, useEffect, useRef, useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useSelector } from "react-redux";
import { Istate } from "../../../store";
export const Search = () => {
  const Ref = useRef<HTMLHeadingElement>(null);
  const RefDet = useRef<HTMLHeadingElement>(null);
  const searchBoxRef = useRef<any>(null);
  const [state, setstate] = useState({
    locationFocus: false,
    calender: false,
    adultInfo: false,
    location: "jjj",
    checkIn: "",
    checkOut: "",
    adults: 1,
    room: 1,
  });
  const { theme } = useSelector((state: Istate) => state);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handlefocus = (e: any) => {
    setstate({
      ...state,
      locationFocus: !state.locationFocus,
    });
  };

  const handleClickOutside = (e: any) => {
    if (null !== Ref.current && null !== RefDet.current) {
      if (!Ref.current.contains(e.target) && !RefDet.current.contains(e.target)) {
        setstate({
          ...state,
          calender: false,
          adultInfo: false,
        });
      }
    }
  };

  const handleClickinside = (e: any) => {
    console.log(e.target);
    if (e.target.className === "calender") {
      setstate({
        ...state,
        calender: !state.calender,
        adultInfo: false,
      });
    } else if (e.target.className === "clickedDetails") {
      setstate({
        ...state,
        calender: false,
        adultInfo: !state.adultInfo,
      });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
  useEffect(() => {
    searchBoxRef.current.focus();
  }, [theme.focus]);
  return (
    <div className="homesearch">
      <div className="searchBox">
        <BedIcon className="bed" />
        <input
          placeholder="Where are you going?"
          type="text"
          onChange={handleChange}
          name="location"
          value={state.location}
          className="searchLocation"
          onFocus={handlefocus}
          onBlur={handlefocus}
          ref={searchBoxRef}
        />
        {state.locationFocus && <div className="suggestedLoc"></div>}
      </div>
      <div className="calender" ref={Ref} onClick={handleClickinside}>
        {state.calender && <div className="calenderSection"></div>}
      </div>
      <div className="roomDetials">
        <div className="roomDetialsinner">
          <div className="adults">
            <PersonOutlineIcon />
            <h4>{state.adults} adult</h4>
          </div>
          <h4>{state.room} room</h4>
        </div>
        <div className="clickedDetails" ref={RefDet} onClick={handleClickinside}></div>
        {state.adultInfo && <div className="infoSection"></div>}
      </div>
    </div>
  );
};
