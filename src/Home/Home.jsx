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
				updatedSubtitleText="Catchphase goes here"
				updatedImgUrl="https://picsum.photos/200"
				updatetdImgAlt="cool shot of driver in car, replace later"
			/>
			<div className="HomePageLayout">
				<div>
					<img
						src="https://picsum.photos/200"
						alt="the team?"
					/>
					<div>
						<h2>Who We Are</h2>
						<p>
							UCalgary Baja is a student organization which designs, builds, and
							racing an off-road vehicle in the Baja SAE intercollegiate
							competition organized by the Society of Automotive Engineers (SAE)
							every year. Schulich Off-Road's cars are tough, dependable,
							competitive, and extremely fun to drive.
						</p>
						<p>
							UCalgary Baja is a team consisting of talented and determined
							competitive individuals in engineering who strive to expand their
							horizons, earn experience, and network with leading companies in
							their respective fields. Our members achieve this by being a part
							of one of our 6 sub-teams: Drivetrain, Logistics and Software,
							Suspension, Chassis and Ergonomics, Steering, and Electrical and
							Testing.
						</p>
						<Link to={"AboutUs"}>Learn More</Link>
					</div>
				</div>
				<div>
					<div>
						<h2>Join the Team</h2>
						<p>
							Students involved in UCalgary Baja gain practical experience in
							design and manufacturing by constructing various car components.
							They learn to balance cost, manufacturing limitations, and
							performance to develop optimal parts, budgets, and processes. This
							involves using CAD technology like SolidWorks and FEA simulations.
						</p>
						<p>
							Additionally, members acquire hands-on skills such as welding and
							operating metal cutting machines. Each team member handles a
							specific component, collaborating, researching, and
							troubleshooting throughout the design and execution process. After
							building the vehicle, students can attend competitions worldwide,
							where they must address issues promptly and work as a team to
							replace broken parts to stay competitive.
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
							<p>Sponsor 1</p>
							<p>Sponsor 2</p>
							<p>Sponsor 3</p>
						</div>
						<div>
							<p>Sponsor 4</p>
							<p>Sponsor 5</p>
							<p>Sponsor 6</p>
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
							UCalgary Baja is a student organization responsible for designing,
							building, and racing an off-road vehicle in the Baja SAE
							intercollegiate competition organized by the Society of Automotive
							Engineers (SAE) every year. Schulich Off-Road's cars are tough,
							dependable, competitive, and extremely fun to drive.
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
