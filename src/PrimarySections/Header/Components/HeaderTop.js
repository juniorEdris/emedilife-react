import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ResponsiveFilter from '../../ResponsiveFilter.js/ResponsiveFilter';
import ResponsiveSearch from '../../ResponsiveSearch/ResponsiveSearch';
import HamBurger from './SubComponents/HamBurger';
import Logo from './SubComponents/Logo';
import ProductCart from './SubComponents/ProductCart';
import Search from './SubComponents/Search';
import UserDropdown from './SubComponents/UserDropdown';

export const HeaderTop = (props) => {
  const [search, setSearch] = useState(false);
  const [filter, setFilter] = useState(false);
  const openSeacrhbox = (e) => {
    e.preventDefault();
    setSearch(!search);
  };
  const openFilterbox = (e) => {
    e.preventDefault();
    setFilter(!filter);
  };
  return (
    <nav className="header">
      <HamBurger />
      <Logo />
      <Search />
      <div className="header__right row align-items-center">
        <Link
          to="#"
          className="header__mobile_searchIcon d-md-none"
          onClick={openFilterbox}>
          <img src="./assets/svg/icons/filter-list.svg" alt="" />
        </Link>
        <div className="header__nav">
          <UserDropdown />
          <ProductCart handleChange={openSeacrhbox} />
        </div>
      </div>
      {search && <ResponsiveSearch />}
      {filter && <ResponsiveFilter />}
    </nav>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderTop);
