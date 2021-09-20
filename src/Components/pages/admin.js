import React, { useState } from "react";
import "./AdminForm.css";
import AdminLogin from "./AdminLogin";

const Admin = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn">×</span>
        <div className="form-content-left ">
          <img className="form-img" src="admin.svg" alt="spaceship" />
        </div>
        <AdminLogin />
      </div>
    </>
  );
};

export default Admin;
