import React from "react";
import { Link } from "react-router-dom";
import "./Form.css";

const FormLogin = () => {
  return (
    <div className="form-content-right">
      <form className="form" noValidate>
        <h1>Login to Your Account</h1>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <button className="form-input-btn" type="submit">
          Login
        </button>
        <span className="form-input-login">
          New User ? Signup <Link to="/register">here</Link>
        </span>
      </form>
    </div>
  );
};

export default FormLogin;
