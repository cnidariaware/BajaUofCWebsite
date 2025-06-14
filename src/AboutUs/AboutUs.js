import UpdateBanner from "../Header/UpdateBanner";
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
		<>
			<UpdateBanner
				updatedTitleText="About Us"
				updatedSubtitleText=""
				updatedImgUrl="https://picsum.photos/200"
			/>
			<div id="AboutUs">
				<div id="AboutEvents">
					<h2>Upcoming Events</h2>
				</div>
				<div>
					<div>
						<h2>Our Mission</h2>
						<p>
							Schulich Off-Road is a student organization responsible for
							designing, building, and racing an off-road vehicle in the Baja
							SAE intercollegiate competition organized by the Society of
							Automotive Engineers (SAE) every year. Schulich Off-Road's cars
							are tough, dependable, competitive, and extremely fun to drive.
						</p>
						<p>
							Schulich Off-road is a team consisting of talented and determined
							competitive individuals in engineering who strive to expand their
							horizons, earn experience, and network with leading companies in
							their respective fields. Our members achieve this by being a part
							of one of our 6 sub-teams: Drivetrain, Logistics and Software,
							Suspension, Chassis and Ergonomics, Steering, and Electrical and
							Testing.
						</p>
						<p>
							More info about the club, expanding on what was on the home page.
							We have students learn because we build so and so and incorporate
							all these skills.
							{/* this is very temporary and bad */}
							<br />
							<br />
							to be removed later
						</p>
					</div>

					<img
						src="https://picsum.photos/200"
						alt="temp"
					/>
				</div>
				<div>
					<img
						src="https://picsum.photos/200"
						alt="temp"
					/>
					<div>
						<h2>The Competition</h2>
						<p>what the competition is about</p>
					</div>
				</div>
				<div id="about-competitions">
					<div>
						<h2>Static Events</h2>
						<ol>
							<li>
								<h3>SALES PRESENTATION</h3>
								<h3>Business Team</h3>
								<p>
									In collaboration with the rest of the team, develops a concept
									proposal and presents it to a panel of industry judges to gain
									support, such as funding.
								</p>
							</li>
							<li>
								<h3>COST EVENT</h3>
								<h3>Mechanical and Electrical Teams</h3>
								<p>
									- bruh idfk DESIGN - The team presents the design, research,
									and testing of the vehicle to a panel of judges.
								</p>
							</li>
							<li>
								<h3>TECHNICAL INSPECTIONS</h3>
								<h3>Whole Team</h3>
								<p>
									(maybe take off) - Judges inspect every aspect of the car in
									order to make sure it complies with competition rules and
									ensure safety.
								</p>
								<p>
									(maybe sperate? ie Frame Tech, Engine Tech, General Tech,
									etc.)
								</p>
							</li>
						</ol>
					</div>
					<div>
						<h2>Dynamic Events</h2>
						<ul>
							<li>
								<h3>BRAKE INSPECTION</h3>
								<p>The cars is tested tyo see if all four wheels stop</p>
							</li>
							<li>
								<h3>ACCELERATION</h3>
								<p>The car is tested for speed by uhh i forgot</p>
							</li>
							<li>
								<h3>SLED PULL</h3>
								<p>The car's torque is tested by pulling variable load</p>
							</li>
							<li>
								<h3>HILL CLIMB</h3>
								<p>
									The car is tested to see how high the car can climb up a
									variable slope
								</p>
							</li>
							<li>
								<h3>MANEUVERABILITY</h3>
								<p>
									Obstacle course, where the fastest and most accurate vehicles
									are awarded more points
								</p>
							</li>
							<li>
								<h3>ROCK CRAWL</h3>
								<p>
									This one is self explanitory, drive over boulders and large
									logs
								</p>
							</li>
							<li>
								<h3>ENDURANCE</h3>
								<p>
									All the cars in the competition race for four hours, seeing
									how many laps each car can handle. This event is worth the
									most points and is the most exciting.
								</p>
								<p>
									Fun Fact: This is the only wheel to wheel event that SAE
									hosts.
								</p>
							</li>
						</ul>
						HILL CLIMB / SLED PULL - The car's torque is tested by pulling
						another variable load, or by idk checking if it can drive up a hill?
					</div>
				</div>
				<article>
					<p>Slight info about our car but also link that leads to history</p>
				</article>
				<div id="AboutJoin">
					<p>
						Intersted in joining?{" "}
						<a href="mailto:uofcbaja@gmail.com">email us</a>
					</p>
				</div>
			</div>
		</>
	);
};

export default AboutsUs;
