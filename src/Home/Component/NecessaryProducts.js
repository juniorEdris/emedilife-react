import Skeleton from '@yisheng90/react-loading';
import React from 'react';
import { connect } from 'react-redux';
import SectionHeadingTwo from '../../PrimarySections/SectionUtils/SectionHeadingTwo';
import SeeMoreBtn from '../../PrimarySections/SectionUtils/SeeMoreBtn';
import Body from './SubComponent/NecessaryProducts';

const NecessaryProducts = (props) => {
  return (
    <div className="necessary_product_section mb-5">
      {props.loading ? (
        <div className="container-md-fluid">
          <Skeleton width="100%" height={50} className="mb-4" />
          <Skeleton width="100%" height={500} />
        </div>
      ) : (
        props.products?.length > 0 && (
          <div className="container-md-fluid">
            <SectionHeadingTwo
              textOne={'Neccesary Popular'}
              textTwo={'Products'}
            />
            <Body />
            <SeeMoreBtn />
          </div>
        )
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
