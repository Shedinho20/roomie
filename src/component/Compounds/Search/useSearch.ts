import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Istate } from "../../../store";

export const useSearch = () => {
  const { theme } = useSelector((state: Istate) => state);

  const RefDet = useRef<HTMLHeadingElement>(null);
  const searchBoxRef = useRef<any>(null);
  const [state, setstate] = useState({
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
    searchBoxRef.current.focus();
  }, [theme.focus]);

  useEffect(() => {
    setstate({
      ...state,
      calenderCheckOut: false,
      calenderCheckin: false,
    });
  }, [theme.navMobile]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return {
    handleClickout,
    onChange,
    onChangeout,
    handleBlur,
    handleClickOutside,
    searchBoxRef,
    RefDet,
    state,
    setstate,
    handleChange,
    handlefocus,
    handleClickinside,
    handleClickin,
  };
};
