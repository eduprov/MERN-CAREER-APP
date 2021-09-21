import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { updateProfile } from "../../actions/userActions";
import { Navbar } from "../Navbar";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pic, setPic] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState();
  const [picMessage, setPicMessage] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, error, success } = userUpdate;

  const history = useHistory();

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      setName(userInfo.name);
      setEmail(userInfo.email);
      setPic(userInfo.pic);
    }
  }, [history, userInfo]);

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

  const SubmitHandler = (e) => {
    e.preventDefault();

    if (password === confirmPassword)
      dispatch(updateProfile({ name, email, password, pic }));
    setMessage("User Info updated Successfully");
  };

  return (
    <>
      <Navbar />
      <form onSubmit={SubmitHandler}>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <h3>Profile Info</h3>
              <p className="text-success">{message}</p>
              <div className="form-group mb-3">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label>Password</label>
                <input
                  type="text"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label>Confirm Password</label>
                <input
                  type="text"
                  className="form-control"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label>Change Profile Pic</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => postDetails(e.target.files[0])}
                />
              </div>
              <div className="form-group">
                <button className="bt">Submit</button>
              </div>
            </div>
            <div className="col-md-6">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={pic} alt={name} className="profilePic" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Profile;
