import "./Gallery.css";

/**
 * @param {null} null - requires onthing
 * @returns {JSX.Element} JSX - HTML tags and JS functionality
 * @description Gallery Page
 * @author Sarim <sheikhsarim20@gmail.com>
 * @todo Seperate the Modal section into its own seperate function, and add comments
 */
const Gallery = () => {
	return (
		<div>
			Gallery
			{/* <div className="gallery">
				{allImages.map((image, index) => (
					<img
						key={index}
						className="galleryItem"
						src={image.src}
						alt={image.alt}
						onClick={() => handleClick(image.src, image.alt)}
					/>
				))}
			</div> */}
			{/* <div>
				<Modal
					isOpen={open}
					onRequestClose={() => setOpen(false)}
					style={{
						overlay: {
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						},
						content: {
							position: "initial",
							border: "none",
							borderRadius: "0px",
							padding: "0px",
						},
					}}>
					<div className="container">
						<button
							className="modalButton"
							onClick={() => setOpen(false)}>
							x
						</button>
						<img
							className="modalImage"
							src={display}
							alt={altDisplay}
							onClick={() => setOpen(false)}
						/>
					</div>
				</Modal>
			</div> */}
		</div>
	);
};

export default Gallery;
