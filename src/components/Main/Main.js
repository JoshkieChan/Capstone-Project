import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import BookingPage from '../BookingPage/BookingPage';
import ConfirmedBooking from '../ConfirmedBooking/ConfirmedBooking';
import ChicagoPage from '../ChicagoPage/ChicagoPage';

// Mock API functions
const fetchAPI = (date) => {
  const day = date.getDay();
  return day === 5 || day === 6
    ? ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    : ['17:00', '18:00', '19:00', '20:00'];
};

const submitAPI = (formData) => {
  return true; // Simulate successful submission
};

// Define reducer for available times
const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE_TIMES':
      return fetchAPI(new Date());
    case 'UPDATE_TIMES':
      return fetchAPI(new Date(action.payload));
    default:
      return state;
  }
};

function Main() {
  const navigate = useNavigate();

  // Initialize times with the current date using the API
  const initializeTimes = () => {
    // Create a Date object for today's date
    const today = new Date();
    // Use the fetchAPI function from the API library
    return fetchAPI(today);
  };

  // Set up reducer for available times
  const [availableTimes, dispatchAvailableTimes] = useReducer(
    availableTimesReducer,
    [],
    initializeTimes
  );

  // Handle form submission
  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/booking-confirmed');
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatchAvailableTimes={dispatchAvailableTimes}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
        <Route path="/chicago" element={<ChicagoPage />} />
      </Routes>
    </main>
  );
}

export default Main;