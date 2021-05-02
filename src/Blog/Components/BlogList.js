import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Pagination from '../../PrimarySections/Pagination/Pagination';
import SingleBlog from '../../PrimarySections/SectionUtils/SingleBlog';
import { getBlogList } from '../../Redux/Action/BlogListAction';

const BlogList = (props) => {
  const [page, setPage] = useState('1');
  useEffect(() => {
    props.getBlogList({ page });
  }, [page]);
  return (
    <div className="blog_list col-md-9 col-12">
      <div className="blog_heading">
        <h5>Blog</h5>
      </div>
      <div className="blogs">
        {props.allBlogs.length > 0 &&
          props.allBlogs.map((blog) => (
            <SingleBlog key={blog.id} blog={blog} />
          ))}
      </div>
      <Pagination page={page} pages={props.pages} setPage={setPage} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.AllBlogs.loading,
  allBlogs: state.AllBlogs.blogLists,
  pages: state.AllBlogs.blogsPage,
});

const mapDispatchToProps = (dispatch) => ({
  getBlogList: (data) => dispatch(getBlogList(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);
