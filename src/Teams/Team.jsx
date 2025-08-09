import "./Team.css";
import UpdateBanner from "../Header/UpdateBanner";

export default function Team() {
	return (
		<div id="Team">
			<UpdateBanner
				updatedTitleText="The Team"
				updatedSubtitleText=""
				updatedImgUrl="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1754761232/DSC05631-min_itywlo.jpg"
			/>
			<h2>SUBTEAMS</h2>
			<div>
				<div>
					<div>
						<h3>Suspension</h3>
						<p>
							Our subteam works on the car's handling and terrain performance.
							We assemble components like the arms, shocks, steering knuckles,
							and rear bearing carriers. We also perform simulations,
							calculations, and welding.
						</p>
					</div>
					<img
						src="https://res.cloudinary.com/dpgrgsh7g/image/upload/c_fill,w_700,h_400/v1754169379/IMG_3532_c6mnwf_asokvg.jpg"
						alt="Welding suspension arms"
					/>
				</div>
				<div>
					<img
						src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1754167885/chassis2_gct4iq.png"
						alt="chassis in ansys stress simulation"
					/>
					<div>
						<h3>Chassis</h3>
						<p>
							Our subteam designs and manufactures the skeleton of the car,
							incorporating all subsystems and ensuring driver protection. We
							learn manufacturing techniques like welding, tube coping and tube
							bending.
						</p>
					</div>
				</div>
				<div>
					<div>
						<h3>Ergonomics</h3>
						<p>
							Our subteam works to ensure driver comfort, increase the number of
							eligible drivers that can drive the car, and decrease driver
							fatigue by optimizing the seat, head rest, pedals, and pedal foot
							resets.
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
							turning radius, pinion and rack ratio. We use FEA analysis to
							professional CNC machining to optimize driving dynamics.
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
						src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1754168541/brakes-min_bgmnyc.jpg"
						alt="top down shot of our brake system"
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
						<h3>Telemetry</h3>
						<p>
							Our subteam is responsible for wiring sensors and transmitting
							real-time data from the vehicle, letting the team to monitor
							performance and diagnose issues during testing.
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
						alt="Data acc related"
					/>
					<div>
						<h3>Data Acquisition</h3>
						<p>
							Our subteam focuses on integrating sensors and managing the
							vehicle's wiring system to accurately collect, store, and analyze
							performance data for post-test evaluation.
						</p>
					</div>
				</div>
				<div>
					<div>
						<h3>Software</h3>
						<p>
							We design and built this site, handle simulation and gather data
							through the onboard data collection system and run our in club
							storage system.
						</p>
					</div>
					<img
						src="https://picsum.photos/200"
						alt="chas related"
					/>
				</div>

				<div>
					<img
						src="https://picsum.photos/200"
						alt="sus related"
					/>
					<div>
						<h3>Business</h3>
						<p>
							Our subteam develops sponsorship relationships, creates content to
							post on social media, develop marketing campaigns, arrange travel
							bookings, handles payments, and manages team merch.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
