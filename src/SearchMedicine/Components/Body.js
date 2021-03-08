import React from 'react';
import { connect } from 'react-redux';
import SearchBanner from './SubComponent/SearchBanner';
import SearchProducts from './SubComponent/SearchProducts';

const Body = (props) => {
  return (
    <div className="search_body col-12 col-md-9 order-1 order-md-2">
      <SearchBanner />
      <SearchProducts />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
