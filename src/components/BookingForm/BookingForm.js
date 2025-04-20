import React, { useState, useEffect, useCallback } from 'react';

import './BookingForm.css';

function BookingForm({ availableTimes, dispatchAvailableTimes, submitForm }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: '',
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Add handleInputChange here, inside the component
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // If date field is changed, update available times
    if (name === 'date') {
      dispatchAvailableTimes({ type: 'UPDATE_TIMES', payload: value });
    }
  };

  // Update available times when date changes
  useEffect(() => {
    if (formData.date) {
      dispatchAvailableTimes({ type: 'UPDATE_TIMES', payload: formData.date });
    }
  }, [formData.date, dispatchAvailableTimes]);

  // Validate form on data change
  // Add validateForm to useEffect dependencies
  // Move validateForm definition before its usage and use useCallback
  const validateForm = useCallback(() => {
    const errors = {};

    // Date validation
    if (!formData.date) {
      errors.date = 'Please select a date';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        errors.date = 'Please select a future date';
      }
    }

    // Time validation
    if (!formData.time) {
      errors.time = 'Please select a time';
    }

    // Guests validation
    if (formData.guests < 1) {
      errors.guests = 'Number of guests must be at least 1';
    } else if (formData.guests > 10) {
      errors.guests = 'Maximum 10 guests allowed';
    }

    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Please enter your name';
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      errors.phone = 'Please enter your phone number';
    } else if (!/^[\d\s()+.-]+$/.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }

    // Occasion validation
    if (!formData.occasion) {
      errors.occasion = 'Must select an occasion';
    }

    setFormErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  }, [formData]); // Add formData as dependency

  useEffect(() => {
    validateForm();
  }, [validateForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();

    if (isFormValid) {
      submitForm(formData);
      // Reset form after submission
      setFormData({
        date: '',
        time: '',
        guests: 1,
        occasion: 'Birthday',
        name: '',
        email: '',
        phone: '',
        specialRequests: ''
      });
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Reserve a Table</h2>

      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
          min={new Date().toISOString().split('T')[0]}  // Add min date restriction
          aria-label="Select date"
        />
        {formErrors.date && <span className="error-message">{formErrors.date}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="time">Time</label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          required
          aria-label="Select time"
        >
          <option value="">Select a time</option>
          {availableTimes.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
        {formErrors.time && <span className="error-message">{formErrors.time}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of Guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="10"
          value={formData.guests}
          onChange={handleInputChange}
          required
          aria-label="Number of guests"
        />
        {formErrors.guests && <span className="error-message">{formErrors.guests}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleInputChange}
          aria-label="Select occasion"
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Business">Business</option>
          <option value="Other">Other</option>
        </select>
        {formErrors.occasion && <span className="error-message">{formErrors.occasion}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          aria-label="Your name"
        />
        {formErrors.name && <span className="error-message">{formErrors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          aria-label="Your email"
        />
        {formErrors.email && <span className="error-message">{formErrors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
          pattern="^\+?\d{10,15}$"  // Add phone number pattern
          aria-label="Your phone number"
        />
        {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="specialRequests">Special Requests</label>
        <textarea
          id="specialRequests"
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleInputChange}
          rows="3"
          aria-label="Special requests"
        ></textarea>
      </div>

      <button
        type="submit"
        className="submit-button"
        disabled={!isFormValid}
        aria-label="Make your reservation"
      >
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;
