// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import logo from "/logo.svg";
import { NavLink } from "react-router-dom";
import "../stylesheets/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <>
      {" "}
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="This is a Job Logo" />
            <span>Job Portfolio</span>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <GiHamburgerMenu />
          </div>

          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
