import React from "react";
import { NavLink } from "react-router-dom";
import DarkToggle from "../DarkToggle/DarkToggle";
import classes from "./Navbar.module.css";

const Navbar = ({ toggle }) => {
  return (
    // this should be a link to homepage
    <div className={classes.nav}>
      <NavLink to="/" className={classes.logo}>
        <h1>SpaceTogether</h1>
      </NavLink>
      <DarkToggle toggle={toggle} />
    </div>
  );
};

export default Navbar;
