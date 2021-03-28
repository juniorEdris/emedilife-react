import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Truncate } from '../Utility';

const SingleBlog = (props) => {
  return (
    <div className="single_blog col-12 row m-0">
      <div className="single_blog_image col-12 col-md-3">
        <img src="./assets/images/products/img-1.png" alt="img-1" />
      </div>
      <div className="single_blog_details col-12 col-md-9 ">
        <div className="single_blog_title">
          <p>Omron HEM 7120 Fully Automatic</p>
        </div>
        <div className="single_blog_middle">
          <div className="single_blog_date">
            <img
              src="./assets/svg/icons/calendar-alt.svg"
              alt="date-calender"
            />{' '}
            18th March 2021
          </div>
          <div className="single_blog_views">
            <img src="./assets/svg/icons/ionic-eye.svg" alt="blog-views" /> 40
          </div>
        </div>
        <div className="single_blog_text">
          <p>
            {Truncate(
              `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book.`,
              300
            )}
          </p>
        </div>
        <div className="blog_read_btn">
          <Link to={`/blog-details?id=${12}`} className="btn col-12 col-md-3">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SingleBlog);
