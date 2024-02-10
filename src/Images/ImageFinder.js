import imagesData from './Images.json';

// Function to search and filter images based on the provided category
export const ImageFinder = (category) => {
    if (category === 'all') {
        return imagesData;
    } else {
        const filteredImages = imagesData.filter(image => image.category === category);
        return filteredImages;
    }
};