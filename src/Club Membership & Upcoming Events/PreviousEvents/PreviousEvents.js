import { useEffect, useState } from "react";
import yaml from "js-yaml";
import eventData from "../../MockDB/pastCompetitions.yml";

/**
 * @param {null} null - requires nothing
 * @returns {JSX.Element} PageContent - gets a Dictionary of our sponsors from synology drive
 * @description The Previous Events Page
 * @author Brock <darkicewolf50@gmail.com>
 * @todo css, change to Openpage on merge and add image slider
 */
const PreviousEvents = () => {
	const [previousCompetitionsDict, setPreviousCompetitionsDict] = useState();

	useEffect(() => {
		getPreviousCompetitions();
	}, []);
	/**
	 * @param {null} null - requires nothing (link)
	 * @returns {Object} previousCompetitionsDict - gets a Dictionary of our sponsors from synology drive
	 * @description Gets the list of previous Events from the synology drive (not implemented), converts the yaml file into a dictionary
	 * @author Brock <darkicewolf50@gmail.com>
	 * @todo add gPRC to backend and front end add connect to synology drive
	 */
	const getPreviousCompetitions = async () => {
		try {
			const res = await fetch(eventData);
			const rawText = await res.text();
			const yamlDict = yaml.load(rawText);
			setPreviousCompetitionsDict(yamlDict);
		} catch (error) {
			//error checking
			console.error("Error recieving data from server:");
		}
	};
	if (!previousCompetitionsDict) {
		return <p>Loading...</p>;
	}
	if (previousCompetitionsDict) {
		console.log(previousCompetitionsDict);
		return (
			<div id="upcomingEvents">
				<h2>Upcoming Competitions</h2>
				<div>
					{Object.keys(previousCompetitionsDict).map((competitionKey) => {
						//Selects make a dictionary of only that event to pull from
						const competition = previousCompetitionsDict[competitionKey];
						console.log(competition.SAEYoutubeLink);
						return (
							<table>
								<tbody>
									<thead>
										<tr>
											<td>
												<h3>{competitionKey}</h3>
											</td>
											<td>
												<td>
													<time>{competition.Date}</time>
												</td>
											</td>
										</tr>
									</thead>
									<tr>
										<td>
											<img
												src={competition.CarThatWeTookImageLink}
												alt={competitionKey + "'s Car"}
											/>
										</td>
									</tr>
									{competition.SAEYoutubeLink !== null && (
										<tr>
											<td>
												<iframe
													//to be removed late with css
													width="560"
													height="315"
													//
													src={competition.SAEYoutubeLink}
													title="YouTube video player"
													frameborder="0"
													allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
													allowfullscreen></iframe>
											</td>
											{/* make this a photo slider object */}
										</tr>
									)}
									{/* make this a photo slider object */}
								</tbody>
							</table>
						);
					})}
				</div>
				<div>
					<h2>This Year's Events</h2>
					<button>Upcoming Events</button>
					{/* will change to thing below when merged onto dev branch */}
					{/* <OpenPage pageToGoTo={"/UpcomingEvents"} textOnButton={"Upcoming Events"} /> */}
				</div>
			</div>
		);
	}
};

export default PreviousEvents;
