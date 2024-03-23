import "./AboutUs.css";

/**
 * @param {null} null - needs nothing
 * @returns {JSX.Element} page - returns the content of the page
 * @description The home/About us Page
 * @author Brock <darkicewolf50@gmail.com>
 * @todo Add real photos add add banner image slider
 */
const AboutsUs = () => {
	return (
		<main className="aboutUs">
			<img
				src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1710016930/IMG-20240207-WA0000_e1jcf4.jpg"
				alt="Schulich off Road Banner"
			/>
			<div>
				<img
					src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1710016930/IMG-20240207-WA0000_e1jcf4.jpg"
					alt="Who we are//temp"
				/>
				<div>
					<h2>Schulich Off-Road</h2>
					<p>
						Schulich Off-Road is a student organization responsible for
						designing, building, and racing an off-road vehicle in the Baja SAE
						intercollegiate competition organized by the Society of Automotive
						Engineers (SAE) every year. Schulich Off-Road's cars are tough,
						dependable, competitive, and extremely fun to drive.
					</p>
					<p>
						Schulich Off-road is a team consisting of talented and determined
						competitive individuals in engineering who strive to expand their
						horizons, earn experience, and network with leading companies in
						their respective fields. Our members achieve this by being a part of
						one of our 6 sub-teams: Drivetrain, Logistics and Software,
						Suspension, Chassis and Ergonomics, Steering, and Electrical and
						Testing.
					</p>
				</div>
			</div>
			<div>
				<div>
					<h2>Our Work / Projects</h2>
					<p>
						Students involved in Schulich Off-Road gain practical experience in
						design and manufacturing by constructing various car components.
						They learn to balance cost, manufacturing limitations, and
						performance to develop optimal parts, budgets, and processes. This
						involves using CAD technology like SolidWorks and FEA simulations.
					</p>
					<p>
						Additionally, members acquire hands-on skills such as welding and
						operating metal cutting machines. Each team member handles a
						specific component, collaborating, researching, and troubleshooting
						throughout the design and execution process. After building the
						vehicle, students can attend competitions worldwide, where they must
						address issues promptly and work as a team to replace broken parts
						to stay competitive.
					</p>
				</div>
				<img
					src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1710016930/IMG-20240207-WA0000_e1jcf4.jpg"
					alt="montage of images mainly showcasing team memebers working"
				/>
			</div>
			<div id="benefits">
				<h2>Benefits of being a part of the team</h2>
				<table>
					<tbody>
						<tr>
							<td>
								<h3>Hands on-Experience</h3>
							</td>
							<td>
								<h3>Application of knowledge</h3>
							</td>
						</tr>
						<tr>
							<td>
								<ul>
									<li>Designing & Drawings</li>
									<li>Testing Parts</li>
									<li>Manufacturing the product</li>
								</ul>
							</td>
							<td>
								<ul>
									<li>
										Get the chance to work on one or more of the many projects
										offered by your chosen sub-team
									</li>
								</ul>
							</td>
						</tr>
					</tbody>
				</table>
				<img
					src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1710016930/IMG-20240207-WA0000_e1jcf4.jpg"
					alt="(If we do a rotating images thing for the top, and still want to keep this on the bottom, maybe we can change it to a more collage type thing for this box)"
				/>
			</div>
		</main>
	);
};

export default AboutsUs;
