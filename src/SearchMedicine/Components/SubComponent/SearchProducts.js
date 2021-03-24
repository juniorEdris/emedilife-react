import React from 'react';
import { connect } from 'react-redux';
import ProductCard from '../../../PrimarySections/SectionUtils/ProductCard';

const SearchProducts = (props) => {
  return (
    <div className="search_body_products">
      {props.products !== undefined ? (
        <div className="row">
          {props.loading
            ? 'Loading'
            : props.products?.map((product) => (
                <div className="col-6 col-md-4" key={product.id}>
                  <ProductCard product={product} key={product.id} />
                </div>
              ))}
        </div>
      ) : (
        'no results'
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.Search.loading,
  products: state.Search.searchResults,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SearchProducts);
