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
                <div>
                    <img onClick = {() => navigate('/')} src={logo} alt="logo" />
                    <p>Schulich Offroad</p>
                </div>
                <div>
                    <button type = "button" onClick = {() => navigate('/')}>About Us</button>
                    <button type = "button" onClick = {() => navigate('/Teams')}>Teams</button>
                    <button type = "button" onClick = {() => navigate('/OurSponsors')}>Our Sponsors</button>
                    <button type = "button" onClick = {() => navigate('/BecomeASponsor')}>Become a Sponsor</button>
                    <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    >
                        <button type = "button">Club Membership & Upcoming Events</button>
                        {isDropdownVisible && <DropdownMenu />}
                    </div>
                    <button type = "button" onClick = {() => navigate('/Gallery')}>Gallery</button>
                </div>
            </header>
            <Outlet />
        </>
    );
};