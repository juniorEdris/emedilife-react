import dateFormat from 'dateformat';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MyOrders = (props) => {
  return (
    <div className="my_orders primary_table">
      <div className="order_header">
        <span>Completed Orders</span>
        <Link to="#">view all</Link>
      </div>
      <table class="table">
        <thead class="thead-primary">
          <tr>
            <th scope="col">Order#</th>
            <th scope="col">Date</th>
            {/* <th scope="col">Ship To</th> */}
            <th scope="col">Order Total</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.completedOrders?.map((order) => (
            <tr className="trow-light" key={order.id}>
              <th scope="row">#{order.order_number}</th>
              <td>
                {dateFormat(
                  order.order_date,
                  'dddd, mmmm dS, yyyy, h:MM:ss TT'
                )}
              </td>
              {/* <td>Eftekar Raghib</td> */}
              <td>Tk {order.pay_amount}</td>
              <td>{order.delivery_status}</td>
              <td>
                <Link to={`/order-info?id=${order.id}`} className="table_link">
                  view order
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.OrderList.loading,
  completedOrders: state.OrderList.completedOrders,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders);
