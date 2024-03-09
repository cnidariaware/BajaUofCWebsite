import "./AboutUs.css";

const AboutsUs = () => {
	return (
		<main className="aboutUs">
			<img
				src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1710016930/IMG-20240207-WA0000_e1jcf4.jpg"
				alt="Schulich off Road Banner"
			/>
			<article>
				<img
					src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1710016930/IMG-20240207-WA0000_e1jcf4.jpg"
					alt="Who we are//temp"
				/>
				<p>Who we are</p>
			</article>
			<article>
				<p>
					What we do, breifly list the broad categories of what people do in our
					team
				</p>
				<img
					src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1710016930/IMG-20240207-WA0000_e1jcf4.jpg"
					alt="montage of images mainly showcasing team memebers working"
				/>
			</article>
			<article id="benefits">
				<p>
					What are the benefits of joing the team small list of how we actually
					beneit new members
				</p>
				<ul>
					<li>benefit 1</li>
					<li>benefit 2</li>
					<li>benefit 3</li>
				</ul>
			</article>
		</main>
	);
};

export default AboutsUs;
