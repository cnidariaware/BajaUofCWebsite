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
				updatedImgUrl="https://media.discordapp.net/attachments/1339423014378541087/1406378221527765115/IMG20240517082911.jpg?ex=68a23f49&is=68a0edc9&hm=7b5e671a85e599ed868a5bb15ebef70fece0dbd263d123b96a476856880968d3&=&format=webp&width=1107&height=831"
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
							Our members are given opportunities to gain hands-on experience
							working on the car, which allows them to both learn new skills and
							techniques, such as using Solidworks, Ansys, machining, and
							welding, as well as utilizing knowledge learned from classrooms.
							This is done with practical projects, allowing members to build
							skills and knowledge that employers are looking for.
						</p>
					</div>

					<img
						src="https://cdn.discordapp.com/attachments/1339423014378541087/1406388205883887746/IMG-20230521-WA0004.jpg?ex=68a24895&is=68a0f715&hm=aef13e490bf25c157e42ec2456e6caf682df66ed66937a4c643b2d1dc4b1fbea&"
						alt="temp"
					/>
				</div>
				<div>
					<img
						src="https://media.discordapp.net/attachments/1339423014378541087/1406376678904823858/20240428_105011.jpg?ex=68a23dd9&is=68a0ec59&hm=67cb25d34190b4bde96d235f1ba1b3270e3af9e723a1689e67fc930c97e62575&=&format=webp&width=731&height=974"
						alt="Baja Car driving down track"
					/>
					<div>
						<h2>The Competition</h2>
						<p>
							Every year, we take our car to the United States to compete
							against other teams from all across the globe. Teams from
							universities design, build, and race these vehicles capable of
							going through a series of rough courses. In addition, teams
							discuss their findings, such as cost reports and design choices.
							All of this is done in a series of dynamic and static events. On
							top of this, we also get the chance to connect with students and
							sponsors from all over the world.
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
							inspection are all events where we show real-world understanding
							of engineering, manufacturing, and business decisions. This is
							done through presentations and tests before the race.
						</p>
					</div>
					<div>
						<h2>Dynamic Events</h2>
						<p>
							Dynamic events put the car to the test, each one targeting a
							specific aspect of its capability. Acceleration, sled pull, hill
							climb and maneuverability are all events that compare our
							performance against other teams. After that, we compete in the
							endurance event, a four-hour race filled with many obstacles to
							see how many laps each car can complete. This combines all the
							factors from previous events, on top of the reliability of our
							car.
						</p>
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
