import React from "react";
import './styles/navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Energy Tracker</h2>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/nuclear" className="nav-link">Nuclear</Link>
        <Link to="/solar" className="nav-link">Solar</Link>
        <Link to="/wind" className="nav-link">Wind</Link>
      </div>
    </nav>
  );
};

export default Navbar;