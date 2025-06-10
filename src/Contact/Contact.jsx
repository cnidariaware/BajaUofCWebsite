import UpdateBanner from "../Header/UpdateBanner";
import "./Contact.css";

export default function Contact() {
	return (
		<>
			<UpdateBanner
				updatedTitleText="Contact Us"
				updatedSubtitleText=""
				updatedImgUrl="https://picsum.photos/200"
				updatetdImgAlt="Lorem Picsum"
			/>
			<div>
				<h1>Hours of Operation</h1>
				<a href="mailto:uofcbaja@gmail.com">
					<h4>Send us an email.</h4>
					<h4>uofcbaja@gmail.com</h4>
				</a>
				<ul>
					<li>Wednesday: 6pm - 8pm</li>
					<li>Saturday: 10am - 4pm</li>
				</ul>
			</div>
			<div>
				<h1>Join the team</h1>
				<div>
					<p>
						Applications are now on for the 2024-2025 season. Please take a look
						at our Instagram to see how you can apply!
					</p>
					<a href="https://www.instagram.com/ucalgarybaja/">@UofCBaja</a>
				</div>
			</div>
			<div>
				<h1>Sponsor the Team</h1>
				<a href="mailto:uofcbaja@gmail.com?subject=Lets start something great">
					<img
						src="https://www.svgrepo.com/show/390657/email-envelope-letter-mail-message-communication.svg"
						alt="email symbol"
					/>
				</a>
			</div>
		</>
	);
}
