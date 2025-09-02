import React, { useState } from "react";
import './styles/navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Energy Tracker</h2>
      {/* Desktop Links */}
      <div className="nav-links desktop">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/nuclear" className="nav-link">Nuclear</Link>
        <Link to="/solar" className="nav-link">Solar</Link>
        <Link to="/wind" className="nav-link">Wind</Link>
        <Link to="/hydro" className="nav-link">Hydro</Link>
      </div>
      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <button
            className="close-menu-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/nuclear" className="nav-link" onClick={() => setMenuOpen(false)}>Nuclear</Link>
          <Link to="/solar" className="nav-link" onClick={() => setMenuOpen(false)}>Solar</Link>
          <Link to="/wind" className="nav-link" onClick={() => setMenuOpen(false)}>Wind</Link>
          <Link to="/hydro" className="nav-link" onClick={() => setMenuOpen(false)}>Hydro</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;