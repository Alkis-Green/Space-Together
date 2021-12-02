import React from "react";
import { Link } from "react-router-dom";
import classes from "./RoverHome.module.css";

const RoverHome = () => {
  return (
    <div className={classes.FlexContainer}>
      <div className={classes.Col}>
        <div className={classes.Box}>
          <Link to="/curiosity">
            <div className={classes.TitleBox}>
              <h2 className={classes.Title_1}>Curiosity</h2>
            </div>
            <img
              className={classes.Curiosity}
              src={"/img/Curiosity.jpeg"}
              alt="Rover Curiosity Image"
            />
          </Link>
        </div>
        <div className={classes.Box}>
          <Link to="/opportunity">
            <h2 className={classes.Title_2}>Opportunity</h2>
            <img
              className={classes.Opportunity}
              src={"/img/Opportunity.jpeg"}
              alt="Rover Opportunity Image"
            />
          </Link>
        </div>
        <div className={classes.Box}>
          <Link to="/spirit">
            <h2 className={classes.Title_3}>Spirit</h2>
            <img
              className={classes.Spirit}
              src={"/img/spirit.jpeg"}
              alt="Rover Spirit Image"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoverHome;
