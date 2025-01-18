import { useState } from "react";

const InterviewForm = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const formsubmit = async (event) => {
    event.preventDefault();
    setIsButtonDisabled(true);
    await new Promise((res) => setTimeout(res, 10000));
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());
    await console.log("Form Data:", formObject);
    setIsButtonDisabled(false);
  };
  return (
    <>
      <form onSubmit={formsubmit}>
        <label for="name">Name (What to call you):</label>
        <input type="text" id="fname" name="name" placeholder="Jaeinceins" />
        <label for="email">UCalgary Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="jaeinceins.bhaja@ucalgary.ca"
        />
        <button type="submit" disabled={isButtonDisabled}>
          Submit
        </button>
      </form>
    </>
  );
};

export default InterviewForm;
