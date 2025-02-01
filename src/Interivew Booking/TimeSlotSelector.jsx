import React, { useState, useEffect } from "react";

const TimeSlotSelector = ({ onTimeSlotSelect }) => {
  const [selectedDate, setSelectedDate] = useState();
  const [timeSlots, setTimeSlots] = useState([]);
  const [interviewDates, setInterviewDates] = useState([]);
  useEffect(() => {
    getInterviewDates();
  }, []);
  useEffect(() => {
    if (selectedDate) {
      const availableSlots =
        interviewDates.interviewDates?.[selectedDate] || {};
      setTimeSlots(Object.keys(availableSlots));
    }
  }, [selectedDate]);
  /**
   * @param {null} null - Takes in nothing
   * @returns {null} null - Returns in nothing
   * @description Hooking upto backend
   * @author Ahmad <ahmadmuhammadofficial@gmail.com>
   */
  const getInterviewDates = async () => {
    const res = await fetch(
      "https://bajabackend.bajacloud.duckdns.org/getAppointments",
      { method: "GET" }
    );
    let json = await res.json();
    await setInterviewDates(json["body"]);
  };

  const handleDateChange = (e) => {
    let date = e.target.value;
    setSelectedDate(date); // Capture the selected date in YYYY-MM-DD format
    onTimeSlotSelect({ date, startTime: null });
  };

  const handleTimeSlotChange = (e) => {
    let startTime = e.target.innerHTML;
    onTimeSlotSelect((prev) => ({ ...prev, startTime }));
  };

  return (
    <div>
      <h3>Select a Date:</h3>
      {/* Replace Calendar with input type="date" */}
      <input type="date" value={selectedDate} onChange={handleDateChange} />
      {!selectedDate ? (
        <>
          <h4>Available Time Slots:</h4>
          <p>Please select the a date to see time slots.</p>
        </>
      ) : (
        <>
          <h4>Available Time Slots for {selectedDate}:</h4>
          {selectedDate === undefined ? (
            <>
              <p>Please select a date.</p>
            </>
          ) : timeSlots.length > 0 ? (
            <>
              {Object.values(timeSlots).map((time) => {
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
    </div>
  );
};

export default TimeSlotSelector;
