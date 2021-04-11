import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserInfo } from '../Redux/Action/GetUserInfoAction';
import './checkout.css';
import CheckOutBody from './Components/CheckOutBody';

const CheckOut = (props) => {
  useEffect(() => {
    props.user && props.getUserInfo();
  }, []);
  console.log(
    'checkout index',
    props.loading,
    props.deliveryTypes,
    props.info,
    props.status
  );
  return (
    <div className="checkout_wrapper">
      <div className="container">
        {/* CHECKOUT HEADING STARTS HERE */}
        <div className="checkout_heading">
          <div className="checkout_heading_left col">
            <h3>Checkout</h3>
            <span>Returning Customer?</span>{' '}
            <Link to="/login">Click here to login</Link>
          </div>
          <div className="checkout_heading_right">
            <div className="col p-0 m-0">
              <img src="./assets/svg/icons/shopping-cart.svg" alt="" />
              &#2547; {12345}
            </div>
          </div>
        </div>
        {/* CHECKOUT BODY STARTS HERE */}
        <CheckOutBody />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.User.user,
  loading: state.UserInfo.loading,
  deliveryTypes: state.UserInfo.delivery_types,
  info: state.UserInfo.info,
  status: state.UserInfo.status,
});

const mapDispatchToProps = (dispatch) => ({
  getUserInfo: () => dispatch(getUserInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
