import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AboutBody from './Components/AboutBody';
import AboutFooter from './Components/AboutFooter';
import AboutHeader from './Components/AboutHeader';
import './aboutus.css';
import { toTheTop } from '../PrimarySections/SectionUtils/WindowTop';
import MorePages from '../PrimarySections/MorePages';
import { API, ENDPOINTS } from '../PrimarySections/Utility/API_Links';

const AboutUs = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    toTheTop();
    API()
    .get(`${ENDPOINTS.MOREPAGES}/${'4'}`)
    .then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className="about_page container-md-fluid">
      {/* <AboutHeader />
      <AboutBody />
      <AboutFooter /> */}
      <MorePages pageData={ data}/>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
