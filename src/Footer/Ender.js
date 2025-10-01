import "./Ender.css";

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
			</div>
			<div>
				<a href="https://www.linkedin.com/company/ucalgarybaja">
					<img
						src="https://www.svgrepo.com/show/521725/linkedin.svg"
						alt="Linkedin Logo"
					/>
				</a>
				<a href="https://www.instagram.com/ucalgarybaja">
					<img
						src="https://www.svgrepo.com/show/521711/instagram.svg"
						alt="Intragram Logo"
					/>
				</a>

				<a href="mailto:uofcbaja@gmail.com?subject=Lets start something great">
					<img
						style={{ filter: `invert()` }}
						src="https://www.svgrepo.com/show/390657/email-envelope-letter-mail-message-communication.svg"
						alt="email us logo"
					/>
				</a>
				<a href="https://www.facebook.com/schulich.offroad/">
					<img
						style={{ filter: `invert()` }}
						src="https://www.svgrepo.com/show/521654/facebook.svg"
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
