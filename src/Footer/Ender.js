import "./Ender.css";
/**
 * @param {null} null - requires onthing
 * @returns {JSX.Element} Page - HTML tags and JS functionality
 * @description The Footer of the page
 * @author Brock <darkicewolf50@gmail.com>
 * @todo add who helped developed the site and finalize css
 */
const Ender = () => {
	return (
		<footer id="ender">
			<div>
				<p>&#169; 2023 by Schulich Off-Road </p>
				<p
					onClick={() => window.open("https://www.morphgenix.com/", "_blank")}
					id="pointerCursor">
					Powered by: Morphgenix
				</p>
			</div>
			<ul className="hidden">
				<li>Developed by:</li>
				<li>Brock</li>
			</ul>
		</footer>
	);
};

export default Ender;
