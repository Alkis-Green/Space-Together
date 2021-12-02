import React, { useRef } from "react";
import classes from "./Modal.module.css";

/* Use useRef to add class only if description is true */

const Modal = ({ setShowModal, hdurl, description }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      <div className={classes.Background} ref={modalRef} onClick={closeModal}>
        <div className={classes.scrollableContainer}>
          <div className={classes.ModalWrapper}>
            <img className={classes.ModalImage} src={hdurl} alt="" />
            {description ? (
              <div className={classes.DescriptionContainer}>
                <p className={classes.Description}>{description}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
