import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { listInterview } from "../../actions/interviewActions";
import { Navbar } from "../Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Dashboard = () => {
  const dispatch = useDispatch();

  const interviewList = useSelector((state) => state.interviewList);
  const { loading, interviews, error } = interviewList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listInterview());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12"></div>
          <div className="col-md-12">
            <Link to="/application">
              <button className="bt">Apply Now</button>
            </Link>
          </div>
          <div className="col-md-12 mt-4">
            <table className="table table-lg table-bordered text-center">
              <thead className="bg-warning text-white">
                <tr>
                  <th>Name</th>
                  <th>Mobile No</th>
                  <th>Email ID</th>
                  <th>Job Position</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {interviews?.map((interview) => {
                  return (
                    <tr key={interview._id}>
                      <td>{interview.name}</td>
                      <td>{interview.mobile}</td>
                      <td>{interview.email}</td>
                      <td>{interview.position}</td>
                      <td>{interview.report}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="footer"></div>
      <Footer />
    </>
  );
};

export default Dashboard;
