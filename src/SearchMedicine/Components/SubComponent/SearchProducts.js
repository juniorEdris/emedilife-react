import Skeleton from '@yisheng90/react-loading';
import React from 'react';
import { connect } from 'react-redux';
import Pagination from '../../../PrimarySections/Pagination/Pagination';
import ProductCard from '../../../PrimarySections/SectionUtils/ProductCard';

const SearchProducts = (props) => {
  return (
    <div className="search_body_products">
      {props.products !== undefined ? (
        <div className="row">
          {props.loading
            ? Array(4)
                .fill()
                .map((s, i) => (
                  <div className="col-6 col-md-4 col-lg-3">
                    <Skeleton width="100%" height={354} />
                  </div>
                ))
            : props.products?.map((product) => (
                <div className="col-6 col-md-4 col-lg-3" key={product.id}>
                  <ProductCard product={product} key={product.id} />
                </div>
              ))}
        </div>
      ) : (
        'no results'
      )}
      <Pagination />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.Search.loading,
  products: state.Search.searchResults,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SearchProducts);
