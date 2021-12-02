import React from "react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";
import classes from "./Locations.module.css";

const Locations = ({ lat, lng, onClick }) => {
  return (
    <>
      <div className={classes.LocationMarker} onClick={onClick}>
        <Icon icon={locationIcon} className={classes.LocationIconFire} />
      </div>
    </>
  );
};

export default Locations;
