import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_ERROR,
} from '../Types';
const placeOrderRequest = () => {
  return {
    type: PLACE_ORDER_REQUEST,
  };
};

const placeOrderSuccess = (res) => {
  return {
    type: PLACE_ORDER_SUCCESS,
    res,
  };
};

const placeOrderError = (err) => {
  return {
    type: PLACE_ORDER_ERROR,
    err,
  };
};

export const PlaceOrder = () => async (dispatch) => {
  dispatch(placeOrderRequest());
  await API()
    .post(
      `${
        ENDPOINTS.PLACE_ORDER
      }?name=${'raghib'}&delivery_charge=${'100'}&coupon_id=${'7'}&coupon_discount=${'30'}&payment_method=${'ssl'}&district_id=${'5'}&area_id=${'5'}&address=${'address here'}&zip=${'4544'}`
    )
    .then((res) => {
      console.log('Place Order action', res);
      if (!res.data.status) {
        dispatch(placeOrderSuccess());
      } else {
        dispatch(placeOrderError());
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
