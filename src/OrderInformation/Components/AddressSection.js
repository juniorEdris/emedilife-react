import React from 'react';
import { connect } from 'react-redux';

const AddressSection = (props) => {
  return (
    <div className="address_section col-12 p-0">
      <div className="row">
        <div className="col-md-6 payment_address">
          <h5 className="order_info_heading">Payment Address</h5>
          <div className="list_content">eftekar raghib</div>
          <div className="list_content">Baluchora</div>
          <div className="list_content">chittagong</div>
          <div className="list_content">dhaka(inside city)</div>
          <div className="list_content">bangladesh</div>
        </div>
        <div className="col-md-6 shipping_address">
          <h5 className="order_info_heading">Shipping Address</h5>
          <div className="list_content">eftekar raghib</div>
          <div className="list_content">Baluchora</div>
          <div className="list_content">chittagong</div>
          <div className="list_content">dhaka(inside city)</div>
          <div className="list_content">bangladesh</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddressSection);
