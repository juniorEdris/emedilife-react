import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getCartProdSubTotal } from '../../../PrimarySections/Utility';
import { API, ENDPOINTS } from '../../../PrimarySections/Utility/API_Links';
import { PlaceOrder } from '../../../Redux/Action/PlaceOrderAction';

const PriceDetails = (props) => {
  const history = useHistory();
  const [coupon, setCoupon] = useState(false);
  const [couponNum, setCouponNum] = useState({
    coupon_number: '',
  });
  const [offer, setOffer] = useState({});
  // Coupon input state
  const CouponInput = (e) => {
    e.preventDefault();
    setCoupon(!coupon);
  };

  // GET TOTAL PRICE
  const total_amount = !props.user
    ? getCartProdSubTotal(props.localCartList, props.user) || 0
    : getCartProdSubTotal(props.cartList, props.user) || 0;

  // GET DELIVERY & MIN ORDER
  let PriceContainer = {
    delivery_charge: '',
    min_order: 100,
  };
  props.deliveryTypes?.forEach((type) => {
    if (type.conditional !== '1') {
      type.delivery_charges.forEach((charge) => {
        PriceContainer = {
          delivery_charge: charge.delivery_charge,
          min_order: charge.min_order,
        };
        // delivery_charge = charge.delivery_charge;
      });
    } else {
      for (let i = 0; i <= type?.delivery_charges?.length; i++) {
        if (total_amount >= type?.delivery_charges[i]?.min_order) {
          PriceContainer = {
            delivery_charge: type?.delivery_charges[i]?.delivery_charge,
            min_order: type?.delivery_charges[i]?.min_order,
          };
          return PriceContainer;
        }
      }
    }
  });
  // GET TOTAL AMOUNT
  const final_total_amount = (
    parseInt(getCartProdSubTotal(props.cartList, props.user)) +
      parseInt(PriceContainer?.delivery_charge) || 0
  ).toFixed(2);

  // SET COUPON NUMBER
  const handleChange = (e) => {
    setCouponNum({
      [e.target.name]: e.target.value,
    });
  };
  // COUPON SUBMIT
  const submitCoupon = (e) => {
    e.preventDefault();
    API()
      .get(`${ENDPOINTS.COUPON_TOKEN}${couponNum.coupon_number}`)
      .then((res) => {
        setOffer(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // PLACE ORDER FUNCTION
  const PlaceOrder = (e) => {
    e.preventDefault();
    const data = {
      ...props.details,
      coupon_id: offer.id,
      coupon_discount: offer.price,
      payment_type: props.type,
    };
    props.order(data);
    setOffer({});
  };

  // PUSH TO ORDER SUCCESS NOTIFICATION
  props.orderSuccess && history.push('/ordersuccess');

  return (
    <div className="">
      {props.orderSuccessLoading && <h2>Order Success Loading</h2>}
      <div className="price_details chekoutCard">
        <div className="checkout_headings">
          <h4>Price Details</h4>
        </div>
        <div className="sub-Total">
          <span>Subtotal</span>{' '}
          {!props.user ? (
            <span>
              &#2547;{' '}
              {(
                getCartProdSubTotal(props.localCartList, props.user) || 0
              ).toFixed(2)}
            </span>
          ) : (
            <span>
              &#2547;{' '}
              {(getCartProdSubTotal(props.cartList, props.user) || 0).toFixed(
                2
              )}
            </span>
          )}
        </div>
        <div className="coupon_anchore">
          <img src="./assets/svg/icons/discount.svg" alt="coupon_icon" />{' '}
          <Link to="#" onClick={CouponInput}>
            Have a Coupon Code ?
          </Link>
        </div>
        {coupon && (
          <div className="row mt-2 coupon_input">
            <div className="form-group col-md-9 mb-2">
              <label htmlFor="coupon_number" className="sr-only">
                Coupon number
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="coupon_number"
                name="coupon_number"
                placeholder="Coupon number"
                onChange={handleChange}
                value={couponNum.coupon_number}
              />
            </div>
            <button
              type="button"
              onClick={submitCoupon}
              className="btn mb-2 col-md-3">
              Apply Coupon
            </button>
          </div>
        )}
        <div className="shipping_method mt-5">
          <div className="checkout_headings">
            <h4>Shipping Method</h4>
          </div>
          <div className="">
            <div className="row no-gutters align-items-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="exampleRadios"
                  id={'check'}
                  value="option1"
                />
              </div>
              <div className="delivery_charge">
                <label htmlFor={'check'} className="delivery_amount_hover">
                  <div className="col delivery_amount">
                    Delivery Charge + &#2547;{' '}
                    {PriceContainer?.delivery_charge || 0}
                  </div>
                  <div className="col delivery_time">1-3 Hours</div>
                </label>
              </div>
            </div>
          </div>
          <div className="border_top_section"></div>
          <div className="grand_total row no-gutters">
            <span className="grand_total_label">Grand Total</span>
            <span className="grand_total_amount">
              &#2547; {final_total_amount}
            </span>
          </div>
          <div className="order_btn">
            <button
              type="button"
              className={` btn btn-primary col-md-5`}
              disabled={
                PriceContainer.min_order >
                (getCartProdSubTotal(props.cartList, props.user) || 0)
              }
              onClick={PlaceOrder}>
              Place Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.UserInfo.loading,
  deliveryTypes: state.UserInfo.delivery_types,
  info: state.UserInfo.info,
  status: state.UserInfo.status,
  cartList: state.CartItems.basket,
  localCartList: state.Basket.localBasket,
  user: state.User.user,
  orderSuccessLoading: state.PlaceOrder.loading,
  orderStatus: state.PlaceOrder.place_order_status,
  orderSuccess: state.PlaceOrder.place_order_msg,
  orderError: state.PlaceOrder.order_error,
});

const mapDispatchToProps = (dispatch) => ({
  order: (data) => dispatch(PlaceOrder(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PriceDetails);
