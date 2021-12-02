import React from "react";
import { Icon } from "@iconify/react";
import classes from "./Iceberg.module.css";

const Iceberg = ({ lat, lng, onClick }) => {
  return (
    <>
      <div className={classes.LocationMarker} onClick={onClick}>
        <Icon icon="openmoji:iceberg" className={classes.Ice} />
      </div>
    </>
  );
};

export default Iceberg;
