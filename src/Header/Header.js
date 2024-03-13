import logo from "./logo.png";
import DropdownMenu from "./DropdownMenu";
import OpenPageButton from "./OpenPageButton";
import { useNavigate, Outlet } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

/**
 * @param {null} null -  Takes in nothing
 * @returns {JSX.Element} JSX - HTML tags and JS functionality
 * @description The top header part of the page includes the naviagtion
 * @author Brock <darkicewolf50@gmail.com>
 */
const Header = () => {
	const [isDropdownVisible, setDropdownVisible] = useState(false);
	const navigate = useNavigate();

	/**
	 * @param {String} arg -  The page that the button goes to
	 * @returns {JSX.Element} JSX - HTML tags and JS functionality
	 * @description Function that move you to the specified place
	 * @author Brock <darkicewolf50@gmail.com>
	 */
	const LinkTo = (arg) => {
		navigate(arg);
	};

	const handleMouseEnter = () => {
		setDropdownVisible(true);
	};

	const handleMouseLeave = () => {
		setDropdownVisible(false);
	};

	return (
		<>
			<header>
				<div>
					<img
						id="logo"
						onClick={() => LinkTo("/")}
						src={logo}
						alt="Schulich Off-Road's logo"
					/>
					<h2>Schulich Offroad</h2>
				</div>
				<nav>
					<OpenPageButton
						pageToGoTo={"/"}
						textOnButton={"About Us"}
					/>
					<OpenPageButton
						pageToGoTo={"/Teams"}
						textOnButton={"Teams"}
					/>
					<OpenPageButton
						pageToGoTo={"/OurSponsors"}
						textOnButton={"Our Sponsors"}
					/>
					<OpenPageButton
						pageToGoTo={"/BecomeASponsor"}
						textOnButton={"Become a Sponsor"}
					/>
					<div
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						style={{ background: "red" }}>
						<button type="button">Club Membership & Upcoming Events</button>
						{isDropdownVisible && <DropdownMenu />}
					</div>
					<OpenPageButton
						pageToGoTo={"/Gallery"}
						textOnButton={"Gallery"}
					/>
				</nav>
			</header>
			<Outlet />
		</>
	);
};

export default Header;
