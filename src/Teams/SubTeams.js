import "./SubTeams.css";
import { useState, useEffect } from "react";
import yaml from "js-yaml";
import leadershipData from "../MockDB/Leadership.yml";

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
	console.log(subteamsDict);

	return (
		<div id="Subteams">
			<h2>Get to Know Our Subteams</h2>
			{subteamsDict === undefined && subteamsArray === undefined ? (
				<p>Loading...</p>
			) : (
				<>
					<table>
						<tbody>
							{/* this really sucks it needs to be changed */}
							<tr>
								{/* row 1 */}
								<td>
									<img
										src={subteamsArray[0].url}
										alt={subteamsArray[0] + "'s Icon"}
									/>
								</td>
								{/* row 2 */}
								<td>
									<img
										src={subteamsArray[1].url}
										alt={subteamsArray[1] + "'s Icon"}
									/>
								</td>
								{/* row 3 */}
								<td>
									<img
										src={subteamsArray[2].url}
										alt={subteamsArray[2] + "'s Icon"}
									/>
								</td>
								{/* row 4 */}
								<td>
									<img
										src={subteamsArray[3].url}
										alt={subteamsArray[3] + "'s Icon"}
									/>
								</td>
								{/* row 5 */}
								<td>
									<img
										src={subteamsArray[4].url}
										alt={subteamsArray[4] + "'s Icon"}
									/>
								</td>
								{/* row 6 */}
								<td>
									<img
										src={subteamsArray[5].url}
										alt={subteamsArray[5] + "'s Icon"}
									/>
								</td>
								{/* row 7 */}
								<td>
									<img
										src={subteamsArray[6].url}
										alt={subteamsArray[6] + "'s Icon"}
									/>
								</td>
							</tr>
							<tr>
								{/* row 1 */}
								<td>
									<p>{subteamsArray[0].shortDescription}</p>
								</td>
								{/* row 2 */}
								<td>
									<p>{subteamsArray[1].shortDescription}</p>
								</td>
								{/* row 3 */}
								<td>
									<p>{subteamsArray[2].shortDescription}</p>
								</td>
								{/* row 4 */}
								<td>
									<p>{subteamsArray[3].shortDescription}</p>
								</td>
								{/* row 5 */}
								<td>
									<p>{subteamsArray[4].shortDescription}</p>
								</td>
								{/* row 6 */}
								<td>
									<p>{subteamsArray[5].shortDescription}</p>
								</td>
								{/* row 7 */}
								<td>
									<p>{subteamsArray[6].shortDescription}</p>
								</td>
							</tr>
						</tbody>
					</table>
					<div>
						{Object.keys(subteamsDict).map((subteamName, index) => {
							const subteam = subteamsDict[subteamName];
							const className = index % 2 === 0 ? "SubteamsEnd" : "";
							return (
								<div>
									<h2 className={className}>{subteamName}</h2>
									<p>{subteam.longDescription}</p>
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
