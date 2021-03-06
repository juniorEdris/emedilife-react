import { initialState } from '../Store/Store';
import {
  FETCH_PRODUCT_DETAILS_ERROR,
  FETCH_PRODUCT_DETAILS_REQUEST,
  FETCH_PRODUCT_DETAILS_SUCCESS,
} from '../Types';

export const ProductDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        productDetails: '',
      };
    case FETCH_PRODUCT_DETAILS_SUCCESS:
      console.log('reducer', action.details);
      return {
        ...state,
        loading: false,
        productDetails: action.details,
      };
    case FETCH_PRODUCT_DETAILS_ERROR:
      return {
        ...state,
        loading: true,
        productDetails: '',
      };
    default:
      return state;
  }
};
