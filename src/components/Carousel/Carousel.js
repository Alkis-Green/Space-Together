import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./Carousel.module.css";

const Carousel = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    className: "center",
    centerPadding: "90px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 0,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} className={classes.Container}>
        <div className={classes.p1}>
          <img
            className={classes.img}
            src={"/img/ Horsehead and Flame nebulas.jpeg"}
            alt="img"
          />
        </div>
        <div className={classes.p1}>
          <img
            className={classes.img}
            src={"/img/ Rosette nebula.jpeg"}
            alt="img"
          />
        </div>
        <div className={classes.p1}>
          <img
            className={classes.img}
            src={"/img/photo-1502134249126-9f3755a50d78.jpeg"}
            alt="img"
          />
        </div>
        <div className={classes.p1}>
          <img
            className={classes.img}
            src={"/img/photo-1504333638930-c8787321eee0.jpeg"}
            alt="img"
          />
        </div>
        <div className={classes.p1}>
          <img
            className={classes.img}
            src={"/img/photo-1598585774711-f7638e3e3520.jpeg"}
            alt="img"
          />
        </div>
        <div className={classes.p1}>
          <img
            className={classes.img}
            src={"/img/M45 or Pleiades Cluster.jpeg"}
            alt="img"
          />
        </div>
        <div className={classes.p1}>
          <img className={classes.img} src={"/img/M31.jpeg"} alt="img" />
        </div>
        <div className={classes.p1}>
          <img
            className={classes.img}
            src={"/img/Milky Way under clouds.jpeg"}
            alt="img"
          />
        </div>
        <div className={classes.p1}>
          <img
            className={classes.img}
            src={"/img/North American Nebula.jpeg"}
            alt="img"
          />
        </div>
        <div className={classes.p1}>
          <img
            className={classes.img}
            src={"/img/Rosette Nebula.jpeg"}
            alt="img"
          />
        </div>
        <div className={classes.p1}>
          <img className={classes.img} src={"/img/Alderan.jpeg"} alt="img" />
        </div>
      </Slider>
    </>
  );
};

export default Carousel;
