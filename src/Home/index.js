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
  const sliders = [
    {
      id: 1,
      photo: './assets/images/Slider/012.jpg',
    },
    {
      id: 2,
      photo: './assets/images/Slider/013.jpg',
    },
    {
      id: 3,
      photo: './assets/images/Slider/014.jpg',
    },
  ];
  useEffect(() => {
    props.getHomeContents();
    toTheTop();
  }, []);
  return (
    <div>
      {/* <HomeSlider loading={props.loading} sliders={props.sliders} /> */}
      <HomeSlider sliders={sliders} />
      <Features />
      <OnlinePharma />
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

const mapDispatchToProps = (dispatch) => ({
  getHomeContents: () => dispatch(GetHomeContents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
