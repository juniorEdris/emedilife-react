import React from 'react';
import { connect } from 'react-redux';

const HealthBannerBody = (props) => {
  const banners = [
    {
      id: 1,
      image: 'image-1.png',
    },
    {
      id: 2,
      image: 'image-2.png',
    },
    {
      id: 3,
      image: 'image-3.png',
    },
    {
      id: 4,
      image: 'image-4.png',
    },
  ];
  return (
    <div className="health_banner_body col-12">
      <div className="row">
        {banners.map((banner) => (
          <div
            className="health_banner_image col-12 col-md-3 all-wide-banner pl-0"
            id={banner.id}>
            <img
              src={`./assets/images/health_banners/${banner.image}`}
              alt={'healthcare banners'}
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
