import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./Navbar";
import Movies from "./Movies";
import TVShows from "./TVshows";

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Movies />
          </Route>
          <Route exact path="/TVshow">
            <TVShows />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
