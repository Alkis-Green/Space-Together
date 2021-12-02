import React from "react";
import classes from "./VideoLayout.module.css";

const VideoLayout = ({ url }) => {
  return (
    <>
      <div className={classes.VideoContainer}>
        <iframe
          className={classes.VideoOfTheDay}
          src={url}
          frameborder="0"
          allow="fullscreen"
        ></iframe>
      </div>
    </>
  );
};

export default VideoLayout;
