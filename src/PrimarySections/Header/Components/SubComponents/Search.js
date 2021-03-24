import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { GetSearchResults } from '../../../../Redux/Action/SearchAction';

export const Search = (props) => {
  const history = useHistory();
  const [option, setOption] = useState('');
  const [input, setInput] = useState('');
  const [list, setList] = useState(false);
  useEffect(() => {
    props.getSearchResults(input);
  }, [input, option]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const searchList = (e) => {
    setList(false);
  };

  return (
    <div className="header__search d-none d-md-block">
      <div className="header__search_inner">
        <select
          name=""
          id=""
          onChange={(e) => setOption(e.target.value)}
          value={option}>
          <option value="1">Option</option>
          <option value="2">hakjsd</option>
          <option value="3">sdaufh</option>
          <option value="4">asdklf;k</option>
        </select>
        <input
          type="text"
          list="medicines"
          className="header__searchInput"
          onKeyUp={() => setList(true)}
          onChange={handleChange}
          value={input}
        />
        <Link to="#" className="header__searchIcon">
          <i className=" fas fa-search" title="search"></i>
        </Link>
      </div>
      {input.length > 0 && (
        <div className="">
          {list && (
            <div className="">
              {props.results !== undefined ? (
                <div className="">
                  {!props.loading ? (
                    <div className="data-list col-12">
                      {props.results.map((result) => (
                        <Link
                          to="/search-medicine"
                          onClick={(e) => searchList(e, result.id)}>
                          <div className="col search_list">{result.name}</div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="data-list col-12">
                      <div className="header_search_list_loader">
                        loading...
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="data-list col-12">
                  <div className="header_search_list_loader">No results!</div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.Search.loading,
  results: state.Search.searchResults,
});

const mapDispatchToProps = (dispatch) => ({
  getSearchResults: (keywords, category, subcategory, childcategory) =>
    dispatch(GetSearchResults(keywords, category, subcategory, childcategory)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
