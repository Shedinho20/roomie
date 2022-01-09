import "./search.scss";
import BedIcon from "@mui/icons-material/Bed";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import { Datepicker } from "../../molecules/DatePicker";
import { useSearch } from "./useSearch";

export const Search = () => {
  const {
    handleClickout,
    onChange,
    onChangeout,
    handleBlur,
    handleClickOutside,
    RefDet,
    searchBoxRef,
    state,
    setstate,
    handleChange,
    handlefocus,
    handleClickinside,
    handleClickin,
  } = useSearch();

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
