import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useQuery } from '../PrimarySections/Utility';
import Header from './Components/DetailsHeader';
import Description from './Components/DetailsBody';
import './productDetails.css';
import RelatedProducts from './Components/RelatedProducts';
import { GetProductDetails } from '../Redux/Action/ProductDetailsAction';
import { toTheTop } from '../PrimarySections/SectionUtils/WindowTop';
import CartAddanime from '../PrimarySections/CartAddAnime/CartAddanime';

const Detailsindex = (props) => {
  // get ID from query /productdetails?id=${product.id}`
  const query = useQuery();
  const prodID = query.get('id');
  useEffect(() => {
    props.getProductDetails(prodID);
    // get back to the Top
    toTheTop();
  }, [prodID]);

  return (
    <div className="product_details_container mt-4 mb-4">
      <div className="container-md-fluid">
        <Header />
        <Description />
        <RelatedProducts />
        <CartAddanime Msg={props.basketMsg} tabState={props.tabState} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  basketMsg: state.Basket.basketmsg,
  tabState: state.Basket.tabStatus,
});

const mapDispatchToProps = (dispatch) => ({
  getProductDetails: (id) => dispatch(GetProductDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detailsindex);
