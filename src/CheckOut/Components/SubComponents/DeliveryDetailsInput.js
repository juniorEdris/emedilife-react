import React from 'react';
import { connect } from 'react-redux';

const DeliveryDetails = (props) => {
  return (
    <div className="">
      <div className="delivery_details chekoutCard">
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
                defaultValue={props.info?.name}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="mobile"
                defaultValue={props.info?.phone}
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
              defaultValue={props.info?.email}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="district">District</label>
              <select id="district" className="form-control form-control-lg">
                <option selected>Choose...</option>
                {props.info?.districts_lists?.map((district) => (
                  <option value={district.id} key={district.name}>
                    {district.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="area">Area</label>
              <select id="area" className="form-control form-control-lg">
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
              defaultValue={props.info?.address}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.UserInfo.loading,
  deliveryTypes: state.UserInfo.delivery_types,
  info: state.UserInfo.info,
  status: state.UserInfo.status,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryDetails);
