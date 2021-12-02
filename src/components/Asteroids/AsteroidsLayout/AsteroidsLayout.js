import React from "react";
import classes from "./AsteroidsLayout.module.css";

const AsteroidsLayout = ({
  name,
  orbitalData,
  magnitude,
  diameter,
  closeApproach,
  speed,
  danger,
}) => {
  return (
    <>
      <div className={classes.Container}>
        <div className={classes.Wrapper}>
          <p>{name}</p>
          <p>{orbitalData}</p>
          <p>{diameter.toFixed(2)}km</p>
          <p>{Math.round(speed)}km</p>
          <p>{magnitude}</p>
          <p>{danger ? "Yes" : "No"}</p>
          <p>{closeApproach}</p>
        </div>
      </div>

      {/* <div className={classes.CardContainer}>
        <div className={classes.Card}>
          <h4 className={classes.AsteroidNames}>{name}</h4>
          <div className={classes.CardBody}>
            <p>First Observation: {orbitalData}</p>
            <p>Orbit: {orbitClass}</p>
            <p>Magnitude: {magnitude}</p>
            <p>Diameter (Km): {diameter.toFixed(2)}</p>
            <p>km/s: {Math.round(speed)}km</p>
            <p>Potential danger: {danger ? "Yes" : "No"}</p>
            <p>Last observation date: {closeApproach}</p>
          </div>
        </div>
      </div> */}

      {/* <div className={classes.CardContainer}>
        <div className={classes.Card}>
          <h4 className={classes.AsteroidNames}>{name}</h4>
          <div className={classes.CardBody}>
            <p>First Observation: {orbitalData}</p>
            <p>Orbit: {orbitClass}</p>
            <p>Magnitude: {magnitude}</p>
            <p>Diameter (Km): {diameter.toFixed(2)}</p>
            <p>km/s: {Math.round(speed)}km</p>
            <p>Potential danger: {danger ? "Yes" : "No"}</p>
            <p>Last observation date: {closeApproach}</p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default AsteroidsLayout;
