import { useNavigate } from "react-router-dom";
import "./Header.css";

/**
 * @param {null} null - requires onthing
 * @returns {JSX.Element} JSX - HTML tags and JS functionality
 * @description Header page helper function for drop down menu
 * @author Sarim <sheikhsarim20@gmail.com>
 * @todo add css
 */
const DropdownMenu = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button className='navigateButton' type = "button" onClick = {() => navigate('/JoinTheClub')}>Join the Club</button>
      <button className='navigateButton' type = "button" onClick = {() => navigate('/UpcomingEvents')}>Upcoming Events</button>
    </div>
  );
};

export default DropdownMenu;