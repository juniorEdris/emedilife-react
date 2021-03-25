import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { RemoveBasketProd } from '../../../Redux/Action/BasketAction';
import { getCartItems } from '../../../Redux/Action/CartProductsAction';

const CartList = (props) => {
  useEffect(() => {
    props.getCartItems();
  }, []);
  const removeFromCart = (item) => {
    props.removeProduct(item);
    // props.getCartItems();
  };
  return (
    <div>
      <div className="cart_product_wrapper">
        <ul className="cart_sidebar_list">
          {props.loading
            ? 'loading'
            : props.cartList?.map((item) => (
                <li key={item.product_id}>
                  <div className="cart_single_product">
                    <div className="cart_single_image">
                      <Link to={`productdetails?id=${3}`}>
                        <img
                          // src="./assets/images/products/img-1.png"
                          src={`https:${item.photo}`}
                          alt="img-1"
                        />
                      </Link>
                    </div>
                    <div className="cart_single_body">
                      <div className="cart_single_name">
                        <Link to={`productdetails?id=${3}`}>{item.name}</Link>
                      </div>
                      <div className="cart_single_price">
                        <span className="cart_price">&#2547; {120}</span>
                        <span className="times">&times;</span>
                        <span className="count">{item.total_quantity}</span>
                      </div>
                    </div>
                  </div>
                  <span
                    className="cart_product_cross"
                    onClick={() => removeFromCart(item)}>
                    &times;
                  </span>
                </li>
              ))}
        </ul>
      </div>
      {/* cart product wrapper ends */}
      {/* cart product button starts */}
      <div className="cart_product_btn">
        <div className="cart_total">
          <span>cart subtotal : &#2547;{2547}</span>
        </div>
        <div className="checkout_btn">
          <Link to="/check-out" className="btn">
            Check Out
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.CartItems.loading,
  cartList: state.CartItems.basket,
});

const mapDispatchToProps = (dispatch) => ({
  removeProduct: (prod) => dispatch(RemoveBasketProd(prod)),
  getCartItems: () => dispatch(getCartItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
