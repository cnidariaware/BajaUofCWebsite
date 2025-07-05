import UpdateBanner from "../Header/UpdateBanner";
import CountDownTimer from "../CountDown/CountDownTimer";
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
					<ul>
						<li>
							<h4>Recuitment Opens</h4>
							<CountDownTimer
								dateFinished={new Date("August 29, 2024 00:00:00")}
								messageDisplayBefore={""}
								messageDisplayAfter={<p>Link to google form</p>}
							/>
						</li>
						<li>
							<h4>Baja SAE April</h4>
							<CountDownTimer
								dateFinished={new Date("April 29, 2026 00:00:00")}
								messageDisplayBefore={""}
								messageDisplayAfter={<p>Wish Us Luck!</p>}
							/>
						</li>
						<li>
							<h4>Baja SAE May</h4>
							<CountDownTimer
								dateFinished={new Date("May 22, 2026 00:00:00")}
								messageDisplayBefore={""}
								messageDisplayAfter={<p>Ready! Set! Go!</p>}
							/>
						</li>
					</ul>
				</div>
				<div>
					<div>
						<h2>Our Mission</h2>
						<p>
							UCalgary Baja is a student organization that allows students to
							design, build, and race an off-road vehicle to participate in the
							Baja SAE competition organized by the Society of Automotive
							Engineers (SAE) every year.
						</p>
						<p>
							We're dedicated to giving members hands-on experience working on
							the car, which allows them to both learn new skills and
							techniques, such as using Solidworks, Ansys, machining, and
							welding, as well as utilizing knowledge learned from classrooms.
							This is done with practical projects, allowing students to build
							skills and knowledge that employers are looking for. We strive to
							bridge the gap between education and application, making learning
							effective and memorable.
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
						<p>
							Every year, we take our car to the United States to compete
							against other teams from all across the globe. Teams from
							universities design, build, and race these all-terrain vehicles
							that are capable of going through a series of rough courses, as
							well as discuss their findings, such as cost reports and design
							choices, all in a series of dynamic and static events. We also get
							the chance to connect with engineering students from around the
							world, trading advice and making new friends, and network with
							sponsors to explore future job opportunities.
						</p>
					</div>
				</div>
				<div id="about-competitions">
					<div>
						<h2>Static Events</h2>
						<p>
							Static events are where the whole team steps away from building
							the car and takes a look at the professional and analytical aspect
							of the team. The business presentation, cost event, and technical
							inspection are all events that are equally important as the actual
							car, as this is where we show real-world understanding of
							engineering, manufacturing, and business decisions. It's not only
							about making the car, it's also about demonstrating a clear
							understanding behind design rationale, cost efficiency, and
							marketability within a competitive industry.
						</p>
						{/* <ol>
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
						</ol> */}
					</div>
					<div>
						<h2>Dynamic Events</h2>
						<p>
							Dynamic events are where the car is actually put to the test, with
							different events each made to test a certain aspect of the car.
							Acceleration, sled pull, hill climb and maneuverability are all
							events that show how our vehicle does against other teams. After
							all these events, the finale comes in the form of the endurance
							event, a four-hour race filled with jumps, pits, and other
							obstacles, and teams compete to see how many laps the cars can
							make. It combines all the factors from previous events, on top of
							the reliability of our car.
						</p>
						{/* <ul>
							<li>
								<h3>BRAKE INSPECTION</h3>
								<p>The cars is tested to see if all four wheels stop</p>
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
						</ul> */}
					</div>
				</div>

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
