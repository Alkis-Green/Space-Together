import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import Layout from "./ApodLayout/Layout";
import PageError from "../PageError/PageError";
import classes from "./Apod.module.css";

const API_KEY = process.env.REACT_APP_API_KEY;

const Apod = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getNasaData() {
      const response = await axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`
        )
        .then((res) => {
          setData(res.data);
          setLoading(false);
        });
    }
    getNasaData();
  }, [date]);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className={classes.Container}>
      <div className={classes.Date}>
        <span className={classes.SelectDate}>Select Date: </span>
        <input type="date" onChange={handleDateChange} />
      </div>
      {loading && <Loader />}
      {!loading && (
        <>
          <Layout
            showModal={showModal}
            setShowModal={setShowModal}
            handleModal={openModal}
            copyright={data.copyright}
            date={data.date}
            explanation={data.explanation}
            hdurl={data.hdurl}
            url={data.url}
            title={data.title}
            type={data.media_type}
          />
        </>
      )}
    </div>
  );
};

export default Apod;
