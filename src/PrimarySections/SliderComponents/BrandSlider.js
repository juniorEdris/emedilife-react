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
                // src={`./assets/images/featured_brands/${brand.image}`}
                // src={`https:${brand.photo}`}
                // src={`https://medipathy.changetechbd.com/assets/images/company/16146003524108.png`}
                src={`data:image/jpeg;base64,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`}
                alt={brand.name}
              />
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
