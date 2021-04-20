import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { connect } from 'react-redux';
import Skeleton from '@yisheng90/react-loading';

const Banner = (props) => {
  return (
    <div className="home_slider">
      {props.loading ? (
        <div className="">
          <Skeleton width={'100%'} height="248px" />
        </div>
      ) : (
        <OwlCarousel
          className="owl-theme"
          loop
          items={1}
          nav
          navSpeed={1000}
          navText={[
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>',
          ]}>
          {props.sliders?.map((banner) => (
            <div className="slider-area " key={banner.photo}>
              <div className="single-slider">
                <img
                  className="slider_image"
                  src={banner.photo}
                  alt="banners"
                />
              </div>
            </div>
          ))}
        </OwlCarousel>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  // loading: state.HomeContent.loading,
  // sliders: state.HomeContent.homeSlider,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
