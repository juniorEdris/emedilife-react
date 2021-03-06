import {
  OTHER_BRAND_REQUEST,
  OTHER_BRAND_SUCCESS,
  OTHER_BRAND_ERROR,
  OTHER_FILTER_PRODUCTS,
} from '../Types';
import { initialState } from '../Store/Store';

export const OtherBrandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case OTHER_BRAND_REQUEST:
      return {
        ...state,
        loading: true,
        otherBrands: [],
        otherBrandsPage: [],
        otherBrandsCat: [],
      };
    case OTHER_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        otherBrands: action.results,
        otherBrandsPage: action.pages,
        otherBrandsCat: [],
      };
    case OTHER_BRAND_ERROR:
      return {
        ...state,
        loading: true,
        otherBrands: [],
        otherBrandsPage: [],
        otherBrandsCat: [],
      };
      case OTHER_FILTER_PRODUCTS:
        return {
          ...state,
          otherBrands: action.product,
        };
    default:
      return {
        ...state,
      };
  }
};
