import React from 'react';
import GoogleAuth from './GoogleAuth.js';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">O Nas</Link>
        </li>
        <li>
          <Link to="/Reservation">Rezerwacje</Link>
        </li>
        <li>
          <GoogleAuth />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
