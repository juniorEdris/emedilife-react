import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MyOrders = (props) => {
  return (
    <div className="my_orders">
      <div className="order_header">
        <span>Completed Orders</span>
        <Link to="#">view all</Link>
      </div>
      <table class="table">
        <thead class="thead-primary">
          <tr>
            <th scope="col">Order#</th>
            <th scope="col">Date</th>
            <th scope="col">Ship To</th>
            <th scope="col">Order Total</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="trow-light">
            <th scope="row">#123456789</th>
            <td>03-04-2021</td>
            <td>Eftekar Raghib</td>
            <td>Tk 123</td>
            <td>on hold</td>
            <td>
              <Link to="#" className="">
                view order
              </Link>
            </td>
          </tr>
          <tr className="trow-light">
            <th scope="row">#123456789</th>
            <td>03-04-2021</td>
            <td>Eftekar Raghib</td>
            <td>Tk 123</td>
            <td>on hold</td>
            <td>
              <Link to="#" className="">
                view order
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders);
