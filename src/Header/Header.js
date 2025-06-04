import logo from "./logo.png";
import lightDark from "./light-dark.webp";
import { Outlet, Link } from "react-router-dom";
import "./Header.css";
import Ender from "../Footer/Ender";
import { useState } from "react";

/**
 * @param {null} nothing - Takes in nothing
 * @returns {JSX.Element} JSX - HTML tags and JS functionality
 * @description The top header part of the page includes the naviagtion
 * @author Brock <darkicewolf50@gmail.com>
 * @todo add appropriate links
 */
export default function Header() {
	const [bannerInfo, setBannerInfo] = useState({
		titleText: "UCalgary Baja",
		subtitleText: "Hello",
		imgUrl: "https://picsum.photos/200",
		headerPostion: "absolute",
	});

	/**
	 * @param {null} nothing -  Takes in nothing
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
	 * @param {null} nothing -  Takes in nothing
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
			<header
				style={{
					position:
						bannerInfo.titleText === "" && bannerInfo.imgUrl === ""
							? "relative"
							: "absolute",
				}}>
				<Link to={"/"}>
					<img
						id="logo"
						src={logo}
						alt="Schulich Off-Road's logo"
					/>
				</Link>
				<nav>
					<ul>
						<Link to={"/"}>
							<li id="FirstNav">HOME</li>
						</Link>
						<Link to={"/About"}>
							<li>ABOUT</li>
						</Link>
						<Link to={"/Vehicles"}>
							<li>OUR VEHICLES</li>
						</Link>
						<Link to={"/"}>
							<li>HISTORY</li>
						</Link>
						<Link to={"/OurSponsors"}>
							<li>SPONSORS</li>
						</Link>
						{/* <Link to={"/OurSponsors"}>
							<li>Become a Sponsor</li>
						</Link> */}
						{/* Removed as no longer needed */}
						{/* <li className="DropDown">
							{/* this link and li only exits for styling purposes }
							<Link className="DropDownHeader">
								Club Membership & Upcoming Events
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
						</li> */}
						{/* <li className="DropDown">
							<Link className="DropDownHeader">More...</Link>
							<ul className="Hide">
								<Link to={"/Gallery"}>
									<li>Gallery</li>
								</Link>
								<Link>
									<li>Roster</li>
								</Link>
							</ul>
						</li> */}
						<Link to={"/"}>
							<li>CONTACT US</li>
						</Link>
					</ul>
				</nav>
				<div>
					<button onClick={switchDarkMode}>
						<img
							id="darkModeToggle"
							src={lightDark}
							alt="Light/Dark Toggle Symbol"
						/>
					</button>
				</div>
			</header>
			{bannerInfo.titleText === "" && bannerInfo.imgUrl === "" ? (
				<></>
			) : (
				<>
					<div
						id="BannerHeader"
						style={{ backgroundImage: `url(${bannerInfo.imgUrl})` }}>
						<div>
							<h1>{bannerInfo.titleText}</h1>
							{bannerInfo.subtitleText === "" ? (
								<></>
							) : (
								<h2>{bannerInfo.subtitleText}</h2>
							)}
						</div>
					</div>
				</>
			)}

			<Outlet context={{ bannerInfo, setBannerInfo }} />
			<Ender />
		</>
	);
}

// used like this
// <UpdateBanner
// 	updatedTitleText="UCalgary Bajaa"
// 	updatedSubtitleText="HelloDAAAA"
// 	updatedImgUrl="https://picsum.photos/200"
// 	updatetdImgAlt="Lorem Picsum"
// />
