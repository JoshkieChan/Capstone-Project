import React from 'react';

  const ConfirmedBooking = () => {

  const handleHomeNavigation = () => {
    // Force navigation to home page and reload to ensure proper rendering
    window.location.href = '/';
  };

  return (
    <div className="container confirmed-booking">
      <div className="confirmation-box">
        <h1>Booking Confirmed!</h1>
        <p>Thank you for your reservation at Little Lemon.</p>
        <p>We look forward to serving you!</p>
        <button
          className="button-primary"
          onClick={handleHomeNavigation}
        >
          View Our Menu
        </button>
      </div>
    </div>
  );
};

export default ConfirmedBooking;