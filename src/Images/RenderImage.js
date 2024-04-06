import React from "react";

// Function to render an image based on the provided index
const RenderImage = (index, categoryImages) => {
    // Check if categoryImages is not empty before accessing its properties
    if (categoryImages.length > 0 && categoryImages[index]) {
        return (
            <img
                key={index}
                src={categoryImages[index].src}
                alt={categoryImages[index].alt}
                // onClick={handleImageClick}
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        );
    } else {
        return null; // or handle this case as needed
    }
}

export default RenderImage;

// // Function to handle custom click actions on the image
// const handleImageClick = () => {
//     // Will be worked on later
// };