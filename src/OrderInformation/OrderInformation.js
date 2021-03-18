import React from 'react';
import { connect } from 'react-redux';
import AddressSection from './Components/AddressSection';
import OrderDetails from './Components/OrderDetails';
import OrderProducts from './Components/OrderProducts';
import './order_information.css';

const OrderInformation = (props) => {
  return (
    <div className="order_information">
      <div className="container">
        <div className="order-information-heading">
          <h3>Order Information</h3>
        </div>
        <OrderDetails />
        <AddressSection />
        <OrderProducts />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OrderInformation);
