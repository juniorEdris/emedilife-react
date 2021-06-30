import Skeleton from '@yisheng90/react-loading';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetHomeChildCat, GetHomeSubCat } from '../../../../Redux/Action/HomeProductsAction';

const CategorySidebar = (props) => {
  const CloseBar = () => {
    props.setCategoryBar(!props.categoryBar);
    props.setCategoryID('');
  };
  return (
    <div className="sidebar category_sidebar d-none d-md-block">
      <div
        className={`sidebar_route category_sidebar_list ${
          !props.categoryBar && 'd-none'
        }`}>
        <div className="cross">
          <span class="lnr lnr-cross" onClick={CloseBar}></span>
        </div>
        <ul className={`sidebar_route_list ${props.loading && 'loader'} category_list`}>
          {props.loading
            ? Array(12)
                .fill()
                .map((x) => (
                  <li>
                    <Skeleton width={'100%'} height={27} />
                  </li>
                ))
            : props.categories?.map((cat) => (
                <li
                  key={cat.id}>
                  <Link
                    to={`/category-products?id=${cat.id}`}
                  key={cat.id}
                  className={`${
                    props.categoryID.toString() === cat.id.toString() &&
                    'category_sidebar_list_active'
                  } ${cat.has_subcategory && 'has_subcat'}`}
                    onClick={() => {
                      props.setCategoryBar(!props.categoryBar);
                      props.setCategoryName(cat.name);
                      props.setCategoryID(cat.id);
                  }}
                  onMouseOver={() =>
                    props.getSubcategories(cat.id)
                  }>
                    {cat.name}
                </Link>
                {props.subcategories?.length > 0 &&
                  <ul className='sub_category'>
                  {props.subcategories?.map(subcat =>
                    <li key={subcat.id}>
                      <Link to='/'
                        className={`${subcat.has_childcategory && 'has_childcat'}`}
                  onMouseOver={() =>
                    props.getChildcategories(cat.id)
                  }
                  >{subcat.name}</Link>
                    {props.childcategories?.length > 0  && <ul className="child_category">
                        {props.childcategories?.map(childcat => (
                          <li key={ childcat.id}>
                        <Link to='/'>{childcat.name}</Link>
                      </li>))}
                  </ul>}
                  </li>)}
                </ul>
                }
                </li>
              ))}
        </ul>
      </div>
      {props.categoryBar && (
        <div
          className="responsive_backdrop category_sidebar"
          onClick={() => {
            props.setCategoryBar(false);
          }}></div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  subcatloading: state.HomeContent.subloading,
  catloading: state.HomeContent.childloading,
  categories: state.HomeContent.categories,
  subcategories: state.HomeContent.subcategories,
  childcategories: state.HomeContent.childcategories,
});
const mapDispatchToProps = (dispatch) => ({
  getSubcategories:(id)=>dispatch(GetHomeSubCat(id)),
  getChildcategories:(id)=>dispatch(GetHomeChildCat(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(CategorySidebar);
