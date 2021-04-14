import React from 'react';
import { connect } from 'react-redux';
import SectionHeadingTwo from '../../PrimarySections/SectionUtils/SectionHeadingTwo';
import SeeMoreBtn from '../../PrimarySections/SectionUtils/SeeMoreBtn';
import Body from './SubComponent/NecessaryProducts';

const NecessaryProducts = (props) => {
  return (
    <div className="necessary_product_section mb-5">
      {props.products?.length > 0 && (
        <div className="container-md-fluid">
          <SectionHeadingTwo
            textOne={'Neccesary Popular'}
            textTwo={'Products'}
          />
          <Body />
          {props.products?.length > 24 && <SeeMoreBtn />}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  products: state.HomeContent.neccessaryProducts,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NecessaryProducts);
