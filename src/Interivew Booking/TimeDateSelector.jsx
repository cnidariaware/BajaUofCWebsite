import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TimeDateSelector({
  onTimeSlotSelect,
  timeDateSelectorGet,
}) {
  const [allDatesAvailable, setAllDatesAvailable] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeSlotsAvialable, setTimeSlotsAvialable] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    getInterviewDates();
  }, [timeDateSelectorGet]);

  /**
   * @param {null} null - Takes in nothing
   * @returns {null} null - Returns in nothing
   * @description Gets interview timeslots and dates from backend
   * @author Ahmad <ahmadmuhammadofficial@gmail.com>, Brock <darkicewolf50@gmail.com>
   * @todo refactor to not call backend so much, see useEffect above
   */
  const getInterviewDates = async () => {
    const res = await fetch(
      "https://bajabackend.bajacloud.duckdns.org/getAppointments",
      { method: "GET" }
    );
    // const res = await fetch(
    //   "http://127.0.0.1:8000/getAppointments",
    //   { method: "GET" }
    // );
    let json = await res.json();
    // console.log(json);
    // can input dates right away, no other requirements to show it
    let dates = await json["body"]["interviewDates"];
    setAllDatesAvailable(await dates);
  };

  // helper section

  /**
   * @param {Date} date - Takes in a date object from the date picker
   * @returns {null} null - Returns in nothing
   * @description checks if date is available from the backend
   * @author Brock <darkicewolf50@gmail.com>
   */
  const isDateAvailable = (date) => {
    return Object.keys(allDatesAvailable).includes(
      date.toISOString().split("T")[0]
    );
  };

  const handleDateChange = (date) => {
    setSelectedDate(date); // Capture the selected date in date object
    const selectedDateStr = date.toISOString().split("T")[0];

    // get and set time slots for a given day
    setTimeSlotsAvialable(Object.keys(allDatesAvailable[selectedDateStr]));
    setSelectedTime(""); // clear because of date change
  };

  const handleTimeSlotChange = (e) => {
    let startTime = e.target.innerHTML;
    setSelectedTime(startTime);

    onTimeSlotSelect({
      date: selectedDate.toLocaleDateString(),
      startTime: selectedTime,
    });
  };

  return (
    <div id="TimeSlotSelector">
      {Object.keys(allDatesAvailable).length > 0 ? (
        <>
          <div className="TimeSlot">
            <label htmlFor="date-picker">
              <h4>Select a Date:</h4>
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              inline
              filterDate={isDateAvailable} // Filter/grey out unavailable dates
              dateFormat="yyyy-MM-dd"
              required // Make date selection required
            />
          </div>
          <div className="TimeSlot">
            {!selectedDate ? (
              <>
                <h4>Available Time Slots:</h4>
                <p>Please select the a date to see time slots.</p>
              </>
            ) : (
              <>
                <label htmlFor="time-picker">
                  <h4>
                    Available Time Slots for{" "}
                    {selectedDate.toISOString().split("T")[0]}:
                  </h4>
                </label>
                {selectedDate === undefined ? (
                  <>
                    <p>Please select a date.</p>
                  </>
                ) : timeSlotsAvialable !== "" ? (
                  <>
                    {Object.values(timeSlotsAvialable).map((time) => {
                      return (
                        <button
                          key={time}
                          type="button"
                          onClick={(self) => {
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
          </div>
          {/* {selectedDate && selectedTime && (
        <div>
          <p>
            You have selected:
            <br />
            Date: {selectedDate.toLocaleDateString()}
            <br />
            Time: {selectedTime}
          </p>
        </div>)} */}
        </>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
}
