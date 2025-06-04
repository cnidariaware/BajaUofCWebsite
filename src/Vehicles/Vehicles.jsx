import UpdateBanner from "../Header/UpdateBanner";
import "./Vehicles.css";

export default function Vehicles() {
	let vechiles_info = [
		{
			year: "2019-2023",
			vehicle_img_link:
				"https://static.wixstatic.com/media/5824fc_128f7d18ed2f44c6883cc5b86cc1b2c2~mv2.jpg/v1/fill/w_732,h_675,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_20230504_084347041.jpg",
			display_year: "'23",
			features:
				"First time implementing 4WD and chromoly tubing for the frame, custom rear half shafts, custom gearbox",
			competitions: [
				{ location: "Oshkosh, WI", competition_year: 2023, placement: "22nd" },
				{ location: "Portland, OR", competition_year: 2023, placement: "26th" },
			],
		},
		{
			year: 2019,
			vehicle_img_link:
				"https://static.wixstatic.com/media/5824fc_7a03429a7efb4ca2978176a9e9f7d9e3~mv2.jpg/v1/fill/w_732,h_675,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/MVIMG_20190615_145709_edited.jpg",

			display_year: "'19",
			features:
				"Custom gearbox, TIG welded frame, custom front hubs, top 10 finish at second competition",
			competitions: [
				{ location: "Rochester, NY", competition_year: 2019, placement: "8th" },
				{
					location: "Gorman, CA",
					competition_year: 2019,
					placement: "49th",
				},
			],
		},
		{
			year: "2018",
			vehicle_img_link:
				"https://static.wixstatic.com/media/5824fc_b2388960e7d44459abe5db3499b8ecc0~mv2.jpg/v1/fill/w_732,h_675,fp_0.50_0.36,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7.jpg",
			display_year: "'18",
			features: "Custom gearbox",
			competitions: [
				{ location: "Portland, OR", competition_year: 2018, placement: "26th" },
			],
		},
		{
			year: 2017,
			vehicle_img_link:
				"https://static.wixstatic.com/media/5824fc_7ee01b6e4cdf416c8affff42cc19637e~mv2.jpg/v1/fill/w_732,h_675,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0430.jpg",
			display_year: "'17",
			features:
				"Custom gearbox, first-time implementing control link, and h arm suspension in the rear",
			competitions: [
				{ location: "Illinois", competition_year: "2017", placement: "41st" },
			],
		},
	];
	return (
		<>
			<UpdateBanner
				updatedTitleText=""
				updatedSubtitleText=""
				updatedImgUrl=""
				updatetdImgAlt=""
			/>
			<div id="vehicles">
				<h1>VIEW OUR PAST VEHICLES</h1>
				<div>
					{Object.values(vechiles_info).map((vechile_info) => {
						// console.log(vechile_info);
						// style={{backgroundImage: `url(${vechile_info})`}}
						return (
							<div>
								<figure
									style={{
										backgroundImage: `url(${vechile_info.vehicle_img_link})`,
									}}>
									<h4>{vechile_info.display_year}</h4>
								</figure>
								<figcaption>
									<p>{"Features: " + vechile_info.features}</p>
									<table>
										<thead>Competions</thead>
										{Object.values(vechile_info.competitions).map(
											(competition_info) => {
												return (
													<tr>
														<td>{competition_info.location}</td>
														<td>{competition_info.competition_year}</td>
														<td>{competition_info.placement + " Place"}</td>
													</tr>
												);
											}
										)}
									</table>
								</figcaption>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
