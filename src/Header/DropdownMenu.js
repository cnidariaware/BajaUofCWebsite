import { useNavigate } from "react-router-dom";

const DropdownMenu = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button type = "button" onClick = {() => navigate('/JoinTheClub')}>Join the Club</button>
      <button type = "button" onClick = {() => navigate('/UpcomingEvents')}>Upcoming Events</button>
    </div>
  );
};

export default DropdownMenu;