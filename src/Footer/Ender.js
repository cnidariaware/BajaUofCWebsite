import "./Ender.css";
import linkedInLogo from "./InBug-White.png";
import instagramLogo from "./instagram-white-icon.png";
import emailLogo from "./email-white.png";
import authors from "./humans.txt";
/**
 * @param {null} null - requires onthing
 * @returns {JSX.Element} Page - HTML tags and JS functionality
 * @description The Footer of the page
 * @author Brock <darkicewolf50@gmail.com>
 * @todo add who helped developed the site and finalize css
 */
export default function Ender() {
	const date = new Date();

	return (
		<footer id="ender">
			<div>
				<p>&#169; {date.getFullYear()} UCalgary Baja </p>
				<p
					onClick={() => window.open("https://www.morphgenix.com/", "_blank")}
					id="pointerCursor">
					Partnered with Morphgenix
				</p>
			</div>
			<div>
				<a href="https://www.linkedin.com/company/schulich-off-road/">
					<img
						src={linkedInLogo}
						alt="Linkedin Logo"
					/>
				</a>
				<a href="https://www.instagram.com/uofcbaja/">
					<img
						src={instagramLogo}
						alt="Intragram Logo"
					/>
				</a>
				<a href={authors}>
					<img
						src="https://humanstxt.org/img/oficial-logos/humanstxt-transparent-1ink.png"
						alt="humans txt"
					/>
				</a>
				<a href="mailto:uofcbaja@gmail.com?subject=Lets start something great">
					<img
						src={emailLogo}
						alt="email us logo"
					/>
				</a>
				<a href="https://www.facebook.com/schulich.offroad/">
					<img
						src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook--v1.png"
						alt="Facebook Logo"
					/>
				</a>
			</div>
			<ul className="hidden">
				<li>Developed by:</li>
				<li>Brock</li>
			</ul>
		</footer>
	);
}
