import Skeleton from '@yisheng90/react-loading';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetHomeChildCat, GetHomeSubCat } from '../../../Redux/Action/HomeProductsAction';

const BrowseNav = (props) => {
  return (
    <div>
      <div className="browse_nav">
        <div className="acc_heading">
          <h5>over the counter</h5>
        </div>
        <div className="dash_nav_list browse_nav_list">
          <ul className='dash_category'>
            {props.loading
              ? Array(12)
                  .fill()
                  .map((x) => (
                    <li>
                      <Skeleton width={'100%'} height={27} />
                    </li>
                  ))
              : props.categories?.map((cat) => (
                  <li>
                    <Link
                      to={`/category-products?id=${cat.id} `}
                      className={`${cat.has_subcategory && 'has_subcat'}`}
                    key={cat.id}
                    onMouseOver={() =>
                      props.getSubcategories(cat.id)
                    }
                  >
                      {cat.name}
                  </Link>
                  {props.subcategories?.length > 0 &&
                  <ul className='dash_sub_category'>
                  {props.subcategories?.map(subcat =>
                    <li key={subcat.id}>
                      <Link to={`/category-products?subcategory_id=${subcat.id}`}
                        className={`${subcat.has_childcategory && 'has_childcat'}`}
                  onMouseOver={() =>
                    props.getChildcategories(subcat.id)
                  }
                  >{subcat.name}</Link>
                    {props.childcategories?.length > 0  && <ul className="dash_child_category">
                        {props.childcategories?.map(childcat => (
                          <li key={ childcat.id}>
                            <Link to={`/category-products?childcategory_id=${childcat.id}`}>{childcat.name}</Link>
                      </li>))}
                  </ul>}
                  </li>)}
                </ul>
                }
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
  subcategories: state.HomeContent.subcategories,
  childcategories: state.HomeContent.childcategories,
});

const mapDispatchToProps = dispatch => ({
  getSubcategories:(id)=>dispatch(GetHomeSubCat(id)),
  getChildcategories:(id)=>dispatch(GetHomeChildCat(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseNav);
