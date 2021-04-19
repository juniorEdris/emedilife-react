import { connect } from 'react-redux';
import SingleList from './SingleListItem';

const LatestBlog = (props) => {
  return (
    <div className="">
      <div className="blog_list_heading">
        <h3>{'latest blog'}</h3>
      </div>
      <SingleList
        image={'./assets/images/products/img-1.png'}
        name={'Omron HEM 7120 Fully Automatic'}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LatestBlog);
