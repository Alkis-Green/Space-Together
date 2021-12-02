import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import classes from "./Layout.module.css";
import VideoLayout from "./VideoLayout/VideoLayout";

const Layout = ({
  copyright,
  date,
  explanation,
  hdurl,
  url,
  title,
  type,
  handleModal,
  showModal,
  setShowModal,
}) => {
  return (
    <>
      <h2 className={classes.Title}>{title}</h2>
      <div className={classes.Container}>
        <div className={classes.BodyContainer}>
          <div className={classes.LeftColumn}>
            <div className={classes.TitleContainer}></div>
            <div className={classes.ParagraphContainer}>
              <p>{explanation}</p>
            </div>
          </div>
          <div className={classes.RightColumn}>
            <div className={classes.imageContainer}>
              {type === "image" && (
                <img
                  onClick={handleModal}
                  className={classes.ImageOfTheDay}
                  src={hdurl}
                  alt="pic"
                />
              )}
              {type === "video" && <VideoLayout url={url} />}
              {showModal && (
                <Modal url={url} hdurl={hdurl} setShowModal={setShowModal} />
              )}
            </div>
            <div className={classes.dateTitle}>
              {copyright && (
                <div className={classes.Copyright}>
                  <span>Copyright: </span>
                  <h4> {copyright}</h4>
                </div>
              )}
              <div>
                <span>Date:</span>
                <span>{date}</span>
              </div>
              <span className={classes.spanInfo}>*(Click on Image)</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
