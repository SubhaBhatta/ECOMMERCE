import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/navbar.css";
import Logo from "../../assets/images/eCommerce-logo.png";

function navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link to="/contacts">
              <p>Contact</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default navbar;
