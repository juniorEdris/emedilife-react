import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  NECCESSARY_PRODUCTS_REQUEST,
  NECCESSARY_PRODUCTS_SUCCESS,
  NECCESSARY_PRODUCTS_ERROR,
} from '../Types';

const fetchNeccessaryRequest = () => ({
  type: NECCESSARY_PRODUCTS_REQUEST,
});

const fetchNeccessarySuccess = (res) => {
  return {
    type: NECCESSARY_PRODUCTS_SUCCESS,
    results: res.products.data,
    categories: res.categories,
    pages: res.products.meta,
  };
};
const fetchNeccessaryError = (error) => ({
  type: NECCESSARY_PRODUCTS_ERROR,
  error,
});

export const GetNeccessaryProducts = (data) => async (dispatch) => {
  const { keywords, category_id, subcategory, childcategory, page } = data;
  dispatch(fetchNeccessaryRequest());

  await API()
    .get(
      `${ENDPOINTS.HOMEPRODUCT}?per_page=20&page=${page}&category_id=${category_id}`
    )
    .then((res) => {
      dispatch(fetchNeccessarySuccess(res.data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(fetchNeccessaryError(error));
    });
};
