import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Edit = ({ match }) => {
  const params = useParams();
  const [name, processName] = useState();
  const [email, processEmail] = useState("");
  const [dob, processDob] = useState("");
  const [gender, processGender] = useState("");
  const [marital, processMarital] = useState("");
  const [mobile, processMobile] = useState("");
  const [sslc, processSslc] = useState("");
  const [puc, processPuc] = useState("");
  const [grad, processGrad] = useState("");
  const [postgrad, processPostGrad] = useState("");
  const [workone, processWorkone] = useState("");
  const [worktwo, processWorktwo] = useState("");
  const [workthree, processWorkthree] = useState("");
  const [achone, processAchone] = useState("");
  const [achtwo, processAchtwo] = useState("");
  const [achthree, processAchthree] = useState("");
  const [address, processAddress] = useState("");
  const [position, processPosition] = useState("");
  const [report, processReport] = useState("");

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(
        `https://career-app-api-url.herokuapp.com/api/interviewapi/get/${match.params.id}`
      );
      processName(data.name);
      processEmail(data.email);
      processDob(data.dob);
      processGender(data.gender);
      processMarital(data.marital);
      processMobile(data.mobile);
      processSslc(data.sslc);
      processPuc(data.puc);
      processGrad(data.grad);
      processPostGrad(data.postgrad);
      processWorkone(data.workone);
      processWorktwo(data.worktwo);
      processWorkthree(data.workthree);
      processAchone(data.achone);
      processAchtwo(data.achtwo);
      processAchthree(data.achthree);
      processAddress(data.address);
      processPosition(data.position);
      processReport(data.report);

      console.log(data);
    };

    fetching();
  }, [match.params.id]);

  const [message, updateMessage] = useState("");
  const updateInfo = () => {
    var url = `https://career-app-api-url.herokuapp.com/api/interviewapi/${match.params.id}`;
    var jsonData = {
      name,
      email,
      dob,
      gender,
      marital,
      mobile,
      sslc,
      puc,
      grad,
      postgrad,
      workone,
      worktwo,
      workthree,
      achone,
      achtwo,
      achthree,
      address,
      position,
      report,
      address,
    };
    axios.put(url, jsonData).then((response) => {
      console.log(response.data);
    });
    updateMessage("Data updated Successfully");
  };

  return (
    <div className="container mt-5">
      <div className="col-md-12 mb-3 text-center">
        <h2 className="text-danger">Editing Interview Details </h2>
        <p className="text-success">{message}</p>
      </div>
      <div className="row mb-3 mt-5">
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
          <label>Gender</label>
          <input
            type="text"
            className="form-control"
            value={gender}
            onChange={(obj) => processGender(obj.target.value)}
          />
        </div>
        <div className="col-lg-4 mb-3">
          <label>Marital Status</label>
          <input
            type="text"
            className="form-control"
            value={marital}
            onChange={(obj) => processMarital(obj.target.value)}
          />
        </div>
        <div className="col-lg-4 mb-3">
          <label>Mobile No</label>
          <input
            type="text"
            className="form-control"
            value={mobile}
            onChange={(obj) => processMobile(obj.target.value)}
          />
        </div>
        <div className="col-lg-4 mb-3">
          <label>SSLC / 10TH </label>
          <input
            type="text"
            className="form-control"
            value={sslc}
            onChange={(obj) => processSslc(obj.target.value)}
          />
        </div>
        <div className="col-lg-4 mb-3">
          <label>PUC / 12TH </label>
          <input
            type="text"
            className="form-control"
            value={puc}
            onChange={(obj) => processPuc(obj.target.value)}
          />
        </div>
        <div className="col-lg-4 mb-3">
          <label>Graduation </label>
          <input
            type="text"
            className="form-control"
            value={grad}
            onChange={(obj) => processGrad(obj.target.value)}
          />
        </div>
        <div className="col-lg-4 mb-3">
          <label>Post Graduation </label>
          <input
            type="text"
            className="form-control"
            value={postgrad}
            onChange={(obj) => processPostGrad(obj.target.value)}
          />
        </div>
        <div className="col-lg-4 mb-3">
          <label>Work Exp I </label>
          <input
            type="text"
            className="form-control"
            value={workone}
            onChange={(obj) => processWorkone(obj.target.value)}
          />
        </div>
        <div className="col-lg-4 mb-3">
          <label>Work Exp II </label>
          <input
            type="text"
            className="form-control"
            value={worktwo}
            onChange={(obj) => processWorktwo(obj.target.value)}
          />
        </div>
        <div className="col-lg-4 mb-3">
          <label>Work Exp III </label>
          <input
            type="text"
            className="form-control"
            value={workthree}
            onChange={(obj) => processWorkthree(obj.target.value)}
          />
        </div>
        <div className="col-lg-4 mb-3">
          <label>Achievements I </label>
          <input
            type="text"
            className="form-control"
            value={achone}
            onChange={(obj) => processAchone(obj.target.value)}
          />
        </div>
        <div className="col-lg-4 mb-3">
          <label>Achievements II </label>
          <input
            type="text"
            className="form-control"
            value={achtwo}
            onChange={(obj) => processAchtwo(obj.target.value)}
          />
        </div>
        <div className="col-lg-4 mb-3">
          <label>Achievements III </label>
          <input
            type="text"
            className="form-control"
            value={achthree}
            onChange={(obj) => processAchthree(obj.target.value)}
          />
        </div>
        <div className="col-lg-4 mb-3">
          <label>Position </label>
          <input
            type="text"
            className="form-control"
            value={position}
            onChange={(obj) => processPosition(obj.target.value)}
          />
        </div>
        <div className="col-lg-4 mb-3">
          <label>Status </label>
          <select
            className="form-control"
            onChange={(e) => processReport(e.target.value)}
          >
            <option>Choose...</option>
            <option>hr interview </option>
            <option>managers interview </option>
            <option>processing </option>
            <option>selected </option>
            <option>rejected</option>
          </select>
        </div>
        <div className="col-lg-12 mb-3">
          <label>Address </label>
          <textarea
            className="form-control"
            value={address}
            onChange={(e) => processAddress(e.target.value)}
          ></textarea>
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
