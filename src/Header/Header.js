import logo from "./logo.png";
import { Outlet, Link } from "react-router-dom";
import "./Header.css";

/**
 * @param {null} null -  Takes in nothing
 * @returns {JSX.Element} JSX - HTML tags and JS functionality
 * @description The top header part of the page includes the naviagtion
 * @author Brock <darkicewolf50@gmail.com>
 * @todo convert any dropdowns and use <Link> just like <a> https://github.com/Akshpreet02/EventSphere
 */
const Header = () => {
	return (
		<>
			<header>
				<Link to={"/"}>
					<figure>
						<img
							id="logo"
							src={logo}
							alt="Schulich Off-Road's logo"
						/>
						<figcaption>
							<h1>Schulich Offroad</h1>
						</figcaption>
					</figure>
				</Link>

				<nav>
					<ul>
						<Link to={"/"}>
							<li>About Us</li>
						</Link>
						<Link to={"/Teams"}>
							<li>Teams</li>
						</Link>
						<Link to={"/OurSponsors"}>
							<li>Our Sponsors</li>
						</Link>
						<Link to={"/OurSponsors"}>
							<li>Become a Sponsor</li>
						</Link>
						<li className="DropDown">
							{/* this link and li only exits for styling purposes */}
							<Link>
								<li>Club Membership & Upcoming Events</li>
							</Link>

							<ul className="Hide">
								<Link to={"/JoinTheClub"}>
									<li>Join the Club</li>
								</Link>
								<Link to={"/UpcomingEvents"}>
									<li>Upcoming Events</li>
								</Link>
								<Link>
									<li>Previous Events</li>
								</Link>
							</ul>
						</li>
						<li className="DropDown">
							<Link>
								<li>More</li>
							</Link>
							<ul className="Hide">
								<Link>
									<li>Gallery</li>
								</Link>
								<Link>
									<li>Roster</li>
								</Link>
							</ul>
						</li>
					</ul>
				</nav>
			</header>
			<Outlet />
		</>
	);
};

export default Header;
