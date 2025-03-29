import UpdateBanner from "../Header/UpdateBanner";

export default function AboutsUs() {
	return (
		<>
			<UpdateBanner
				updatedTitleText="About Us"
				updatedSubtitleText=""
				updatedImgUrl="https://picsum.photos/200"
				updatetdImgAlt="Lorem Picsum"
			/>
			<div>
				<h2>Upcoming Events</h2>
			</div>
			<div>
				<div>
					<h2>Our Mission</h2>
					<p>
						More info about the club, expanding on what was on the home page. We
						have students learn because we build so and so and incorporate all
						these skills.
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
			<div>
				<div>
					<p>Static Events</p>
				</div>
				<div>
					<p>Dynamic Events</p>
				</div>
			</div>
			<article>
				<p>Slight info about our car but also link that leads to history</p>
			</article>
			<p>
				Intersted in joining? <a href="mailto:uofcbaja@gmail.com">email us</a>
			</p>
		</>
	);
}
