import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  FETCH_HOME_PRODUCTS_ERROR,
  FETCH_HOME_PRODUCTS_REQUEST,
  FETCH_HOME_PRODUCTS_SUCCESS,
} from '../Types';

const fetchHomeProductsRequest = () => ({
  type: FETCH_HOME_PRODUCTS_REQUEST,
});

const fetchHomeProductsSuccess = (res) => {
  return {
    type: FETCH_HOME_PRODUCTS_SUCCESS,
    slider: res.sliders,
    neccessaryProducts: res.products,
  };
};
const fetchHomeProductsError = (error) => ({
  type: FETCH_HOME_PRODUCTS_ERROR,
  error,
});

export const GetHomeContents = () => async (dispatch) => {
  dispatch(fetchHomeProductsRequest());
  console.log('hey');
  await API()
    .get(ENDPOINTS.HOMEPRODUCT)
    .then((res) => {
      console.log(`home prod`, res);
      dispatch(fetchHomeProductsSuccess(res.data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(fetchHomeProductsError(error));
    });
};
