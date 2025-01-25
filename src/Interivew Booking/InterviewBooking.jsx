import InterviewForm from "./InterviewForm";
import logo from "../Header/logo.webp";
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
    </>
  );
};

export default InterviewBooking;
