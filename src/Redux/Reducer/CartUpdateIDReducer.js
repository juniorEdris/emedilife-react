import { initialState } from '../Store/Store';
import { GET_CART_UPDATE_ID } from '../Types';

export const CartUpdateIDReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_UPDATE_ID:
      return {
        ...state,
        cart_update_id: action.id,
      };
    default:
      return state;
  }
};
