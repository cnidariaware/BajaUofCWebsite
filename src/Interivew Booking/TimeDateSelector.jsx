import React, { useState, useEffect } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function TimeDateSelector ({ onTimeSlotSelect }) {
  const [allTimeDatesAvailable, setAllTimeDatesAvailable] = useState();
  const [allDatesAvailable, setAllDatesAvailable] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeSlotsAvialable, setTimeSlotsAvialable] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');

  useEffect(() => {
    getInterviewDates();
  }, []);

  /**
   * @param {null} null - Takes in nothing
   * @returns {null} null - Returns in nothing
   * @description Gets interview timeslots and dates
   * @authors Ahmad <ahmadmuhammadofficial@gmail.com>, Brock <darkicewolf50@gmail.com>
   * @todo refactor to not call backend so much
   */
  const getInterviewDates = async () => {
    const res = await fetch(
      "https://bajabackend.bajacloud.duckdns.org/getAppointments",
      { method: "GET" }
    );
    let json = await res.json();
    
    // can input dates right away, no other requirements to show it
    let dates = await Object.keys(json["body"]["interviewDates"]);
    await setAllDatesAvailable(dates);

    // storing here for use in time slot selection
    // date is needed in order to show time
    await setAllTimeDatesAvailable(json["body"]);
    console.log(json["body"]);
  };

  const isDateAvailable = (date) => {
    return allDatesAvailable.includes(date.toISOString().split('T')[0]);
  }

  const handleDateChange = (date) => {
    setSelectedDate(date); // Capture the selected date in date object
    const selectedDateStr = date.toISOString().split('T')[0];

    // get and set time slots for a given day
    setTimeSlotsAvialable(Object.keys(allTimeDatesAvailable["interviewDates"][selectedDateStr]));
    setSelectedTime(''); // clear because of date change
  };

  const handleTimeSlotChange = (e) => {
    let startTime = e.target.innerHTML;
    setSelectedTime(startTime);
  };

  return (
    <div>
      <label htmlFor="date-picker"><h3>Select a Date:</h3></label>
      {/* old and bad */}
      {/* Replace Calendar with input type="date" */}
      {/* <input type="date" value={selectedDate} onChange={handleDateChange} /> */}
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              inline
              filterDate={isDateAvailable} // Filter out unavailable dates
              dateFormat="yyyy-MM-dd"
              required // Make date selection required
            />
      {!selectedDate ? (
        <>
          <h4>Available Time Slots:</h4>
          <p>Please select the a date to see time slots.</p>
        </>
      ) : (
        <>
          <h4>Available Time Slots for {selectedDate.toISOString().split('T')[0]}:</h4>
          {selectedDate === undefined ? (
            <>
              <p>Please select a date.</p>
            </>
          // ) : timeSlots.length 0 > 0 ? (
          ) : timeSlotsAvialable !== '' ? (
            <>
              {Object.values(timeSlotsAvialable).map((time) => {
                return (
                  <button
                    key={time}
                    onClick={(self) => {
                      console.log(self.target.innerHTML);
                      handleTimeSlotChange(self);
                    }}
                  >
                    {time}
                  </button>
                );
              })}
            </>
          ) : (
            <>
              <p>No available time slots for the selected date.</p>
            </>
          )}
          
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
        </div>)}
    </div>
  );
};

