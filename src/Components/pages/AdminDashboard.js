import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar";
import { NavbarTwo } from "../Navbar/index2";
class AdminDashboard extends Component {
  constructor() {
    super();
    this.state = {
      interviewlist: [],
      message: "",
    };
  }

  getInterview = () => {
    fetch("https://career-app-api-url.herokuapp.com/api/interviewapi/getall")
      .then((response) => response.json())
      .then((allinterview) =>
        this.setState({
          interviewlist: allinterview,
        })
      );
  };

  componentDidMount() {
    this.getInterview();
  }

  render() {
    return (
      <>
        <NavbarTwo />
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <table className="table table-sm table-bordered text-center">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.interviewlist.map((interview) => {
                    return (
                      <tr key={interview._id}>
                        <td>{interview.name}</td>
                        <td>{interview.email}</td>
                        <td>{interview.mobile}</td>
                        <td>
                          {" "}
                          <Link
                            to={`${interview._id}/edit`}
                            className="btn btn-warning btn-sm m-2 text-white"
                          >
                            Edit Interview
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default AdminDashboard;


