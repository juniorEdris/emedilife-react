import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const OrderProducts = (props) => {
  return (
    <div className="primary_table">
      <table class="table">
        <thead class="thead-primary">
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Model</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="trow-light">
            <td>Corestin 5mg Tab.</td>
            <td>BM10245</td>
            <td>8</td>
            <td>BDT 12.50</td>
            <td>BDT 125.00</td>
            <td>
              <Link to="/order-info" className="table_link">
                <img
                  src="./assets/svg/icons/light-shopping-cart.svg"
                  alt="cart img"
                />
              </Link>
            </td>
          </tr>
          <tr className="trow-light">
            <td>Corestin 5mg Tab.</td>
            <td>BM10245</td>
            <td>8</td>
            <td>BDT 12.50</td>
            <td>BDT 125.00</td>
            <td>
              <Link to="/order-info" className="table_link">
                <img
                  src="./assets/svg/icons/light-shopping-cart.svg"
                  alt="cart img"
                />
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderProducts);
