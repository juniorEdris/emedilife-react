import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import './responsivesearch.css';

const ResponsiveSearch = (props) => {
  const history = useHistory();
  const routeChange = () => {
    history.push('/search-medicine');
  };
  return (
    <div className="responsive_search">
      <form action="">
        <div className="row">
          <input
            type="text"
            name="search"
            id=""
            className="search_input"
            placeholder="Search by brands and generic names"
            onInput={routeChange}
          />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveSearch);
