import React, { useState } from "react";
import "./Form.css";
import FormLogin from "./FormLogin";

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn">×</span>
        <div className="form-content-left ">
          <img className="form-img" src="login.svg" alt="spaceship" />
        </div>
        <FormLogin />
      </div>
    </>
  );
};

export default Login;
