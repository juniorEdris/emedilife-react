import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const BrowseNav = (props) => {
  return (
    <div>
      <div className="browse_nav">
        <div className="acc_heading">
          <h5>over the counter</h5>
        </div>
        <div className="dash_nav_list browse_nav_list">
          <ul>
            {props.categories?.map((cat) => (
              <li>
                <Link to="#" className="" key={cat.id}>
                  {cat.name.en}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  categories: state.HomeContent.categories,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BrowseNav);
