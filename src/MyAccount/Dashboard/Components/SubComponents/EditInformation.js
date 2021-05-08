import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { StoreAccInfo } from '../../../../Redux/Action/AccountInfoAction';
import { GetAreaOption } from '../../../../Redux/Action/GetUserInfoAction';

const EditInformation = (props) => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    district: '',
    area: '',
    zip: '',
  });
  useEffect(() => {
    setInputs({
      name: props.info?.name,
      phone: props.info?.phone,
      email: props.info?.email,
      district: props.info?.district || '',
      area: props.info?.area || '',
      address: props.info?.address,
      zip: props.info?.zip || '',
    });
  }, [props.info]);
  useEffect(() => {
    props.getArea(inputs.district);
  }, [inputs.district]);
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
  };
  const submitFrom = (e) => {
    e.preventDefault();
    props.storeInfo(inputs);
    setInputs({
      name: '',
      email: '',
      phone: '',
      address: '',
      district: '',
      area: '',
    });
  };
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
            <div className="form-group col-12">
              <label htmlFor="name">Full Name</label>
              <input
                type="email"
                className="form-control"
                id="name"
                placeholder="Full Name"
                onChange={handleChange}
                value={inputs.name}
              />
            </div>
          </div>
          <div className=" form-group">
            <label htmlFor="phone">Phone Number</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="phone"
                onChange={handleChange}
                value={inputs.phone}
                placeholder="Phone number"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              value={inputs.email}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="district">District</label>
              <select
                id="district"
                className="form-control form-control-lg"
                onChange={handleChange}
                value={inputs.district}
                defaultValue={inputs.district}>
                <option selected value="">
                  Choose...
                </option>
                {props.info?.districts_lists?.map((district) => (
                  <option value={district.id} key={district.name}>
                    {district.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="area">Area</label>
              <select
                id="area"
                className="form-control form-control-lg"
                onChange={handleChange}
                value={inputs.area}
                defaultValue={inputs.area}>
                <option selected value="">
                  Choose...
                </option>
                {props.userArea[0]?.areas?.map((area) => (
                  <option value={area.id} key={area.name}>
                    {area.name}
                  </option>
                ))}
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
              onChange={handleChange}
              value={inputs.address}
            />
          </div>
          <div className="account_submit_btn">
            <Link
              to="#"
              onClick={submitFrom}
              className="btn btn-primary col-md-4">
              Save Address
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  info: state.UserInfo.info,
  userArea: state.UserInfo.userAreas,
});

const mapDispatchToProps = (dispatch) => ({
  storeInfo: (object) => dispatch(StoreAccInfo(object)),
  getArea: (id) => dispatch(GetAreaOption(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditInformation);
