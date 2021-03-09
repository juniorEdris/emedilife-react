import React from 'react';
import { connect } from 'react-redux';
import AboutBody from './Components/AboutBody';
import AboutFooter from './Components/AboutFooter';
import AboutHeader from './Components/AboutHeader';
import './aboutus.css';

const AboutUs = (props) => {
  return (
    <div className="about_page container">
      <AboutHeader />
      <AboutBody />
      <AboutFooter />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
