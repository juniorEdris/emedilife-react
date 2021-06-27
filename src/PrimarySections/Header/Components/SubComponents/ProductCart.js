import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductCart = (props) => {
  const cartOpen = (e) => {
    e.preventDefault();
    props.setCart(!props.cart);
  };
  return (
    <div className="header__option pl-1">
      <Link to={'#'} className="header__link" onClick={cartOpen}>
        <div className="header__option__lineOne header_my_account">
          <img src="./assets/svg/icons/headercart.svg" alt="login icon" /> Cart
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCart);
