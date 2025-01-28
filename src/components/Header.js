import React from 'react';
import { Link } from 'react-router-dom';

import "./Header.css";

function Header() {
    return (
        <>
            <header>
        <div className="header">
          <Link to="/" className="logo">ᗪEIᗩᑎ 📷&🎥</Link>

          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/album">Album</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>
        </>
    );
}

export default Header;