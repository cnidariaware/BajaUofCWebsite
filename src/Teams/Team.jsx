import "./Team.css";
import UpdateBanner from "../Header/UpdateBanner";

export default function Team() {
	return (
		<div id="Team">
			<UpdateBanner
				updatedTitleText="The Team"
				updatedSubtitleText=""
				updatedImgUrl="https://picsum.photos/200"
			/>
			<h2>SUBTEAMS</h2>
			<div>
				<div>
					<div>
						<h3>Suspension</h3>
						<p>
							Our subteam is responsible for the car's handling and terrain
							performance. We assemble components like the arms, shocks,
							steering knuckles, and rear bearing carriers. We also perform
							simulations, calculations, and welding.
						</p>
					</div>
					<img
						src="https://picsum.photos/200"
						alt="sus related"
					/>
				</div>
				<div>
					<img
						src="https://picsum.photos/200"
						alt="chas related"
					/>
					<div>
						<h3>Chassis</h3>
						<p>
							Our subteam designs and manufactures the skeleton of the car,
							incorporating all subsystems and ensuring driver protection. We
							utilize manufacturing techniques such as welding, tube coping and
							tube bending.
						</p>
					</div>
				</div>
				<div>
					<div>
						<h3>Ergonomics</h3>
						<p>
							Our subteam works to ensure driver comfort, integrating human and
							mechanical factors. We work to increase the number of eligible
							drivers within the car and decrease driver fatigue by optimizing
							the seat, head rest, pedals, and pedal foot resets.
						</p>
					</div>
					<img
						src="https://picsum.photos/200"
						alt="ergo related"
					/>
				</div>
				<div>
					<img
						src="https://picsum.photos/200"
						alt="chas related"
					/>
					<div>
						<h3>Steering</h3>
						<p>
							Our subteam designs the steering behaviors of the car, including
							turning radius, pinion and rack ratio, and implementing Ackerman
							geometry. We use FEA analysis to professional CNC machining to
							optimize driving dynamics.
						</p>
					</div>
				</div>
				<div>
					<div>
						<h3>Powertrain</h3>
						<p>
							Our subteam transfers power to the rear wheels and driveshaft
							using gearbox, bevel gearbox, CVT, propshaft, rear axles, rear
							brakes, and rear hubs.
						</p>
					</div>
					<img
						src="https://picsum.photos/200"
						alt="sus related"
					/>
				</div>
				<div>
					<img
						src="https://picsum.photos/200"
						alt="chas related"
					/>
					<div>
						<h3>Final Drive</h3>
						<p>
							Our subteam designs, tests and manufactures the 4WD system,
							including the differential, axles, hubs and brakes.
						</p>
					</div>
				</div>
				<div>
					<div>
						<h3>Electrical</h3>
						<p>
							Our subteam does the testing, wiring sensors and doing data
							collection and analysis, as well as implementing the wiring and
							electrical system in the vehicle.
						</p>
					</div>
					<img
						src="https://picsum.photos/200"
						alt="sus related"
					/>
				</div>
				<div>
					<img
						src="https://picsum.photos/200"
						alt="chas related"
					/>
					<div>
						<h3>Software</h3>
						<p>
							We design and built this site, handle simulation and gather data
							through the onboard data collection system and run our in club
							storage system.
						</p>
					</div>
				</div>
				<div>
					<div>
						<h3>Business</h3>
						<p>
							Our subteam develops sponsorship relationships, creates content to
							post on social media, develop brand strategies for marketing
							campaigns, arrange travel bookings, handles payments, and manages
							team merch.
						</p>
					</div>
					<img
						src="https://picsum.photos/200"
						alt="sus related"
					/>
				</div>
			</div>
		</div>
	);
}
