import OpenPageButton from "./OpenPageButton";

/**
 * @param {null} null -  Takes in nothing
 * @returns {JSX.Element} JSX - HTML tags and JS functionality
 * @description Drop down menu elements
 * @author Brock <darkicewolf50@gmail.com>
 * @todo chang to proper drop down menu, convert to using <Link>
 */
const DropdownMenu = () => {
	return (
		<div>
			<OpenPageButton
				pageToGoTo={"/JoinTheClub"}
				textOnButton={"Join the Club"}
			/>
			<OpenPageButton
				pageToGoTo={"/UpcomingEvents"}
				textOnButton={"Upcoming Events"}
			/>
		</div>
	);
};

export default DropdownMenu;
