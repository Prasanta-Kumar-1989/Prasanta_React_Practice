// src/Header.js
// eslint-disable-next-line
import React from "react";
import "../header/Header.css";
import { LOGO_URL } from "../../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <header className="header">
      <img src={LOGO_URL} alt="Logo" className="logo" />
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item text">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item text">
            <Link to="/about">About</Link>
          </li>

          <li className="nav-item text">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <a href="https://example.com">Cart</a>
          </li>
          <li className="nav-item login">
            <button
              onClick={() => {
                setBtnName("Logout");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
