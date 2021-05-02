import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Truncate } from '../Utility';

const ProductCard = (props) => {
  return (
    <div className="" key={props.product.name}>
      <div className="product-section">
        <div className={`product-item`} id={props.product?.id}>
          <div className="product-thumb">
            <Link to={`/productdetails?id=${props.product?.id}`}>
              <img
                src={`https:${props.product?.photo}`}
                className="pri-img"
                alt={Truncate(props.product?.name, 5)}
              />
            </Link>

            <div className="box-label">
              <div className="label-product label_sale">
                <span>
                  {props.product?.sale ? `-${props.product?.sale}%` : ''}
                </span>
              </div>
            </div>
          </div>
          <div className="product-caption">
            <div className="product-name">
              <h5 className="">
                <Link
                  to={`/productdetails?id=${props.product?.id}`}
                  title={props.product?.name}>
                  {Truncate(props.product?.name, 30)}
                </Link>
              </h5>
            </div>
            <div className="manufacture-product">
              {props.product?.company && (
                <span>
                  <Link to={`/`} title={props.product?.company} className="">
                    by {Truncate(props.product?.company, 16)}
                  </Link>
                </span>
              )}
            </div>
            <div className="price-box row no-gutters align-items-center justify-content-between">
              <span className="regular-price p-0 m-0">
                {' '}
                {/*col-12 */}
                <span
                  className={` ${props.product?.special && 'special-price'} `}>
                  &#2547; {props.product?.unit_prices?.price}
                </span>
              </span>
              {props.product?.unit_prices?.previous_price ? (
                <span className="old-price  p-0 m-0">
                  <span>MRP:</span>
                  <del>
                    {' '}
                    &#2547; {props.product?.unit_prices?.previous_price}
                  </del>
                </span>
              ) : (
                <span className="old-price  p-0 m-0">
                  {' '}
                  {/*  col-12*/}
                  <span>MRP:</span>
                  <del> &#2547; {'0.00'}</del>
                </span>
              )}
            </div>
            <Link
              className="btn-cart d-block text-center"
              to={`/productdetails?id=${props.product?.id}`}>
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
