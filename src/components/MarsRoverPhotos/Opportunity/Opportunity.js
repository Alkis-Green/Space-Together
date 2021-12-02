import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../Loader/Loader";
import Layout from "./Layout";
import classes from "./Opportunity.module.css";

const API_KEY = process.env.REACT_APP_API_KEY;

// Find days range *

const Opportunity = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [groupPhotos, setGroupPhotos] = useState({});
  const [date, setDate] = useState("2010-12-30");
  // const [pageNum, setPageNum] = useState(1);
  // page=${pageNum + 1} to .get
  // sol=${solDate}

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const response = await axios
        .get(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?&earth_date=${date}&api_key=${API_KEY}`
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
            <Layout data={data} photo={groupPhotos} />
          )}
        </div>
      )}
    </>
  );
};

export default Opportunity;
