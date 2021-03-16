import React from 'react';
import { connect } from 'react-redux';

const DeliveryDetails = (props) => {
  return (
    <div className="col-md-6">
      <div className="delivery_details">
        <div className="checkout_headings">
          <h4>Delivery Details</h4>
        </div>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="full_name">Name</label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="full_name"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="password"
                className="form-control form-control-lg"
                id="mobile"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email Address</label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="Email"
              placeholder="Email"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputState">District</label>
              <select id="inputState" className="form-control form-control-lg">
                <option selected>Choose...</option>
                <option>District-one</option>
                <option>District-two</option>
                <option>District-three</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputState">Area</label>
              <select id="inputState" className="form-control form-control-lg">
                <option selected>Choose...</option>
                <option>Area-one</option>
                <option>Area-two</option>
                <option>Area-three</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="address"
              placeholder="Apartment, studio, or floor"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryDetails);
