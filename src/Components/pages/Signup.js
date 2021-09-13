import React, { useState } from "react";
import "./Form.css";
import FormSignup from "./FormSignup";

const Signup = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn">×</span>
        <div className="form-content-left ">
          <img className="form-img" src="img-2.svg" alt="spaceship" />
        </div>
        <FormSignup />
      </div>
    </>
  );
};

export default Signup;
