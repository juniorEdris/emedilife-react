import React from 'react';
import { connect } from 'react-redux';
import { renderDiv } from '../../PrimarySections/Utility';

const DetailsBody = (props) => {
  return (
    <div className="">
      <div className="p-0">
        <div className="details__wrapper">
          {renderDiv(props.details?.details) || 'none'}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.ProductDetails.loading,
  details: state.ProductDetails.productDetails,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsBody);
