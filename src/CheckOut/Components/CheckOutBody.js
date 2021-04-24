import React from 'react';
import { connect } from 'react-redux';
import DeliveryDetailsInput from './SubComponents/DeliveryDetailsInput';
import PaymentMethod from './SubComponents/PaymentMethod';
import PriceDetails from './SubComponents/PriceDetails';

const CheckOutBody = (props) => {
  return (
    <div className="checkout_body row">
      <div className="col-md-6">
        <DeliveryDetailsInput />
        <PaymentMethod />
      </div>
      <div className="col-md-6">
        <PriceDetails />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutBody);
