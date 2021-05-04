import {
  GENERIC_PRODUCTS_REQUEST,
  GENERIC_PRODUCTS_SUCCESS,
  GENERIC_PRODUCTS_ERROR,
} from '../Types';
import { initialState } from '../Store/Store';

export const GenericProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERIC_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        genericProducts: [],
        genericPages: [],
      };
    case GENERIC_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        genericProducts: action.results,
        genericPages: action.pages,
      };
    case GENERIC_PRODUCTS_ERROR:
      return {
        ...state,
        loading: true,
        genericProducts: [],
        genericPages: [],
      };
    default:
      return state;
  }
};