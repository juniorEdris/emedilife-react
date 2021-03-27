import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { RemoveBasketProd } from '../../../Redux/Action/BasketAction';
import { getCartItems } from '../../../Redux/Action/CartProductsAction';
import { getCartUpdateID } from '../../../Redux/Action/CartUpdateIDAction';
import { getCartProdSubTotal } from '../../Utility';

const CartList = (props) => {
  console.log(props);
  useEffect(() => {
    props.user && props.getCartItems();
  }, []);
  const removeFromCart = async (item) => {
    await props.removeProduct(item);
    await props.getCartItems();
  };
  return (
    <div>
      <div className="cart_product_wrapper">
        {!props.user ? (
          <ul className="cart_sidebar_list">
            {props.localCartList?.map((item) => (
              <li key={item.product_id}>
                <div className="cart_single_product">
                  <div className="cart_single_image">
                    <Link to={`productdetails?id=${item.product_id}`}>
                      <img
                        // src="./assets/images/products/img-1.png"
                        src={`https:${item.photo}`}
                        alt="img-1"
                        onClick={() => props.getCartID(item.id)}
                      />
                    </Link>
                  </div>
                  <div className="cart_single_body">
                    <div className="cart_single_name">
                      <Link
                        to={`productdetails?id=${item.product_id}`}
                        onClick={() => props.getCartID(item.id)}>
                        {item.name}
                      </Link>
                    </div>
                    <div className="cart_single_price">
                      <span className="cart_price">
                        &#2547; {item.unit_price?.price}
                      </span>
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
        ) : (
          <ul className="cart_sidebar_list">
            {props.loading
              ? 'loading'
              : props.cartList?.map((item) => (
                  <li key={item.product_id}>
                    <div className="cart_single_product">
                      <div className="cart_single_image">
                        <Link to={`productdetails?id=${item.product_id}`}>
                          <img
                            // src="./assets/images/products/img-1.png"
                            src={`https:${item.photo}`}
                            alt="img-1"
                            onClick={() => props.getCartID(item.id)}
                          />
                        </Link>
                      </div>
                      <div className="cart_single_body">
                        <div className="cart_single_name">
                          <Link
                            to={`productdetails?id=${item.product_id}`}
                            onClick={() => props.getCartID(item.id)}>
                            {item.name}
                          </Link>
                        </div>
                        <div className="cart_single_price">
                          <span className="cart_price">
                            &#2547; {item.unit_price?.price}
                          </span>
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
        )}
      </div>
      {/* cart product wrapper ends */}
      {/* cart product button starts */}
      <div className="cart_product_btn">
        <div className="cart_total">
          <span>
            cart subtotal : &#2547;
            {/* {getCartProdSubTotal(
              !props.user ? props.localCartList : props.cartList
            )} */}
          </span>
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
  localCartList: state.CartItems.localBasket,
  CartID: state.CartID.cart_update_id,
  user: state.User.user,
});

const mapDispatchToProps = (dispatch) => ({
  removeProduct: (prod) => dispatch(RemoveBasketProd(prod)),
  getCartItems: () => dispatch(getCartItems()),
  getCartID: (id) => dispatch(getCartUpdateID(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
