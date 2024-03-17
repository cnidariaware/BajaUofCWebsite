import "./OurSponsors.css";
import { useEffect, useState } from "react";
import currentSponsorData from "../MockDB/sponsorship.yml";
import pastSponsorData from "../MockDB/pastSponsors.yml";
import yaml from "js-yaml";
import OpenPage from "../Header/OpenPage";
import fakeDelay from "../TestingTools/fakeDelay";

/**
 * @param {null} null - requires onthing
 * @returns {JSX.Element} JSX - HTML tags and JS functionality
 * @description Our Sponsors Page
 * @author Brock <darkicewolf50@gmail.com>
 * @todo finish page layout
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
			await fakeDelay(5000);
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
				<OpenPage
					pageToGoTo={"/BecomeASponsor"}
					textOnButton={"Become a Sponsor"}
				/>
			</div>
			<div id="Sponsor">
				<h2 className="SponsorsTitle">Current Sponsors</h2>
				{/* gets the outmost name of the Object Name of tier*/}
				{currentSponsorsDict === undefined ? (
					<p>Loading...</p>
				) : (
					<div>
						{Object.keys(currentSponsorsDict).map((sponsorsTier) => {
							return (
								<div className="Sponsors">
									<h3>{sponsorsTier}</h3>
									{/* gets key form list of tier */}
									{Object.keys(currentSponsorsDict[sponsorsTier]).map(
										(sponsorsKey) => {
											return (
												<div>
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
												</div>
											);
										}
									)}
								</div>
							);
						})}
					</div>
				)}
			</div>
			<div id="Sponsor">
				<h2
					className="SponsorsTitle"
					id="SponsorEnd">
					Past Sponsors
				</h2>
				{pastSponsorsDict === undefined ? (
					<p>Loading...</p>
				) : (
					<div>
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
					</div>
				)}
			</div>
		</div>
	);
};

export default OurSponsors;
