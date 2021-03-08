import React from 'react';
import { connect } from 'react-redux';
import ProductCard from '../../../PrimarySections/SectionUtils/ProductCard';
import { products } from '../../../data';

const SearchProducts = (props) => {
  return (
    <div className="search_body_products">
      <div className="row">
        {products.map((product) => (
          <div className="col-6 col-md-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchProducts);
