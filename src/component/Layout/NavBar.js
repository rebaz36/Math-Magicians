import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './NavBar.css';

export default function NavBar() {
  return (
    <div className="Navbar-Container">
      <div className="Navbar-Logo">
        <img
          style={{
            width: '350px',
            height: '70px',
            border: '1px solid black',
            borderRadius: '10px',
            backgroundColor: '#fff',
          }}
          src={logo}
          alt="logo"
        />
      </div>
      <div className="Navbar-Links">
        <Link className="Nav-Item" to="/">
          Home
        </Link>
        <Link className="Nav-Item" to="/calculator">
          Calculator
        </Link>
        <Link className="Nav-Item" to="/Quote">
          Quote
        </Link>
      </div>
    </div>
  );
}
