import Modal from 'react-modal';
import { useState } from "react";
import './Gallery.css';
import imagesData from '../Images/Images.json'; // Import the JSON file

/**
 * @param {null} null - requires onthing
 * @returns {JSX.Element} JSX - HTML tags and JS functionality
 * @description Gallery Page
 * @author Sarim <sheikhsarim20@gmail.com>
 * @todo Seperate the Modal section into its own seperate function, and add comments
 */
export default function Gallery() {
    const [open, setOpen] = useState(false)
    const [display, setDisplay] = useState('')
    
    const handleClick = (arg) => {
        setDisplay(arg)
        setOpen(true)
        console.log(open)
    }

    return (
        <div>
            <div className="gallery">
                {imagesData.map((image, index) => (
                    <img
                    key={index}
                    className="galleryItem"
                    src={image.src}
                    alt={image.alt}
                    onClick={() => handleClick(image.src)}
                    />
                ))}
            </div>
            <div>
                    <Modal
                        isOpen={open}
                        onRequestClose={() => setOpen(false)}
                        style={{
                            overlay: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            },
                            content: {
                                position: 'initial',
                                border: 'none',
                                borderRadius: '0px',
                                padding: '0px'
                            }
                        }}
                    >   
                        <div className="container">
                            <button className="modalButton" onClick={() => setOpen(false)}>x</button>
                            <img className="modalImage" src={display} onClick={() => setOpen(false)} />
                        </div>
                    </Modal>
            </div>
        </div>
    );
}