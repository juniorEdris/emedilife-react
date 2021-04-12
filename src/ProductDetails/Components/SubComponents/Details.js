import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  AddBasketProd,
  updateCartItem,
} from '../../../Redux/Action/BasketAction';
import { getCartItems } from '../../../Redux/Action/CartProductsAction';
import { addToWishlistAction } from '../../../Redux/Action/WishListAction';

const Details = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [priceId, setPriceId] = useState('');
  const [price, setPrice] = useState('');
  const [previousPrice, setPreviousPrice] = useState(0);
  console.log('price_id', priceId);
  const selectPackage = (x) => {
    setPriceId(x.id);
    setPrice(x.price);
    setPreviousPrice(x.previous_price);
  };
  const decrement = () => {
    setQuantity(quantity - 1);
  };
  const increment = () => {
    setQuantity(quantity + 1);
  };
  const addProduct = async (item) => {
    const product = {
      id: item.id,
      photo: item.photo,
      name: item.name,
      price: price === '' ? item.unit_prices[0].price : price,
      unit_prices_id: priceId === '' ? item.unit_prices[0].id : priceId,
      total_quantity: quantity,
    };
    await props.addToCart(product, quantity);
    props.user && (await props.getCartItems());
  };
  const updateCartItem = async (item) => {
    await props.updateCart(
      props.cart_id,
      priceId === '' ? item.unit_prices[0].id : priceId,
      quantity
    );
    props.user && (await props.getCartItems());
  };
  const addToWish = async (item) => {
    const product = {
      id: item.id,
      photo: item.photo,
      name: item.name,
      unit_price: {
        price: price === '' ? item.unit_prices[0].price : price,
        previous_price:
          previousPrice === ''
            ? item.unit_prices[0].previous_price
            : previousPrice,
        unit_prices_id: priceId === '' ? item.unit_prices[0].id : priceId,
      },
      total_quantity: quantity,
    };
    await props.addToWish(product);
    // props.user && (await props.getWishItems());
  };
  console.log('cart_id', props.cart_id);
  return (
    <div className="product_details_wrapper">
      <div className="product_details_caption">
        <div className="details_product-name">
          <p title={props.details?.name}>{props.details?.name}</p>
        </div>
        <div className="details_ratings mb-2">
          <span className={`rated`}>
            <i className="fa fa-star" />
          </span>
          <span className={`rated`}>
            <i className="fa fa-star" />
          </span>
          <span className={`rated`}>
            <i className="fa fa-star" />
          </span>
          <span className={`rated`}>
            <i className="fa fa-star" />
          </span>
          <span className={`not-rated`}>
            <i className="fa fa-star" />
          </span>
          <span className="review_count">250+ reviews</span>
        </div>
        <div className="details_manufacture-product">
          <small>
            brand:{' '}
            <Link to="/">
              {props.details?.company !== null ? props.details?.company : ''}
            </Link>
          </small>
        </div>
        <div className="share_btns">
          <Link to="#">
            {' '}
            <img
              className="share_btns_child share"
              src={'assets/svg/product_details/Icon ionic-md-share.svg'}
              alt="share button"
            />{' '}
          </Link>
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              addToWish(props.details);
            }}>
            <img
              className="share_btns_child wishlist"
              src={
                'assets/svg/product_details/Icon material-favorite-border.svg'
              }
              alt="add to wish list button"
            />{' '}
          </Link>
        </div>
        <div className="details_price-box">
          {props.details?.unit_prices && (
            <div className="details_regular-price">
              <span className="">
                &#2547;{' '}
                {price === '' ? props.details?.unit_prices[0].price : price}
              </span>
            </div>
          )}
          {props.details?.unit_prices && (
            <div className="details_old-price">
              <span>MRP: </span>
              <del>
                &#2547;
                {previousPrice === 0
                  ? props.details?.unit_prices[0].previous_price || 0
                  : previousPrice}
              </del>
            </div>
          )}
        </div>
        {props.details?.unit_prices && (
          <div className="details_qty">
            {props.details?.unit_prices?.map((x) => (
              <div className="single_radio">
                <div className="">
                  <input
                    type="radio"
                    name="price_id"
                    id={x.unitType}
                    onChange={() => selectPackage(x)}
                    checked={
                      priceId === ''
                        ? props.details?.unit_prices[0].id === x.id
                        : priceId === x.id
                    }
                    required
                  />

                  <label htmlFor={x.unitType}>
                    {x.unitType}{' '}
                    <small className="radio_price">({x.price})</small>
                  </label>
                </div>
                <div className="radio_qty row align-items-center no-gutters ">
                  <span
                    className={`${
                      quantity === 1 && 'pointer_disabled'
                    } radio_qty_dec`}
                    onClick={decrement}>
                    <i className="fa fa-minus"></i>
                  </span>
                  <input type="text" readOnly value={quantity} />
                  <span className={`radio_qty_inc`} onClick={increment}>
                    <i class="fa fa-plus"></i>
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* <div className="details_quantity">
          <label>Quantity :</label>
          <div className="product-qty mr-3">
            <input type="text" readOnly value={quantity} />
            <span
              class={`dec qtybtn ${quantity === 1 && 'pointer_disabled'}`}
              onClick={decrement}>
              <i className="fa fa-minus"></i>
            </span>
            <span className={`inc qtybtn`} onClick={increment}>
              <i class="fa fa-plus"></i>
            </span>
          </div>
        </div> */}
        <div className="details_buttons_wrapper mb-5">
          {!props.cart_id ? (
            <button
              className="details_btn-cart btn btn-danger col-12 col-md-8 offset-md-2"
              type="button"
              onClick={() => addProduct(props.details)}>
              add to cart
            </button>
          ) : (
            <button
              className="details_btn-cart btn btn-danger col-12 col-md-8 offset-md-2"
              type="button"
              onClick={() => updateCartItem(props.details)}>
              update cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.ProductDetails.loading,
  details: state.ProductDetails.productDetails,
  cart_id: state.CartID.cart_update_id,
  user: state.User.user,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product, count) => dispatch(AddBasketProd(product, count)),
  getCartItems: () => dispatch(getCartItems()),
  addToWish: (product) => dispatch(addToWishlistAction(product)),
  updateCart: (cartId, unit_price_id, quantity) =>
    dispatch(updateCartItem(cartId, unit_price_id, quantity)),
});
export default connect(mapStateToProps, mapDispatchToProps)(memo(Details));
