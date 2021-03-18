import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

export const Search = (props) => {
  const history = useHistory();
  const [datalist, setDatalist] = useState(false);
  const [input, setInput] = useState('');
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const search = (e) => {
    history.push('/search-medicine');
    setDatalist(true);
  };
  return (
    <div className="header__search d-none d-md-block">
      <div className="header__search_inner">
        <select name="" id="">
          <option value="">Option</option>
          <option value="">hakjsd</option>
          <option value="">sdaufh</option>
          <option value="">asdklf;k</option>
        </select>
        <input
          type="text"
          list="medicines"
          className="header__searchInput"
          onInput={search}
          onChange={handleChange}
          value={input}
        />
        <Link to="#" className="header__searchIcon">
          <i className=" fas fa-search" title="search"></i>
        </Link>
        {/* <datalist id="medicines" className="data-list">
          <option value="Chocolate">asjdhfuie</option>
          <option value="Coconut">sdafasdfgafdg</option>
          <option value="Mint">fghjdfguerh</option>
          <option value="Strawberry"> drtadfgasdg</option>
          <option value="Vanilla">asdfgrgadfg</option>
        </datalist> */}
      </div>
      {input.length > 0 && (
        <div className="data-list col-12">
          <Link to="/">
            <div className="col">List 1</div>
          </Link>
          <Link to="/">
            <div className="col">List 2</div>
          </Link>
          <Link to="/">
            <div className="col">List 3</div>
          </Link>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
