import { useState } from "react";
import "./ContactUs.css";

/**
 * @param {null} null - Takes in nothing
 * @returns {JSX.element} JSX - HTML and JS functionality
 * @description The contact us form and the Get in touch blurb
 * @authors Brock <darkicewolf50@gmail.com>
 */
export default function ContactUs() {
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);

	/**
	 * @param {import("react").FormEvent} e - Takes in the event from submitting a form
	 * @returns {null} nothing - HTML and JS functionality
	 * @description Takes data from the form and passes it onto discord
	 * @authors Brock <darkicewolf50@gmail.com>
	 */
	const formSubmit = async (e) => {
		e.preventDefault();
		const submitButton = document.getElementById("ContactUsSubmit");
		setIsButtonDisabled(true);
		submitButton.innerHTML = "Loading..";
		submitButton.style.background = "grey";

		const formData = new FormData(e.target);
		const formObject = Object.fromEntries(formData.entries());
		const messageSend = {
			content: `***New Message***\n*Name*: ${formObject.Name}\n*Email*: [${formObject.Email}](mailto:${formObject.Email})\n*Message*: ${formObject.Message}`,
		};

		const res = await fetch(
			"https://discord.com/api/webhooks/1393689764888182794/1pLu0Kup643V9wetwb9jzo-QIkoy4qqY5ES_LwwCZrDugLGO5Xaj2F7Ioy39qNIz1XYo",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(messageSend),
			}
		);

		console.log("submitted ", formObject);
		setIsButtonDisabled(false);
		submitButton.innerHTML = "Submit";
		submitButton.style.background = "rgba(0, 128, 0, 0.6)";
	};

	return (
		<div id="ContactUs">
			<div>
				<h2>Get in Touch</h2>
				<p>
					Please feel free to reach out about questions, opporunities or just
					want to connect. Feel free to either fill out this form or contact me
					through one of the many of the platforms below
				</p>
			</div>
			<form onSubmit={formSubmit}>
				<label>Name</label>
				<input
					name="Name"
					required
				/>
				<label>Email</label>
				<input
					name="Email"
					type="email"
					required
				/>
				<label>Message</label>
				<textarea
					name="Message"
					required></textarea>
				<span></span>
				<button
					id="ContactUsSubmit"
					type="submit"
					disabled={isButtonDisabled}>
					Submit
				</button>
			</form>
		</div>
	);
}
