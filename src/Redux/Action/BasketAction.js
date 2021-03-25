import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  ADD_TO_BASKET_REQUEST,
  ADD_TO_BASKET_SUCCESS,
  ADD_TO_BASKET_ERROR,
  REMOVE_FROM_BASKET,
  BASKET_STATUS_SUCCESS,
  BASKET_STATUS_COMPLETE,
} from '../Types';

const addProdBasketRequest = (product) => ({
  type: ADD_TO_BASKET_REQUEST,
  payload: {},
});
const addProdBasketSuccess = (res) => ({
  type: ADD_TO_BASKET_SUCCESS,
  status: res.type,
  message: res.message,
});
const addProdBasketError = (error) => ({
  type: ADD_TO_BASKET_ERROR,
  payload: error,
});
const removeProdBasket = (product) => ({
  type: REMOVE_FROM_BASKET,
  payload: { product },
});
const productStatusSuccess = () => ({
  type: BASKET_STATUS_SUCCESS,
  status: true,
});
const productStatusComplete = () => ({
  type: BASKET_STATUS_COMPLETE,
  status: false,
});

const user = localStorage.getItem('user_id');
export const AddBasketProd = (product, quantity) => (dispatch, getState) => {
  // return action if its null
  if (product === null) return;
  dispatch(addProdBasketRequest());
  if (user === 'lll') {
    const cartItems = getState().basketProd.basket.slice();
    let exist = false;
    cartItems.forEach((x) => {
      if (x.quantity === product.stock) {
        return;
      }
      if (x.id === product.id) {
        exist = true;
        x.quantity++;
      }
    });
    if (!exist) {
      cartItems.push({ ...product, quantity: 1 });
    }
    dispatch(addProdBasketSuccess(cartItems));
    localStorage.setItem('Cart List', JSON.stringify(cartItems));
  } else {
    API()
      .post(
        `${ENDPOINTS.ADDTOBASKET}?product_id=${product.id}&unit_price_id=${product.unit_prices[0].id}&total_quantity=${quantity}`
      )
      .then((res) => {
        // dispatch(addProdBasketSuccess({...product,quantity}));
        dispatch(addProdBasketSuccess(res.data));
        dispatch(productStatusSuccess());
        setTimeout(() => {
          dispatch(productStatusComplete());
        }, 3000);
      })
      .catch((error) => console.log(error));
  }
};

export const RemoveBasketProd = (product) => (dispatch, getState) => {
  if (user === 'lll') {
    const cartItems = getState()
      .basketProd.basket.slice()
      .filter((x) => x.id !== product.id);
    dispatch(removeProdBasket(cartItems));
    localStorage.setItem('Cart List', JSON.stringify(cartItems));
  } else {
    API()
      .delete(`${ENDPOINTS.DELETEFROMBASKET}${product.id}`)
      .then((res) => {
        dispatch(removeProdBasket(res.message));
      })
      .catch((err) => console.log(err));
  }
};

export const RemoveSingleBasketProd = (product) => (dispatch, getState) => {
  let cartItems = getState().basketProd.basket.slice();
  let exist = false;
  cartItems.forEach((x) => {
    if (x.id === product.id && product.quantity > 1) {
      exist = true;
      x.quantity--;
    }
  });
  if (!exist) {
    cartItems = getState()
      .basketProd.basket.slice()
      .filter((x) => x.id !== product.id);
  }
  dispatch(removeProdBasket(cartItems));
  localStorage.setItem('Cart List', JSON.stringify(cartItems));
};

export const RemoveSingleCartProd = (product) => (dispatch, getState) => {
  let cartItems = getState().basketProd.basket.slice();
  let exist = false;
  cartItems.forEach((x) => {
    if (x.id === product.id && product.qty_request_to_buy > 1) {
      exist = true;
      x.quantity--;
    }
  });
  if (!exist) {
    cartItems = getState()
      .basketProd.basket.slice()
      .filter((x) => x.id !== product.id);
  }
  dispatch(removeProdBasket(cartItems));
  localStorage.setItem('Cart List', JSON.stringify(cartItems));
};
export const RemoveSingleHeaderProd = (product) => (dispatch, getState) => {
  let cartItems = getState().basketProd.basket.slice();
  let exist = false;
  cartItems.forEach((x) => {
    if (x.id === product.id && product.quantity > 1) {
      exist = true;
      x.quantity--;
    }
  });
  if (!exist) {
    cartItems = getState()
      .basketProd.basket.slice()
      .filter((x) => x.id !== product.id);
  }
  dispatch(removeProdBasket(cartItems));
  localStorage.setItem('Cart List', JSON.stringify(cartItems));
};
