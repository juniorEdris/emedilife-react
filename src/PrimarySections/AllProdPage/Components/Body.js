import React from 'react';
import { connect } from 'react-redux';
import SearchBanner from './SubComponent/SearchBanner';
import SearchProducts from './SubComponent/ProductsCase';

const Body = (props) => {
  return (
    <div className="search_body col-12 col-md-9">
      {' '}
      {/*  */}
      <SearchBanner />
      <SearchProducts
        page={props.page}
        setPage={props.setPage}
        loading={props.loading}
        products={props.products}
        pages={props.pages}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Body));
