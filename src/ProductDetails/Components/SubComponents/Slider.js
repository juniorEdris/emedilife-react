import React from 'react';
import { connect } from 'react-redux';
import AliceCarousel from 'react-alice-carousel';
import { DOMAIN } from '../../../PrimarySections/Utility/API_Links';
import 'react-alice-carousel/lib/alice-carousel.css';
import { products } from '../../../data';
import './slider.css';

const Slider = (props) => {
  return (
    <div className="product_slider_wrapper">
      <AliceCarousel
        disableButtonsControls
        animationDuration={100}
        animationType={'fadeout'}
        mouseTracking={true}
        infinite={true}
        swipeDelta={0}
        autoPlayStrategy="default">
        {props.details?.images?.map((image) => (
          <img
            src={`${DOMAIN}${props.details?.images_base_path}/${image.url}`}
            className="slider_image"
            alt={props.details?.name}
          />
        ))}
      </AliceCarousel>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.ProductDetails.loading,
  details: state.ProductDetails.productDetails,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
