import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './checkout.css';
import CheckOutBody from './Components/CheckOutBody';

const CheckOut = (props) => {
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
