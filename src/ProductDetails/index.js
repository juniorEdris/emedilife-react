import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useQuery } from '../PrimarySections/Utility';
import Header from './Components/DetailsHeader';
import Description from './Components/DetailsBody';
import './productDetails.css';
import RelatedProducts from './Components/RelatedProducts';
import { GetProductDetails } from '../Redux/Action/ProductDetailsAction';
import { toTheTop } from '../PrimarySections/SectionUtils/WindowTop';

const Detailsindex = (props) => {
  // get ID from query /productdetails?id=${product.id}`
  const query = useQuery();
  const prodID = query.get('id');
  useEffect(() => {
    console.log('id', prodID);
    props.getProductDetails();
    // get back to the Top
    toTheTop();
  }, [prodID]);

  return (
    <div className="product_details_container mt-4 mb-4">
      <Header />
      <Description />
      <RelatedProducts />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getProductDetails: (id) => dispatch(GetProductDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detailsindex);
