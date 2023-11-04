import { useNavigate } from "react-router-dom";
import "./Header.css";

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