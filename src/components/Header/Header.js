import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="header-container">
        <h1>Quizzers</h1>
        <nav className="navbar">
          <Link to="/">home</Link>
          <Link to='/stats'>stats</Link>
          <Link to='/blog'>blog</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
