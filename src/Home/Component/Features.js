import React from 'react';
import { connect } from 'react-redux';

export const Features = (props) => {
  const images = [
    {
      id: 1,
      image: 'genuine_medicine.png',
    },
    {
      id: 2,
      image: 'widest_range.png',
    },
    {
      id: 3,
      image: 'secure_pakaging.png',
    },
    {
      id: 4,
      image: 'assured_savings.png',
    },
  ];
  return (
    <div className="home_feature_area">
      <div className="container-md-fluid">
        <div className="row">
          {images.map((image) => (
            <div className="col-6 col-md-3 p-0" key={image.id}>
              <img
                src={`./assets/images/feature_images/${image.image}`}
                alt={'feature images'}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Features);
