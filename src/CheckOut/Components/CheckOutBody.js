import React from 'react';
import { connect } from 'react-redux';
import DeliveryDetailsInput from './SubComponents/DeliveryDetailsInput';
import PriceDetails from './SubComponents/PriceDetails';

const CheckOutBody = (props) => {
  return (
    <div className="checkout_body row col-12">
      <DeliveryDetailsInput />
      <PriceDetails />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutBody);
