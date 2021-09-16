import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Form.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";

const FormLogin = () => {
  const [email, pickEmail] = useState("");
  const [password, pickPassword] = useState("");
  const [message, updateMessage] = useState("");

  const dispatch = useDispatch();

  // useSelector to access out state
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
  }, []);

  const Login = async (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

  return (
    <div className="form-content-right">
      <form className="form" noValidate>
        <h1>Login to Your Account</h1>
        {loading && (
          <div class="spinner-border text-success" role="status">
            <span class="sr-only"></span>
          </div>
        )}
        <p className="text-success">{error}</p>
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
