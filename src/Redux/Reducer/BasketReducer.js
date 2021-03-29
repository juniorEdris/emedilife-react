import { initialState } from '../Store/Store';
import {
  ADD_TO_BASKET_SUCCESS,
  ADD_TO_SERVER_BASKET_SUCCESS,
  BASKET_STATUS_COMPLETE,
  BASKET_STATUS_SUCCESS,
  REMOVE_FROM_BASKET,
} from '../Types';

export const AddBasketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_SERVER_BASKET_SUCCESS:
      return {
        ...state,
        loading: false,
        basketmsg: action.message,
        basketstatus: action.status,
      };
    case ADD_TO_BASKET_SUCCESS:
      return {
        localBasket: [...state.localBasket, action.payload.product],
      };
    case REMOVE_FROM_BASKET:
      return {
        localBasket: action.payload.product,
      };
    case BASKET_STATUS_SUCCESS:
      return {
        ...state,
        tabStatus: action.status,
      };
    case BASKET_STATUS_COMPLETE:
      return {
        ...state,
        tabStatus: action.status,
      };
    default:
      return state;
  }
};
