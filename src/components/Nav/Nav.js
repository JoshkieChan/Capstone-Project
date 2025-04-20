import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img src="/icons_assets/Logo.svg" alt="Little Lemon Logo" />
          </Link>
        </div>
        <div className={`nav-links${menuOpen ? ' active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
            <li><Link to="/menu" onClick={handleLinkClick}>Menu</Link></li>
            <li><Link to="/booking" onClick={handleLinkClick}>Reservations</Link></li>
            <li><Link to="/order" onClick={handleLinkClick}>Order Online</Link></li>
            <li><Link to="/login" onClick={handleLinkClick}>Login</Link></li>
          </ul>
        </div>
        <div className="mobile-menu" onClick={handleMenuClick}>
          <img src="/icons_assets/🦆 icon _hamburger menu.svg" alt="Menu" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;