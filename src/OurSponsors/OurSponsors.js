import "./OurSponsors.css";
import { useEffect, useState } from "react";
import currentSponsorData from "../MockDB/sponsorship.yml";
import pastSponsorData from "../MockDB/pastSponsors.yml";
import yaml from "js-yaml";

/**
 * @param {null} null - requires onthing
 * @returns {JSX.Element} JSX - HTML tags and JS functionality
 * @description Our Sponsors Page
 * @author Brock <darkicewolf50@gmail.com>
 * @todo finsih layout and add content
 */
const OurSponsors = () => {
	const [currentSponsorsDict, setCurrentSponsorsDict] = useState(); //variable states for the dictionary of sponsors
	const [pastSponsorsDict, setPastSponsorsDict] = useState();

	useEffect(() => {
		getCurrentSponsors();
		getPastSponsors();
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
	/**
	 * @param {null} null - requires nothing (link)
	 * @returns {Object} sponsorsDict - gets a Dictionary of our sponsors from synology drive
	 * @description Gets the list of sponsors from the synology drive (not implemented), converts the json file into a dictionary
	 * @author Brock <darkicewolf50@gmail.com>
	 * @todo add gPRC to backend and front end add connect to synology drive
	 */
	const getPastSponsors = async () => {
		try {
			const res = await fetch(pastSponsorData);
			const rawText = await res.text();
			const yamlDict = await yaml.load(rawText);
			setPastSponsorsDict(yamlDict);
		} catch (error) {
			// error checking
			console.error("Error recieving data from server:");
		}
	};

	return (
		<div id="OurSponsors">
			<div id="BecomeASponsors">
				<h1>How sponsors help us</h1>
				<p>
					Schulich Off-Road expresses deep appreciation for sponsors' crucial
					support in various team operations, from sourcing parts to
					participating in competitions. Tailored sponsorship agreements
					acknowledge each sponsor's unique contributions. As a student-led
					team, every form of support, whether monetary or in goods and
					services, is essential for success. Past sponsor assistance includes:
				</p>
				<ul>
					<li>Design fabrication</li>
					<li>Material procurement</li>
					<li>Design consultations</li>
					<li>Software provision Travel funding for competitions</li>
				</ul>
				<p>
					These partnerships signify a commitment to excellence and innovation
					in engineering.
				</p>
				<h1>Become a sponsor</h1>
				<div>
					<a
						href="https://google.com"
						target="_blank"
						rel="noreferrer">
						<img
							src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1710699982/qr-code_l9q7ik.png"
							alt="QR code to contanct us form"
						/>
						<p>Click on this to open the contact form</p>
					</a>
					<p>
						Talk about how you can reach out to sponsor us. (Maybe also include
						a link to the form as well)
					</p>
				</div>
				<h1>Why Sponsor Us?</h1>
				<ul>
					<li>
						Objective: Connect sponsors with next generation of Canadian
						engineers
					</li>
					<li>
						Opportunity to work with Schulich Off-Road team and wider
						undergraduate community at University of Calgary who are a part of
						the Schulich Off-Road team
					</li>
					<li>
						Build mutually beneficial relationships with dedicated and ambitious
						students
					</li>
					<li>
						Benefits include perks for advertising and promoting services and
						company to team members
					</li>
					<li>
						Collaboration with leading companies to ensure members learn
						sought-after skills
					</li>
					<li>Mitigate frictional unemployment for graduating team members</li>
					<li>Networking opportunities for members with potential employers</li>
					<li>
						Employers can build connections with new generation of engineers to
						secure jobs and potential employees
					</li>
				</ul>
				<img
					src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1708797415/Screenshot_from_2024-02-24_10-52-24_nsn9uv.png"
					alt="A photo of our sponsorship package"
				/>
			</div>
			<div id="Sponsor">
				<h1>Current Sponsors</h1>
				{/* shows the current sponsors only after the data has been recieved */}
				{currentSponsorsDict === undefined ? (
					<p>Loading...</p>
				) : (
					<>
						{/* gets the outmost name of the Object Name of tier*/}
						{Object.keys(currentSponsorsDict).map((sponsorsTier) => {
							return (
								<div className="Sponsors">
									<h3>{sponsorsTier}</h3>
									{/* gets key form list of tier */}
									{Object.keys(currentSponsorsDict[sponsorsTier]).map(
										(sponsorsKey) => {
											return (
												<>
													{/* gets name out of object and gets data of that sponsor preped */}
													{Object.keys(
														currentSponsorsDict[sponsorsTier][sponsorsKey]
													).map((sponsorName) => {
														let sponsorData =
															currentSponsorsDict[sponsorsTier][sponsorsKey][
																sponsorName
															];
														return (
															<a
																href={sponsorData.Url}
																target="_blank"
																rel="noreferrer">
																<div>
																	<h4>{sponsorName}</h4>
																	<img
																		src={sponsorData.LogoUrl}
																		alt={sponsorName + "'s Logo"}
																	/>
																</div>
																{(sponsorsTier !== "Silver Tier" ||
																	sponsorsTier !== "Bronze Tier") && (
																	<div>
																		<p>{sponsorData.DescriptionAboutSponsor}</p>
																	</div>
																)}
															</a>
														);
													})}
												</>
											);
										}
									)}
								</div>
							);
						})}
					</>
				)}
			</div>
			<div id="Sponsor">
				<h1
					className="SponsorsTitle"
					id="SponsorEnd">
					Past Sponsors
				</h1>
				{/* shows past sponsors only when recieved, do not duplicate the sponsors from current ones */}
				{pastSponsorsDict === undefined ? (
					<p>Loading...</p>
				) : (
					<>
						{/* gets keys o objects in list */}
						{Object.keys(pastSponsorsDict).map((pastSponsorKey) => {
							return (
								<div className="Sponsors">
									{/* gets name of sponsor then uses it to get data of past sponsor */}
									{Object.keys(pastSponsorsDict[pastSponsorKey]).map(
										(pastSponsorName) => {
											let pastSponsors =
												pastSponsorsDict[pastSponsorKey][pastSponsorName];
											return (
												<a
													href={pastSponsors.Url}
													target="_blank"
													rel="noreferrer">
													<div>
														<h4>{pastSponsorName}</h4>
														<img
															src={pastSponsors.LogoUrl}
															alt={pastSponsorName + "'s Logo"}
														/>
													</div>
												</a>
											);
										}
									)}
								</div>
							);
						})}
					</>
				)}
			</div>
		</div>
	);
};

export default OurSponsors;
