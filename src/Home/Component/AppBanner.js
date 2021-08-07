import React from 'react';
import { connect } from 'react-redux';
import WideBanner from '../../PrimarySections/SectionUtils/WideBanner';

const AppBanner = (props) => {
  return (
    <div className="app_banner all-wide-banners mb-0">
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
  banner: state.HomeContent.homeappBanner,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(AppBanner);
