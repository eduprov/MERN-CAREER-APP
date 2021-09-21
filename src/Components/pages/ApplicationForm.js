import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import { Navbar } from "../Navbar";
import { useDispatch, useSelector } from "react-redux";
import { createInterviewAction } from "../../actions/interviewActions";

const ApplicationForm = ({ history }) => {
  const [position, setPosition] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [marital, setMarital] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [sslc, setSslc] = useState("");
  const [puc, setPuc] = useState("");
  const [grad, setGrad] = useState("");
  const [postgrad, setPostGrad] = useState("");
  const [workone, setWorkOne] = useState("");
  const [worktwo, setWorkTwo] = useState("");
  const [workthree, setWorkThree] = useState("");
  const [achone, setAchOne] = useState("");
  const [achtwo, setAchTwo] = useState("");
  const [achthree, setAchThree] = useState("");
  const [address, setAddress] = useState("");
  const [report, setReport] = useState("pending");

  const dispatch = useDispatch();

  const interviewCreate = useSelector((state) => state.interviewCreate);
  const { loading, error, interview } = interviewCreate;

  console.log(interview);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createInterviewAction(
        position,
        name,
        dob,
        gender,
        marital,
        mobile,
        email,
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
        report
      )
    );
    history.push("/myhome");
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <form onSubmit={submitHandler}>
              <div className="card">
                <div className="card-body">
                  <h5>Application Form</h5>
                  <h6 className="mt-4 text-primary">Personal Details</h6>
                  <div className="row mt-4">
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label>Job Position</label>
                        <select
                          className="form-control"
                          onChange={(e) => setPosition(e.target.value)}
                        >
                          <option>Choose...</option>
                          <option>Telecaller</option>
                          <option>Telecounselor</option>
                          <option>HR</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label>Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label>DOB</label>
                        <input
                          type="text"
                          className="form-control"
                          value={dob}
                          onChange={(e) => setDob(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label>Gender</label>
                        <input
                          type="text"
                          className="form-control"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label>Marital status</label>
                        <input
                          type="text"
                          className="form-control"
                          value={marital}
                          onChange={(e) => setMarital(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label>Mobile No</label>
                        <input
                          type="text"
                          className="form-control"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label>Email</label>
                        <input
                          type="text"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <h6 className="mt-4 text-primary"> Education Details</h6>

                  <div className="row mt-3">
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label>10th / SSLC</label>
                        <input
                          type="text"
                          className="form-control"
                          value={sslc}
                          onChange={(e) => setSslc(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label>12th / PUC</label>
                        <input
                          type="text"
                          className="form-control"
                          value={puc}
                          onChange={(e) => setPuc(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label>Graduation</label>
                        <input
                          type="text"
                          className="form-control"
                          value={grad}
                          onChange={(e) => setGrad(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label>Post Graduation</label>
                        <input
                          type="text"
                          className="form-control"
                          value={postgrad}
                          onChange={(e) => setPostGrad(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <h6 className="mt-4 text-primary">
                    {" "}
                    Work Experience(if any)
                  </h6>
                  <div className="row mt-3">
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          value={workone}
                          onChange={(e) => setWorkOne(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          value={worktwo}
                          onChange={(e) => setWorkTwo(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          value={workthree}
                          onChange={(e) => setWorkThree(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <h6 className="mt-4 text-primary">Achievements(if any)</h6>
                  <div className="row mt-3">
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          value={achone}
                          onChange={(e) => setAchOne(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          value={achtwo}
                          onChange={(e) => setAchTwo(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          value={achthree}
                          onChange={(e) => setAchThree(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <h6 className="mt-4 text-primary">Address</h6>
                  <div className="row mt-3">
                    <div className="col-md-12">
                      <div className="form-group mb-3">
                        <textarea
                          className="form-control"
                          rows="4"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label>Status</label>
                        <input
                          type="text"
                          className="form-control"
                          value={report}
                          onChange={(e) => setReport(e.target.value)}
                          disabled="true"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group">
                      <button className="bt">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationForm;
