import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./Layout";
import Loader from "../../Loader/Loader";
import classes from "./Spirit.module.css";

const API_KEY = process.env.REACT_APP_API_KEY;

// 2004-2-13 - 2010-3-21

const Spirit = () => {
  const [data, setData] = useState([]);
  const [groupPhotos, setGroupPhotos] = useState({});
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("2007-3-21");

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const response = await axios
        .get(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?page=1&earth_date=${date}&api_key=${API_KEY}`
        )
        .then((res) => {
          setData(res.data);
          let obj = { fhaz: [], rhaz: [], navCam: [], panCam: [] };
          res.data.photos.map((groupPhoto) => {
            if (groupPhoto.camera.name === "FHAZ") {
              obj.fhaz.push(groupPhoto);
            }
            if (groupPhoto.camera.name === "RHAZ") {
              obj.rhaz.push(groupPhoto);
            }
            if (groupPhoto.camera.name === "NAVCAM") {
              obj.navCam.push(groupPhoto);
            }
            if (groupPhoto.camera.name === "PANCAM") {
              obj.panCam.push(groupPhoto);
            }
          });
          console.log(obj);
          setGroupPhotos(obj);
          setLoading(false);
        });
    }

    fetchData();
  }, [date]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={classes.Container}>
          <div className={classes.DateContainer}>
            <div className={classes.Date}>
              <span className={classes.SelectDate}>Select Date: </span>
              <input type="date" onChange={handleDateChange} />
            </div>
            <span className={classes.DateRange}>
              * Range: 2004-2-13/2010-3-21
            </span>
          </div>
          <div className={classes.photoInfoContainer}>
            {data.photos && data.photos.length > 0 ? (
              <div className={classes.InfoContainer}>
                <div className={classes.InfoWrapper}>
                  <div>
                    <span className={classes.span}>
                      Name: {data.photos[0].rover.name}
                    </span>
                    <span className={classes.span}>
                      Operating Status: {data.photos[0].rover.status}
                    </span>
                  </div>
                  <div>
                    <span className={classes.span}>
                      Launch Date: {data.photos[0].rover.launch_date}
                    </span>
                    <span className={classes.span}>
                      Landing Date: {data.photos[0].rover.landing_date}
                    </span>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          {data.photos && data.photos.length > 0 && (
            <Layout photo={groupPhotos} />
          )}
        </div>
      )}
    </>
  );
};

export default Spirit;
