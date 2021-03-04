import React from 'react';
import { connect } from 'react-redux';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import { Slider } from './SubComponents/Slider';
import { Details } from './SubComponents/Details';

const DetailsHeader = (props) => {
  return (
    <div className="container text-secondary">
      <div className="row">
        <div className="col-12 col-md-4">
          <Slider />
        </div>
        <div className="col-12 col-md-4">
          <Details />
        </div>
        <div className="col-12 col-md-4">delivery option</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsHeader);
