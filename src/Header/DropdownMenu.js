import OpenPage from "./OpenPage";

const DropdownMenu = () => {
  return (
    <div>
      <button type = "button" onClick = {() => OpenPage('/JoinTheClub')}>Join the Club</button>
      <button type = "button" onClick = {() => OpenPage('/UpcomingEvents')}>Upcoming Events</button>
    </div>
  );
};

export default DropdownMenu;