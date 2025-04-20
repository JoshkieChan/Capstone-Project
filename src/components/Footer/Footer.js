import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYelp } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import Logo from '../../components/Logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo} alt="Little Lemon Logo" />
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes with a modern twist.</p>
        </div>

        <div className="footer-links">
          <div className="footer-section">
            <h3>Navigation</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/booking">Reservations</Link></li>
              <li><Link to="/order">Order Online</Link></li>
              <li><Link to="/chicago">Chicago</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li>123 Main Street, Chicago IL</li>
              <li>(123) 456-7890</li>
              <li>info@littlelemon.com</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Social Media</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://yelp.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYelp} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;