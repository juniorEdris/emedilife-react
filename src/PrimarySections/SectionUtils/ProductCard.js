import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Truncate } from '../Utility';

const ProductCard = (props) => {
  return (
    <div className="">
      <div className="product-section">
        <div className={`product-item`} id={props.product.id}>
          <div className="product-thumb">
            <Link to={`/productdetails?id=${props.product.id}`}>
              <img
                // src={`https://medipathy.changetechbd.com/assets/images/company/16146645099127.png`}
                // src={`https://store.uparzon.com/assets/images/thumbnails/app/1601529115ADf6VNuh.jpg`}
                src={`https:${props.product.photo}`}
                className="pri-img"
                alt={Truncate(props.product.name, 5)}
              />
            </Link>

            <div className="box-label">
              <div className="label-product label_sale">
                <span>
                  {props.product.sale ? `-${props.product.sale}%` : ''}
                </span>
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
                <span
                  className={` ${props.product.special && 'special-price'}`}>
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
            <Link
              className="btn-cart d-block text-center"
              to={`/productdetails?id=${props.product.id}`}>
              show details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
