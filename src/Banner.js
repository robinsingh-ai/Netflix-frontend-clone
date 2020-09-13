import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./apirequests";
import "./Banner.css";

function Banner() {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOrignals);
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "...." : str;
  }

  return (
    <>
      <header
        className="bannerimg"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        }}
      >
        <div className="banner_content container">
          <h1 className="banner_name">{movie.original_name || movie?.name}</h1>

          <h5 className="banner__overvieew my-3 ">
            {truncate(movie?.overview, 190)}
          </h5>

          <div className="banner_buttons my-3">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
        </div>
        <div className="banner--botton"></div>
      </header>
    </>
  );
}

export default Banner;
