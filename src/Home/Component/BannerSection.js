import React from 'react';
import { connect } from 'react-redux';
import SectionHeadingOne from '../../PrimarySections/SectionUtils/SectionHeadingOne';

const BannerSection = (props) => {
  return (
    <div className="wide_banner mb-5">
      <div className="container-md-fluid">
        <SectionHeadingOne
          fontStyleOne={'Good Health and'}
          fontStyleTwo={'Grand Saving'}
        />
        <div className="wide_banner_image">
          <img src={`./assets/images/discountBanner/banner.png`} alt={``} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BannerSection);
