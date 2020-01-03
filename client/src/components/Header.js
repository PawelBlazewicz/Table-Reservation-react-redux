import React from 'react';
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
        <div className="ui inverted huge button">Zarezerwuj stolik</div>
      </div>
    </div>
  );
};

export default Header;
