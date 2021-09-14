import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Form.css";
import axios from "axios";

const FormLogin = () => {
  const [email, pickEmail] = useState("");
  const [password, pickPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [message, updateMessage] = useState("");

  const Login = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        }
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      updateMessage("Logged in Successfully...");
    } catch (error) {
      updateMessage(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div className="form-content-right">
      <form className="form" noValidate>
        <h1>Login to Your Account</h1>
        <p className="text-success">{message}</p>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(obj) => pickEmail(obj.target.value)}
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(obj) => pickPassword(obj.target.value)}
          />
        </div>
        <button className="form-input-btn" onClick={Login}>
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
