import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  ADD_TO_BASKET_REQUEST,
  ADD_TO_BASKET_SUCCESS,
  ADD_TO_BASKET_ERROR,
  REMOVE_FROM_BASKET,
  BASKET_STATUS_SUCCESS,
  BASKET_STATUS_COMPLETE,
  ADD_TO_SERVER_BASKET_SUCCESS,
  ADD_TO_BASKET_MSG,
} from '../Types';

const addProdBasketRequest = (product) => ({
  type: ADD_TO_BASKET_REQUEST,
  payload: {},
});
const addProdServerBasketSuccess = (res) => ({
  type: ADD_TO_SERVER_BASKET_SUCCESS,
  status: res.type,
  message: res.message,
});
const addProdBasketSuccess = (product) => ({
  type: ADD_TO_BASKET_SUCCESS,
  payload: { product },
});
const addProdLocalBasketMsg = (res) => ({
  type: ADD_TO_BASKET_MSG,
  status: res.type,
  message: res.message,
});
const addProdBasketError = (error) => ({
  type: ADD_TO_BASKET_ERROR,
  payload: error,
});
const removeProdBasket = (product) => {
  return {
    type: REMOVE_FROM_BASKET,
    payload: { product },
  };
};
const productStatusSuccess = () => ({
  type: BASKET_STATUS_SUCCESS,
  status: true,
});
const productStatusComplete = () => ({
  type: BASKET_STATUS_COMPLETE,
  status: false,
});

export const AddBasketProd = (product, quantity) => async (
  dispatch,
  getState
) => {
  const user = localStorage.getItem('user_id');
  // return action if its null
  if (product === null) return;
  if (!user) {
    let cartItems = getState().Basket.localBasket.slice();
    console.log('basket action add local', cartItems);
    let exist = false;
    cartItems.forEach((x) => {
      // if (x.quantity === product.stock) {
      //   return;
      // }
      if (x.id === product.id) {
        exist = true;
        x.total_quantity++;
        // dispatch(
        //   addProdLocalBasketMsg({
        //     type: true,
        //     message: 'Already Exist in cart',
        //   })
        // );
      }
    });
    if (!exist) {
      cartItems.push(product);
    }
    dispatch(addProdBasketSuccess(cartItems));
    localStorage.setItem('Cart List', JSON.stringify(cartItems));
  } else {
    dispatch(addProdBasketRequest());
    await API()
      .post(
        `${ENDPOINTS.ADDTOBASKET}?product_id=${product.id}&unit_price_id=${product.unit_prices_id}&total_quantity=${product.total_quantity}`
      )
      .then((res) => {
        // ---------------------------------
        // Update Product Qty Left
        // ---------------------------------
        dispatch(addProdServerBasketSuccess(res.data));
        dispatch(productStatusSuccess());
        setTimeout(() => {
          dispatch(productStatusComplete());
        }, 3000);
      })
      .catch((error) => console.log(error.error));
  }
};

export const RemoveBasketProd = (product) => async (dispatch, getState) => {
  const user = localStorage.getItem('user_id');
  if (!user) {
    let cartItems = getState().Basket.localBasket.slice();
    console.log('remove local', cartItems);
    let exist = false;
    cartItems.forEach((x) => {
      if (x.id === product.id && product.total_quantity > 1) {
        exist = true;
        x.total_quantity--;
      }
    });
    if (!exist) {
      cartItems = getState()
        .Basket.localBasket.slice()
        .filter((x) => x.id !== product.id);
    }
    dispatch(removeProdBasket(cartItems));
    localStorage.setItem('Cart List', JSON.stringify(cartItems));
  } else {
    await API()
      .delete(`${ENDPOINTS.DELETEFROMBASKET}${product.id}`)
      .then((res) => {
        dispatch(removeProdBasket(res.message));
      })
      .catch((err) => console.log(err));
  }
};
