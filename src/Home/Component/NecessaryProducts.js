import React from 'react';
import { connect } from 'react-redux';
import SectionHeadingTwo from '../../PrimarySections/SectionUtils/SectionHeadingTwo';
import SeeMoreBtn from '../../PrimarySections/SectionUtils/SeeMoreBtn';
import Body from './SubComponent/NecessaryProducts';

const NecessaryProducts = (props) => {
  return (
    <div className="necessary_product_section mb-5">
      <div className="container">
        <SectionHeadingTwo textOne={'Neccesary Popular'} textTwo={'Products'} />
        <Body />
        <SeeMoreBtn />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NecessaryProducts);
