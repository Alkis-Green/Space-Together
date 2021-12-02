import React from "react";
import classes from "./TableStyleHeader.module.css";

const TableStyleHeader = () => {
  return (
    <div className={classes.InfoContainer}>
      <div className={classes.Wrapper}>
        <span>Name</span>
        <span>First Observation</span>
        <span>Diameter (Km) </span>
        <span>km/s</span>
        <span>Magnitude</span>
        <span>Danger</span>
        <span>Last observation</span>
      </div>
    </div>
  );
};

export default TableStyleHeader;
