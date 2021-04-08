import { UserToken } from '../../PrimarySections/Utility';
import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  ADD_TO_WISHLIST_ERROR,
  ADD_TO_WISHLIST_REQUEST,
  ADD_TO_ONLINE_WISHLIST_SUCCESS,
  ADD_TO_LOCAL_WISHLIST_SUCCESS,
  REMOVE_FROM_LOCAL_WISHLIST,
  REMOVE_FROM_ONLINE_WISHLIST,
  GET_WISHLIST_REQUEST,
  GET_WISHLIST_SUCCESS,
  GET_WISHLIST_ERROR,
} from '../Types';
// GET WISHLIST ACTION PROCCESS
const getWishItemRequest = () => ({
  type: GET_WISHLIST_REQUEST,
});
const getWishItemSuccess = (products) => ({
  type: GET_WISHLIST_SUCCESS,
  products,
});
const getWishItemError = (error) => ({
  type: GET_WISHLIST_ERROR,
  error,
});

// ADD WISHLIST ACTION PROCCESS
const addWishItemRequest = () => ({
  type: ADD_TO_WISHLIST_REQUEST,
});

const addWishItemOnlineSuccess = (res) => ({
  type: ADD_TO_ONLINE_WISHLIST_SUCCESS,
  message: res.message,
  status: res.type,
});

const addWishItemLocalSuccess = (product) => ({
  type: ADD_TO_LOCAL_WISHLIST_SUCCESS,
  product,
});

const removeProdLocalWish = (product) => ({
  type: REMOVE_FROM_LOCAL_WISHLIST,
  payload: product,
});
const removeProdOnlineWish = (product) => ({
  type: REMOVE_FROM_ONLINE_WISHLIST,
  payload: product,
});
const addWishItemError = (error) => ({
  type: ADD_TO_WISHLIST_ERROR,
  error,
});

export const addToWishlistAction = (product) => async (dispatch, getState) => {
  console.log('add wish cart>>>>>', product);
  dispatch(addWishItemRequest());
  if (!UserToken()) {
    const wishItems = getState().Wishlist.localWishlist.slice();
    let exist = false;
    wishItems.forEach((x) => {
      if (x.id === product.id) {
        exist = true;
        return;
      }
    });
    if (!exist) {
      wishItems.push(product); //,count:1
    }
    dispatch(addWishItemLocalSuccess(wishItems));
    localStorage.setItem('Wish List', JSON.stringify(wishItems));
  } else {
    await API()
      .post(
        `${ENDPOINTS.ADD_WISHLIST_ITEM}product_id=${product.id}&unit_price_id=${product.unit_prices_id}&total_quantity=${product.total_quantity}`
      )
      .then((res) => {
        console.log('add wishlist', res.data);
        dispatch(addWishItemOnlineSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(addWishItemError(err));
      });
  }
};

export const RemoveWishProd = (product) => async (dispatch, getState) => {
  if (!UserToken()) {
    const wishItems = getState()
      .Wishlist.localWishlist.slice()
      .filter((x) => x.id !== product.id);
    dispatch(removeProdLocalWish(wishItems));
    localStorage.setItem('Wish List', JSON.stringify(wishItems));
  } else {
    await API()
      .delete(`${ENDPOINTS.DELETE_WISHLIST_ITEM}${product.id}`)
      .then((res) => {
        console.log('remove wish item', res);
        dispatch(removeProdOnlineWish());
      })
      .catch((err) => {
        console.log(err);
        dispatch(addWishItemError(err));
      });
  }
};

export const getWishlistItems = () => async (dispatch) => {
  dispatch(getWishItemRequest());
  await API()
    .get(`${ENDPOINTS.GET_WISHLIST_ITEM}`)
    .then((res) => {
      console.log('online wishlist items', res);
      dispatch(getWishItemSuccess(res.data.data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(getWishItemError(error));
    });
};