import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Row from "./Row";
import requests from "./apirequests";
import Banner from "./Banner";
import Footer from "./Footer";

function Movies() {
  return (
    <div className="App">
      <Banner />

      <Row
        category="row__posts"
        postsSize="medium"
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        category="Large_rows"
        postsSize="larger"
        title="Today Trending Movies"
        fetchUrl={requests.fetchTrendingTvDay}
      />

      <Row
        category="row__posts"
        title="Action Movies"
        postsSize="medium"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        category="row__posts"
        title="Fantasy Movies"
        postsSize="medium"
        fetchUrl={requests.fetchFantasyMovies}
      />
      <Row
        category="row__posts"
        title="Comedy Movies"
        postsSize="medium"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        category="row__posts"
        title="Crime Thrillers Movies"
        postsSize="medium"
        fetchUrl={requests.fetchCrimeMovies}
      />
      <Row
        category="Large_rows"
        title="Sci-Fi"
        postsSize="larger"
        fetchUrl={requests.fetchCrimeMovies}
      />
      <Row
        category="row__posts"
        postsSize="medium"
        title="Horror Movies"
        fetchUrl={requests.fetchHorroeMovies}
      />
      <Row
        category="row__posts"
        postsSize="medium"
        title="Animation Movies"
        fetchUrl={requests.fetchAnimationMovies}
      />

      <Row
        category="row__posts"
        postsSize="medium"
        title="Random Movies"
        fetchUrl={requests.fetchMovies}
      />

      <Footer />
    </div>
  );
}

export default Movies;
