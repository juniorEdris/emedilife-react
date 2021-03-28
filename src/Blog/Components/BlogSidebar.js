import React from 'react';
import { connect } from 'react-redux';

const BlogSidebar = (props) => {
  return (
    <div className="blog_sidebar col-3 d-none d-md-block">
      <div className="">sidebar</div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BlogSidebar);
