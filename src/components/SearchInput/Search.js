import React, { useState } from "react";
import classes from "./Search.module.css";

const Search = ({ query, setQuery, description, setDescription, data }) => {
  const HandleTextInput = (e) => {
    setQuery(e.target.value);
    setDescription(e.target.value);
  };

  return (
    <div className={classes.InputContainer}>
      <span className={classes.Search}>Search Here: </span>
      <input
        className={classes.Input}
        onChange={HandleTextInput}
        type="text"
        value={query}
        description={description}
      />
      <button className={classes.Btn} onClick={data} type="submit">
        Go
      </button>
    </div>
  );
};

export default Search;
