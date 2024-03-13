import logo from "./logo.png";
import DropdownMenu from "./DropdownMenu";
import OpenPage from "./OpenPage";
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
						style={{ background: "gray" }}
						onClick={() => LinkTo("/")}
						src={logo}
						alt="logo"
					/>
					<p>Schulich Offroad</p>
				</div>
				<nav>
					<OpenPage
						pageToGoTo={"/"}
						textOnButton={"About Us"}
					/>
					<OpenPage
						pageToGoTo={"/Teams"}
						textOnButton={"Teams"}
					/>
					<OpenPage
						pageToGoTo={"/OurSponsors"}
						textOnButton={"Our Sponsors"}
					/>
					<OpenPage
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
					<OpenPage
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
