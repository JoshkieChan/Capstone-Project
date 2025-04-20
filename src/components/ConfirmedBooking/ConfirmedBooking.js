import React from 'react';
import { Link } from 'react-router-dom';
import './ConfirmedBooking.css';

function ConfirmedBooking() {
  return (
    <div className="confirmed-booking">
      <div className="confirmation-container">
        <div className="confirmation-icon">
          <img src="/icons_assets/Dish icon.svg" alt="Confirmation Icon" />
        </div>
        <h1>Booking Confirmed!</h1>
        <div className="confirmation-details">
          <p className="success-message">Your reservation has been successfully confirmed!</p>
          <p>Thank you for choosing Little Lemon.</p>
          <p>We've sent a confirmation email with all the details of your booking.</p>
          <p className="confirmation-message">
            We look forward to serving you and providing an exceptional dining experience.
          </p>
          <p className="contact-info">
            If you need to modify your reservation, please contact us at (555) 123-4567
          </p>
        </div>
        <div className="confirmation-actions">
          <Link to="/" className="home-button">
            <img src="/icons_assets/home icon.svg" alt="Home" className="button-icon" />
            Return to Home
          </Link>
          <Link to="/menu" className="menu-button">View Our Menu</Link>
        </div>
      </div>
    </div>
  );
}

export default ConfirmedBooking;