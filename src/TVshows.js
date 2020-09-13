import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Row from "./Row";
import requests from "./apirequests";
import Banner from "./Banner";
import Footer from "./Footer";

function TVShows() {
  return (
    <div className="App">
      <Banner />
      <Row
        category="row__posts"
        title="Top Rated"
        postsSize="medium"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        category="Large_rows"
        postsSize="larger"
        title="Netflix Orignals"
        fetchUrl={requests.fetchNetflixOrignals}
      />

      <Row
        category="row__posts"
        postsSize="medium"
        title="Documentries"
        fetchUrl={requests.fetchDocumentriesMovies}
      />
      <Row
        category="row__posts"
        postsSize="medium"
        title="Action TV Shows"
        fetchUrl={requests.fetchActionTV}
      />
      <Row
        category="row__posts"
        postsSize="medium"
        title="Horror TV Shows"
        fetchUrl={requests.fetchHorrorTV}
      />
      <Row
        category="Large_rows"
        postsSize="larger"
        title="Comedy TV Shows"
        fetchUrl={requests.fetchComedyTV}
      />

      <Footer />
    </div>
  );
}

export default TVShows;
