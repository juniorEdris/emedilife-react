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
    props.getSearchResults({ keywords: input, category: option });
  }, [input, option]);
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const searchList = (e) => {
    setList(false);
  };

  return (
    <div className="header__search_container d-none d-md-block">
      <div className="header__search ">
        <div className="header__search_inner">
          <div className="selectDiv">
            <select
              name=""
              id=""
              onChange={(e) => setOption(e.target.value)}
              value={option}>
              <option value="">All</option>
              {props.categories?.map((cat) => (
                <option value={cat.id} key={cat.id}>
                  {cat.name.en}
                </option>
              ))}
            </select>
          </div>
          <input
            type="text"
            list="medicines"
            className="header__searchInput"
            onKeyUp={() => setList(true)}
            onChange={handleChange}
            value={input}
            placeholder="Search medicine,injections"
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
                      <div className="data-list col-12 p-0">
                        {props.results.map((result) => (
                          <div className="col search_list" key={result.id}>
                            <Link
                              to={`/productdetails?id=${result.id}`}
                              onClick={(e) => {
                                searchList(e, result.id);
                                setInput('');
                              }}>
                              {result.name}
                            </Link>
                          </div>
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
      {input.length > 0 && list && (
        <div
          className="data-list-back-drop"
          onClick={() => {
            setList(false);
            setInput('');
          }}></div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.Search.loading,
  results: state.Search.searchResults,
  categories: state.HomeContent.categories,
});

const mapDispatchToProps = (dispatch) => ({
  getSearchResults: (data) => dispatch(GetSearchResults(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
