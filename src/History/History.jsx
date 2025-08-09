import UpdateBanner from "../Header/UpdateBanner";
import "./History.css";

import { Link } from "react-router-dom";
import React from "react";

/*
 * @todo move join to top
 */
export default function History() {
	let historyTimeLineInfo = [
		{
			year: "2024-2025",
			competitionCarImg:
				"https://res.cloudinary.com/dpgrgsh7g/image/upload/ar_1:1,c_fill,g_auto,w_400/v1754759943/DSCN7262_ithpcq.jpg",
			competitions: [
				{ location: "California", placement: "26th" },
				{ location: "Williamsport", placement: "65th" },
			],
		},
		{
			year: "2023-2024",
			competitionCarImg:
				"https://static.wixstatic.com/media/5824fc_128f7d18ed2f44c6883cc5b86cc1b2c2~mv2.jpg/v1/fill/w_732,h_675,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_20230504_084347041.jpg",
			competitions: [
				{ location: "California", placement: "26th" },
				{ location: "Williamsport", placement: "65th" },
			],
		},
		{
			year: "2323",
			competitionCarImg:
				"https://static.wixstatic.com/media/5824fc_7a03429a7efb4ca2978176a9e9f7d9e3~mv2.jpg/v1/fill/w_732,h_675,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/MVIMG_20190615_145709_edited.jpg",
			competitions: [
				{ location: "California", placement: "26th" },
				{ location: "Williamsport", placement: "65th" },
			],
		},
		{
			year: "1234",
			competitionCarImg:
				"https://static.wixstatic.com/media/5824fc_b2388960e7d44459abe5db3499b8ecc0~mv2.jpg/v1/fill/w_732,h_675,fp_0.50_0.36,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7.jpg",
			competitions: [
				{ location: "California", placement: "26th" },
				{ location: "Williamsport", placement: "65th" },
			],
		},
		{
			year: "54y67",
			competitionCarImg:
				"https://static.wixstatic.com/media/5824fc_7ee01b6e4cdf416c8affff42cc19637e~mv2.jpg/v1/fill/w_732,h_675,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0430.jpg",
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
				updatedImgUrl="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1754760952/DSCN7263_map0j4.jpg"
			/>
			<div>
				<p>
					Here's a look at our past vehicles and the competition results they
					achieved.
				</p>
				<p>Each result showcases the dedication and growth of our team.</p>
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
					<tr>
						{/* <td></td> */}
						<td
							className="symbol"
							id="HistoryJoin"
							colSpan={3}>
							<div>Where You Join!</div>
						</td>
						{/* <td></td> */}
					</tr>
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

			{competitions.map((comp, index) => {
				return (
					<ul key={comp + index}>
						<li key={index + "location"}>{comp.location}</li>
						<li key={index + "place"}>{comp.placement} place</li>
					</ul>
				);
			})}
		</div>
	);
}
