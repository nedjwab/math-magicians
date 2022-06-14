import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <h1 id="logo">Math Magicians</h1>
    <nav className="nav-items">
      <Link to="/" className="nav-item">Home</Link>
      <Link to="/calculator" className="nav-item">Calculator</Link>
      <Link to="/quote" className="nav-item">Quotes</Link>
    </nav>
  </header>
);

export default Navbar;
