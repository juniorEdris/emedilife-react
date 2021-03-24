import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Truncate } from '../Utility';

const ProductCard = (props) => {
  return (
    <div className="product-section">
      <div className={`product-item `} id={props.product.id}>
        <div className="product-thumb">
          <Link to={`/productdetails?id=${props.product.id}`}>
            <img
              src={`./assets/images/products/img-1.png`}
              // src={`https:${props.product.photo}`}
              className="pri-img"
              alt={props.product.name}
            />
          </Link>

          <div className="box-label">
            <div className="label-product label_sale">
              <span>{props.product.sale ? `-${props.product.sale}%` : ''}</span>
            </div>
          </div>
        </div>
        <div className="product-caption">
          <div className="product-name">
            <h5>
              <Link
                to={`/productdetails?id=${props.product.id}`}
                title={props.product.name}>
                {Truncate(props.product.name, 30)}
              </Link>
            </h5>
          </div>
          <div className="manufacture-product">
            {props.product.company && (
              <span>
                <Link to={`/`}>by {props.product?.company}</Link>
              </span>
            )}
          </div>
          <div className="price-box">
            <span className="regular-price">
              <span className={` ${props.product.special && 'special-price'}`}>
                £{props.product?.unit_prices?.price}
              </span>
            </span>
            <span className="old-price">
              <span>MRP:</span>
              <del>
                {props.product?.unit_prices?.previous_price
                  ? `£${props.product?.unit_prices?.previous_price}`
                  : ''}
              </del>
            </span>
          </div>
          <button className="btn-cart" type="button">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
