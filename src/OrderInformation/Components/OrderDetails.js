import Skeleton from '@yisheng90/react-loading';
import dateFormat from 'dateformat';
import React from 'react';
import { connect } from 'react-redux';

const OrderDetails = (props) => {
  return (
    <div className="order_information_details">
      <h5 className="order_info_heading">Order Details</h5>
      {props.loading ? (
        <div className="col-12 mt-2 ">
          <Skeleton width={'100%'} height={100} />
        </div>
      ) : (
        <div className="col-12 row justify-content-between">
          <div className="col-md-6 p-0 pr-md-3">
            <div className="list_content">
              Order-ID:{props.order?.order_number}
            </div>
            <div className="list_content">
              Payment Method: {props.order?.method}
            </div>
            <div className="list_content">
              Payment Status: {props.order?.payment_status}
            </div>
          </div>
          <div className="col-md-6 p-0">
            <div className="list_content">
              Date Added:{' '}
              {dateFormat(
                props.order?.order_date,
                'dddd, mmmm dS, yyyy, h:MM:ss TT'
              )}
            </div>
            <div className="list_content">
              Shipping Method: {props.order?.method}
            </div>
            <div className="list_content">
              Delivery Status: {props.order?.delivery_status}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
