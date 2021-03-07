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
      console.log('reducer', action);
      return {
        ...state,
        loading: false,
        homeSlider: action.slider,
        neccessaryProducts: action.neccessaryProducts,
      };
    case FETCH_HOME_PRODUCTS_ERROR:
      return {
        ...state,
        homeSlider: [],
        loading: true,
        neccessaryProducts: [],
      };
    default:
      return state;
  }
};
