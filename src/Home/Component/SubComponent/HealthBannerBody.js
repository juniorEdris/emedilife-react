import React from 'react';
import { connect } from 'react-redux';

const HealthBannerBody = (props) => {
  const banners = [
    {
      id: 1,
      image: 'image1.png',
    },
    {
      id: 2,
      image: 'image2.png',
    },
    {
      id: 3,
      image: 'image3.png',
    },
    {
      id: 4,
      image: 'image4.png',
    },
  ];
  return (
    <div className="health_banner_body col-12">
      <div className="row">
        {banners.map((banner) => (
          <div
            className="health_banner_image col-12 col-md-3 all-wide-banner"
            id={banner.id}>
            <img
              src={`./assets/images/healthcare_banners/${banner.image}`}
              alt={banner.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HealthBannerBody);
