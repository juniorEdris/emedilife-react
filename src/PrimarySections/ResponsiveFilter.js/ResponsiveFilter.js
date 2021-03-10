import React from 'react';
import { connect } from 'react-redux';
import './responsivefilter.css';

const ResponsiveFilter = (props) => {
  return (
    <div className="responsive_filter bg-light col-12">
      <div className="col-12">
        <select name="" id="" className="responsive_select">
          <option value="">Select one</option>
        </select>
      </div>
      <div className="col-12">
        <select name="" id="" className="responsive_select">
          <option value="">Select one</option>
        </select>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveFilter);
