import React from 'react';
import BookingForm from '../BookingForm/BookingForm';
import './BookingPage.css';

function BookingPage({ availableTimes, dispatchAvailableTimes, submitForm }) {
  return (
    <div className="booking-page">
      <div className="booking-hero">
        <h1>Reserve a Table</h1>
        <p>We look forward to serving you at Little Lemon. Please fill out the form below to make your reservation.</p>
      </div>

      <div className="booking-container">
        <div className="booking-info">
          <h2>Reservation Information</h2>
          <p>At Little Lemon, we pride ourselves on providing an exceptional dining experience. Reservations are recommended, especially for dinner service and weekends.</p>
          <p>For parties larger than 10, please contact us directly at (123) 456-7890.</p>
          <div className="restaurant-hours">
            <h3>Hours of Operation</h3>
            <ul>
              <li><span>Monday - Thursday:</span> 11:00 AM - 9:00 PM</li>
              <li><span>Friday - Saturday:</span> 11:00 AM - 10:00 PM</li>
              <li><span>Sunday:</span> 12:00 PM - 8:00 PM</li>
            </ul>
          </div>
          <div className="booking-image">
            <img src="/icons_assets/restaurant.jpg" alt="Little Lemon Restaurant Interior" />
          </div>
        </div>

        <BookingForm
          availableTimes={availableTimes}
          dispatchAvailableTimes={dispatchAvailableTimes}
          submitForm={submitForm}
        />
      </div>
    </div>
  );
}

export default BookingPage;