import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./Layout/Layout";
import Search from "../SearchInput/Search";
import Loader from "../Loader/Loader";
import SearchPlaceholder from "../SearchPlaceholder/SearchPlaceholder";
import classes from "./NasaSearch.module.css";

const API_KEY = process.env.REACT_APP_API_KEY;

const NasaSearch = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);

  const HandleGetData = async function () {
    setLoading(true);
    const response = await axios
      .get(
        `https://images-api.nasa.gov/search?q=${query}&media_type=image&description=${description}`
      )
      .then((res) => {
        setData(res.data);
        setQuery("");
        setLoading(false);
        setResult(true);
      });
  };

  return (
    <>
      <Search
        description={description}
        setDescription={setDescription}
        query={query}
        setQuery={setQuery}
        data={HandleGetData}
      />
      {loading && <Loader />}
      <div className={classes.GalleryContainer}>
        {data.collection && data.collection.items.length > 0 ? (
          data.collection.items.map((obj) => (
            <Layout
              key={obj.data[0].nasa_id}
              title={obj.data[0].title}
              img={obj.links[0].href}
              description={obj.data[0].description}
            />
          ))
        ) : (
          <div style={{ width: "100vw" }}>
            <SearchPlaceholder />
          </div>
        )}
      </div>
    </>
  );
};

export default NasaSearch;
