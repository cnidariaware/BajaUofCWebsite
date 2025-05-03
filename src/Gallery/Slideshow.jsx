import { useEffect } from "react";
import "./slideshow.css";
export default function Slideshow() {
	let listPhotos = [
		{ imgUrl: "https://picsum.photos/200", imgAlt: "Lorem picsum1" },
		{ imgUrl: "https://picsum.photos/200/200", imgAlt: "Lorem picsum2" },
		{ imgUrl: "https://picsum.photos/200/400", imgAlt: "Lorem picsum3" },
		{ imgUrl: "https://picsum.photos/200/600", imgAlt: "Lorem picsum4" },
	];

	var slideIndex = 1;
	useEffect(() => {
		showSlides(slideIndex);
	}, []);

	const plusSlides = (n) => {
		slideIndex += n;
		showSlides();
	};

	const showSlides = () => {
		let i;
		let slides = document.getElementsByClassName("slides");
		if (slideIndex > slides.length) {
			slideIndex = 1;
		}
		if (slideIndex < 1) {
			slideIndex = slides.length;
		}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		slides[slideIndex - 1].style.display = "block";
	};
	return (
		<div className="slideshow">
			{/* you can use keys to get the index of the value to show either dots or what place they are out of x */}
			{Object.values(listPhotos).map((photoDetail) => {
				return (
					<img
						key={photoDetail.imgAlt}
						className="slides fade"
						src={photoDetail.imgUrl}
						alt={photoDetail.imgAlt}
					/>
				);
			})}
			<a
				className="prev-button"
				onClick={() => plusSlides(-1)}>
				❮
			</a>
			<a
				className="next-button"
				onClick={() => plusSlides(1)}>
				❯
			</a>
		</div>
	);
}
