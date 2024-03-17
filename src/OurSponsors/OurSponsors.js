import "./OurSponsors.css";
import { useEffect, useState } from "react";
import currentSponsorData from "../MockDB/sponsorship.yml";
import pastSponsorData from "../MockDB/sponsorship.yml";
import yaml from "js-yaml";
import OpenPage from "../Header/OpenPage";

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
			const res = await fetch(currentSponsorData);
			const rawText = await res.text();
			const yamlDict = yaml.load(rawText);
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
			const yamlDict = yaml.load(rawText);
			setPastSponsorsDict(yamlDict);
		} catch (error) {
			//error checking
			console.error("Error recieving data from server:");
		}
	};

	if (!currentSponsorsDict && !pastSponsorsDict) {
		//awaiting for a resposne from the backend
		//add loading notification to user
		console.log(currentSponsorsDict);
		return <p>Loading...</p>;
	}
	if (currentSponsorsDict && pastSponsorsDict) {
		//maps out the dictionary and displays the content
		console.log(currentSponsorsDict);
		return (
			<div id="OurSponsors">
				<div id="BecomeASponsors">
					<OpenPage
						pageToGoTo={"/BecomeASponsor"}
						textOnButton={"Become a Sponsor"}
					/>
				</div>
				<div>
					<h3 className="SponsorsTitle">Current Sponsors</h3>
					{/* gets the outmost name of the Object {"Name of tier": {...}} */}
				</div>
				<div>
					<h3
						className="SponsorsTitle"
						id="SponsorFlexEnd">
						Past Sponsors
					</h3>
				</div>
			</div>
		);
	}
};

export default OurSponsors;
