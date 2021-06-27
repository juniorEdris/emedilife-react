import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useQuery } from '../PrimarySections/Utility';
import { getSingleOrderDetails } from '../Redux/Action/SingleOrderAction';
import AddressSection from './Components/AddressSection';
import OrderDetails from './Components/OrderDetails';
import OrderProducts from './Components/OrderProducts';
import './order_information.css';

const OrderInformation = (props) => {
  // const query = useQuery();
  // const id = query.get('id');
  useEffect(() => {
    props.getSingleOrder(props.orderId);
  }, [props.orderId]);
  const printPage = (e) => {
    window.print();
  };
  return (
    <div className="order_information">
      <div className="container">
        <div className="order-information-heading mt-0 d-flex align-items-center justify-content-between">
          {' '}
          {/*  */}
          <h5 className="">Order Information</h5>{' '}
          <button
            type="button"
            className="btn print-btn col-2 d-none d-md-block"
            onClick={printPage}>
            Print
          </button>
        </div>
        <OrderDetails
          loading={props.loading}
          order={props.singleorder}
          // order_id={id}
          order_id={props.orderId}
          tab={props.tab}
          setTab={props.setTab}
        />
        <AddressSection loading={props.loading} order={props.singleorder} />
        <OrderProducts loading={props.loading} order={props.singleorder} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.SingleOrder.loading,
  singleorder: state.SingleOrder.orderDetails,
});

const mapDispatchToProps = (dispatch) => ({
  getSingleOrder: (data) => dispatch(getSingleOrderDetails(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderInformation);
