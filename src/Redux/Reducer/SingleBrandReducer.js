import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  SINGLE_BRAND_PRODUCT_ERROR,
  SINGLE_BRAND_PRODUCT_REQUEST,
  SINGLE_BRAND_PRODUCT_SUCCESS,
} from '../Types';
import { initialState } from '../Store/Store';

export const SingleCompanyProducts = (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_BRAND_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        company_products: [],
        company_pages: [],
      };
    case SINGLE_BRAND_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        company_products: action.results,
        company_pages: action.pages,
      };
    case SINGLE_BRAND_PRODUCT_ERROR:
      return {
        ...state,
        loading: true,
        company_products: [],
        company_pages: [],
      };
    default:
      return {
        ...state,
      };
  }
};
