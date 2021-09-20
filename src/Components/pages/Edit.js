import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Edit = ({ match }) => {
  const params = useParams();
  const [name, processName] = useState();
  const [email, processEmail] = useState("");

  // const getInfo = () => {
  //   var url = `http://localhost:5000/api/interviewapi/get/${params.id}`;
  //   axios.get(url).then((response) => {
  //     processName(response.data[0].name);
  //     processEmail(response.data[0].email);
  //   });
  // };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/interviewapi/get/${match.params.id}`
      );

      processName(data.name);

      console.log(data);
    };

    fetching();
  }, [match.params.id]);
  const updateInfo = () => {
    var url = `http://localhost:5000/api/interviewapi/${match.params.id}`;
    var jsonData = {
      name,
      email,
    };
    axios.put(url, jsonData).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="container mt-5">
      <div className="col-md-12 mb-3 text-center">
        <h2 className="text-danger">Editing Interview Details {params.id} </h2>
      </div>
      <div className="row mb-3">
        <div className="col-lg-4 mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(obj) => processName(obj.target.value)}
          />
        </div>
        <div className="col-lg-4 mb-3">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            value={email}
            onChange={(obj) => processEmail(obj.target.value)}
          />
        </div>
        <div className="col-lg-4 mb-3">
          <label>City</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-lg-4 mb-3">
          <label>Mobile</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-lg-4 mb-3">
          <label>Email-ID</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-lg-4 mb-3">
          <br />
          <button className="btn btn-warning text-white" onClick={updateInfo}>
            {" "}
            Update{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
