import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, category, postsSize }) {
  const [movies, setmovies] = useState([]);
  const [currMovie, SetCurrMovie] = useState("");

  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(fetchUrl);

      setmovies(request.data.results);
      return request;
    }
    fetchdata();
  }, [fetchUrl]);

  const handleCLick = (name, movie) => {
    if (currMovie) {
      SetCurrMovie("");
    } else {
      SetCurrMovie(movie);
    }
  };

  console.log(movies);

  return (
    <div className="mainrow my-4">
      <h2 className="categoryName">{title}</h2>
      <div className={category}>
        {movies.map((movie) => (
          <img
            className={postsSize}
            onClick={() =>
              handleCLick(
                movie.title || movie.name || movie.orignal_title,
                movie
              )
            }
            key={movie.id}
            src={`${baseUrl}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>

      {currMovie ? (
        <div className="maincont">
          <div
            className="selected-img-background"
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${currMovie?.backdrop_path}")`,
            }}
          >
            <div className="container my-3">
              <div className="row">
                <div className="col-md-6">
                  <div className="movie-info">
                    <h1 className="moviecardtitle">
                      {currMovie.title ||
                        currMovie.name ||
                        currMovie.orignal_title}
                    </h1>
                    <h3>
                      Release Date :
                      {currMovie.release_date || currMovie.first_air_date}
                    </h3>

                    <h4>Rating: {currMovie.vote_average}</h4>
                    <h4>Votes: {currMovie.vote_count}</h4>

                    <h5> {currMovie.overview}</h5>
                  </div>
                </div>

                <div className="col-md-6 text-center">
                  {currMovie && (
                    <div>
                      <img
                        className="dropdown-movie"
                        src={`${baseUrl}${currMovie.poster_path}`}
                        alt=""
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1></h1>
      )}
    </div>
  );
}

export default Row;
