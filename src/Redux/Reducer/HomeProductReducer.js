import { initialState } from '../Store/Store';
import {
  FETCH_HOME_PRODUCTS_ERROR,
  FETCH_HOME_PRODUCTS_REQUEST,
  FETCH_HOME_PRODUCTS_SUCCESS,
  FETCH_HOME_CATEGORIES_ERROR,
  FETCH_HOME_CATEGORIES_REQUEST,
  FETCH_HOME_CATEGORIES_SUCCESS,
  FETCH_HOME_CHILD_CATEGORIES_ERROR,
  FETCH_HOME_CHILD_CATEGORIES_REQUEST,
  FETCH_HOME_CHILD_CATEGORIES_SUCCESS,
  FETCH_HOME_SUB_CATEGORIES_ERROR,
  FETCH_HOME_SUB_CATEGORIES_REQUEST,
  FETCH_HOME_SUB_CATEGORIES_SUCCESS,
} from '../Types';

export const HomeContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOME_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        // categories: [],
        homeSlider: [],
        homeBrands: [],
        popularProducts: [],
        commonProducts: [],
        neccessaryProducts: [],
        homeBlogs: [],
        homeVideo: [],
        homebrandBtmBanner: [],
        healthCareBanner: [],
        hometoplargeBannner: [],
        homebtmLargeBanner: [],
        homeappBanner: [],
        footerlinks: [],
      };
    case FETCH_HOME_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        // categories: action.categories,
        homeSlider: action.slider,
        homeBrands: action.homeBrands,
        popularProducts: action.popularProducts,
        commonProducts: action.commonProducts,
        neccessaryProducts: action.neccessaryProducts,
        homeBlogs: action.homeBlogs,
        homeVideo: action.video,
        homebrandBtmBanner: action.brand_bottom_banner,
        healthCareBanner: action.healthCareBanner,
        hometoplargeBannner: action.top_large_banner,
        homebtmLargeBanner: action.bottom_large_banner,
        homeappBanner: action.appBanner,
        footerlinks: action.footerlinks,
      };
    case FETCH_HOME_PRODUCTS_ERROR:
      return {
        ...state,
        loading: true,
        // categories: [],
        homeSlider: [],
        homeBrands: [],
        popularProducts: [],
        commonProducts: [],
        neccessaryProducts: [],
        homeBlogs: [],
        homeVideo: [],
        homebrandBtmBanner: [],
        healthCareBanner: [],
        hometoplargeBannner: [],
        homebtmLargeBanner: [],
        homeappBanner: [],
        footerlinks: [],
      };
    // CATEGORIES 
    case FETCH_HOME_CATEGORIES_REQUEST:
      return {
        ...state,
        loading:true,
        categories: [],
      };
      case FETCH_HOME_CATEGORIES_SUCCESS:
        return {
          ...state,
          loading:false,
          categories: action.categories,
        };
        case FETCH_HOME_CATEGORIES_ERROR:
          return {
            ...state,
            loading:true,
            categories: [],
          };
    // SUBCATEGORIES 
    case FETCH_HOME_SUB_CATEGORIES_REQUEST:
      return {
        ...state,
        subloading:true,
        subcategories: [],
      };
    case FETCH_HOME_SUB_CATEGORIES_SUCCESS:
      return {
        ...state,
        subloading:false,
        subcategories: action.subCat,
      };
    case FETCH_HOME_SUB_CATEGORIES_ERROR:
      return {
        ...state,
        subloading:true,
        subcategories: [],
      };
    // CHILDCATEGORIES 
    case FETCH_HOME_CHILD_CATEGORIES_REQUEST:
      return {
        ...state,
        childloading:true,
        childcategories: [],
      };
      case FETCH_HOME_CHILD_CATEGORIES_SUCCESS:
        return {
          ...state,
          childloading:false,
          childcategories: action.childCat,
        };
        case FETCH_HOME_CHILD_CATEGORIES_ERROR:
          return {
            ...state,
            childloading:true,
            childcategories: [],
      };
      
    default:
      return state;
  }
};
