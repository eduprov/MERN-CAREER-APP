import React from "react";
import { Navbar } from "../Navbar";
import Banner from "../assets/Banner.png";
import ApplicationImg from "../assets/img1.png";
import InterviewImg from "../assets/img2.png";
import ManagerImg from "../assets/img3.png";
import HRImg from "../assets/img4.png";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <section style={{ backgroundColor: "#CFEFC9" }}>
            <div className="container mt-5" style={{ height: "350px" }}>
              <div className="row">
                <div className="col-md-6 mt-5">
                  <h5 style={{ fontWeight: "bold", color: "#73AC5F" }}>
                    JOBSPHERE
                  </h5>
                  <p className="text-justify" style={{ fontWeight: "bold" }}>
                    Recruitment at Career.io is a vital need for the
                    organisation to grow. We place the right candidates into the
                    right jobs and evaluate their performances onto a cosmic
                    basis.
                  </p>
                  <button className="bt">Learn More</button>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-4 banner-col">
                  <img
                    src={Banner}
                    className="banner-img-main"
                    alt="Hero image"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <div class="card" style={{ width: "18rem", borderRadius:'10px' }}>
              <img src="interview.svg" className="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container mt-5 pt-4">
        <div className="row text-center">
          <div className="col-md-6">
            <img src={ApplicationImg} className="application-image" />
          </div>
          <div className="col-md-6 mt-5 pt-5">
            <h4 className="text-center"> Application Process</h4>
            <h5 className="text-center">
              We get copious number of applications for interviews.
            </h5>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 text-center ">
            <img
              src={InterviewImg}
              className="banner-img-interview"
              alt="Interview section"
            />
          </div>
          <div className="col-md-6 mt-5 pt-5">
            <h4 className="text-center">interview process</h4>
            <h5 className="text-center">
              We pick the finest candidates and conduct an interview with basic
              etiquttes.
            </h5>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 text-center">
            <img
              src={ManagerImg}
              className="banner-img-manager"
              alt="Manager section"
            />
          </div>
          <div className="col-md-6 mt-5 pt-5">
            <h4 className="text-center">Managerial round</h4>
            <h5 className="text-center">
              The manager will conduct an interview keeping the company
              standards in mind.
            </h5>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 text-center">
            <img src={HRImg} className="banner-img-hr" alt="Hr section" />
          </div>
          <div className="col-md-6 mt-5 pt-5">
            <h4 className="text-center"> HR round </h4>
            <h5 className="text-center">
              Once the candidate is selected the HR will be taking in to conduct
              induction and explain company policies and procedures.
            </h5>
          </div>
        </div>
      </div>
      <div className="mt-5 pt-1">
        <Footer />
      </div>
    </>
  );
};

export default Home;
