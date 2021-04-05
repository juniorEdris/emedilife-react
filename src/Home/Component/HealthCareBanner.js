import React from 'react';
import { connect } from 'react-redux';
import SectionHeadingOne from '../../PrimarySections/SectionUtils/SectionHeadingOne';
import Body from './SubComponent/HealthBannerBody';

const HealthCareBanner = (props) => {
  return (
    <div className="health_care_banner mb-5">
      <div className="container-md-fluid">
        <SectionHeadingOne
          fontStyleOne={'Healthcare'}
          fontStyleTwo={'and More'}
          reverse={true}
        />
        <Body />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HealthCareBanner);
