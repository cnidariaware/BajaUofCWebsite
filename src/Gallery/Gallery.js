import Modal from 'react-modal';
import { useState } from "react";
import './Gallery.css';

const images = [
  { src: 'https://i.pinimg.com/736x/70/28/0f/70280f1b75ea956f4fdef7e31336d9f0.jpg', alt: 'Image 1' },
  { src: 'https://wallpapers.com/images/featured-full/cool-anime-6kbwj9794wpnsfr1.jpg', alt: 'Image 2' },
  { src: 'https://wallpapers.com/images/featured/cool-anime-pfp-pictures-71urutpksg13vkbk.jpg', alt: 'Image 3' },
  { src: 'https://i.pinimg.com/236x/ab/dc/52/abdc52db893674a7b5dcb767be8776e5.jpg', alt: 'Image 4' },
  { src: 'https://qph.cf2.quoracdn.net/main-qimg-a3fdbac7bf9f8db58f147887ffa76d88-lq', alt: 'Image 5' },
  { src: 'https://i.redd.it/people-already-making-good-use-of-that-public-domain-v0-krh76hi874ac1.png?width=2000&format=png&auto=webp&s=405581952294275a5d6cf05a97c05b3387b73f34', alt: 'Image 6'}
];

/**
 * @param {null} null - requires onthing
 * @returns {JSX.Element} JSX - HTML tags and JS functionality
 * @description Gallery Page
 * @author Sarim <sheikhsarim20@gmail.com>
 * @todo move url links to json file until backend is imlemented
 */
export default function Gallery() {
    const [open, setOpen] = useState(false)
    const [display, setDisplay] = useState('')
    
    const handleClick = (arg) => {
        console.log("Test")
        setDisplay(arg)
        setOpen(true)
        console.log(open)
    }

    return (
        <div>
            <div className="gallery">
                {images.map((image, index) => (
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