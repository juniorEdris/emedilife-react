import React from 'react';
import { connect } from 'react-redux';
import CartList from './CartList';

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
        <CartList />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CartSidebar);
