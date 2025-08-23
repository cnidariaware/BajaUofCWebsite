import "./OurSponsors.css";
import { useEffect, useState } from "react";
import currentSponsorData from "../MockDB/sponsorship.yml";
import yaml from "js-yaml";
import UpdateBanner from "../Header/UpdateBanner";

/**
 * @param {null} null - requires onthing
 * @returns {JSX.Element} JSX - HTML tags and JS functionality
 * @description Our Sponsors Page
 * @author Brock <darkicewolf50@gmail.com>
 * @todo finish layout and add content
 */
const OurSponsors = () => {
	const [currentSponsorsDict, setCurrentSponsorsDict] = useState(); //variable states for the dictionary of sponsors
	// eslint-disable-next-line
	// const LinktoSponsorOutreachForm =
	// 	"https://docs.google.com/forms/d/e/1FAIpQLSd8eR1es9QJWjlQfGtpJaf8Jwv63d6Ei2e4FSpoBdkB6OiT4g/viewform?usp=sf_link";

	useEffect(() => {
		getCurrentSponsors();
	}, []);

	/**
	 * @param {null} null - requires nothing (link)
	 * @returns {Object} sponsorsDict - gets a Dictionary of our sponsors from synology drive
	 * @description Gets the list of sponsors from the synology drive (not implemented), converts the json file into a dictionary
	 * @author Brock <darkicewolf50@gmail.com>
	 * @todo add gPRC to backend and front end add connect to synology drive
	 */
	const getCurrentSponsors = async () => {
		try {
			const res = await fetch(currentSponsorData);
			const rawText = await res.text();
			const yamlDict = await yaml.load(rawText);
			setCurrentSponsorsDict(yamlDict);
		} catch (error) {
			//error checking
			console.log(error);
			console.error("Error recieving data from server:");
		}
	};

	return (
		<div id="OurSponsors">
			<UpdateBanner
				updatedTitleText="Sponsors"
				updatedSubtitleText=""
				updatedImgUrl="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755914692/IMG_6671_daaeeq.jpg"
			/>
			<div id="SponsorsAbout">
				<h2>Our partners are the foundation of our success.</h2>
				<p>
					By supporting us, you're helping shape the next generation of
					engineers. Our club members develop real-world skills, problem-solving
					abilities, and teamwork. And of course, with your help, we're one step
					closer to victory.
				</p>
				<ul>
					<li>
						<a href="/">Learn More</a>
					</li>
					<li>
						<a href="/">Support Us</a>
					</li>
				</ul>
			</div>
			<div id="Sponsor">
				{/* shows the current sponsors only after the data has been recieved */}
				{currentSponsorsDict === undefined ? (
					<p>Loading...</p>
				) : (
					<>
						{/* gets the outmost name of the Object Name of tier*/}
						{Object.keys(currentSponsorsDict).map((sponsorsTier) => {
							return (
								<div
									key={sponsorsTier}
									className="Sponsors">
									<h3>{sponsorsTier}</h3>
									<div>
										{/* gets key form list of tier */}
										{Object.keys(currentSponsorsDict[sponsorsTier]).map(
											(sponsorsKey) => {
												const sponsorsGroup =
													currentSponsorsDict[sponsorsTier][sponsorsKey];
												return Object.keys(sponsorsGroup).map((sponsorName) => {
													let sponsorData =
														currentSponsorsDict[sponsorsTier][sponsorsKey][
															sponsorName
														];
													let sponsorBronzeSilver =
														sponsorsTier !== "Silver Tier" &&
														sponsorsTier !== "Bronze Tier";
													return (
														<a
															key={sponsorData}
															href={sponsorData.Url}
															target="_blank"
															rel="noreferrer">
															<div>
																<img
																	src={sponsorData.LogoUrl}
																	alt={sponsorName + "'s Logo"}
																/>
																{sponsorBronzeSilver === true ? (
																	<div>
																		<h4>{sponsorName}</h4>
																		<p>{sponsorData.DescriptionAboutSponsor}</p>
																	</div>
																) : (
																	<div className="sponsorCenter">
																		<h4>{sponsorName}</h4>
																	</div>
																)}
															</div>
														</a>
													);
												});
											}
										)}
									</div>
								</div>
							);
						})}
					</>
				)}
			</div>
			<div id="SponsorAfter">
				<h2>Sponsorship Information</h2>
				<p>
					Our sponsors are the backbone of UCalgary Baja's success, providing
					support that allows our members to gain hands-on engineering
					experience as part of their education. Our team is entirely
					student-run, allowing members to develop skills beyond engineering,
					including design, fundraising, sourcing materials, team management,
					and project coordination.
				</p>
				<p>
					We deeply value the partnership with our sponsors, as their support
					makes every project and competition possible.
				</p>
				<p>
					If you're interested in sponsoring UCalgary Baja, please contact our
					team captain at []/click here/idk what else lol. Below, you can find
					our sponsorship package detailing the opportunities available.
				</p>
				<div>
					<p>Sponsorship Package (probably just a link)</p>
				</div>
			</div>
		</div>
	);
};

export default OurSponsors;
