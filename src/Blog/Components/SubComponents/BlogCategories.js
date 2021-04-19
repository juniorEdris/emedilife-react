import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const BlogCategory = (props) => {
  return (
    <div className="blog_category">
      <div className="blog_list_heading">
        <h3>{'blog categories'}</h3>
      </div>
      <div className="blog_category_details">
        <Link to="#">
          <span className="lnr lnr-chevron-right" /> Health Tips
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BlogCategory);
