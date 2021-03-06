import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import HomeSlider from './Component/Banner';
import BannerSection from './Component/BannerSection';
import BannerSectionTwo from './Component/BannerSectionTwo';
import BannerSectionThree from './Component/BannerSectionThree';
import FeatureBrands from './Component/FeatureBrands';
import { Features } from './Component/Features';
import { OnlinePharma } from './Component/OnlinePharma';
import PopularProduct from './Component/PopularProduct';
import HealthCareBanners from './Component/HealthCareBanner';
import NecessaryProducts from './Component/NecessaryProducts';
import HealthArticle from './Component/HealthArticle';
import AppBanner from './Component/AppBanner';
import { GetHomeContents } from '../Redux/Action/HomeProductsAction';
import { toTheTop } from '../PrimarySections/SectionUtils/WindowTop';

const Index = (props) => {
  useEffect(() => {
    toTheTop();
    props.setCategoryID('');
  }, []);
  return (
    <div>
      <HomeSlider loading={props.loading} sliders={props.sliders} />
      <Features />
      <OnlinePharma
        loginSuccessPageRedirectTo={props.loginSuccessPageRedirectTo}
      />
      <FeatureBrands />
      <BannerSection />
      <PopularProduct />
      <HealthCareBanners />
      <BannerSectionTwo />
      <BannerSectionThree />
      <NecessaryProducts />
      <HealthArticle />
      <AppBanner />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  sliders: state.HomeContent.homeSlider,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
