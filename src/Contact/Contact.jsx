import UpdateBanner from "../Header/UpdateBanner";
import "./Contact.css";

export default function Contact() {
	return (
		<div id="Contact">
			<UpdateBanner
				updatedTitleText=""
				updatedSubtitleText=""
				updatedImgUrl=""
				updatedImgAlt="Lorem Picsum"
				updatedHeaderBackgroundColour="black"
			/>
			<div>
				<div>
					<img
						src="https://static.wixstatic.com/media/5824fc_7b1be3e69c074f669945ecdbd23ce4ce~mv2.jpg/v1/fill/w_482,h_1068,fp_0.38_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/_MG_1822_edited.jpg"
						alt="Team members bending a tube"
					/>
					<img
						src="https://static.wixstatic.com/media/5824fc_b83d649723274d5aa1455380f96e35c3~mv2.jpg/v1/fill/w_482,h_1068,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/20240203_155632.jpg"
						alt="Team member filing"
					/>
					<img
						src="https://static.wixstatic.com/media/5824fc_065658fda1d94a7b8b620a7ce43a503d~mv2.jpg/v1/fill/w_482,h_1068,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/_MG_1830_edited.jpg"
						alt="Team member welding"
					/>
				</div>
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
			<img
				src="https://static.wixstatic.com/media/baac51_880011a7327649cd8870a61f80595ebf~mv2.jpg/v1/fill/w_2520,h_462,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/baac51_880011a7327649cd8870a61f80595ebf~mv2.jpg"
				alt="Carbon Fiber Transition"
				style={{ height: "30svh", width: "100%" }}
			/>
			<div>
				<a href="mailto:uofcbaja@gmail.com?subject=Lets start something great">
					<img
						src="https://www.svgrepo.com/show/390657/email-envelope-letter-mail-message-communication.svg"
						alt="email symbol"
					/>
				</a>
				<h1>Sponsor the Team</h1>
			</div>
		</div>
	);
}
