import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { products } from '../../../data';

const CartList = (props) => {
  return (
    <div>
      <div className="cart_product_wrapper">
        <ul className="cart_sidebar_list">
          {products.map((item) => (
            <li>
              <div className="cart_single_product">
                <div className="cart_single_image">
                  <Link to={`productdetails?id=${3}`}>
                    <img src="./assets/images/products/img-1.png" alt="img-1" />
                  </Link>
                </div>
                <div className="cart_single_body">
                  <div className="cart_single_name">
                    <Link to={`productdetails?id=${3}`}>
                      JY-30801A Children Handheld Game Console Video Game
                      Console Tetris Puzzle Game
                    </Link>
                  </div>
                  <div className="cart_single_price">
                    <span className="cart_price">&#2547; {120}</span>
                    <span className="times">&times;</span>
                    <span className="count">{2}</span>
                  </div>
                </div>
              </div>
              <span className="cart_product_cross">&times;</span>
            </li>
          ))}
        </ul>
      </div>
      {/* cart product wrapper ends */}
      {/* cart product button starts */}
      <div className="cart_product_btn">
        <div className="cart_total">
          <span>cart subtotal : &#2547;{2547}</span>
        </div>
        <div className="checkout_btn">
          <Link to="/check-out" className="btn">
            Check Out
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
