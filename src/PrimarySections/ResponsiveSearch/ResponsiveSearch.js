import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { GetSearchResults } from '../../Redux/Action/SearchAction';
import './responsivesearch.css';

const ResponsiveSearch = (props) => {
  const history = useHistory();
  const [option, setOption] = useState('');
  const [input, setInput] = useState('');
  const [list, setList] = useState(false);
  useEffect(() => {
    props.getSearchResults(input);
  }, [input, option]);

  const searchList = (e) => {
    setList(false);
    props.setSearch(false);
  };
  return (
    <div className="responsive_search d-md-none">
      <form action="">
        <div className="row">
          <input
            type="text"
            name="search"
            id=""
            className="search_input"
            placeholder="Search by brands and generic names"
            onKeyUp={() => setList(true)}
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>
      </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveSearch);
