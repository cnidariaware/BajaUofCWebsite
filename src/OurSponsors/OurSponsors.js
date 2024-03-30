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
	const LinktoSponsorOutreachForm =
		"https://docs.google.com/forms/d/e/1FAIpQLSd8eR1es9QJWjlQfGtpJaf8Jwv63d6Ei2e4FSpoBdkB6OiT4g/viewform?usp=sf_link";

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
				<div>
					<h1 id="h1Exception">How sponsors help us</h1>
					<p>
						Schulich Off-Road expresses deep appreciation for sponsors' crucial
						support in various team operations, from sourcing parts to
						participating in competitions. Tailored sponsorship agreements
						acknowledge each sponsor's unique contributions. As a student-led
						team, every form of support, whether monetary or in goods and
						services, is essential for success. Past sponsor assistance
						includes:
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
				</div>
				<div>
					<h1>Become a sponsor</h1>
					<div>
						<a
							href={LinktoSponsorOutreachForm}
							target="_blank"
							rel="noreferrer">
							<img
								src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1711588091/qr-code_z5kmef.png"
								alt="QR code to contanct us form"
							/>
							<p>Click on this to open the contact form</p>
						</a>
						<p>
							Talk about how you can reach out to sponsor us. (Maybe also
							include a link to the form as well)
						</p>
					</div>
				</div>
				<div>
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
							Build mutually beneficial relationships with dedicated and
							ambitious students
						</li>
						<li>
							Benefits include perks for advertising and promoting services and
							company to team members
						</li>
						<li>
							Collaboration with leading companies to ensure members learn
							sought-after skills
						</li>
						<li>
							Mitigate frictional unemployment for graduating team members
						</li>
						<li>
							Networking opportunities for members with potential employers
						</li>
						<li>
							Employers can build connections with new generation of engineers
							to secure jobs and potential employees
						</li>
					</ul>
					<a
						href={LinktoSponsorOutreachForm}
						target="_blank"
						rel="noreferrer">
						<table>
							<caption>
								<h3>Sponsor Packages</h3>
							</caption>
							<thead>
								<tr>
									<td>{/*blank on purpose to add spcae for a black box */}</td>
									<td>Diamond $10,000+</td>
									<td>Platinum $5000</td>
									<td>Gold $1000</td>
									<td>Silver $500</td>
									<td>Bronze $200</td>
								</tr>
							</thead>
							<tbody>
								<tr className="evenRow">
									<td>Skill Development</td>
									<td>8</td>
									<td>4</td>
									<td>2</td>
									<td></td>
									<td></td>
								</tr>
								<tr className="oddRow">
									<td>Shop Visits</td>
									<td>&#10003;</td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr className="evenRow">
									<td>Interviews</td>
									<td>&#10003;</td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr className="oddRow">
									<td>Portfolios</td>
									<td>&#10003; (Detailed)</td>
									<td>&#10003;</td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr className="evenRow">
									<td>Company Into to team</td>
									<td>&#10003;</td>
									<td>&#10003;</td>
									<td>&#10003;</td>
									<td></td>
									<td></td>
								</tr>
								<tr className="oddRow">
									<td>Custom Gift</td>
									<td>&#10003;</td>
									<td>&#10003;</td>
									<td>&#10003;</td>
									<td></td>
									<td></td>
								</tr>
								<tr className="evenRow">
									<td>Branding on Apperal (single colour)</td>
									<td>On full sleeve</td>
									<td>On Sleeve Forearm</td>
									<td>Medium on back</td>
									<td>Small on back</td>
									<td>Small on back</td>
								</tr>
								<tr className="oddRow">
									<td>Logo on Vehicle</td>
									<td>
										36in<sup>2</sup>
									</td>
									<td>
										28in<sup>2</sup>
									</td>
									<td>
										20in<sup>2</sup>
									</td>
									<td>
										10in<sup>2</sup>
									</td>
									<td></td>
								</tr>
								<tr className="evenRow">
									<td>Social Media (Min.)</td>
									<td>Once/2 Weeks</td>
									<td>Once/Month</td>
									<td>Once/3 Month</td>
									<td>Once/6 Month</td>
									<td>Once/12 Month</td>
								</tr>
							</tbody>
						</table>
					</a>
				</div>
			</div>
			<div id="Sponsor">
				<div id="sideBorder">
					<h1>Current Sponsors</h1>
					<div></div>
				</div>
				{/* shows the current sponsors only after the data has been recieved */}
				{currentSponsorsDict === undefined ? (
					<p>Loading...</p>
				) : (
					<>
						{/* gets the outmost name of the Object Name of tier*/}
						{Object.keys(currentSponsorsDict).map((sponsorsTier) => {
							let changetoGridStyle =
								sponsorsTier === "Diamond Tier" ||
								sponsorsTier === "Platinum Tier";
							let girdContainer = changetoGridStyle
								? ""
								: "sponsorGridContainer";
							let gridItem = changetoGridStyle ? "" : "sponsorGridItem";

							return (
								<div
									key={sponsorsTier}
									className="Sponsors">
									<h3>{sponsorsTier}</h3>
									<div className={girdContainer}>
										{/* gets key form list of tier */}
										{Object.keys(currentSponsorsDict[sponsorsTier]).map(
											(sponsorsKey) => {
												return (
													<div key={sponsorsKey}>
														{/* gets name out of object and gets data of that sponsor preped */}
														{Object.keys(
															currentSponsorsDict[sponsorsTier][sponsorsKey]
														).map((sponsorName) => {
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
																	className={gridItem}
																	rel="noreferrer">
																	<div>
																		<img
																			src={sponsorData.LogoUrl}
																			alt={sponsorName + "'s Logo"}
																		/>
																		{sponsorBronzeSilver === true ? (
																			<div>
																				<h3>{sponsorName}</h3>
																				<p>
																					{sponsorData.DescriptionAboutSponsor}
																				</p>
																			</div>
																		) : (
																			<div className="sponsorCenter">
																				<h3>{sponsorName}</h3>
																			</div>
																		)}
																	</div>
																</a>
															);
														})}
													</div>
												);
											}
										)}
									</div>
								</div>
							);
						})}
					</>
				)}
			</div>
			<div id="Sponsor">
				<div id="sideBorder">
					<div></div>
					<h1
						className="SponsorsTitle"
						id="SponsorEnd">
						Past Sponsors
					</h1>
				</div>

				{/* shows past sponsors only when recieved, do not duplicate the sponsors from current ones */}
				{pastSponsorsDict === undefined ? (
					<p>Loading...</p>
				) : (
					<>
						<div className="Sponsors sponsorGridContainer">
							{/* gets keys o objects in list */}
							{Object.keys(pastSponsorsDict).map((pastSponsorKey) => {
								return (
									<>
										{/* gets name of sponsor then uses it to get data of past sponsor */}
										{Object.keys(pastSponsorsDict[pastSponsorKey]).map(
											(pastSponsorName) => {
												let pastSponsors =
													pastSponsorsDict[pastSponsorKey][pastSponsorName];
												return (
													<a
														href={pastSponsors.Url}
														target="_blank"
														className="sponsorGridItem"
														rel="noreferrer">
														<div>
															<img
																src={pastSponsors.LogoUrl}
																alt={pastSponsorName + "'s Logo"}
															/>
															<div className="sponsorCenter">
																<h3>{pastSponsorName}</h3>
															</div>
														</div>
													</a>
												);
											}
										)}
									</>
								);
							})}
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default OurSponsors;
