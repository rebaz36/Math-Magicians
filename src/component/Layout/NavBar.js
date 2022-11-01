import React from 'react';
import './NavBar.css';

export default function NavBar() {
  return (
    <div className="Navbar-Container">
      <div className="Navbar-Logo">
        <img src="../../../public/favicon.ico" alt="logo" />
      </div>
      <div className="Navbar-Links">
        <a href="/">Home</a>
        <a href="/calculator">Calculator</a>
        <a href="/quote">Quote</a>
      </div>
    </div>
  );
}
