import "./Team.css";
import UpdateBanner from "../Header/UpdateBanner";

export default function Team() {
	let listofLeads = [
		{
			urlPhotoLink:
				"https://static.wixstatic.com/media/5824fc_1c487c2b3eac4ef6ac53a6d75b6867e1~mv2.jpg/v1/fill/w_420,h_497,fp_0.51_0.47,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Baja-14_edited.jpg",
			name: "Joshua Gall",
			descriptionOfLead:
				"I am in my final of mechanical engineering. This is my fifth and final year on the team!",
			subteam: "Team Captain",
		},
	];
	return (
		<>
			<UpdateBanner
				updatedTitleText="The Team"
				updatedSubtitleText=""
				updatedImgUrl="https://picsum.photos/200"
			/>
			<div id="team">
				<div>
					<h5>Interested in joining?</h5>
					<p>blurb about how you can develop your skills yada yada</p>
					<a href="mailto:uofcbaja@gamil.com">Contact Us</a>
				</div>
				<div>
					<h2>Meet the Team</h2>
					<div>
						<div>
							<h4>Team Leads</h4>
							<p>
								These are our team leads for the 2024 season. Team leads put in
								a lot of extra hours coordinating, mentoring, and helping their
								junior subteam members learn new design and manufacturing
								methods.
							</p>
						</div>
						<div></div>
					</div>
				</div>
			</div>
		</>
	);
}

function TeamIndividual(
	urlPhotoLink = "https://picsum.photos/200/200",
	name = "Bob",
	descriptionOfLead = "",
	subteam = "Temp Team"
) {
	return (
		<div className="teamInd">
			<img
				src={url_photo_link}
				alt={name + "'s headshot"}
			/>
			<h6>{subteam}</h6>
			<p>{descriptionofLead}</p>
		</div>
	);
}
