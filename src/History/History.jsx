import UpdateBanner from "../Header/UpdateBanner";
import "./History.css";

import { Link } from "react-router-dom";
import React from "react";

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
					Learn more about what we do at competition here.
				</p>
				<Link to={"/AboutUs"}>
					<button>Learn More</button>
				</Link>
			</div>
			<table>
				{/* <colgroup>
					<col />
					<col class="symbol" />
					<col />
				</colgroup> */}
				<tbody>
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

										<td className="symbol">
											<span className="dot">{/* Star or circle spot */}</span>
										</td>
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
										</td>

										<td className="symbol">
											<span className="dot">{/* Star or circle spot */}</span>
										</td>
										<td>
											<img
												src={yearInfo.competitionCarImg}
												alt={yearInfo.year + "'s Car"}
											/>
										</td>
									</>
								)}
							</tr>
						);
					})}
					<tr>
						<td></td>
						<td
							className="symbol"
							id="HistoryJoin">
							<div>Where You Join!</div>
						</td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

function CompetitionInfo({ year, competitions }) {
	return (
		<div
			key={year + competitions}
			className="HistoryCompInfo">
			<h2>{year}</h2>
			<h4>Overall Competition Results</h4>
			<ul>
				{competitions.map((comp, index) => {
					return (
						<React.Fragment key={comp + index}>
							<li key={index + "location"}>{comp.location}</li>
							<li key={index + "place"}>{comp.placement} place</li>
						</React.Fragment>
					);
				})}
			</ul>
		</div>
	);
}
