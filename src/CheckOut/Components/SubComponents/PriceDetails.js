import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const PriceDetails = (props) => {
  const [coupon, setCoupon] = useState(false);
  const CouponInput = (e) => {
    e.preventDefault();
    setCoupon(!coupon);
  };
  return (
    <div className="col-md-6">
      <div className="price_details ">
        <div className="checkout_headings">
          <h4>Price Details</h4>
        </div>
        <div className="sub-Total">
          <span>Subtotal</span> <span>&#2547; {(285).toFixed(2)}</span>
        </div>
        <div className="coupon_anchore">
          <img src="./assets/svg/icons/discount.svg" alt="coupon_icon" />{' '}
          <Link to="#" onClick={CouponInput}>
            Have a Coupon Code ?
          </Link>
        </div>
        {coupon && (
          <div className="row mt-2 coupon_input">
            <div className="form-group col-9 mb-2">
              <label htmlFor="coupon_number" className="sr-only">
                Password
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="coupon_number"
                name="coupon_number"
                placeholder="Coupon number"
              />
            </div>
            <button type="submit" className="btn mb-2 col-3">
              Apply Coupon
            </button>
          </div>
        )}
        <div className="shipping_method mt-5">
          <div className="checkout_headings">
            <h4>Shipping Method</h4>
          </div>
          <div className="row no-gutters align-items-center">
            <div className="form-check">
              <input
                className="form-check-input position-static"
                type="radio"
                name="blankRadio"
                id="blankRadio1"
                value="option1"
                aria-label="..."
              />
            </div>
            <div className="delivery_charge">
              <div className="col delivery_amount">
                Delivery Charge + &#2547;{28}
              </div>
              <div className="col delivery_time">1-3 Hours</div>
            </div>
          </div>
          <div className="grand_total col no-gutters">
            <span className="grand_total_label">Grand Total</span>
            <span className="grand_total_amount">&#2547; {284}</span>
          </div>
          <div className="">
            <button className="btn btn-primary order_btn col-md-4">
              Place Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PriceDetails);
