import React, { useEffect, useState } from "react";
import logo from "./Images/logo.svg";
import profile from "./Images/profile.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <>
      <div className={`nav  ${show && "nav_scroller"}`}>
        <div className="nav__main">
          <div className="nav__logo">
            <img className="nav__logo" src={logo} alt="Logo" />
          </div>
          <div className="nav__options">
            <NavLink className="NavBArOption" to="/">
              Movies
            </NavLink>
            <NavLink className="NavBArOption" to="/TVshow">
              Tv Shows
            </NavLink>
          </div>
        </div>
        <div className="nav__profile">
          <img class="profile-icon" src={profile} alt="profile" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
