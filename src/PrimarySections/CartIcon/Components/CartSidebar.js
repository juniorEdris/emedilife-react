import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const CartSidebar = (props) => {
  return (
    <div className="cart_sidebar">
      <div className={`cart_sidebar_route ${!props.cart && 'd-none'}`}>
        <div className="cart_header">
          <div className="cart_header_count">
            <img src="./assets/svg/icons/shopping-cart.svg" alt="cart-icon" />
            <span className="cart_header_item_count">{3} items</span>
          </div>
          <span
            className="lnr lnr-arrow-right"
            onClick={() => props.setCart(false)}></span>
        </div>
        <ul className="cart_sidebar_route_list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/search">search</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CartSidebar);
