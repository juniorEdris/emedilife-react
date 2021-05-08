import Skeleton from '@yisheng90/react-loading';
import dateFormat from 'dateformat';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';

const OrderDetails = (props) => {
  const history = useHistory();
  const [response, setResponse] = useState({
    loading: false,
    cancelMsg: '',
    cancelStatus: false,
  });
  const cancelOrder = (e) => {
    e.preventDefault();
    API()
      .post(`${ENDPOINTS.CANCEL_ORDER}?order_id=${props.order_id}`)
      .then((res) => {
        console.log('remove order', res);
        setResponse({
          loading: false,
          cancelStatus: res.data.status,
          cancelMsg: res.data.message,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // response.cancelStatus && history.push('/cancel-success');
  return (
    <div className="">
      {response.cancelStatus && (
        <div className="">
          <div className="cancel_order_popup">
            <div className="row no-gutters justify-content-center">
              <div className="popup_wrapper col-7 ">
                <div className="popup_header">
                  <div className="success_header">
                    <h3 className="text-capitalize">{response.cancelMsg}</h3>
                  </div>
                </div>
                <div className="popup_footer">
                  {/* <img
                    src="./assets/images/primary/logo.png"
                    width={70}
                    alt="logo"
                  /> */}
                  <div className="back_btn">
                    <Link to="/" className="btn btn-success col-md-5 mt-3">
                      Back to homepage
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="cancel_order_backdrop"
            onClick={() => {
              setResponse({ cancelStatus: false });
            }}></div>
        </div>
      )}
      <div className="order_information_details">
        {/* <div className="col-12">
        <div className="row">
          <h5 className="order_info_heading flex-grow-1">Order Details</h5>
          <Link
            to="#"
            className="btn cancel_order_btn bg-danger"
            onClick={cancelOrder}>
            {' '}
            cancel order
          </Link>
        </div>
      </div> */}
        <h5 className="order_info_heading">Order Details</h5>
        {props.loading ? (
          <div className="col-12 mt-2 ">
            <Skeleton width={'100%'} height={100} />
          </div>
        ) : (
          <div className="col-12 row justify-content-between">
            <div className="col-md-6 p-0 pr-md-3">
              <div className="list_content row justify-content-between align-items-center m-0">
                Order-ID:{props.order?.order_number}{' '}
                {props.order?.delivery_status === 'cancelled' ? (
                  ''
                ) : props.order?.delivery_status === 'on delivery' ? (
                  ''
                ) : props.order?.delivery_status === 'completed' ? (
                  ''
                ) : (
                  <Link
                    to="#"
                    className="cancel_order_btn"
                    onClick={cancelOrder}>
                    {' '}
                    cancel order
                  </Link>
                )}
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
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
