import { useEffect, useState, useRef } from "react";
import TimeSlotSelector from "./TimeSlotSelector"; // Import the TimeSlotSelector component

/**
 * @param {null} null - Takes in nothing
 * @returns {JSX.element} JSX - HTML and JS functionality
 * @description Used for picking an interview slot
 * @author Ahmad <ahmadmuhammadofficial@gmail.com>
 * @todo CSS
 */

const InterviewForm = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const dialogRef = useRef(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  /**
   * @param {String HTML} event - Takes in form info
   * @returns {null} null - Returns in nothing
   * @description
   * @author Ahmad <ahmadmuhammadofficial@gmail.com>
   * @todo CSS
   */
  const formsubmit = async (event) => {
    event.preventDefault();

    if (!selectedTimeSlot) {
      alert("Please select a time slot!");
      return;
    }

    setIsButtonDisabled(true);
    await new Promise((res) => setTimeout(res, 1000));
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());
    formObject.date = selectedTimeSlot["date"]; // Add the selected time slot to form data
    formObject.startTime = selectedTimeSlot["startTime"];
    console.log("Form Data:", formObject);
    const res = await fetch(
      "https://bajabackend.bajacloud.duckdns.org/SelectInterview",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
      }
    );
    let data = await res.json();
    console.log(data);

    // dialogRef.current.showModal();
    setIsButtonDisabled(false);
  };

  return (
    <>
      <form onSubmit={formsubmit}>
        <label for="name">Name (What to call you):</label>
        <input
          type="text"
          id="fname"
          name="intervieweeName"
          placeholder="Jaeinceins"
          required
        />
        <label for="email">UCalgary Email:</label>
        <input
          type="text"
          id="email"
          name="intervieweeEmail"
          placeholder="jaeinceins.bhaja@ucalgary.ca"
          required
        />

        {/* Time Slot Selector */}
        <TimeSlotSelector
          onTimeSlotSelect={(timeSlot) => setSelectedTimeSlot(timeSlot)}
        />
        <button type="submit" disabled={isButtonDisabled}>
          Submit
        </button>
      </form>
      {/* Success Dialog */}
      <dialog ref={dialogRef}>
        {" "}
        {/* Add the `ref` attribute */}
        <h2>Booking Successful!</h2>
        <p>
          Thank you for booking your interview slot. We’ll contact you soon.
        </p>
        <h4>
          What to do if I cannot make it to any of the avaliable time slots or
          need to rescedule?
        </h4>
        <p>
          While we highly encourage sceduling an interview in one of the above
          time slots, we recongize that not everyone can make it work with their
          personal and university schedules.
        </p>
        <p>
          Please email us at{" "}
          <a href="mailto:uofcbaja@gmail.com">uofcbaja@gmail.com</a> to work out
          an alternate interview time or for rescheduling.
        </p>
      </dialog>
    </>
  );
};

export default InterviewForm;
