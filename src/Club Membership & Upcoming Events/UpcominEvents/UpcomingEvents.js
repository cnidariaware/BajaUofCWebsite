import { useEffect, useState } from "react";
import yaml from "js-yaml";
import "./UpcomingEvents.css";
import eventData from "../../MockDB/currentCompetition.yml";
import CountDownTimer from "../../CountDown/CountDownTimer";

/**
 * @param {null} null - requires nothing
 * @returns {JSX.Element} PageContent - gets a Dictionary of our sponsors from synology drive
 * @description The Upcoming Events Page
 * @author Brock <darkicewolf50@gmail.com>
 * @todo previous events button
 */
const UpcominEvents = () => {
	const [competitionsDict, setCompetitionsDict] = useState();

	useEffect(() => {
		getCompetitions();
	}, []);
	/**
	 * @param {null} null - requires nothing (link)
	 * @returns {Object} competitionsDict - gets a Dictionary of our sponsors from synology drive
	 * @description Gets the list of upcoming Events from the synology drive (not implemented), converts the yaml file into a dictionary
	 * @author Brock <darkicewolf50@gmail.com>
	 * @todo add gPRC to backend and front end add connect to synology drive
	 */
	const getCompetitions = async () => {
		try {
			const res = await fetch(eventData);
			const rawText = await res.text();
			const yamlDict = yaml.load(rawText);
			setCompetitionsDict(yamlDict);
		} catch (error) {
			//error checking
			console.error("Error recieving data from server:");
		}
	};
	if (!competitionsDict) {
		return <p>Loading...</p>;
	}
	if (competitionsDict) {
		return (
			<div id="upcomingEvents">
				<div id="upcomingEventsSideBorder">
					<h1>Upcoming Competitions</h1>
					<div></div>
				</div>
				<div id="Events">
					{Object.keys(competitionsDict).map((competitionKey) => {
						//Selects make a dictionary of only that event to pull from
						const competition = competitionsDict[competitionKey];

						//gets the start of the competition and puts it into a js Date object
						let matches = competition.Date.match(/^(\w+) (\d+)-(\d+), (\d{4})/);
						let month = matches[1];
						let StartofCompetition = parseInt(matches[2]);
						let year = parseInt(matches[4]);
						const dateofCompetition = new Date(
							year,
							monthIndex(month),
							StartofCompetition
						);

						return (
							<a
								key={competitionKey}
								href={competition.Link}
								target="_blank"
								rel="noreferrer">
								<table
									style={{
										backgroundImage: `url(${competition.ImageInRelationTo})`, // Assuming competition.ImageInRelationTo contains the URL of the image
										backgroundSize: "cover",
										backgroundRepeat: "no-repeat",
									}}>
									<tbody>
										<tr>
											<td>
												<h2>{competition.Name}</h2>
											</td>
											<td>
												<time>{competition.Date}</time>
											</td>
										</tr>
										<tr>
											<td>
												<CountDownTimer dateFinished={dateofCompetition} />
											</td>
										</tr>
									</tbody>
								</table>
							</a>
						);
					})}
				</div>
				<div>
					<div id="upcomingEventsSideBorder">
						<div></div>
						<h1>Previous Events</h1>
					</div>
					<button>Previous Events</button>
					{/* will change to thing below when merged onto dev branch */}
					{/* <OpenPage pageToGoTo={"/PreviuosEvents"} textOnButton={"Previous Events"} /> */}
				</div>
			</div>
		);
	}
};

const monthIndex = (monthName) => {
	return new Date(Date.parse(monthName + " 1, 2000")).getMonth();
};

export default UpcominEvents;
