import React from 'react';
import { connect } from 'react-redux';
import './slider.css';
import Skeleton from '@yisheng90/react-loading';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = (props) => {
  const allPhotos = props?.details?.images && [{photo:props.details?.photo},...props.details?.images]
  return (
    <div className="product_slider_wrapper">
      {props.loading ? (
        <Skeleton width={'100%'} height={'390px'} />
      ) : (
        <Carousel
        autoPlay
        interval="5000" 
        transitionTime="1000" 
        infiniteLoop
        showIndicators={false}
          >
            {
              allPhotos.map(image => (
                <img
                key={image.photo}
                src={`http:${image.photo}`}
                className="slider_image"
                alt={props.details?.name}
              />
            ))
            }
        </Carousel>
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
