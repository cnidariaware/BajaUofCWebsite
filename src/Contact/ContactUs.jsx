import "./ContactUs.css";

export default function ContactUs() {
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
			<div>
				<label>Name</label>
				<input />
				<label>Email</label>
				<input />
				<label>Message</label>
				<textarea></textarea>
				<span> 0</span>
				<button>Submit</button>
			</div>
		</div>
	);
}
