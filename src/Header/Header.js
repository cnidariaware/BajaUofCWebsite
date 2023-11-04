import logo from './logo.jpg';
import DropdownMenu from "./DropdownMenu";
import OpenPage from "./OpenPage";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./Header.css";

export default function Header() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

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
                    <img src={logo} alt="logo" />
                    <p>Schulich Offroad</p>
                </div>
                <div>
                    <button type = "button" onClick = {() => OpenPage('/')}>About Us</button>
                    <button type = "button" onClick = {() => OpenPage('/Teams')}>Teams</button>
                    <button type = "button" onClick = {() => OpenPage('/OurSponsors')}>Our Sponsors</button>
                    <button type = "button" onClick = {() => OpenPage('/BecomeASponsor')}>Become a Sponsor</button>
                    <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{background: "red"}}
                    >
                        <button type = "button">Club Membership & Upcoming Events</button>
                        {isDropdownVisible && <DropdownMenu />}
                    </div>
                    <button type = "button" onClick = {() => OpenPage('/Gallery')}>Gallery</button>
                </div>
            </header>
            <Outlet />
        </>
    );
};