import React from "react";
import './styles/navbar.css';
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Energy Tracker</h2>
      <div classname="links">
        <Link to="/" className="home">Home</Link>
        <Link to="/nuclear" className="nuclear">Nuclear</Link>
        <Link to="/solar" className="solar">Solar</Link>
        <Link to="/wind" className="wind">Wind</Link>
      </div>
    </nav>
  );
};

export default navbar;