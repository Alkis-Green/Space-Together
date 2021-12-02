import React from "react";
import classes from "./SecondHero.module.css";

const SecondHero = () => {
  return (
    <>
      <div className={classes.Container}>
        <h1>Cool facts</h1>
      </div>
      <div className={classes.secondHeroContainer}>
        <div className={classes.RightCol}>
          <img src={"/img/factsListPic.jpeg"} alt="sun eclipse" />
        </div>
        <div className={classes.LeftCol}>
          <ul>
            <li>Space is completely silent.</li>
            <li>The hottest planet in our solar system is 450° C.</li>
            <li>A full nasa space suit costs $12,000,000.</li>
            <li>One million earths can fit inside the sun.</li>
            <li>There are more trees on earth than stars in the milky way.</li>
            <li>
              There are more stars in the universe than grains of sands on
              earth.
            </li>
            <li>There is a planet made of diamonds</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SecondHero;
