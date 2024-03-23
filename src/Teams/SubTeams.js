import "./SubTeams.css";
import { useState, useEffect } from "react";
import yaml from "js-yaml";
import leadershipData from "../MockDB/SubTeams.yml";

/**
 * @param {null} null - requires nothing (link)
 * @returns {JSX.Element} page - page content
 * @description the subteams page
 * @author Brock <darkicewolf50@gmail.com>
 * @todo add gPRC to backend and css
 */
const SubTeams = () => {
	const [subteamsDict, setSubteamsDict] = useState();
	const [subteamsArray, setSubteamsArray] = useState();

	useEffect(() => {
		getLeadership();
	}, []);
	/**
	 * @param {null} null - requires nothing (link)
	 * @returns {Object} sponsorsDict - gets a Dictionary of our sponsors from synology drive
	 * @description Gets the list of sponsors from the synology drive (not implemented), converts the json file into a dictionary
	 * @author Brock <darkicewolf50@gmail.com>
	 * @todo add gPRC to backend and front end add connect to synology drive
	 */
	const getLeadership = async () => {
		try {
			const res = await fetch(leadershipData);
			const rawText = await res.text();
			const yamlDict = await yaml.load(rawText);
			setSubteamsDict(yamlDict);
			setSubteamsArray(Object.values(yamlDict));
		} catch (error) {
			//error checking
			console.error("Error recieving data from server:");
		}
	};

	/**
	 * @param {index} Int - requires the number of the section to go to
	 * @returns {null} null - moves screen to a specific subteam section
	 * @description moves screen to the subteam's section upon click
	 * @author Brock <darkicewolf50@gmail.com>
	 * @todo add css pointer talbe elements
	 */
	const ScrolltoSubteamSection = (index) => {
		const section = document.querySelectorAll(".subteamTitle")[index];
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<div id="subteams">
			<h1>Get to Know Our Subteams</h1>
			{subteamsDict === undefined && subteamsArray === undefined ? (
				<p>Loading...</p>
			) : (
				<>
					<table>
						<tbody>
							{/* this really sucks it needs to be changed */}
							<tr>
								{/* row 1 */}
								<td
									onClick={() => {
										ScrolltoSubteamSection(0);
									}}>
									<img
										src={subteamsArray[0].iconUrl}
										alt={subteamsArray[0] + "'s Icon"}
									/>
								</td>
								{/* row 2 */}
								<td
									onClick={() => {
										ScrolltoSubteamSection(1);
									}}>
									<img
										src={subteamsArray[1].iconUrl}
										alt={subteamsArray[1] + "'s Icon"}
									/>
								</td>
								{/* row 3 */}
								<td
									onClick={() => {
										ScrolltoSubteamSection(2);
									}}>
									<img
										src={subteamsArray[2].iconUrl}
										alt={subteamsArray[2] + "'s Icon"}
									/>
								</td>
								{/* row 4 */}
								<td
									onClick={() => {
										ScrolltoSubteamSection(3);
									}}>
									<img
										src={subteamsArray[3].iconUrl}
										alt={subteamsArray[3] + "'s Icon"}
									/>
								</td>
								{/* row 5 */}
								<td
									onClick={() => {
										ScrolltoSubteamSection(4);
									}}>
									<img
										src={subteamsArray[4].iconUrl}
										alt={subteamsArray[4] + "'s Icon"}
									/>
								</td>
								{/* row 6 */}
								<td
									onClick={() => {
										ScrolltoSubteamSection(5);
									}}>
									<img
										src={subteamsArray[5].iconUrl}
										alt={subteamsArray[5] + "'s Icon"}
									/>
								</td>
								{/* row 7 */}
								<td
									onClick={() => {
										ScrolltoSubteamSection(6);
									}}>
									<img
										src={subteamsArray[6].iconUrl}
										alt={subteamsArray[6] + "'s Icon"}
									/>
								</td>
							</tr>
							<tr>
								{/* row 1 */}
								<td
									onClick={() => {
										ScrolltoSubteamSection(0);
									}}>
									<p>{subteamsArray[0].shortDescription}</p>
								</td>
								{/* row 2 */}
								<td
									onClick={() => {
										ScrolltoSubteamSection(1);
									}}>
									<p>{subteamsArray[1].shortDescription}</p>
								</td>
								{/* row 3 */}
								<td
									onClick={() => {
										ScrolltoSubteamSection(2);
									}}>
									<p>{subteamsArray[2].shortDescription}</p>
								</td>
								{/* row 4 */}
								<td
									onClick={() => {
										ScrolltoSubteamSection(3);
									}}>
									<p>{subteamsArray[3].shortDescription}</p>
								</td>
								{/* row 5 */}
								<td
									onClick={() => {
										ScrolltoSubteamSection(4);
									}}>
									<p>{subteamsArray[4].shortDescription}</p>
								</td>
								{/* row 6 */}
								<td
									onClick={() => {
										ScrolltoSubteamSection(5);
									}}>
									<p>{subteamsArray[5].shortDescription}</p>
								</td>
								{/* row 7 */}
								<td
									onClick={() => {
										ScrolltoSubteamSection(6);
									}}>
									<p>{subteamsArray[6].shortDescription}</p>
								</td>
							</tr>
						</tbody>
					</table>
					<div id="subteamContent">
						{/* lays out content from the subteams dict gets the name of the subteam and index */}
						{Object.keys(subteamsDict).map((subteamName, index) => {
							const subteam = subteamsDict[subteamName];
							//changes location of content based if the second one creates a checkerboard layout
							let className = index % 2 === 0 ? "subteamsEnd" : "";
							return (
								<div key={subteamName}>
									{/* changes layout if the second or first one */}
									{index % 2 === 0 ? (
										<>
											<div className={"subteamTitle " + className}>
												<img
													src={subteam.iconUrl}
													alt={subteamName + "'s Icon"}
													className={className}
												/>
												<h2 className={className}>{subteamName}</h2>
											</div>
											<div className="subteamData">
												<img
													src={subteam.subteamAtWork}
													alt={
														subteamName +
														"'s members work or working on a project"
													}
												/>
												<p>{subteam.longDescription}</p>
											</div>
										</>
									) : (
										<>
											<div className={"subteamTitle" + className}>
												<h2 className={className}>{subteamName}</h2>
												<img
													src={subteam.iconUrl}
													alt={subteamName + "'s Icon"}
													className={className}
												/>
											</div>
											<div className="subteamData">
												<p>{subteam.longDescription}</p>
												<img
													src={subteam.subteamAtWork}
													alt={
														subteamName +
														"'s members work or working on a project"
													}
												/>
											</div>
										</>
									)}
								</div>
							);
						})}
					</div>
				</>
			)}
		</div>
	);
};

export default SubTeams;
