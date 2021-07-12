import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const DeliveryDetails = (props) => {
  const handleChange = (e) => {
    props.setDetails({
      ...props.details,
      [e.target.name]: e.target.value,
    });
  };
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
                name="name"
                onChange={handleChange}
              />
              {props.details.name === '' && (
                <div className="text-danger">Please provide your name.</div>
              )}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="mobile"
                defaultValue={props.info?.phone}
                name="phone"
                readOnly
              />
              {props.details.phone === '' && (
                <small className="text-danger">
                  Please provide your mobile number.
                </small>
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email Address (optional)</label>
            <input
              type="email"
              className={`${props.EmailExist.status ==='available' && 'success-border'} form-control form-control-lg`}
              id="Email"
              placeholder="Email"
              defaultValue={props.info?.email}
              name="email"
              onChange={handleChange}
              onBlur={props.emailCheck}
            />
            {props.details.email === '' && (
              <small className="text-danger">
                Please provide your email address.
              </small>
            )}
            {props.EmailExist.error && (
              <small className="text-danger">
               {props.EmailExist.error}
              </small>
            )}
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="district">District</label>
              <select
                id="district"
                className="form-control form-control-lg"
                name="district"
                onChange={handleChange}
                value={props.details?.district}
                defaultValue={props.details?.district}
                required>
                <option value="" selected>
                  Choose...
                </option>
                {props.info?.districts_lists?.map((district) => (
                  <option value={district.id} key={district.name}>
                    {district.name}
                  </option>
                ))}
              </select>
              {props.details.district === '' && (
                <small className="text-danger">
                  Please provide your district name.
                </small>
              )}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="area">Area</label>
              <select
                id="area"
                className="form-control form-control-lg"
                name="area"
                onChange={handleChange}
                value={props.details?.area}
                defaultValue={props.details?.area}
                required>
                <option value="" selected>
                  Choose...
                </option> 
                {props.useArea[0]?.areas?.map((area) => (
                  <option
                    value={area.id}
                    key={area.name}
                  >
                    {area.name}
                  </option>
                ))}
              </select>
              {props.details.area === '' && (
                <small className="text-danger">
                  Please provide your area name.
                </small>
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-12">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="address"
                placeholder="Apartment, studio, or floor"
                value={props.info?.address}
                name="address"
                onChange={handleChange}
              />
              {props.details.address === '' && (
                <small className="text-danger">
                  Please provide your address.
                </small>
              )}
            </div>
            {/* <div className="form-group col-md-6">
              <label htmlFor="zip">Zip</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="zip"
                placeholder="zip code"
                defaultValue={props.info?.zip}
                name="zip"
                onChange={handleChange}
              />
              {props.details.zip === '' && (
                <small className="text-danger">
                  Please provide your zip code.
                </small>
              )}
            </div> */}
          </div>
          <div className="form-row">
            <div className="form-group col-12">
              <label htmlFor="delivery_mark">Delivery Mark (optional)</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="delivery_mark"
                placeholder="Building, Mor, Store, Mall, Market, Area, Place"
                value={props.info?.delivery_mark}
                name="delivery_mark"
                onChange={handleChange}
              />
            </div>
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
  useArea: state.UserInfo.userAreas,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryDetails);
