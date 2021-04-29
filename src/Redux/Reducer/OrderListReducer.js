import {
  GET_ORDER_LIST_ERROR,
  GET_ORDER_LIST_REQUEST,
  GET_ORDER_LIST_SUCCESS,
} from '../Types';
import { initialState } from '../Store/Store';

export const OrderListsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        orders: [],
        order_pages: [],
      };
    case GET_ORDER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.results,
        order_pages: action.pages,
      };
    case GET_ORDER_LIST_ERROR:
      return {
        ...state,
        loading: true,
        orders: [],
        order_pages: [],
      };
    default:
      return {
        ...state,
      };
  }
};
