import React from "react";
import { Link } from "react-router-dom";

const PageError = () => {
  return (
    <div
      style={{
        height: "calc(100vh - 100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>Opps something went wrong</h1>
      </div>
      <div>
        <span>Go Back </span>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default PageError;
