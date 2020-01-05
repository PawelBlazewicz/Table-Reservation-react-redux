import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.js';
import './Header.css';

const Header = () => {
  return (
    <div className="ui inverted vertical masthead center aligned segment">
      <div className="ui container">
        <Navbar />
      </div>
      <div id="header-text" className="ui text container">
        <h1 className="ui inverted header">Karczma Siedem Kotów</h1>
        <h2>Najlepsze jadło i trunki w mieście</h2>
        <Link className="item" to="/Reservation" onClick={this.onItemClick}>
        <div className="ui inverted huge button">Zarezerwuj stolik</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
