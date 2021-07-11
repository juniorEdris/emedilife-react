import React from 'react';
import { connect } from 'react-redux';
import CartList from './CartList';
import {getCartItems} from '../../../Redux/Action/CartProductsAction';

const CartSidebar = (props) => {
  const refresh = e => {
    props.user && props.getCartItems()    
  }
  return (
    <div className="cart_sidebar">
      <div className={`cart_sidebar_route ${!props.cart && 'd-none'}`}>
        <div className="cart_header">
          <div className="cart_header_count">
            <img src="./assets/svg/icons/shopping-cart.svg" alt="cart-icon" />
            <span className="cart_header_item_count">
              {props.cartLength()} items
            </span>
          </div>
          <div className=" d-flex align-items-center">
            <span class=" btn lnr lnr-undo mr-3" onClick={ refresh} title={'Refresh cart list'}></span>
          <span
            className="lnr lnr-arrow-right"
            onClick={() => props.setCart(false)} title={'Close cart list'}></span>
          </div>
        </div>
        <CartList
          setCart={props.setCart}
          loginSuccessPageRedirectTo={props.loginSuccessPageRedirectTo}
          refreshCart={ refresh}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.CartItems.loading,
  cartList: state.CartItems.basket,
  localCartList: state.Basket.localBasket,
  user: state.User.user,
});

const mapDispatchToProps = (dispatch) => ({
  getCartItems: () => dispatch(getCartItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartSidebar);
