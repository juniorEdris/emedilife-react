import Skeleton from '@yisheng90/react-loading';
import dateFormat from 'dateformat';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const AccountOrderHistory = (props) => {
  return (
    <div className="">
      <div className="order_header pl-4 pr-4">
        <span>Recent Orders</span>
        <Link to="#">view all</Link>
      </div>
      {props.loading ? (
        <div className="order_lists primary_table">
          <Skeleton height={350} width={'100%'} />
        </div>
      ) : (
        <div className="order_lists primary_table">
          <table class="table">
            <thead class="thead-primary">
              <tr>
                <th scope="col">Order#</th>
                <th scope="col">Date</th>
                {/* <th scope="col">Ship To</th> */}
                <th scope="col">Order Total</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
                {/* <th scope="col"></th> */}
              </tr>
            </thead>
            <tbody>
              {props.orders?.map((order) => (
                <tr className="trow-light" key={order.id}>
                  <th scope="row">
                    <div className="order-table-id">#{order.order_number}</div>
                  </th>
                  <td>
                    <div className="order-table-date">
                      {dateFormat(
                        order.order_date,
                        'dddd, mmmm dS, yyyy, h:MM:ss TT'
                      )}
                    </div>
                  </td>
                  {/* <td>Eftekar Raghib</td> */}
                  <td>
                    <div className="order-table-price">
                      Tk {order.pay_amount}
                    </div>
                  </td>
                  <td>{order.delivery_status}</td>
                  <td>
                    <div className="order-table-btn">
                      <Link
                        to={`/order-info?id=${order.id}`}
                        className="table_link d-block">
                        view order
                      </Link>
                    </div>
                  </td>
                  {/* <td>
                    <div className="order-table-btn">
                      <Link
                        to={`/order-info?id=${order.id}`}
                        className="table_link d-block">
                        Cancel order
                      </Link>
                    </div>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountOrderHistory);
