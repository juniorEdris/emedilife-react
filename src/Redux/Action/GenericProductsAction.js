import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  GENERIC_PRODUCTS_REQUEST,
  GENERIC_PRODUCTS_SUCCESS,
  GENERIC_PRODUCTS_ERROR,
} from '../Types';

const fetchGenericRequest = () => ({
  type: GENERIC_PRODUCTS_REQUEST,
});

const fetchGenericSuccess = (res) => {
  return {
    type: GENERIC_PRODUCTS_SUCCESS,
    results: res.data,
    pages: res.meta,
  };
};
const fetchGenericError = (error) => ({
  type: GENERIC_PRODUCTS_ERROR,
  error,
});

export const GetGenericResults = (data) => async (dispatch) => {
  const { id, category, subcategory, childcategory, page } = data;
  dispatch(fetchGenericRequest());

  await API()
    .post(
      `${ENDPOINTS.GENERIC_PRODUCTS}?per_page=20&generic_id=${id}&page=${page}`
    )
    .then((res) => {
      dispatch(fetchGenericSuccess(res.data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(fetchGenericError(error));
    });
};
