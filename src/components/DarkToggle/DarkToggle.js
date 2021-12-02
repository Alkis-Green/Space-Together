import React from "react";
import classes from "./DarkToggle.module.css";

const DarkToggle = ({ toggle }) => {
  return (
    <div>
      <label className={classes.label}>
        <p className={classes.labelTextLeft}>Night</p>
        <div className={classes.toggle}>
          <input
            onClick={toggle}
            className={classes.toggleState}
            type="checkbox"
            name="check"
            value="check"
          />
          <div className={classes.toggleInner}>
            <div className={classes.indicator}></div>
          </div>
          <div className={classes.activeBg}></div>
        </div>
        <div className={classes.labelTextRight}>Day</div>
      </label>
    </div>
  );
};

export default DarkToggle;
