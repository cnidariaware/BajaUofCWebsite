import React, { useState, useEffect } from 'react';
import imagesData from './Images.json'; // Import the JSON file

const ImageSlider = ({ category }) => {
    // State to hold the images of the specified category and the current index
    const [categoryImages, setCategoryImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Effect to filter images based on the provided category and set the current index to 0
    useEffect(() => {
        const filteredImages = imagesData.filter(image => image.category === category);
        setCategoryImages(filteredImages);
        setCurrentIndex(0);
    }, [category]);
  
    // Effect to automatically move to the next image every 5 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {handleNext();}, 5000);
  
        // Cleanup: Clear the interval on component unmount or when currentIndex or categoryImages changes
        return () => clearInterval(intervalId);
    }, [currentIndex, categoryImages]);
  
    // Function to handle moving to the next image
    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % categoryImages.length);
    };
  
    // Function to handle moving to the previous image
    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + categoryImages.length) % categoryImages.length);
    };
  
    // Function to handle custom click actions on the image
    const handleImageClick = () => {
        // Will be worked on later
    };
  
    // Function to render an image based on the provided index
    const renderImage = (index) => {
        // Check if categoryImages is not empty before accessing its properties
        if (categoryImages.length > 0) {
            return (
                <img
                    key={index}
                    src={categoryImages[index].src}
                    alt={categoryImages[index].alt}
                    onClick={handleImageClick}
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
            );
        } else {
            return null; // or you can render a placeholder image or handle this case as needed
        }
    };
  
    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Container to display previous, current, and next images */}
            <div style={{ display: 'flex' }}>
                {/* Button to move to the previous image */}
                <button onClick={handlePrev}>Previous</button>
                {/* Render the previous image */}
                {renderImage((currentIndex - 1 + categoryImages.length) % categoryImages.length)}
                {/* Render the current image */}
                {renderImage(currentIndex)}
                {/* Render the next image */}
                {renderImage((currentIndex + 1) % categoryImages.length)}
                {/* Button to move to the next image */}
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
  };

export default ImageSlider;
