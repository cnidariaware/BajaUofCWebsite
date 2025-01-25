import InterviewForm from "./InterviewForm";
import logo from "../Header/logo.webp";
import Ender from "../Footer/Ender";
/**
 * @param {null} null - requires onthing
 * @returns {JSX.Element} Page - HTML tags and JS functionality
 * @description The Footer of the page
 * @author Brock <darkicewolf50@gmail.com>
 * @todo add who helped developed the site and finalize css
 */
const InterviewBooking = () => {
  return (
    <>
      <img id="logo" src={logo} alt="Schulich Off-Road's logo" />
      <h1>UofC Baja Interview Form</h1>
      <p>Please kindly fill out the form and our team will contact you.</p>
      <InterviewForm />
      <h4>
        What to do if I cannot make it to any of the avaliable time slots or
        need to rescedule?
      </h4>
      <p>
        While we highly encourage sceduling an interview in one of the above
        time slots, we recongize that not everyone can make it work with their
        personal and university schedules.
      </p>
      <p>
        Please email us at{" "}
        <a href="mailto:uofcbaja@gmail.com">uofcbaja@gmail.com</a> to work out
        an alternate interview time or for rescheduling.
      </p>
      <Ender />
    </>
  );
};

export default InterviewBooking;
