import React from 'react';
import { connect } from 'react-redux';
import SectionHeadingThree from '../../PrimarySections/SectionUtils/SectionHeadingThree';
import Body from './SubComponent/ArticleBody';

const HealthArticle = (props) => {
  return (
    <div className="health_article mb-4">
      {props.blogs.length > 0 && (
        <div className="container-md-fluid">
          <SectionHeadingThree textOne={'Health'} textTwo={'Article'} />
          <Body />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  blogs: state.HomeContent.homeBlogs,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HealthArticle);
