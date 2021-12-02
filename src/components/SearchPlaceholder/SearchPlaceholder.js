import React from "react";
import classes from "./SearchPlaceholder.module.css";

const SearchPlaceholder = () => {
  return (
    <div className={classes.SearchResultContainer}>
      <div className={classes.SearchResultInfo}>
        <h2 className={classes.SearchPlaceHolder}>
          Results will appear bellow...
        </h2>
      </div>
    </div>
  );
};

export default SearchPlaceholder;
