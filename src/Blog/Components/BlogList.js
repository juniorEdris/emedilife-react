import React from 'react';
import { connect } from 'react-redux';
import SingleBlog from '../../PrimarySections/SectionUtils/SingleBlog';

const BlogList = (props) => {
  return (
    <div className="blog_list col-md-9 col-12">
      <div className="blog_heading">
        <h5>Blog</h5>
      </div>
      <div className="blogs">
        <SingleBlog />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);
