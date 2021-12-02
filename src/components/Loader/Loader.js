import React from "react";
import classes from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={classes.LoaderContainer}>
      <div className={classes.planet}></div>
    </div>
  );
};

export default Loader;
