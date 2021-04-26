import React from 'react';
import { connect } from 'react-redux';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './slider.css';
import Skeleton from '@yisheng90/react-loading';

const Slider = (props) => {
  return (
    <div className="product_slider_wrapper">
      {props.loading ? (
        <Skeleton width={'100%'} height={'390px'} />
      ) : (
        <AliceCarousel
          disableButtonsControls
          animationDuration={100}
          animationType={'fadeout'}
          mouseTracking={true}
          infinite={true}
          swipeDelta={0}
          autoPlayStrategy="default">
          <img
            src={`http:${props.details?.photo}`}
            className="slider_image"
            alt={props.details?.name}
          />
        </AliceCarousel>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.ProductDetails.loading,
  details: state.ProductDetails.productDetails,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
