import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import AsteroidsLayout from "./AsteroidsLayout/AsteroidsLayout";
import classes from "./Asteroids.module.css";
import TableStyleHeader from "./TableStyleHeader/TableStyleHeader";

const API_KEY = process.env.REACT_APP_API_KEY;

// For scroll toTop maybe i should use useRef.

const Asteroids = () => {
  const [data, setData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const [startingDate, seStartingDate] = useState("2015-09-07");
  const [endingDate, setEndingDate] = useState("2015-09-08");

  useEffect(() => {
    setLoading(true);
    async function getAsteroids() {
      const response = await axios
        .get(
          `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}&size=5&page=${
            pageNum + 1
          }`
        )
        .then((res) => {
          setData(res.data);
          setLoading(false);
        });
    }
    getAsteroids();
  }, [pageNum, window.scrollTo(0, 0)]);

  let HandleNextPage = () => {
    setPageNum(pageNum + 1);
  };

  let HandlePrevPage = () => {
    setPageNum(pageNum - 1);
  };

  return (
    <>
      {loading && <Loader />}
      {loading ? null : (
        <>
          <h2 className={classes.Header}>Near Earth Asteroids</h2>
          <h4 className={classes.infoText}>
            *(Here you can find some of the closest to date near earth asteroids
            with informations about diameter, speed and more...)
          </h4>
        </>
      )}
      <div className={classes.Container}>
        {loading ? null : (
          <div className={classes.AsteroidContainer}>
            <TableStyleHeader />

            {data.near_earth_objects && data.near_earth_objects.length > 0
              ? data.near_earth_objects.map((obj) => (
                  <AsteroidsLayout
                    key={obj.id}
                    name={obj.name}
                    orbitalData={obj.orbital_data.first_observation_date}
                    orbitClass={
                      obj.orbital_data.orbit_class.orbit_class_description
                    }
                    magnitude={obj.absolute_magnitude_h}
                    diameter={
                      obj.estimated_diameter.kilometers.estimated_diameter_max
                    }
                    speed={
                      obj.close_approach_data[0].relative_velocity
                        .kilometers_per_second
                    }
                    danger={obj.is_potentially_hazardous_asteroid}
                    closeApproach={obj.orbital_data.last_observation_date}
                  />
                ))
              : null}
          </div>
        )}
      </div>
      {loading ? null : (
        <div className={classes.BtnContainer}>
          {pageNum === 1 ? (
            <button
              disabled
              onClick={HandlePrevPage}
              className={classes.Btn1}
              style={{ cursor: "initial" }}
            >
              Prev
            </button>
          ) : (
            <button onClick={HandlePrevPage} className={classes.Btn1}>
              Prev
            </button>
          )}
          {data.near_earth_objects && (
            <span className={classes.Span}>
              Page: {pageNum} of {data.page.total_pages}
            </span>
          )}
          <button onClick={HandleNextPage} className={classes.Btn2}>
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default Asteroids;
