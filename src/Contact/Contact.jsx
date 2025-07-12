import UpdateBanner from "../Header/UpdateBanner";
import "./Contact.css";
import ContactUs from "./ContactUs";

export default function Contact() {
	return (
		<div id="Contact">
			{/* <UpdateBanner
				updatedTitleText=""
				updatedSubtitleText=""
				updatedImgUrl=""
				updatedImgAlt="Lorem Picsum"
				updatedHeaderBackgroundColour="black"
			/> */}
			<UpdateBanner
				updatedTitleText="Contact Us"
				updatedSubtitleText=""
				updatedImgUrl="https://picsum.photos/200"
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
			<ContactUs />
		</div>
	);
}
