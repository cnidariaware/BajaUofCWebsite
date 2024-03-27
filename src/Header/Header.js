import logo from "./logo.webp";
import lightDark from "./light-dark.webp";
import { Outlet, Link, Outlet } from "react-router-dom";
import "./Header.css";
import Ender from "../Footer/Ender";

/**
 * @param {null} null -  Takes in nothing
 * @returns {JSX.Element} JSX - HTML tags and JS functionality
 * @description The top header part of the page includes the naviagtion
 * @author Brock <darkicewolf50@gmail.com>
 * @todo final css add baja but eon (baja leads chat)
 */
const Header = () => {
	/**
	 * @param {null} null -  Takes in nothing
	 * @returns {CSSStyleRule} CSS - changes page to darkmode
	 * @description inverts all of the colors of body without touching the pictures
	 * @author Brock <darkicewolf50@gmail.com>
	 */
	const switchDarkMode = () => {
		const body = document.getElementById("root");
		const logoCss = document.getElementById("logo");

		body.classList.toggle("darkmode");
		logoCss.classList.toggle("logoAfterDark");
	};

	/**
	 * @param {null} null -  Takes in nothing
	 * @returns {CSSStyleRule} CSS - makes it compliant with bowser preferances
	 * @description checks for what the browser prefers
	 * @author Brock <darkicewolf50@gmail.com>
	 */
	document.addEventListener("DOMContentLoaded", () => {
		const prefersDarkMode =
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches;
		if (prefersDarkMode) {
			switchDarkMode();
		}
	});

	return (
		<>
			<header>
				<div>
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
					<button onClick={switchDarkMode}>
						<img
							id="darkModeToggle"
							src={lightDark}
							alt="Light/Dark Toggle Symbol"
						/>
					</button>
				</div>
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
			<Ender />
		</>
	);
};

export default Header;
