import Skeleton from '@yisheng90/react-loading';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
  AddBasketProd,
  RemoveBasketProd,
  updateCartItem,
} from '../../../Redux/Action/BasketAction';
import { getCartItems } from '../../../Redux/Action/CartProductsAction';
import {
  getCartUpdateID,
  removeCartUpdateID,
} from '../../../Redux/Action/CartUpdateIDAction';
import { getCartProdSubTotal, Truncate, useQuery } from '../../Utility';

const CartList = (props) => {
  const router = useHistory();
  const query = useQuery();

  useEffect(() => {
    props.user && props.getCartItems();
  }, []);

  const removeFromCart = async (item) => {
    await props.removeProduct(item);
    const id = query.get('id');
    let redirect = '';
    if (id) {
      redirect = `/productdetails?id=${id}`;
    } else {
      redirect = `${router.location.pathname}${
        router.location.search && router.location.search
      }`;
    }
    router.replace(redirect);
    props.user && (await props.getCartItems());
  };

  const IncCart = async (item) => {
    const product = {
      cart_id: item.id,
      product_id: item.product_id,
      name: item.name,
      photo:item.photo,
      price:item.unit_price.price,
      unit_prices_id:item.unit_price.id,
      total_quantity: Number(item.total_quantity) + 1,
    };
    await props.updateProduct(product);
    props.user && (await props.getCartItems());
  };
  const DecCart = async (item) => {
    const product = {
      cart_id: item.id,
      product_id: item.product_id,
      name: item.name,
      photo:item.photo,
      price:item.unit_price.price,
      unit_prices_id:item.unit_price.id,
      total_quantity: Number(item.total_quantity) - 1,
    };
    await props.updateProduct(product);
    props.user && (await props.getCartItems());
  };
  return (
    <div>
      <div className="cart_product_wrapper">
        {!props.user ? (
          <ul className="cart_sidebar_list">
            {props.localCartList?.map((item) => (
              <li key={item.id}>
                <div className="cart_single_product">
                  <div className="cart_single_image col-3">
                    <Link to={`/productdetails?id=${item.id}`}>
                      <img
                        src={`https:${item.photo}`}
                        alt="img-1"
                        onClick={() => props.getCartID(item.id)}
                      />
                    </Link>
                  </div>
                  <div className="cart_single_body col-8">
                    <div className="cart_single_name">
                      <Link
                        to={`/productdetails?id=${item.id}`}
                        onClick={() => props.getCartID(item.id)}>
                        {Truncate(item.name,20)}
                      </Link>
                    </div>
                    <div className="cart_single_price">
                      <span className="cart_price">&#2547; {item?.price}</span>
                      <span className="times">&times;</span>
                      <span className="count">{item.total_quantity}</span>
                    </div>
                  </div>
                </div>
                <span
                  className="cart_product_cross"
                  onClick={() => {
                    removeFromCart(item);
                    props.removeCartID();
                  }}>
                  &times;
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="cart_sidebar_list">
            {props.loading
              ? Array(5)
                  .fill()
                  .map((x, i) => (
                    <Skeleton
                      width={'100%'}
                      height={'100px'}
                      className="mb-4"
                    />
                  ))
              : props.cartList?.map((item) => (
                  <li key={item.product_id}>
                    <div className="cart_single_product">
                      <div className="cart_single_image col-3">
                        <Link to={`/productdetails?id=${item?.product_id}`}>
                          <img
                            src={`https:${item?.photo}`}
                            alt="img-1"
                            onClick={() => props.getCartID(item?.id)}
                          />
                        </Link>
                      </div>
                      <div className="cart_single_body col-8">
                        <div className="cart_single_name">
                          <Link
                          to={`/productdetails?id=${item?.product_id}`}
                          onClick={() => props.getCartID(item?.id)} title={item?.name}>
                            {Truncate(item?.name,20)}
                          </Link>
                        </div>
                        <div className="cart_single_price row">
                          <div className="cart_price">
                            &#2547; {item?.unit_price?.price}
                        </div> { ' ' }
                          <span className="times">&times;</span>
                        <div className="count d-flex align-items-center">
                          {item?.total_quantity}
                          {/* <span className={`${Number(item?.total_quantity) === 0 && 'pointer_none'} cart_count dec`} onClick={()=>DecCart(item)}>-</span><span>{item?.total_quantity}</span><span className='cart_count inc' onClick={() => IncCart(item)}>+</span> */}
                        </div>                        
                        </div>
                      </div>
                    </div>
                    <span
                      className="cart_product_cross"
                      onClick={() => {
                        removeFromCart(item);
                        props.removeCartID();
                      }}>
                      &times;
                    </span>
                  </li>
                ))}
          </ul>
        )}
      </div>
      {/* cart product wrapper ends */}
      {/* cart product button starts */}
      <div className="cart_product_btn col-12 p-0">
        <div className="cart_total row no-gutters justify-content-between">
          <span>cart subtotal :</span>
          <span>
            &#2547;{' '}
            {!props.user
              ? getCartProdSubTotal(props.localCartList, props.user) || 0
              : getCartProdSubTotal(props.cartList, props.user) || 0}
          </span>
        </div>
        <div className="checkout_btn">
          <Link
            to={'/check-out'}
            className={`btn w-100`}
            onClick={(e) => {
              props.loginSuccessPageRedirectTo('/check-out');
              props.setCart(false);
            }}>
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
  localCartList: state.Basket.localBasket,
  CartID: state.CartID.cart_update_id,
  user: state.User.user,
});

const mapDispatchToProps = (dispatch) => ({
  removeProduct: (prod) => dispatch(RemoveBasketProd(prod)),
  updateProduct: (prod) => dispatch(updateCartItem(prod)),
  getCartItems: () => dispatch(getCartItems()),
  getCartID: (id) => dispatch(getCartUpdateID(id)),
  removeCartID: () => dispatch(removeCartUpdateID()),
  addToCart: (product) => dispatch(AddBasketProd(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
