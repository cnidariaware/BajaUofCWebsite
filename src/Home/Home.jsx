import UpdateBanner from "../Header/UpdateBanner";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import yaml from "js-yaml";

import "./Home.css";
import sponsorsyaml from "../MockDB/sponsorship.yml";

export default function Home() {
	const [currentSponsors, setCurrentSponsors] = useState();

	useEffect(() => {
		getCurrentSponsors();
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
			const res = await fetch(sponsorsyaml);
			const rawText = await res.text();
			const yamlDict = await yaml.load(rawText);
			setCurrentSponsors(yamlDict);
		} catch (error) {
			//error checking
			console.log(error);
			console.error("Error recieving data from server:");
		}
	};

	return (
		<>
			<UpdateBanner
				updatedTitleText="UCalgary Baja"
				updatedSubtitleText="University of Calgary Baja SAE"
				updatedImgUrl="https://static.wixstatic.com/media/29f2faf621bf40e4b92ca52cfd7e9cdc.jpg/v1/fill/w_1706,h_1979,fp_0.57_0.48,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/29f2faf621bf40e4b92ca52cfd7e9cdc.jpg"
				updatetdImgAlt="Pavement with some crosswalks on them"
			/>
			<div id="Home">
				<h2>Our Sponsors</h2>
				<div id="HomeSponsors">
					{currentSponsors === undefined ? (
						<p>Loading...</p>
					) : (
						<>
							{Object.keys(currentSponsors).map((sponsorTier) =>
								Object.keys(currentSponsors[sponsorTier]).map(
									(sponsorListPos) =>
										Object.keys(
											currentSponsors[sponsorTier][sponsorListPos]
										).map((sponsorName) => {
											let sponsorDetail =
												currentSponsors[sponsorTier][sponsorListPos][
													sponsorName
												];
											console.log(sponsorTier, sponsorName, sponsorDetail);
											return sponsorDetail !== null ? (
												sponsorDetail.Url !== "" &&
												sponsorDetail.LogoUrl !== null ? (
													<a
														href={sponsorDetail.Url}
														key={sponsorName}>
														<img
															src={sponsorDetail.LogoUrl}
															alt={sponsorName + "'s logo"}
														/>
														<p>{sponsorTier} Sponsor</p>
													</a>
												) : null
											) : null;
										})
								)
							)}
						</>
					)}
				</div>
				<div>Mini Gallery</div>
				<div id="HomeAboutUs">
					<img
						src="https://static.wixstatic.com/media/5824fc_f65d87b07f23407087a1bd60766d9548~mv2.jpg/v1/fill/w_846,h_1194,fp_0.50_0.48,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/thumbnail_DE9F07D7-298D-4FFD-9192-27854CB866AA.jpg"
						alt="Blue baja car racing on muddy track"
					/>
					<div>
						<h3>About Our Team</h3>
						<p>
							UCalgary Baja is a student organization responsible for designing,
							building, and racing an off-road vehicle in the Baja SAE
							intercollegiate competition organized by the Society of Automotive
							Engineers (SAE). UCalgary Baja's cars are tough, dependable,
							competitive, and extremely fun to drive.
						</p>
						<p>
							We compete in the Baja SAE competition every year. An average of
							100 teams from all corners of the globe compete in the event - the
							US, Canada, Mexico, India, China, Brazil, Korea, and more. The
							competition is ferocious, and the race is treacherous; more than
							half of the cars that start the race never finish.{" "}
						</p>
						<Link to="/About">Learn More</Link>
					</div>
				</div>
			</div>
		</>
	);
}
