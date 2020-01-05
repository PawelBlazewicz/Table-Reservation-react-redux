import React from 'react';
import GoogleAuth from './GoogleAuth.js';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {
  onItemClick(event) {
    const items = [...event.target.parentNode.children];
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('active');
    }
    event.target.classList.add('active');
  }

  render() {
    return (
      <div className="ui large secondary inverted pointing menu">
        <a className="toc item">
          <i className="sidebar icon"></i>
        </a>
        <Link className="item active" to="/" onClick={this.onItemClick}>
          O Nas
        </Link>
        <a className="item" onClick={this.onItemClick}>
          Menu
        </a>
        <Link className="item" to="/Reservation" onClick={this.onItemClick}>
          Rezerwacja
        </Link>
        <a className="item" onClick={this.onItemClick}>
          Kontakt
        </a>
        <div className="right item">
          <GoogleAuth />
        </div>
      </div>
    );
  }
}

export default Navbar;
