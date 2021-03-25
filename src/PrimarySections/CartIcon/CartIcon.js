import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartItems } from '../../Redux/Action/CartProductsAction';
import './carticon.css';
import CartSidebar from './Components/CartSidebar';

const CartIcon = (props) => {
  const [cart, setCart] = useState(false);
  const sidebarOpen = (e) => {
    e.preventDefault();
    setCart(!cart);
    // props.getCartItems();
  };
  return (
    <div className="">
      <Link to="#" onClick={sidebarOpen}>
        <div className="cart_icon">
          <div className="icon_wrapper">
            <img src="./assets/svg/icons/shopping-cart.svg" alt="cart_icon" />
            <div className="items_count">{props.cartList?.length} items</div>
          </div>
          <div className="total_wrapper">&#2547; {2457}</div>
        </div>
      </Link>
      <CartSidebar cart={cart} setCart={setCart} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.CartItems.loading,
  cartList: state.CartItems.basket,
});

const mapDispatchToProps = (dispatch) => ({
  getCartItems: () => dispatch(getCartItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
