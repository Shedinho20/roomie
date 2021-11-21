import "./search.scss";
import BedIcon from "@mui/icons-material/Bed";
import { ChangeEvent, InputHTMLAttributes, useEffect, useRef, useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import { useDispatch, useSelector } from "react-redux";
import { Istate } from "../../../store";

import { Datepicker } from "../../molecules/DatePicker";

interface State {
  locationFocus: boolean;
  calenderCheckin: boolean;
  calenderCheckOut: boolean;
  adultInfo: boolean;
  location: string;
  checkIn: Date | null;
  checkOut: Date | null;
  adults: number;
  room: number;
}

export const Search = () => {
  const dispatch = useDispatch();
  const RefDet = useRef<HTMLHeadingElement>(null);
  const searchBoxRef = useRef<any>(null);
  const [state, setstate] = useState<State>({
    locationFocus: false,
    calenderCheckin: false,
    calenderCheckOut: false,
    adultInfo: false,
    location: "",
    checkIn: null,
    checkOut: null,
    adults: 2,
    room: 1,
  });
  const { theme } = useSelector((state: Istate) => state);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handlefocus = (e: ChangeEvent<HTMLInputElement>) => {
    setstate({
      ...state,
      locationFocus: true,
      calenderCheckin: false,
      calenderCheckOut: false,
    });
  };
  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setstate({
      ...state,
      locationFocus: false,
    });
  };

  const handleClickOutside = (e: any) => {
    if (e.target.className === "searchLocation" && state.adultInfo !== true) return;
    if (e.target.className === "infoSection infoSectionOpen") return;
    if (e.target.className === "MuiDialog-container MuiDialog-scrollPaper css-hz1bth-MuiDialog-container") {
      setstate({
        ...state,
        calenderCheckin: false,
        calenderCheckOut: false,
      });
    }
    if (e.target.className === "infoSection") return;
    if (state.calenderCheckin) return;

    if (null !== RefDet.current) {
      if (!RefDet.current.contains(e.target)) {
        setstate({
          ...state,
          calenderCheckin: false,
          adultInfo: false,
          locationFocus: false,
        });
      }
    }
  };

  const handleClickinside = (e: any) => {
    setstate({
      ...state,
      calenderCheckin: false,
      calenderCheckOut: false,
      locationFocus: false,
      adultInfo: !state.adultInfo,
    });
  };

  const handleClickin = () => {
    setstate({
      ...state,
      checkOut: null,
      calenderCheckin: !state.calenderCheckin,
      calenderCheckOut: false,
    });
  };
  const handleClickout = () => {
    setstate({
      ...state,
      calenderCheckOut: !state.calenderCheckOut,
      calenderCheckin: false,
    });
  };

  const onChange = (newValue: any) => {
    setstate({
      ...state,
      checkIn: newValue,
      calenderCheckOut: false,
      checkOut: null,
      calenderCheckin: false,
    });
  };
  const onChangeout = (newValue: any) => {
    setstate({
      ...state,
      checkOut: newValue,
      calenderCheckin: false,
      calenderCheckOut: !state.calenderCheckOut,
    });
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  useEffect(() => {
    setstate({
      ...state,
      calenderCheckOut: false,
      calenderCheckin: false,
    });
  }, [theme.navMobile]);

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
          onBlur={handleBlur}
          ref={searchBoxRef}
        />
        <div className={`${!state.locationFocus ? "suggestedLoc" : "suggestedLoc suggestedLocOpen"}`}></div>
      </div>
      <div>
        <Datepicker
          calender={state.calenderCheckin}
          check={state.checkIn}
          onChange={onChange}
          handleCheck={handleClickin}
          checkout={false}
        />
      </div>
      <div>
        <Datepicker
          calender={state.calenderCheckOut}
          check={state.checkOut}
          onChange={onChangeout}
          handleCheck={handleClickout}
          checkout={true}
        />
      </div>
      <div className="roomDetials">
        <div className="roomDetialsinner">
          <div className="adults">
            <PersonOutlineIcon />
            <h4>{state.adults} adult</h4>
          </div>
          <div className="rooms">
            <HouseSidingIcon />
            <h4>{state.room} room</h4>
          </div>
        </div>
        <div className="clickedDetails" ref={RefDet} onClick={handleClickinside}></div>
        <div className={`${!state.adultInfo ? "infoSection" : "infoSection infoSectionOpen"}`}></div>
      </div>
    </div>
  );
};
