import logo from './logo.png';
import DropdownMenu from "./DropdownMenu";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./Header.css";

export default function Header() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    return (
        <>
            <header>
                <div className='banner'>
                    <img className='logo' onClick = {() => navigate('/')} src={logo} alt="logo" />
                    <p id='title'>Schulich Offroad</p>
                </div>
                <div className='navigationBar'>
                    <button className='navigateButton' type = "button" onClick = {() => navigate('/')}>About Us</button>
                    <button className='navigateButton' type = "button" onClick = {() => navigate('/Teams')}>Teams</button>
                    <button className='navigateButton' type = "button" onClick = {() => navigate('/OurSponsors')}>Our Sponsors</button>
                    <button className='navigateButton' type = "button" onClick = {() => navigate('/BecomeASponsor')}>Become a Sponsor</button>
                    <div
                    className='dropDown'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    >
                        <button className='navigateButton' type = "button">Club Membership & Upcoming Events</button>
                        {isDropdownVisible && <DropdownMenu />}
                    </div>
                    <button className='navigateButton' type = "button" onClick = {() => navigate('/Gallery')}>Gallery</button>
                </div>
            </header>
            <Outlet />
        </>
    );
};