import "./Team.css";
import UpdateBanner from "../Header/UpdateBanner";

export default function Team() {
	return (
		<div id="Team">
			<UpdateBanner
				updatedTitleText="The Team"
				updatedSubtitleText=""
				updatedTitleAdditive="Team"
				// updatedImgUrl="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1754761232/DSC05631-min_itywlo.jpg"
				updatedImgUrl="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1754767548/DSC05631-min_rxx8km.jpg"
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
						src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755915328/18HASpcxac4zjPwWZSpbQs94v0ooAX-3hmw4emI_0zO4qfnSYTO5XBMXSH7dow2E_xkngmq.png"
						alt="brakes and gas pedal CAD"
					/>
				</div>
				<div>
					<img
						src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755915328/19yTuNKZMp1QCQoaBz86d-zpvATvP6Rx1SaVjynMSV6RQFROM2d7anw3zAD4_nabmkg.png"
						alt="Suspensions arms and steering"
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
						src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755915331/cvt_zz0rgl.png"
						alt="cvt"
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
						src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755915328/12ZRS9P9XwyNLusJ59EfL98Yc_ZMpbdoYvATMAQKqnf0atoxj0ZUA2vtgQYh09a8_quphim.png"
						alt="strain gauge"
					/>
				</div>
				<div>
					<img
						src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755915330/scale_ccg4wg.png"
						alt="weight scale"
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
						src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1756590700/code-min_uqjr6m_c_fill_w_700_h_400_fftttm.png"
						alt="jsx code from our sponsors"
					/>
				</div>

				<div>
					<img
						src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755915387/DSC_0432_e1pfjn.jpg"
						alt="member wearing ucalgary baja t-shirt"
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
