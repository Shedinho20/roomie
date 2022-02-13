import React from "react";
import "./SearchLocation.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
export const SearchLocation = () => {
  return (
    <div className="searchlocation">
      <LocationOnIcon className="icon" />
      <div className="searchlocationdetails">
        <h3>Lagos</h3>
        <p>Lagos, Lagos state, Nigeria</p>
      </div>
    </div>
  );
};
