import { connect } from 'react-redux';
import Sidebar from './SubComponents/Sidebar';
import BlogDetails from './SubComponents/SingleBlogDetails';
import './blog_details.css';
import { getSingleBlog } from '../Redux/Action/SingleBlogAction';
import { useEffect } from 'react';
import { useQuery } from '../PrimarySections/Utility';

export const Index = (props) => {
  const query = useQuery();
  const id = query.get('id');
  useEffect(() => {
    props.getSingleBlog(id);
  }, [id]);
  return (
    <div className="blog_details_wrapper p-0 col-12">
      <div className="row">
        <BlogDetails blog={props.blog} />
        <Sidebar />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.SingleBlog.loading,
  blog: state.SingleBlog.singleBlog,
  // sidebar:state.SingleBlog.sidebar,
});

const mapDispatchToProps = (dispatch) => ({
  getSingleBlog: (data) => dispatch(getSingleBlog(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
