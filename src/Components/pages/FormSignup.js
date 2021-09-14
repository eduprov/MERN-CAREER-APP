import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Form.css";

const FormSignup = () => {
  const [name, pickName] = useState("");
  const [email, pickEmail] = useState("");
  const [password, pickPassword] = useState("");
  const [pic, setPic] = useState(
    "https://res.cloudinary.com/dv5jjlsd7/image/upload/v1631444571/user_1_qy7hlx.png"
  );
  const [loading, setLoading] = useState("");
  const [message, updateMessage] = useState("");

  const save = async (e) => {
    e.preventDefault();
    setLoading(true);
    const url = "http://localhost:5000/api/users";
    const input = { name, email, password, pic };
    await axios.post(url, input).then((response) => {
      updateMessage(response.data);
      pickName("");
      pickEmail("");
      pickPassword("");
      setLoading(false);
      localStorage.setItem("userInfo", JSON.stringify(input));
    });
  };

  return (
    <div className="form-content-right">
      <form className="form">
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>

        {loading && (
          <div class="spinner-border text-success" role="status">
            <span class="sr-only"></span>
          </div>
        )}
        <p className="text-success">{message}</p>
        <div className="form-inputs">
          <label className="form-label">Username</label>
          <input
            className="form-input"
            type="text"
            placeholder="Enter your username"
            value={name}
            onChange={(obj) => pickName(obj.target.value)}
          />
        </div>
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
        <button className="form-input-btn" onClick={save}>
          Sign up
        </button>
        <span className="form-input-login">
          Already have an account? Login <Link to="/login">here</Link>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
