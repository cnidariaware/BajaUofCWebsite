import OpenPage from "./OpenPage";

/**
 * @param {null} null -  Takes in nothing
 * @returns {JSX.Element} JSX - HTML tags and JS functionality
 * @description Drop down menu elements
 * @author Brock <darkicewolf50@gmail.com>
 */
const DropdownMenu = () => {
	return (
		<div>
			<OpenPage
				pageToGoTo={"/JoinTheClub"}
				textOnButton={"Join the Club"}
			/>
			<OpenPage
				pageToGoTo={"/UpcomingEvents"}
				textOnButton={"Upcoming Events"}
			/>
		</div>
	);
};

export default DropdownMenu;
