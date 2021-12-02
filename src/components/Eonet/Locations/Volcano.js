import React from "react";
import { Icon } from "@iconify/react";
import classes from "./Volcano.module.css";

const Volcano = ({ lat, lng, onClick }) => {
  return (
    <>
      <div className={classes.LocationMarker} onClick={onClick}>
        <Icon icon="noto-v1:volcano" className={classes.LocationIcon} />
      </div>
    </>
  );
};

export default Volcano;
