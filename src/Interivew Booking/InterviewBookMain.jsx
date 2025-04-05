import InterviewForm from "./InterviewForm";
import logo from "../Header/logo.png";
import Ender from "../Footer/Ender";
import "./InterviewBooking.css";
/**
 * @param {null} null - requires onthing
 * @returns {JSX.Element} Page - HTML tags and JS functionality
 * @description The Footer of the page
 * @author Brock <darkicewolf50@gmail.com>
 * @todo add who helped developed the site and finalize css
 */
export default function InterviewBooking() {
  return (
    <div id="InterviewBooking">
      <header>
        <img
          id="logo"
          src={logo}
          alt="Schulich Off-Road's logo"
          style={{ backgroundColor: "inherit" }}
        />
        <h1>UCalgary Baja</h1>
      </header>
      <div id="MainForm">
        <h2>Booking Interview Form</h2>
        <p>Please kindly fill out the form and our team will contact you.</p>
        <InterviewForm />

        {/* <DateTimePicker /> */}
      </div>
      <Ender />
    </div>
  );
}
