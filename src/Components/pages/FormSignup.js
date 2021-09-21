import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Form.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions";

const FormSignup = () => {
  const [name, pickName] = useState("");
  const [email, pickEmail] = useState("");
  const [password, pickPassword] = useState("");
  const [pic, setPic] = useState(
    "https://res.cloudinary.com/dv5jjlsd7/image/upload/v1631444571/user_1_qy7hlx.png"
  );
  const [message, updateMessage] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [setpicmessage, setPicMessage] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push("/myhome");
    }
  }, [history, userInfo]);

  const save = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      updateMessage("Password does not match");
    } else {
      dispatch(register(name, email, password, pic));
      updateMessage("Registered successfull");
    }
  };


  const postDetails = (pics) => {
    if (
      pics ===
      "https://res.cloudinary.com/dv5jjlsd7/image/upload/v1631444571/user_1_qy7hlx.png"
    ) {
      return setPicMessage("Please Select an Image");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "noteszipper");
      data.append("cloud_name", "dv5jjlsd7");
      fetch("https://api.cloudinary.com/v1_1/dv5jjlsd7/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={save}>
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
        <p className="text-success">{error}</p>
        <div className="form-inputs">
          <label className="form-label">Username</label>
          <input
            className="form-input"
            type="text"
            placeholder="Enter your username"
            value={name}
            onChange={(e) => pickName(e.target.value)}
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => pickEmail(e.target.value)}
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => pickPassword(e.target.value)}
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">Confirm Password</label>
          <input
            className="form-input"
            type="password"
            placeholder="Enter your password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">Profile Pic</label>
          <input
            className="form-input form-control"
            type="file"
            placeholder="Select Profile pic"
            onChange={(e) => postDetails(e.target.files[0])}
          />
        </div>
        <button className="form-input-btn">Sign up</button>
        <span className="form-input-login">
          Already have an account? Login <Link to="/login">here</Link>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
