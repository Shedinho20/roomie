import "./search.scss";
import BedIcon from "@mui/icons-material/Bed";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import { Datepicker } from "../../molecules/DatePicker";
import { useSearch } from "./useSearch";
import { Button, Container } from "../../Atoms";

export const Search = () => {
  const {
    handleClickout,
    onChange,
    onChangeout,
    handleBlur,
    RefDet,
    searchBoxRef,
    state,
    handleChange,
    handlefocus,
    handleClickinside,
    handleClickin,
    handleClickAwayIn,
    handleClickAwayOut,
  } = useSearch();

  return (
    <div className="containerSearch">
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
        <div className="checkIn">
          <Datepicker
            calender={state.calenderCheckin}
            check={state.checkIn}
            onChange={onChange}
            handleCheck={handleClickin}
            handleClickAway={handleClickAwayIn}
            checkout={false}
            minDate={new Date()}
          />
        </div>
        <div className="checkOut">
          <Datepicker
            calender={state.calenderCheckOut}
            check={state.checkOut}
            onChange={onChangeout}
            handleCheck={handleClickout}
            checkout={true}
            minDate={state.checkIn ? new Date(new Date(state.checkIn).getTime() + 86400000) : new Date()}
            handleClickAway={handleClickAwayOut}
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
      <Button width="250px" bckColor="#2b67f6" border="#2b67f6" extraStyles={{ margin: "40px 0" }}>
        <h3>Search</h3>
      </Button>
    </div>
  );
};
