import React from 'react';
import { connect } from 'react-redux';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

const BrandSlider = (props) => {
  const options = {
    loop: false,
    margin: 15,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 2,
        nav: false,
      },
      700: {
        items: 3,
      },
      900: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  };

  return (
    <div className="brand_section image-slider-one">
      <OwlCarousel
        className="owl-theme"
        {...options}
        navText={[
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ]}>
        {props.brands.map((brand) => (
          <div className="brand_container image_container col" key={brand.id}>
            <Link to="/search-medicine">
              <img
                src={`./assets/images/featured_brands/${brand.image}`}
                alt={brand.brand_name}
              />
            </Link>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BrandSlider);
