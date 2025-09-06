import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import TimeDateSelector from "./TimeDateSelector";

/**
 * @param {null} null - Takes in nothing
 * @returns {JSX.element} JSX - HTML and JS functionality
 * @description Used for picking an interview slot
 * @authors Ahmad <ahmadmuhammadofficial@gmail.com>, Brock <darkicewolf50@gmail.com>
 * @todo CSS
 */

export default function InterviewForm() {
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);
	const dialogRef = useRef(null);
	const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
	const [getTimeDates, setGetTimeDates] = useState("");

	/**
	 * @param {String HTML} event - Takes in form info
	 * @returns {null} null - Returns in nothing
	 * @description submits the form with the appropriate information
	 * @authors Ahmad <ahmadmuhammadofficial@gmail.com>, Brock <darkicewolf50@gmail.com>
	 * @todo imporper email and other erros from backend
	 */
	const formsubmit = async (event) => {
		const errorLine = document.getElementById("InterviewError");
		const submitButton = document.getElementById("InterviewButtonSubmit");

		event.preventDefault();

		if (selectedTimeSlot) {
			console.log(selectedTimeSlot);
			if (selectedTimeSlot.date !== null && selectedTimeSlot.startTime !== "") {
				errorLine.innerHTML = " ";
				// disable button to stop multiple requests
				setIsButtonDisabled(true);
				submitButton.innerHTML = "Loading..";
				submitButton.style.background = "grey";

				// await new Promise((res) => setTimeout(res, 1000));
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
				// const res = await fetch(
				//   "http://127.0.0.1:8000/SelectInterview",
				//   {
				//     method: "POST",
				//     headers: {
				//       "Content-Type": "application/json",
				//     },
				//     body: JSON.stringify(formObject),
				//   }
				// );

				let data = await res.json();

				if (
					data["body"]["Success"] === true &&
					data["body"]["validEmail"] === "true"
				) {
					dialogRef.current.showModal();
				} else {
					// console.log(data["body"]["validEmail"] === "true");

					// psuedo update, used to refresh page
					setGetTimeDates(getTimeDates + "i");

					errorLine.innerHTML = "Please input a vaild email";
					// makes line visiable after we write the error message
					errorLine.style.opacity = "100%";
				}
			} else {
				formSubmitTimeErorrs(selectedTimeSlot, errorLine);
			}
		} else {
			formSubmitTimeErorrs(selectedTimeSlot, errorLine);
		}
		setIsButtonDisabled(false);
		// set button back
		submitButton.innerHTML = "Submit";
		submitButton.style.background = "";
	};

	/**
	 * @param {Object} missingError - Takes in object to find what is missing from it
	 * @param {HTMLSelectElement} - display line on page
	 * @returns {null} null - Returns in nothing
	 * @description A separated function to handle all timeslot errors possible states and displays the appropriate message on the error line
	 * @author Brock <darkicewolf50@gmail.com>
	 */
	const formSubmitTimeErorrs = (missingError, errorLine) => {
		if (!missingError) {
			errorLine.innerHTML = "Please Select a Date and a Time";
		}
		// impossible state
		/*
		else if (missingError.date === null) {
		errorLine.innerHTML = "Please Select a Date";
    */
		else if (missingError.startTime === "" || missingError.startTime) {
			errorLine.innerHTML = "Please Select a Time";
		}

		// makes error line visible after we write the error message
		errorLine.style.opacity = "100%";
	};

	return (
		<>
			<form onSubmit={formsubmit}>
				<div id="InterviewForm">
					<div>
						<label htmlFor="name">Name:</label>
						<input
							type="text"
							id="fname"
							name="intervieweeName"
							placeholder="Jaeinceins"
							required
						/>
						<p>(what to call you)</p>
					</div>
					<div>
						<label htmlFor="email">UCalgary Email:</label>
						<input
							type="email"
							id="email"
							name="intervieweeEmail"
							placeholder="jaeinceins.bhaja@ucalgary.ca"
							required
						/>
						<p>(for interview confirmation email)</p>
					</div>
				</div>

				{/* Time Slot Selector */}
				<TimeDateSelector
					onTimeSlotSelect={(timeSlot) => setSelectedTimeSlot(timeSlot)}
					timeDateSelectorGet={getTimeDates}
				/>
				<div id="InterviewText">
					<h4>
						What to do if I cannot make it to any of the avaliable time slots or
						need to rescedule?
					</h4>
					<p>
						While we highly encourage sceduling an interview in one of the above
						time slots, we recongize that not everyone can make it work with
						their personal and university schedules.
					</p>
					<p>
						Please email us at{" "}
						<a href="mailto:uofcbaja@gmail.com">uofcbaja@gmail.com</a> to work
						out an alternate interview time or for rescheduling.
					</p>
				</div>

				<p id="InterviewError">Space For Errors Here</p>

				<div id="InterviewSubmit">
					<button
						type="submit"
						disabled={isButtonDisabled}
						id="InterviewButtonSubmit">
						Submit
					</button>
				</div>
			</form>

			{/* Success Dialog */}
			<dialog
				ref={dialogRef}
				id="InterviewDialog">
				{" "}
				{/* Add the `ref` attribute */}
				<h2>Booking Successful!</h2>
				<p>
					Thank you for booking your interview. We'll send an email confirming
					the time.
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
				<Link to={"/"}>
					<button>Check Out the rest of the site here</button>
				</Link>
			</dialog>
		</>
	);
}
