import React from 'react';
import { connect } from 'react-redux';
import './blog.css';
import BlogList from './Components/BlogList';
import BlogSidebar from './Components/BlogSidebar';

const Blog = (props) => {
  return (
    <div className="blog_wrapper">
      <div className="container-md-fluid">
        <div className="row">
          <BlogList />
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
