import { Link } from "react-router-dom";
import "./Home.css";
import UpdateBanner from "../Header/UpdateBanner";

/**
 * @param {null} nothing - This takes in nothing
 * @returns {JSX.Element} Page - This returns the page
 * @description The Home page
 * @author Brock <darkicewolf50@gmail.com>
 */
export default function Home() {
	return (
		<>
			<UpdateBanner
				updatedTitleText="UCalgary Baja"
				updatedSubtitleText=""
				updatedImgUrl="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1748720160/Home_Baja_2025_soty4k.jpg"
				updatetdImgAlt="Lorem Picsum"
			/>
			<div className="HomePageLayout">
				<div>
					<img
						src="https://picsum.photos/200"
						alt="the team?"
					/>
					<div>
						<h2>What We Do</h2>
						<p>
							UCalgary Baja is a student organization which designs, builds, and
							racing an off-road vehicle in the Baja SAE competition organized
							by the Society of Automotive Engineers (SAE) every year. Schulich
							Off-Road's cars are tough, dependable, competitive, and extremely
							fun to drive.
						</p>
						<p>
							In UCalgary Baja, we gain practical experience in design and
							manufacturing by constructing various car components. We learn to
							balance cost, manufacturing limitations, and performance to
							develop optimal parts, budgets, and processes. This involves using
							CAD technology like SolidWorks and FEA simulations.
						</p>
						<Link to={"AboutUs"}>Learn More</Link>
					</div>
				</div>
				<div>
					<div>
						<h2>Who We Are</h2>
						<p>
							We are a team of engineering and business students who strive to
							expand our horizons in our respective fields by getting real
							world, hands on experience. Our members achieve this by being a
							part of one of our 9 sub-teams: Suspension, Chassis, Ergonomics,
							Steering, Powertrain, Final Drive, Electrical, Software, and
							Business.
						</p>
						<p>
							Each subteam handles a specific component, collaborating,
							researching, and troubleshooting throughout the design process.
							After building the vehicle, we attend competitions in the United
							States, where our hard work is put to the test against the other
							teams from all across the world.
						</p>
						<Link to={"/"}>Learn More</Link>
						{/* Replace with Join later*/}
					</div>
					<img
						src="https://picsum.photos/200"
						alt="possibly a montage mainly showcasing team members working"
					/>
				</div>
				<div id="HomeSponsors">
					<h2>Sponsor Section</h2>
					<div>
						<div>
							<div>
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj9L3ZGK6WtOmJbzxmCzRxwLXYKGC5SDcAKHb0ScfbUmbtG0IujQt6eQDaI_Pm9g4DZvc&usqp=CAU"
									alt="Schulich logo"
								/>
								<h3>Schulich School of Engineering</h3>
							</div>
							<div>
								<img
									src="https://static.wixstatic.com/media/5824fc_2eca210b7d4a49298a70ad1f0a61886e~mv2.jpg/v1/crop/x_0,y_1,w_2707,h_1353/fill/w_410,h_206,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/5824fc_2eca210b7d4a49298a70ad1f0a61886e~mv2.jpg"
									alt=""
								/>
								<h3>Morphgenix</h3>
							</div>
							<div>
								<img
									src="https://www.3ds.com/assets/3ds-navigation/3DS_corporate-logo_solidworks.svg"
									alt=""
								/>
								<h3>Solidworks</h3>
							</div>
						</div>
					</div>
					<div id="HomeSponsorLinks">
						<Link to={"/OurSponsors"}>See All</Link>
						<Link to={"/OurSponsors"}>Support Us</Link>
					</div>
				</div>
				<div>
					<img
						src="https://picsum.photos/200"
						alt="something to do with sponsors"
					/>
					<div>
						<h2>Sponsor Us</h2>
						<p>
							We appreciate all the help we get from sponsors because it helps
							fund our Baja team with essential parts, materials, manufacturing
							support, and ability to go to competitions. Their contributions
							make it possible for us to design, build, and compete at a high
							level. From donated components to financial backing, our sponsors
							are a key part of what drives our team forward.
						</p>
						<Link to={"/OurSponsors"}>Learn More</Link>
					</div>
				</div>
				<div id="HomeBottomGallery">
					<img
						src="https://picsum.photos/200"
						alt="(If we do a rotating images thing for the top, and still want to keep this on the bottom, maybe we can change it to a more collage type thing for this box)"
					/>
				</div>
			</div>
		</>
	);
}
