import React from 'react';
import { connect } from 'react-redux';

const OrderDetails = (props) => {
  return (
    <div className="order_information_details">
      <h5 className="order_info_heading">Order Details</h5>
      <div className="col-12 row justify-content-between">
        <div className="col-md-6 p-0 pr-md-3">
          <div className="list_content">Order-ID:123456789</div>
          <div className="list_content">Payment Method: Cash on delivery</div>
        </div>
        <div className="col-md-6 p-0">
          <div className="list_content">Date Added: 10/10/2011</div>
          <div className="list_content">
            Shipping Method: Regular (Within 24 Hours)
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
