import { useNavigate } from "react-router-dom";

/**
 * @param {String} pageToGoTo -  The page that the button goes to
 * @param {String} textOnButton - The Text tht will be on the button
 * @returns {JSX.Element} JSX - HTML tags and JS functionality
 * @description Button Template that moves you to the
 * @author Brock <darkicewolf50@gmail.com>
 */
const OpenPage = ({ pageToGoTo, textOnButton }) => {
	const navigate = useNavigate();
	const navigateTo = (param) => {
		navigate(param);
	};

	return (
		<button
			id="navigateButton"
			onClick={() => navigateTo(pageToGoTo)}>
			{textOnButton}
		</button>
	);
};

export default OpenPage;
