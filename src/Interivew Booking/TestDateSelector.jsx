import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

// Mocking the API response
const mockApiResponse = {
  body: {
    interviewDates: {
      '2024-09-16': {
        '11:30:00': {
          'Meeting Duration': '30 min',
        },
      },
      '2025-02-25': {
        '11:00:00': {
          'Meeting Duration': '30 min',
        },
        '11:30:00': {
          'Meeting Duration': '30 min',
        },
      },
      '2025-02-15': {
        '11:00:00': {
          'Meeting Duration': '30 min',
        },
      },
    },
  },
};

const DateTimePicker = () => {
  const [availableDates, setAvailableDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');

  useEffect(() => {
    const interviewDates = mockApiResponse.body.interviewDates;
    const dates = Object.keys(interviewDates); // Get the available dates
    setAvailableDates(dates);
  }, []);

  // Function to check if a date is available (based on your API data)
  const isDateAvailable = (date) => {
    return availableDates.includes(date.toISOString().split('T')[0]);
  };

  // Handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
    const selectedDateString = date.toISOString().split('T')[0];
    
    // Get available times for the selected date
    const times = Object.keys(mockApiResponse.body.interviewDates[selectedDateString] || {});
    setAvailableTimes(times);
    setSelectedTime(''); // Reset selected time when date changes
  };

  // Handle time change
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <form>
      <h2>Select Interview Date and Time</h2>

      <label htmlFor="date-picker">Select a date:</label>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        inline
        filterDate={isDateAvailable} // Filter out unavailable dates
        dateFormat="yyyy-MM-dd"
        required // Make date selection required
      />

      {selectedDate && (
        <>
          <label htmlFor="time-picker">Select a time:</label>
          <select
            id="time-picker"
            value={selectedTime}
            onChange={handleTimeChange}
            required // Make time selection required
          >
            <option value="">--Select a time--</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </>
      )}

      {selectedDate && selectedTime && (
        <div>
          <p>
            You have selected:
            <br />
            Date: {selectedDate.toLocaleDateString()}
            <br />
            Time: {selectedTime}
          </p>
        </div>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default DateTimePicker;