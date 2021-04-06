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
      1400: {
        items: 7,
      },
    },
  };
  props.brands?.map((x) => console.log(`https:${x.photo}`));
  const style = {
    zIndex: 1000,
    position: 'absolute',
    bottom: '0px',
    left: '30%',
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
        {props.brands?.map((brand) => (
          <div className="brand_container image_container col" key={brand.id}>
            <Link to={`/search-medicine?id=${brand.id}`}>
              <img
                src={`data:image/png;base64,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`}
                alt={brand.name}
              />
              {/* <img src={`https:${brand.photo}`} alt={brand.name} /> */}
            </Link>
            {/* <div className="text-danger" style={style}>
              {brand.name}
            </div> */}
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BrandSlider);
