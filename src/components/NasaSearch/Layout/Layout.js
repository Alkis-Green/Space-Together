import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import classes from "./Layout.module.css";

const Layout = ({ title, description, img }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className={classes.GalleryContainer}>
      <div className={classes.Fade}>
        <div className={classes.Container}>
          <h1>{title}</h1>
          <img
            className={classes.img}
            onClick={openModal}
            src={img}
            alt="images"
          />
          {showModal && (
            <Modal
              description={description}
              hdurl={img}
              setShowModal={setShowModal}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
