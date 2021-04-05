import React from 'react';
import { connect } from 'react-redux';
import { products } from '../../data';
import Product from '../../PrimarySections/SliderComponents/ProductSlider';

const RelatedProducts = (props) => {
  return (
    <div className="related_products">
      <h4 className="section_header">
        People Who Viewed This Item Also Viewed
      </h4>
      <Product products={products} />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RelatedProducts);
