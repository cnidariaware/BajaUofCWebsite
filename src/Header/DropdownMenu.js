import OpenPage from "./OpenPage";

export default function DropdownMenu() {

  return (
    <div>
      <button type = "button" onClick = {OpenPage('/JoinTheClub')}>Join the Club</button>
      <button type = "button" onClick = {OpenPage('/UpcomingEvents')}>Upcoming Events</button>
    </div>
  );
};