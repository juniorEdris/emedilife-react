import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { connect } from 'react-redux';

const Banner = (props) => {
  const sliders = [
    {
      id: 1,
      image: 'homeSlider.jpg',
    },
    {
      id: 2,
      image: 'homeSlider.jpg',
    },
  ];

  return (
    <div className="home_slider">
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
        {/* props.sliders?.length > 0 && */}
        {sliders?.map((banner) => (
          <div className="slider-area " key={banner.photo}>
            {/*col-12*/}
            <div className="single-slider d-flex align-items-center">
              <img
                className="slider_image"
                src={`./assets/images/${banner.image}`}
                // src={`https://${banner.photo}`}
                alt=""
              />
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  sliders: state.HomeContent.homeSlider,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
