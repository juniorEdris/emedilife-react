import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { toTheTop } from '../PrimarySections/SectionUtils/WindowTop';
import Body from './Components/Body';
import Sidebar from './Components/Sidebar';
import './search_medicine.css';

const Search = (props) => {
  useEffect(() => {
    toTheTop();
  }, []);
  return (
    <div className="container mb-4">
      <div className="search_medicine_wrapper row">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
