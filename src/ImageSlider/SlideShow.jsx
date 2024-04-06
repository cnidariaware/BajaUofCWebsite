import { useEffect, useState } from "react";
import "./SlideShow.css";

const SlideShow = (imgList) => {
	console.log(imgList);
	const [imgArray, setImgArray] = useState(imgList["imgList"]);
	let showIndex = 1;
	const ErrorMessage = `Please add an Object Like This \`imgList: \`{ imgList: [ { AltTag: 'linkurl' }, { AltTag: 'linkurl' }, { AltTag: 'linkurl' } ] }`;
	const slides = document.getElementsByTagName("figure");
	const dots = document.getElementsByClassName("dot");

	useEffect(() => {
		if (imgArray !== undefined) {
			showSlide(1);
		}
	}, []);

	const showSlide = (indexToShow) => {
		if (indexToShow > slides.length) {
			indexToShow = 1;
		}
		if (indexToShow < 1) {
			indexToShow = slides.length;
		}

		showIndex = indexToShow;

		let indexToNotShow;
		for (indexToNotShow = 0; indexToNotShow < slides.length; indexToNotShow++) {
			slides[indexToNotShow].style.display = "none";
		}

		for (indexToNotShow = 0; indexToNotShow < slides.length; indexToNotShow++) {
			dots[indexToNotShow].className = dots[indexToNotShow].className.replace(
				" active",
				""
			);
		}

		slides[showIndex - 1].style.display = "block";
		dots[showIndex - 1].className += " active";
	};

	return (
		<div className="slideShow">
			{imgArray === undefined ? (
				<p dangerouslySetInnerHTML={{ __html: ErrorMessage }}></p>
			) : (
				<>
					<div>
						{Object.keys(imgArray).map((imgIndex) => {
							let imgSrc = imgArray[imgIndex];
							let imgLink = Object.values(imgSrc)[0];
							let imgCaption = Object.keys(imgSrc)[0];
							return (
								<figure
									key={imgIndex}
									className="fade">
									<p>
										{parseInt(imgIndex) + 1} / {imgArray.length}
									</p>
									<img
										src={imgLink}
										alt={imgCaption}
									/>
									<figcaption>{imgCaption}</figcaption>
								</figure>
							);
						})}

						<p
							class="prev"
							onClick={() => {
								showSlide(showIndex - 1);
							}}>
							&#10094;
						</p>
						<p
							class="next"
							onClick={() => {
								showSlide(showIndex + 1);
							}}>
							&#10095;
						</p>
					</div>
					<div
						className="dots"
						style={{ textAlign: "center" }}>
						{Object.keys(imgArray).map((imgIndex) => {
							return (
								<span
									key={imgIndex}
									class="dot"
									onClick={() => {
										showSlide(imgIndex);
									}}></span>
							);
						})}
					</div>
				</>
			)}
		</div>
	);
};

export default SlideShow;
