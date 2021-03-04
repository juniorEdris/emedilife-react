import React from 'react';
import { connect } from 'react-redux';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { products } from '../../../data';
import './slider.css';

export const Slider = (props) => {
  return (
    <div className="product_slider_wrapper">
      <AliceCarousel
        disableButtonsControls
        animationDuration={100}
        animationType={'fadeout'}
        mouseTracking={true}
        infinite={true}
        swipeDelta={0}
        autoPlayStrategy='default'>
        {products.map((product) => (
          <img
            src={`./assets/images/products/${product.image}`}
            className="slider_image"
            alt={product.name}
          />
        ))}
      </AliceCarousel>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
