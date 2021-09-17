import React from "react";

const ApplicationForm = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="card">
            <div className="card-body">
              <h5>Application Form</h5>
              <h6 className="mt-4 text-primary">Personal Details</h6>
              <div className="row mt-4">
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label>Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label>DOB</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label>Gender</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label>Marital status</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label>Mobile No</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <h6 className="mt-4 text-primary"> Education Details</h6>

              <div className="row mt-3">
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label>10th / SSLC</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label>12th / PUC</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label>Graduation</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label>Post Graduation</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <h6 className="mt-4 text-primary"> Work Experience(if any)</h6>
              <div className="row mt-3">
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <h6 className="mt-4 text-primary">Achievements(if any)</h6>
              <div className="row mt-3">
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <h6 className="mt-4 text-primary">Address</h6>
              <div className="row mt-3">
                <div className="col-md-12">
                  <div className="form-group mb-3">
                    <textarea className="form-control" rows="4"></textarea>
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
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
