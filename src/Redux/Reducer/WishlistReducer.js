import { initialState } from '../Store/Store';
import {
  ADD_TO_LOCAL_WISHLIST_SUCCESS,
  ADD_TO_ONLINE_WISHLIST_SUCCESS,
  ADD_TO_WISHLIST_ERROR,
  ADD_TO_WISHLIST_REQUEST,
  GET_WISHLIST_ERROR,
  GET_WISHLIST_REQUEST,
  GET_WISHLIST_SUCCESS,
  REMOVE_FROM_LOCAL_WISHLIST,
  REMOVE_FROM_ONLINE_WISHLIST,
} from '../Types';

export const WishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    //   WISHLIST ADD FUNCTIONALITY
    case ADD_TO_WISHLIST_REQUEST:
      return {
        ...state,
        loading: true,
        wishlist: [],
        localWishlist: [],
        error: '',
      };
    case ADD_TO_LOCAL_WISHLIST_SUCCESS:
      console.log('local-success', action.product);
      return {
        ...state,
        loading: false,
        localWishlist: action.product,
        error: '',
      };
    case ADD_TO_ONLINE_WISHLIST_SUCCESS:
      console.log('online-success', action.message, action.status);
      return {
        ...state,
        loading: false,
        wishlistMsg: action.message,
        wishlistStatus: action.status,
        error: '',
      };
    case REMOVE_FROM_LOCAL_WISHLIST:
      console.log('local-remove-success', action.product);
      return {
        ...state,
        loading: false,
        localWishlist: action.product,
        error: '',
      };
    case REMOVE_FROM_ONLINE_WISHLIST:
      console.log('online-remove-success', action.product);
      return {
        ...state,
        loading: false,
        error: '',
      };
    case ADD_TO_WISHLIST_ERROR:
      return {
        ...state,
        loading: true,
        wishlist: [],
        localWishlist: [],
        error: action.error,
      };
    //   WISHLIST GET FUNCTIONALITY
    case GET_WISHLIST_REQUEST:
      return {
        ...state,
        loading: true,
        wishlist: [],
        error: '',
      };
    case GET_WISHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        wishlist: action.products,
        error: '',
      };
    case GET_WISHLIST_ERROR:
      return {
        ...state,
        loading: true,
        wishlist: [],
        error: action.error,
      };

    default:
      return {
        ...state,
      };
  }
};
