import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartItems } from '../../Redux/Action/CartProductsAction';
import './carticon.css';
import CartSidebar from './Components/CartSidebar';
import { getCartProdSubTotal } from '../../PrimarySections/Utility';

const CartIcon = (props) => {
  console.log('cartItems', props.localCartList);
  const [cart, setCart] = useState(false);
  const sidebarOpen = (e) => {
    e.preventDefault();
    setCart(!cart);
    // await props.getCartItems();
  };
  let cartLength = () => {
    let allProd = [];
    props.user
      ? props.cartList?.forEach((x) => {
          allProd.push(x.total_quantity);
        })
      : props.localCartList.forEach((x) => {
          allProd.push(x.total_quantity);
        });
    return allProd.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    // return allProd;
  };
  return (
    <div className="">
      <Link to="#" onClick={sidebarOpen}>
        <div className="cart_icon">
          <div className="icon_wrapper">
            <img src="./assets/svg/icons/shopping-cart.svg" alt="cart_icon" />
            <div className="items_count">{cartLength()} items</div>
          </div>
          {!props.user ? (
            <div className="total_wrapper">
              &#2547; {getCartProdSubTotal(props.localCartList)}
            </div>
          ) : (
            <div className="total_wrapper">
              &#2547; {getCartProdSubTotal(props.cartList)}
            </div>
          )}
        </div>
      </Link>
      <CartSidebar cart={cart} setCart={setCart} cartLength={cartLength} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.CartItems.loading,
  cartList: state.CartItems.basket,
  localCartList: state.CartItems.localBasket,
  user: state.User.user,
});

const mapDispatchToProps = (dispatch) => ({
  getCartItems: () => dispatch(getCartItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
