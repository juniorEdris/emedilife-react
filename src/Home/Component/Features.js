import React from 'react';
import { connect } from 'react-redux';
import './features.css';

export const Features = (props) => {
  const images = [
    {
      id: 1,
      image: 'genuine_medicine.png',
      name: 'Genuine medicine',
      small: `Directly Collected From Pharmaceuticals Companies`,
    },
    {
      id: 2,
      image: 'widest_range.png',
      name: 'Widest range',
      small: `30,000+ Medicines 270+ Pharmaceuticals Companies 20,000+ Other Supplimentary Products`,
    },
    {
      id: 3,
      image: 'secure_pakaging.png',
      name: 'Secure packaging',
      small: 'Every Delivery is packed By Secured Seal and Transaction ID',
    },
    {
      id: 4,
      image: 'assured_savings.png',
      name: 'Assured savings',
      small: '10-15% Savings in Every Purchase',
    },
    {
      id: 4,
      image: 'secure_transacrtions.png',
      name: 'Secured and Trusted Transaction',
      small:
        'Your Every Transaction is Secured ans No one outside emedilife is able to See Your prescription and information',
      fullWidth: true,
    },
  ];
  return (
    <div className="home_feature_area mb-5 mb-md-2 ">
      <div className="container-md-fluid">
        <div className="features_body">
          {' '}
          {/* */}
          <div className="row align-tems-center no-gutters">
            {/* {images.map((image) => (
              <div className="col-6 col-md-3 p-0" key={image.id}>
                <img
                  src={`./assets/images/feature_images/${image.image}`}
                  alt={'feature images'}
                />
              </div>
            ))} */}
            {images.map((image) => (
              <div
                className={`single_feature col-6 col-features ${
                  image.fullWidth && 'col-12'
                }`}
                key={image.id}>
                {/* <div className="d-flex align-items-center">
                  <div className="image">
                    <img
                      src={`./assets/images/feature_images/${image.image}`}
                      alt={'feature images'}
                    />
                  </div>
                  <div className="text">{image.name}</div>
                </div> */}
                <div className="image">
                  <img
                    src={`./assets/images/feature_images/${image.image}`}
                    alt={'feature images'}
                  />
                </div>
                {/* <div className="title">{image.name}</div> */}
                {/* <div className="menu">
                  {' '}
                  <small>{image.small}</small>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Features);
