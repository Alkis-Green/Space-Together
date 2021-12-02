import React from "react";
import { Icon } from "@iconify/react";
import classes from "./Storm.module.css";

const Storm = ({ lat, lng, onClick }) => {
  return (
    <>
      <div className={classes.LocationMarker} onClick={onClick}>
        <Icon
          icon="carbon:thunderstorm-severe"
          className={classes.LocationIcon}
        />
      </div>
    </>
  );
};

export default Storm;
