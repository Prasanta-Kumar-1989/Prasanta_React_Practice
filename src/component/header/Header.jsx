// src/Header.js
// eslint-disable-next-line
import React from "react";
import "../header/Header.css";
import webLogo from "../../images/logo-search-grid-1x.png";
import cartLogo from "../../images/shopping_cart_icon_1773733.png";
const Header = () => {
  return (
    <header className="header">
      <img src={webLogo} alt="Logo" className="logo" />
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item text">
            <a href="https://example.com">Home</a>
          </li>
          <li className="nav-item text">
            <a href="https://example.com">About</a>
          </li>

          <li className="nav-item text">
            <a href="https://example.com">Contact</a>
          </li>
          <li className="nav-item">
            <a href="https://example.com">
              <img src={cartLogo} alt="Cart Logo" className="cartlogo" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
