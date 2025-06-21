import UpdateBanner from "../Header/UpdateBanner";
import "./History.css";

import { Link } from "react-router-dom";

export default function History() {
	let historyTimeLineInfo = [
		{
			year: "2024-2025",
			competitionCarImg: "https://picsum.photos/200",
			competitions: [
				{ location: "California", placement: "26th" },
				{ location: "Williamsport", placement: "65th" },
			],
		},
		{
			year: "2023-2024",
			competitionCarImg: "https://picsum.photos/200",
			competitions: [
				{ location: "California", placement: "26th" },
				{ location: "Williamsport", placement: "65th" },
			],
		},
	];

	return (
		<div id="History">
			<UpdateBanner
				updatedTitleText="History"
				updatedSubtitleText=""
				updatedImgUrl="https://picsum.photos/200"
			/>
			<div>
				<p>
					The history of our cars are below. They include overall competition
					results (as well as old competition stats if u wanna include that).
					Learn more about what we do at competitoin here.
				</p>
				<Link to={"/AboutUs"}>
					<button>Learn More</button>
				</Link>
			</div>
			<table>
				{historyTimeLineInfo.map((yearInfo, index) => {
					return (
						<tr key={index}>
							{index % 2 === 0 ? (
								<>
									<td>
										<img
											src={yearInfo.competitionCarImg}
											alt={yearInfo.year + "'s Car"}
										/>
									</td>
									<td>{/* Star or circle spot */}*</td>
									<td>
										<CompetitionInfo
											year={yearInfo.year}
											competitions={yearInfo.competitions}
										/>
									</td>
								</>
							) : (
								<>
									<td>
										<CompetitionInfo
											year={yearInfo.year}
											competitions={yearInfo.competitions}
										/>
										<td>{/* Star or circle spot */}*</td>
										<td>
											<img
												src={yearInfo.competitionCarImg}
												alt={yearInfo.year + "'s Car"}
											/>
										</td>
									</td>
								</>
							)}
						</tr>
					);
				})}
			</table>
		</div>
	);
}

function CompetitionInfo({ year, competitions }) {
	return (
		<>
			<h2>{year}</h2>
			<h4>Overall Competition Results</h4>
			<ul>
				{competitions.map((comp, index) => {
					return (
						<>
							<li key={index + "location"}>{comp.location}</li>
							<li key={index + "place"}>{comp.placement} place</li>
						</>
					);
				})}
				{/* <li>{competitions[0].location}</li>
				<li>{competitions[0].placement} place</li>
				<li>{competitions[1].location}</li>
				<li>{competitions[1].placement} place</li> */}
			</ul>
		</>
	);
}
