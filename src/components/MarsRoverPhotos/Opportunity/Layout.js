import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import classes from "./Layout.module.css";

const Layout = ({ data, photo }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  const openModal = (img) => {
    setSelectedImg(img);
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <div className={`${classes.PageContainer} ${classes.Fade}`}>
        <div className={classes.camerasContainer}>
          <br />

          <div className={classes.FhazCam}>
            <div className={classes.FhazCamHeader}>
              <h2>FHAZ CAM</h2>
              <span>* Front Hazard Avoidance Camera</span>
            </div>
            {photo.fhaz.length > 0 ? (
              <div className={classes.arrowFlex}>
                <div className={classes.arrowLeft}></div>
                <div className={classes.fhazContainer}>
                  {photo.fhaz.map((img) => {
                    return (
                      <>
                        <img
                          onClick={() => openModal(img.img_src)}
                          src={img.img_src}
                          className={classes.img}
                        />
                      </>
                    );
                  })}
                </div>
                <div className={classes.arrowRight}></div>
              </div>
            ) : (
              <h2 className={classes.NoData}>
                No data for the selected date...
              </h2>
            )}
          </div>

          <br />

          <div className={classes.FhazCam}>
            <div className={classes.FhazCamHeader}>
              <h2>RHAZ CAM</h2>
              <span>* Rear Hazard Avoidance Camera</span>
            </div>
            {photo.rhaz.length > 0 ? (
              <div className={classes.arrowFlex}>
                <div className={classes.arrowLeft}></div>
                <div className={classes.fhazContainer}>
                  {photo.rhaz.map((img) => {
                    return (
                      <>
                        <img
                          onClick={() => openModal(img.img_src)}
                          src={img.img_src}
                          className={classes.img}
                        />
                      </>
                    );
                  })}
                </div>
                <div className={classes.arrowRight}></div>
              </div>
            ) : (
              <h2 className={classes.NoData}>
                No data for the selected date...
              </h2>
            )}
          </div>

          <br />

          <div className={classes.FhazCam}>
            <div className={classes.FhazCamHeader}>
              <h2>NAV CAM</h2>
              <span>* Navigational Camera</span>
            </div>
            {photo.navCam.length > 0 ? (
              <div className={classes.arrowFlex}>
                <div className={classes.arrowLeft}></div>
                <div className={classes.fhazContainer}>
                  {photo.navCam.map((img) => {
                    return (
                      <>
                        <img
                          onClick={() => openModal(img.img_src)}
                          src={img.img_src}
                          className={classes.img}
                        />
                      </>
                    );
                  })}
                </div>
                <div className={classes.arrowRight}></div>
              </div>
            ) : (
              <h2 className={classes.NoData}>
                No data for the selected date...
              </h2>
            )}
          </div>

          <br />

          <div className={classes.FhazCam}>
            <div className={classes.FhazCamHeader}>
              <h2>PAN CAM</h2>
              <span>* Panoramic Camera</span>
            </div>
            {photo.panCam.length > 0 ? (
              <div className={classes.arrowFlex}>
                <div className={classes.arrowLeft}></div>
                <div className={classes.fhazContainer}>
                  {photo.panCam.map((img) => {
                    return (
                      <>
                        <img
                          onClick={() => openModal(img.img_src)}
                          src={img.img_src}
                          className={classes.img}
                        />
                      </>
                    );
                  })}
                </div>
                <div className={classes.arrowRight}></div>
              </div>
            ) : (
              <h2 className={classes.NoData}>
                No data for the selected date...
              </h2>
            )}
          </div>

          <br />

          {showModal && (
            <Modal hdurl={selectedImg} setShowModal={setShowModal} />
          )}

          <br />
        </div>
      </div>
    </>
  );
};
export default Layout;
