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
      <div className="order_lists primary_table">
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
            {Array(10)
              .fill()
              .map((arr) => (
                <tr className="trow-light">
                  <th scope="row">
                    <div className="col">#123456789</div>
                  </th>
                  <td>03-04-2021</td>
                  <td>Eftekar Raghib</td>
                  <td>Tk 123</td>
                  <td>on hold</td>
                  <td>
                    <div className="col-12">
                      <Link to="/order-info" className="table_link">
                        view order
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountOrderHistory);
