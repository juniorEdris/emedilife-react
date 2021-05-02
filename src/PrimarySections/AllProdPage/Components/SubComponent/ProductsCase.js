import Skeleton from '@yisheng90/react-loading';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Pagination from '../../../Pagination/Pagination';
import ProductCard from '../../../SectionUtils/ProductCard';

const SearchProducts = (props) => {
  return (
    <div className="search_body_products">
      {props.products !== undefined ? (
        <div className="row">
          {props.loading
            ? Array(20)
                .fill()
                .map((s, i) => (
                  <div className="col-6 col-lg-3 mb-1">
                    <Skeleton width="100%" height={354} />
                  </div>
                ))
            : props.products?.map((product) => (
                <div className="col-6 col-lg-3 " key={product.id}>
                  {' '}
                  {/* col-md-2 col-md-4 */}
                  <ProductCard product={product} key={product.id} />
                </div>
              ))}
        </div>
      ) : (
        'no results'
      )}
      {props.pages?.links?.length > 0 && (
        <Pagination
          page={props.page}
          pages={props.pages}
          setPage={props.setPage}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SearchProducts);
