import React, { useState } from "react";

const ReservationForm = ({ availableTimes }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <>
      <div className="form-group">
        <label htmlFor="reservation-date">Date:</label>
        <input
          type="date"
          id="reservation-date"
          name="date"
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="reservation-time">Time:</label>
        <select
          id="reservation-time"
          name="time"
          value={time}
          onChange={handleTimeChange}
          required
        >
          <option value="">Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default ReservationForm;