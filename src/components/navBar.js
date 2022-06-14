import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <h1 id="logo">Math Magicians</h1>
    <nav className="nav-items">
      <Link to="/calculator">Calculator</Link>
    </nav>
  </header>
);

export default Navbar;
