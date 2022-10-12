import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="header-container">
        <h1>Quizzers</h1>
        <nav className="navbar">
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link className="navLink" to="/stats">
            Stats
          </Link>
          <Link className="navLink" to="/blog">
            Blog
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
