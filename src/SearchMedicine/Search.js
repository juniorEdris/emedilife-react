import React from 'react';
import { connect } from 'react-redux';
import SeeMoreBtn from '../PrimarySections/SectionUtils/SeeMoreBtn';
import RelatedProducts from '../ProductDetails/Components/RelatedProducts';
import Body from './Components/Body';
import Sidebar from './Components/Sidebar';
import './search_medicine.css';

const Search = (props) => {
  return (
    <div className="container mb-4">
      <div className="search_medicine_wrapper row">
        <Sidebar />
        <Body />
      </div>
      <RelatedProducts />
      <SeeMoreBtn />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
