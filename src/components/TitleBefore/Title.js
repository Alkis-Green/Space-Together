import React from "react";
import classes from "./Title.module.css";

const Title = () => {
  return (
    <div>
      <h2 className={classes.TitleBefore}>
        You are at the right place. Find out all about cool astronomy stuff!
        Make sure to explore everything we've put together here for you and
        explore all the different categories.
      </h2>
    </div>
  );
};

export default Title;
