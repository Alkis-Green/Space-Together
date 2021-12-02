import React, { useEffect, useState } from "react";
import axios from "axios";
import Map from "../Eonet/Map/Map";
import Loader from "../Loader/Loader";
import classes from "./Eonet.module.css";

const BASE_URL =
  "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?limit=50&days=50";

const Eonet = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        `https://eonet.gsfc.nasa.gov/api/v2.1/events?limit=30&days=60`
      );
      const { events } = await res.json();
      setData(events);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  return (
    <>
      {loading ? null : (
        <div className={classes.InfoContainer}>
          <h2 className={classes.Header}>Natural Events tracker Info</h2>
          <h4 className={classes.infoText}>
            *(Here you can see natural events all around the world from fires,
            volcanoes and more... )
          </h4>
        </div>
      )}
      <div className={classes.MapContainer}>
        {!loading ? <Map data={data} /> : <Loader />}
      </div>
    </>
  );
};

export default Eonet;
