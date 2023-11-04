// import OpenPage from "./OpenPage";
import { useNavigate } from "react-router-dom";

const DropdownMenu = () => {
  const navigate = useNavigate();

  const OpenPage = (arg) => {    
      navigate(arg);
      console.log(arg);
  };

  return (
    <div>
      <button type = "button" onClick = {() => OpenPage('/JoinTheClub')}>Join the Club</button>
      <button type = "button" onClick = {() => OpenPage('/UpcomingEvents')}>Upcoming Events</button>
    </div>
  );
};

export default DropdownMenu;