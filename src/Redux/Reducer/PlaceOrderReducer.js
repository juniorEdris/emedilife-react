import { initialState } from '../Store/Store';
import {
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_ERROR,
} from '../Types';
export const PlaceOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        place_order_msg: '',
        order_error: '',
      };
    case PLACE_ORDER_SUCCESS:
      return {
        ...state,
        loading: true,
        place_order_msg: action.res,
        order_error: '',
      };
    case PLACE_ORDER_ERROR:
      return {
        ...state,
        loading: true,
        place_order_msg: '',
        order_error: action.error,
      };
    default:
      return { ...state };
  }
};
