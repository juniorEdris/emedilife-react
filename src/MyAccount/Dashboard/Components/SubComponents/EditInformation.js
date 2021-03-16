import React from 'react';
import { connect } from 'react-redux';

const EditInformation = (props) => {
  return (
    <div className="edit_information">
      <div className="acc_dash_heading mb-5">
        <h5>Edit account information</h5>
      </div>
      <div className="col-12 acc_info_inputs pr-md-5 pl-md-5 mb-5 mb-md-0">
        <div className="info_heading">
          <h3>Account Information</h3>
        </div>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="first_name">First Name</label>
              <input
                type="email"
                className="form-control"
                id="first_name"
                placeholder="First Name"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="last_name">Last name</label>
              <input
                type="text"
                className="form-control"
                id="last_name"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className=" form-group">
            <label htmlFor="phone">Phone Number</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">+880</div>
              </div>
              <input type="text" className="form-control" id="phone" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Email"
            />
          </div>
          {/* <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label ml-2" htmlFor="gridCheck">
                <span className="btn btn-dark check-label">Save Address</span>
              </label>
            </div>
          </div> */}
          <div className="account_submit_btn">
            <button type="submit" className="btn btn-primary col-md-4">
              Save Address
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(EditInformation);
