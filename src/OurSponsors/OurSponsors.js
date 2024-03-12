import "./OurSponsors.css";
import { useEffect, useState } from "react";
import sponsorData from "../MockDB/sponsorship.yml";
import yaml from "js-yaml";
import OpenPage from "../Header/OpenPage";

/**
 * @param {null} null - requires onthing
 * @returns {JSX.Element} JSX - HTML tags and JS functionality
 * @description Our Sponsors Page
 * @author Brock <darkicewolf50@gmail.com>
 * @todo add link to become a sponsor at top, and thank you message
 */
const OurSponsors = () => {
	const [sponsorsDict, setSponsorsDict] = useState(); //variable states for the dictionary of sponsors

	useEffect(() => {
		getSponsors();
	}, []);

	/**
	 * @param {null} null - requires nothing (link)
	 * @returns {Object} sponsorsDict - gets a Dictionary of our sponsors from synology drive
	 * @description Gets the list of sponsors from the synology drive (not implemented), converts the json file into a dictionary
	 * @author Brock <darkicewolf50@gmail.com>
	 * @todo add gPRC to backend and front end add connect to synology drive
	 */
	const getSponsors = async () => {
		const res = await fetch(sponsorData);
		const rawText = await res.text();
		const yamlDict = yaml.load(rawText);
		try {
			let res = yamlDict;
			setSponsorsDict(res);
		} catch (error) {
			//error checking
			console.error("Error recieving data from server:");
		}
	};

	if (!sponsorsDict) {
		//awaiting for a resposne from the backend
		return <p>Loading...</p>;
	}
	if (sponsorsDict) {
		//maps out the dictionary and displays the content
		return (
			<div id="OurSponsors">
				<div id="BecomeASponsors">
					<OpenPage
						pageToGoTo={"/BecomeASponsor"}
						textOnButton={"Become a Sponsor"}
					/>
				</div>
				<div id="CurrentSponosrs">
					<h3>Current Sponsors</h3>
					{Object.keys(sponsorsDict).map((sponsorTier) => (
						<div
							key={sponsorTier}
							className={sponsorTier}>
							<h2>{sponsorTier}</h2>
							{Object.keys(sponsorsDict[sponsorTier]).map((sponsorKey) => {
								const sponsor = sponsorsDict[sponsorTier][sponsorKey];
								return (
									<div key={sponsorKey}>
										<div>
											<div>
												{sponsor.Name && <h3>{sponsor.Name}</h3>}
												{sponsor.LogoUrl && (
													<a
														href={sponsor.Url}
														rel="noreferrer"
														target="_blank">
														<img
															src={sponsor.LogoUrl}
															alt={
																sponsor.Name +
																"'s logo, one of the companies that sponsors Schulich Off-Road"
															}
														/>
													</a>
												)}
											</div>
											{sponsor.DescriptionAboutSponsor !== undefined &&
												sponsor.DecriptionOnHelp !== undefined &&
												(sponsorTier !== "Bronze Tier" ||
													sponsorTier !== "Silver Tier") && (
													<p>Another Element</p>
												)}
										</div>
										{sponsor.DescriptionAboutSponsor !== undefined &&
											(sponsorTier !== "Bronze Tier" ||
												sponsorTier !== "Silver Tier") && (
												<p>{sponsor.DescriptionAboutSponsor}</p>
											)}
										{sponsor.DecriptionOnHelp !== undefined &&
											(sponsorTier !== "Bronze Tier" ||
												sponsorTier !== "Silver Tier") && (
												<p>{sponsor.DecriptionOnHelp}</p>
											)}
									</div>
								);
							})}
						</div>
					))}
				</div>
			</div>
		);
	}
};

export default OurSponsors;
