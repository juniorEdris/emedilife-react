import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Details = (props) => {
  return (
    <div className="product_details_wrapper">
      <div className="product_details_caption">
        <div className="details_product-name">
          <p title={props.details.name}>{props.details.name}</p>
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
          <Link to="/">
            {' '}
            <img
              className="share_btns_child share"
              src={'assets/svg/product_details/Icon ionic-md-share.svg'}
              alt="Uparzon Logo"
            />{' '}
          </Link>
          <Link to="/">
            <img
              className="share_btns_child wishlist"
              src={
                'assets/svg/product_details/Icon material-favorite-border.svg'
              }
              alt="Uparzon Logo"
            />{' '}
          </Link>
        </div>
        <div className="details_price-box">
          <div className="details_regular-price">
            <span className="">&#2547; {123}</span>
          </div>
          <div className="details_old-price">
            <span>MRP: </span>
            <del>&#2547;132</del>
          </div>
        </div>
        <div className="details_qty">
          <label>Quantity :</label>
          <div className="product-qty mr-3">
            <input type="text" readOnly defaultValue={'0'} />
            <span class={`dec qtybtn `}>
              <i className="fa fa-minus"></i>
            </span>
            <span className={`inc qtybtn`}>
              <i class="fa fa-plus"></i>
            </span>
          </div>
        </div>

        <div className="details_buttons_wrapper">
          {/* <button
            className="details_btn-cart btn btn-primary col-5"
            type="button">
            buy now
          </button> */}
          <button
            className="details_btn-cart btn btn-danger col-8 offset-md-2"
            type="button">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.ProductDetails.loading,
  details: state.ProductDetails.productDetails,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
