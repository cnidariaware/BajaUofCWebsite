import React, { useState, useEffect } from 'react';
import { ImageFinder } from './ImageFinder.js';
import RenderImage from './RenderImage.js';

const ImageSlider = ({ category }) => {
    // Time Interval before the ImageSlider moves to the next image
    const timeInterval = 5000;

    // State to hold the images of the specified category and the current index
    const [categoryImages, setCategoryImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Effect to filter images based on the provided category when it changes
    useEffect(() => {
        const filteredImages = ImageFinder(category);
        setCategoryImages(filteredImages);
        setCurrentIndex(0);
    }, [category]);
  
    // Effect to automatically move to the next image after a certain time interval
    useEffect(() => {
        const intervalId = setInterval(() => {handleNext();}, timeInterval);
  
        // Cleanup: Clear the interval on component unmount or when currentIndex or categoryImages changes
        return () => clearInterval(intervalId);
    }, [currentIndex, categoryImages]);
  
    // Function to handle moving to the next image
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % categoryImages.length);
    };
  
    // Function to handle moving to the previous image
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + categoryImages.length) % categoryImages.length);
    };
  
    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Container to display previous, current, and next images */}
            <div style={{ display: 'flex' }}>
                {/* Button to move to the previous image */}
                <button onClick={handlePrev}>Previous</button>
                {/* Render the previous image */}
                {RenderImage((currentIndex - 1 + categoryImages.length) % categoryImages.length, categoryImages)}
                {/* Render the current image */}
                {RenderImage(currentIndex, categoryImages)}
                {/* Render the next image */}
                {RenderImage((currentIndex + 1) % categoryImages.length, categoryImages)}
                {/* Button to move to the next image */}
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
  };

export default ImageSlider;
