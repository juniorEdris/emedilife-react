import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  FETCH_HOME_CATEGORIES_ERROR,
  FETCH_HOME_CATEGORIES_REQUEST,
  FETCH_HOME_CATEGORIES_SUCCESS,
  FETCH_HOME_CHILD_CATEGORIES_ERROR,
  FETCH_HOME_CHILD_CATEGORIES_REQUEST,
  FETCH_HOME_CHILD_CATEGORIES_SUCCESS,
  FETCH_HOME_PRODUCTS_ERROR,
  FETCH_HOME_PRODUCTS_REQUEST,
  FETCH_HOME_PRODUCTS_SUCCESS,
  FETCH_HOME_SUB_CATEGORIES_ERROR,
  FETCH_HOME_SUB_CATEGORIES_REQUEST,
  FETCH_HOME_SUB_CATEGORIES_SUCCESS,
} from '../Types';

const fetchHomeProductsRequest = () => ({
  type: FETCH_HOME_PRODUCTS_REQUEST,
});

const fetchHomeProductsSuccess = (res) => {
  return {
    type: FETCH_HOME_PRODUCTS_SUCCESS,
    // categories: res.categories,
    slider: res.sliders,
    homeBrands: res.companies.data,
    popularProducts: res.trending_products.data,
    neccessaryProducts: res.products.data,
    commonProducts: res.common_products.data,
    homeBlogs: res.blogs,
    video: res.home_page_right_video,
    brand_bottom_banner: res.brand_bottom_banner,
    healthCareBanner: res.top_small_banners.data,
    top_large_banner: res.top_large_banner,
    bottom_large_banner: res.bottom_large_banner,
    appBanner: res.footer_top_large_banner,
    footerlinks: res.pages_lists,
  };
};
const fetchHomeProductsError = (error) => ({
  type: FETCH_HOME_PRODUCTS_ERROR,
  error,
});
// GET CATEGORIES
const fetchHomeCategoryRequest = () => ({
  type: FETCH_HOME_CATEGORIES_REQUEST,
});
const fetchHomeCategorySuccess = (res) => ({
  type: FETCH_HOME_CATEGORIES_SUCCESS,
  categories:res
});
const fetchHomeCategoryError = (err) => ({
  type: FETCH_HOME_CATEGORIES_ERROR,
  error:err,
});
// GET SUB CATEGORIES
const fetchHomeSubCategoryRequest = () => ({
  type: FETCH_HOME_SUB_CATEGORIES_REQUEST,
});
const fetchHomeSubCategorySuccess = (res) => ({
  type: FETCH_HOME_SUB_CATEGORIES_SUCCESS,
  subCat:res || []
});
const fetchHomeSubCategoryError = (err) => ({
  type: FETCH_HOME_SUB_CATEGORIES_ERROR,
  error:err
});
// GET CHILD CATEGORIES
const fetchHomeChildCategoryRequest = () => ({
  type: FETCH_HOME_CHILD_CATEGORIES_REQUEST,
});
const fetchHomeChildCategorySuccess = (res) => ({
  type: FETCH_HOME_CHILD_CATEGORIES_SUCCESS,
  childCat: res || [],
});
const fetchHomeChildCategoryError = (err) => ({
  type: FETCH_HOME_CHILD_CATEGORIES_ERROR,
  error:err,
});

export const GetHomeContents = () => async (dispatch) => {
  dispatch(fetchHomeProductsRequest());
  dispatch(fetchHomeCategoryRequest());
  await API()
  .get(ENDPOINTS.HOMEPRODUCT)
  .then((res) => {
    dispatch(fetchHomeProductsSuccess(res.data));
  })
    .catch((error) => {
      console.log(error);
      dispatch(fetchHomeProductsError(error));
    });
    
  // Category
  API().post(`${ENDPOINTS.CATEGORIES}`).then(
    res => {
      dispatch(fetchHomeCategorySuccess(res.data.data));
    }
    ).catch(
      err => {
        console.log(err);
        dispatch(fetchHomeCategoryError(err));
    }
  )
};
// SUB CATEGORIES ACTION
export const GetHomeSubCat = (id) => async (dispatch) => {
  dispatch(fetchHomeSubCategoryRequest());
  await API()
  .post(`${ENDPOINTS.CATEGORIES}?category_id=${id}`)
    .then((res) => {
    dispatch(fetchHomeSubCategorySuccess(res.data.data));
  })
    .catch((error) => {
      console.log(error);
      dispatch(fetchHomeSubCategoryError(error));
    });
    

};
// CHILD CATEGORIES ACTION
export const GetHomeChildCat = (id) => async (dispatch) => {
  dispatch(fetchHomeChildCategoryRequest());
  await API()
  .post(`${ENDPOINTS.CATEGORIES}?subcategory_id=${id}`)
  .then((res) => {
    dispatch(fetchHomeChildCategorySuccess(res.data.data));
  })
    .catch((error) => {
      console.log(error);
      dispatch(fetchHomeChildCategoryError(error));
    });
    

};

