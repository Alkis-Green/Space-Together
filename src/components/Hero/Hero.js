import React from "react";
import SecondHero from "../SecondHero/SecondHero";
import Carousel from "../Carousel/Carousel";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <div className={classes.HeroContainer}>
        <div className={classes.TitleContainer}>
          <h1 className={classes.HeaderTitle}>Space with us seek no more</h1>
        </div>
        <Carousel />
      </div>
    </>
  );
};

export default Hero;
