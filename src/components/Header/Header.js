import React from 'react';
import NavBar from './NavBar';

function Header() {
  return (
    <header className="main-header">
      <a href="/" className="logo">
        <span className="logo-mini">
          <b>S</b>A</span>
        <span className="logo-lg">
          <b>Snug</b> Application</span>
      </a>
      <NavBar />
    </header>
  )
}

export default Header;
