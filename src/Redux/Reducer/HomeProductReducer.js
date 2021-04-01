import { initialState } from '../Store/Store';
import {
  FETCH_HOME_PRODUCTS_ERROR,
  FETCH_HOME_PRODUCTS_REQUEST,
  FETCH_HOME_PRODUCTS_SUCCESS,
} from '../Types';

export const HomeContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOME_PRODUCTS_REQUEST:
      return {
        ...state,
        homeSlider: [],
        loading: true,
        neccessaryProducts: [],
      };
    case FETCH_HOME_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        homeSlider: action.slider,
        homeBrands: action.homeBrands,
        popularProducts: action.popularProducts,
        commonProducts: action.commonProducts,
        neccessaryProducts: action.neccessaryProducts,
        homeBlogs: action.homeBlogs,
      };
    case FETCH_HOME_PRODUCTS_ERROR:
      return {
        ...state,
        loading: true,
        homeSlider: [],
        homeBrands: [],
        popularProducts: [],
        commonProducts: [],
        neccessaryProducts: [],
        homeBlogs: [],
      };
    default:
      return state;
  }
};
