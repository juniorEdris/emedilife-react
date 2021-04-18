import Skeleton from '@yisheng90/react-loading';
import React from 'react';
import { connect } from 'react-redux';
import SectionHeadingOne from '../../PrimarySections/SectionUtils/SectionHeadingOne';
import Product from '../../PrimarySections/SliderComponents/ProductSlider';

const PopularProduct = (props) => {
  const products = [
    {
      id: 1,
      image: 'img-1.png',
      name: 'Omron HEM 7120 Fully Automatic-100mg',
      mg: 100,
      brand: 'Omoron',
      price: 149,
      previous_price: 288,
      best_seller: true,
    },
    {
      id: 2,
      image: 'img-2.png',
      name: 'Omron HEM 7120 Fully Automatic-100mg',
      mg: 100,
      brand: 'Omoron',
      price: 149,
      previous_price: 288,
      best_seller: true,
    },
    {
      id: 3,
      image: 'img-3.png',
      name: 'Omron HEM 7120 Fully Automatic-100mg',
      mg: 100,
      brand: 'Omoron',
      price: 149,
      previous_price: 288,
      best_seller: false,
    },
    {
      id: 4,
      image: 'img-4.png',
      name: 'Omron HEM 7120 Fully Automatic-100mg',
      mg: 100,
      brand: 'Omoron',
      price: 149,
      previous_price: 288,
      best_seller: false,
    },
    {
      id: 5,
      image: 'img-5.png',
      name: 'Omron HEM 7120 Fully Automatic-100mg',
      mg: 100,
      brand: 'Omoron',
      price: 149,
      previous_price: 288,
      best_seller: false,
    },
    {
      id: 6,
      image: 'img-6.png',
      name: 'Omron HEM 7120 Fully Automatic-100mg',
      mg: 100,
      brand: 'Omoron',
      price: 149,
      previous_price: 288,
      best_seller: false,
    },
    {
      id: 7,
      image: 'img-7.png',
      name: 'Omron HEM 7120 Fully Automatic-100mg',
      mg: 100,
      brand: 'Omoron',
      price: 149,
      previous_price: 288,
      best_seller: false,
    },
    {
      id: 8,
      image: 'img-1.png',
      name: 'Omron HEM 7120 Fully Automatic-100mg',
      mg: 100,
      brand: 'Omoron',
      price: 149,
      previous_price: 288,
      best_seller: false,
    },
  ];
  return (
    <div className="popular_product mb-3">
      {props.loading ? (
        <div className="container-md-fluid">
          <Skeleton width={'100%'} height={'60px'} className="mb-4" />
          <div className="row">
            {Array(6)
              .fill()
              .map((x, i) => (
                <div className="col-6 col-md-4 col-lg-2" key={i}>
                  <Skeleton width={'100%'} height={'200px'} />
                </div>
              ))}
          </div>
        </div>
      ) : (
        props.products.length > 0 && (
          <div className="container-md-fluid">
            <SectionHeadingOne
              fontStyleOne={'Popular'}
              fontStyleTwo={'Healthcare Products'}
            />
            <Product products={props.products} />
          </div>
        )
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  products: state.HomeContent.popularProducts,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PopularProduct);
