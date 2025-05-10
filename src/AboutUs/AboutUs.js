import UpdateBanner from "../Header/UpdateBanner";

export default function AboutsUs() {
	let subteam_info = [
		{
			subteam_name: "Powertrain",
			subteam_des:
				"The drivetrain subteam plays a pivotal role in ensuring efficient power transfer from the engine to the wheels, overseeing key components such as gearboxes, axles, and driveshafts. Through hands-on learning and mentorship, members develop a comprehensive skill set in CAD, FEA, CAM, and machining, empowering them to design, analyze, and manufacture critical vehicle components with a focus on innovation and practical application",
			subteam_pic: "https://picsum.photos/200",
			subteam_pic_alt: "Lorem Picsum",
		},
		{
			subteam_name: "Suspension",
			subteam_des:
				"The suspension subteam manages the vehicle's manoeuvrability and handling capabilities. As an offroad buggy, suspension setups must endure all terrain types, including rough rocks and fast jumps. Beyond their endurance capabilities, the vehicle's handling characteristics are determined through rigorous development of the suspension geometry in simulation software and hand calculations. This subteam collaborates frequently with the chassis and steering subteams to optimize geometries. Suspension assemblies primarily comprised of arms, shocks, steering knuckles, and rear bearing carriers.",
			subteam_pic: "https://picsum.photos/200",
			subteam_pic_alt: "Lorem Picsum",
		},
		{
			subteam_name: "Chassis",
			subteam_des:
				"Step into the world of the Chassis and Ergonomics Team, where comfort meets performance in every curve and contour. With an eye for detail and a passion for perfection, they sculpt the backbone of our vehicle, ensuring it's not just built to last, but to excel. From optimizing seating positions to fine-tuning weight distribution, they're the architects of a ride that feels as good as it looks. Join us as we push the boundaries of design and functionality, driven by the ingenuity of our Chassis and Ergonomics Team.",
			subteam_pic: "https://picsum.photos/200",
			subteam_pic_alt: "Lorem Picsum",
		},
		{
			subteam_name: "Steering",
			subteam_des:
				"Step into the world of the Chassis and Ergonomics Team, where comfort meets performance in every curve and contour. With an eye for detail and a passion for perfection, they sculpt the backbone of our vehicle, ensuring it's not just built to last, but to excel. From optimizing seating positions to fine-tuning weight distribution, they're the architects of a ride that feels as good as it looks. Join us as we push the boundaries of design and functionality, driven by the ingenuity of our Chassis and Ergonomics Team.",
			subteam_pic: "https://picsum.photos/200",
			subteam_pic_alt: "Lorem Picsum",
		},
		{
			subteam_name: "Final Drive",
			subteam_des:
				"The drivetrain subteam plays a pivotal role in ensuring efficient power transfer from the engine to the wheels, overseeing key components such as gearboxes, axles, and driveshafts. Through hands-on learning and mentorship, members develop a comprehensive skill set in CAD, FEA, CAM, and machining, empowering them to design, analyze, and manufacture critical vehicle components with a focus on innovation and practical application",
			subteam_pic: "https://picsum.photos/200",
			subteam_pic_alt: "Lorem Picsum",
		},
		{
			subteam_name: "Ergonomics",
			subteam_des:
				"Step into the world of the Chassis and Ergonomics Team, where comfort meets performance in every curve and contour. With an eye for detail and a passion for perfection, they sculpt the backbone of our vehicle, ensuring it's not just built to last, but to excel. From optimizing seating positions to fine-tuning weight distribution, they're the architects of a ride that feels as good as it looks. Join us as we push the boundaries of design and functionality, driven by the ingenuity of our Chassis and Ergonomics Team.",
			subteam_pic: "https://picsum.photos/200",
			subteam_pic_alt: "Lorem Picsum",
		},
		{
			subteam_name: "Business",
			subteam_des:
				"The Business and Software Team is the most vital to the team's continued operation, we handle tasks for both the competition, the team and Schulich School of Engineering. We handle generating a majority of the money needed for operation of the club, travel funds and itinerary, additionally we handle this very website, the programming for our onboard data collection system and our social media pages. As part of our responsibility to our sponsors we handle organizing and training all of our members to an industry standard level, all of our work from software, sponsorship, professional outreach, CAD and manufacturing processes.",
			subteam_pic: "https://picsum.photos/200",
			subteam_pic_alt: "Lorem Picsum",
		},
		{
			subteam_name: "Electrical",
			subteam_des:
				"The electrical team is pivotal in ensuring the performance, safety, and reliability of the racing car during competitions. They design robust electronics and safety mechanisms capable of withstanding the rigors of endurance racing. Additionally, they provide technological support to other sub-teams, integrating data collection systems that directly influence the design process for all components. Their responsibilities encompass designing, testing, and optimizing electrical systems while leveraging data to enhance vehicle performance and safety. ",
			subteam_pic: "https://picsum.photos/200",
			subteam_pic_alt: "Lorem Picsum",
		},
		{
			subteam_name: "Software",
			subteam_des:
				"The Business and Software Team is the most vital to the team's continued operation, we handle tasks for both the competition, the team and Schulich School of Engineering. We handle generating a majority of the money needed for operation of the club, travel funds and itinerary, additionally we handle this very website, the programming for our onboard data collection system and our social media pages. As part of our responsibility to our sponsors we handle organizing and training all of our members to an industry standard level, all of our work from software, sponsorship, professional outreach, CAD and manufacturing processes.",
			subteam_pic: "https://picsum.photos/200",
			subteam_pic_alt: "Lorem Picsum",
		},
	];

	let lead_info = [
		{
			position: "Team Captain",
			lead_name: "Joshua Gall",
			lead_pic: "https://picsum.photos/200",
			lead_des:
				"I am in my final of mechanical engineering. This is my fifth and final year on the team!",
		},
		{
			position: "Business Lead",
			lead_name: "Samuel Garcia",
			lead_pic: "https://picsum.photos/200",
			lead_des: "I am a Mechanical engineering major.",
		},
		{
			position: "Electrical Lead",
			lead_name: "Alex Buzdugan",
			lead_pic: "https://picsum.photos/200",
			lead_des: "I am in my fifth and final year of Electrical Engineering.",
		},
		{
			position: "Suspension Lead",
			lead_name: "Noah Crawford",
			lead_pic: "https://picsum.photos/200",
			lead_des: "I am a second year mechanical engineering major.",
		},
		{
			position: "Powertrain Lead",
			lead_name: "Hewitt Yee",
			lead_pic: "https://picsum.photos/200",
			lead_des: "I am a third year mechanical engineering major.",
		},
		{
			position: "Drivetrain Lead",
			lead_name: "Matthias Preusser",
			lead_pic: "https://picsum.photos/200",
			lead_des: "I am a second year mechanical engineering major.",
		},
		{
			position: "Suspension Lead",
			lead_name: "Abigail Halvorson",
			lead_pic: "https://picsum.photos/200",
			lead_des: "I am a second year mechanical engineering major.",
		},
		{
			position: "Software Lead",
			lead_name: "Brock Tomlinson",
			lead_pic: "https://picsum.photos/200",
			lead_des: "I am a third year software engineering major.",
		},
		{
			position: "Ergonomics Lead",
			lead_name: "Luke Allard",
			lead_pic: "https://picsum.photos/200",
			lead_des: "I am a third year mechanical engineering major.",
		},
	];
	return (
		<>
			<UpdateBanner
				updatedTitleText="Explore the Possibilities"
				updatedSubtitleText="Join Our Team"
				updatedImgUrl="https://picsum.photos/200"
				updatetdImgAlt="Lorem Picsum"
			/>
			<div id="About">
				<div>
					<h3>ABOUT US</h3>
					<p>
						UCalgary Baja is a competitive group of talented and determined
						engineering students striving to expand their horizons, earn
						experience, and network with leading companies in their respective
						fields. Our team comprises 6 subteams: Drivetrain, Logistics,
						Suspension, Chassis and Ergonomics, Steering, and Electrical and
						Testing. Each subteam is mentored by one of our talented leads.
					</p>
					<p>
						In their first year on UCalgary Baja, junior members are a vital
						part of our team. This year, we recruited 17 new members onto the
						team during our recruitment process. This big addition allows the
						team to provide an enhanced educational experience for more students
						than ever before. Adding junior members allows us to complete bigger
						projects and increase the amount of in-house fabrication we can do,
						reducing our reliance on outside sponsors and contractors.
					</p>

					<p>
						We at UCalgary Baja foster an environment of personal growth and try
						our best to ensure that new members are included in all aspects of
						the team. Each new member takes the lead on a junior project, which
						includes designing, testing, and manufacturing a crucial part of the
						build. This sets us apart from other teams who do not necessarily
						give out design work to new members.
					</p>

					<p>
						This past year, a junior member learned how to use a four-axis CNC
						machine to make a custom u-joint that performed admirably in
						competition. We aim to provide a fulfilling experience to new
						members that will complement their in-class education and encourage
						them to develop into capable engineers and proven leaders with the
						skills and knowledge that employers need and want. We strive to
						bridge the gap between education and application by providing
						experience in a fun and memorable way.
					</p>
				</div>
				<div>
					<div>
						<h4>THE NUMBERS</h4>
					</div>
					<div>
						<h5>STUDENTS</h5>
						<h6>48</h6>
						<p>
							Our team is composed of 48 bold engineering students who wish to
							expand their skills, test their limits, and challenge their
							abilities.
						</p>
					</div>
					<div>
						<h5>GROWTH</h5>
						<h6>200%</h6>
						<p>
							Our team is exploding this year with over double the size compared
							to last year.
						</p>
					</div>
					<div>
						<h5>SUBTEAMS</h5>
						<h6>8</h6>
						<p>
							We have 7 subteams on our team. This encourages students to pick a
							segment in the group they strive in, or challenge themselves to
							learn something new.
						</p>
					</div>
					<div>
						<h5>FOUNDED</h5>
						<h6>1990</h6>
						<p>
							Out team has stood the test of time. Founded in 1990, we have
							years of experience helping others who love a challenge find a
							place to spread their wings and test how far they can go.
						</p>
					</div>
					<div>
						<h5>SCHOOL YEARS</h5>
						<h6>4</h6>
						<p>
							On average, our team members spend 4 years with us, being able to
							experience everything our team has to offer, from competitions to
							manufacturing and the logistics of operation.
						</p>
					</div>
					<div>
						<h5>COMPETITION RANKING</h5>
						<h6>Top 30</h6>
						<p>
							Our team is one of the leading BAJA SAE teams in Canada, each year
							we strive to reach newer heights and higher rankings, joining us
							on the adventure of a lifetime!
						</p>
					</div>
				</div>
				<div>
					<div>
						<h3>Which Sub Team Will You Choose?</h3>
						<p>Take a Closer Look at Our Sub Teams</p>
					</div>
					<div>
						{Object.keys(subteam_info).map((subteam_index) => {
							let subteam = subteam_info[subteam_index];
							return (
								<div key={subteam_index}>
									{subteam_index % 2 !== 0 ? (
										<>
											<div className={"About" + (subteam_index % 2)}>
												<img
													src={subteam.subteam_pic}
													alt={subteam.subteam_pic_alt}
												/>
											</div>
											<div>
												<h4>{subteam.subteam_name}</h4>
												<p>{subteam.subteam_des}</p>
											</div>
										</>
									) : (
										<>
											<div>
												<h4>{subteam.subteam_name}</h4>
												<p>{subteam.subteam_des}</p>
											</div>
											<div className={"About" + (subteam_index % 2)}>
												<img
													src={subteam.subteam_pic}
													alt={subteam.subteam_pic_alt}
												/>
											</div>
										</>
									)}
								</div>
							);
						})}
					</div>
				</div>
				<div>
					<div>
						<h4>Our Leads</h4>
						<p>
							These are our team leads for the 2024 season. Team leads put in a
							lot of extra hours coordinating, mentoring, and helping their
							junior subteam members learn new design and manufacturing methods.
						</p>
					</div>
					<div>
						{Object.keys(lead_info).map((lead_index) => {
							let lead = lead_info[lead_index];
							return (
								<div key={lead_index}>
									<h6>{lead.position}</h6>
									<h5>{lead.lead_name}</h5>
									<img
										src={lead.lead_pic}
										alt={lead.lead_name + "'s headshot"}
									/>
									<p>{lead.lead_des}</p>
								</div>
							);
						})}
					</div>
					<div>
						<div>
							<h4>Meet the Rest of the Team</h4>
							<p>
								This is the rest of our amazing Baja team, each of the following
								members are part of different subteams, mentored by our leads
								above. They are all enthusiastic, hard working, and dedicated
								members of our team.
							</p>
						</div>
						<div>
							<img alt="test" />
							<p>Name</p>
							<p>Subteam on</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
