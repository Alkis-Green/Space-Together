import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import Carousel from "../components/Carousel/Carousel";
import Title from "../components/TitleBefore/Title";
import Hero from "../components/Hero/Hero";
import SecondHero from "../components/SecondHero/SecondHero";
import Explain from "../components/ExplainSite/Explain";
import Footer from "../components/Footer/Footer";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Hero />
      <Explain />
      {/*
        Blur Parallax
       <Parallax
        blur={{ min: -8, max: 10 }}
        bgImage="/img/Milky Way under clouds.jpeg"
        bgImageAlt="moon"
        strength={100}
      >
      </Parallax> */}

      {/* 
      Reverse Parallax
      <Parallax bgImage={image2} strength={-100}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>Reverse direction</div>
      </div>
    </Parallax> */}
      <SecondHero />
      <Title />

      <Parallax
        blur={0}
        bgImage="/img/Half moon at Nelson.jpeg"
        bgImageAlt="moon"
        strength={400}
      >
        <div className={classes.ContainerBig}>
          <div className={classes.container}>
            <div className={classes.apod}>
              <Link className={classes.apodLink} to="/apod">
                Picture of the day.
              </Link>
            </div>
            <div className={classes.asteroids}>
              <Link className={classes.asteroidsLink} to="/asteroids">
                Asteroids
              </Link>
            </div>
            <div className={classes.gallery}>
              <Link className={classes.galleryLink} to="/gallery">
                Gallery
              </Link>
            </div>
            <div className={classes.eonet}>
              <Link className={classes.eonetLink} to="/eonet">
                Natural Events Tracker
              </Link>
            </div>
            <div className={classes.rover}>
              <Link className={classes.roverLink} to="/rover">
                Rover Photos
              </Link>
            </div>
          </div>
        </div>
      </Parallax>
      <Footer />
    </>
  );
};

export default Home;
