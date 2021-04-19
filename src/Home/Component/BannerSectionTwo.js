import React from 'react';
import { connect } from 'react-redux';
import WideBanner from '../../PrimarySections/SectionUtils/WideBanner';

const BannerSectionTwo = (props) => {
  return (
    <div className="">
      {/* <WideBanner imagepath={'banners/banner2.png'} /> */}
      <WideBanner
        loading={props.loading}
        online={true}
        imagepath={props.banner?.image_full_path}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  banner: state.HomeContent.homewideBannner,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BannerSectionTwo);
