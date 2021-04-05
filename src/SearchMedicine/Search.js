import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { toTheTop } from '../PrimarySections/SectionUtils/WindowTop';
import Body from './Components/Body';
import Sidebar from './Components/Sidebar';
import './search_medicine.css';

const Search = (props) => {
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');
  useEffect(() => {
    toTheTop();
  }, []);
  return (
    <div className="container-md-fluid mb-4">
      <div className="search_medicine_wrapper row">
        <Sidebar
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
        />
        <Body />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
