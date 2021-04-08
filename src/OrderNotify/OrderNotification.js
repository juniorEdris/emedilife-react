import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './ordernotify.css';

export const OrderNotification = (props) => {
  return (
    <div className="order_notification container-md-fluid mt-5 mb-5">
      <div className="popup_wrapper col-7 offset-3">
        <div className="popup_header">
          <div className="success_header">
            <h3 className="">Your order has been submitted!</h3>
          </div>
          <div className="popup_content">
            <p className="order_number">Order Number: #005478</p>
            <p className="popup_text">
              We will call you to confirm your delivery address an d the total
              price. *The total price of your order may vary depending on market
              prices of individual products, relevant discounts, and your promo
              code.
            </p>
          </div>
        </div>
        <div className="popup_footer">
          <p className="popup_grettings">
            Thank you for shopping with{' '}
            {/* <span className="order_notify_logo">Emedilife</span> */}
            <img src="./assets/images/primary/logo.png" width={70} alt="logo" />
          </p>
          <div className="back_btn">
            <Link to="/" className="btn btn-success col-5">
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OrderNotification);