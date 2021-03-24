import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  SEARCH_PRODUCTS_REQUEST,
  SEARCH_PRODUCTS_SUCCESS,
  SEARCH_PRODUCTS_ERROR,
} from '../Types';

const fetchSearchRequest = () => ({
  type: SEARCH_PRODUCTS_REQUEST,
});

const fetchSearchSuccess = (res) => {
  return {
    type: SEARCH_PRODUCTS_SUCCESS,
    searchResults: res,
  };
};
const fetchSearchError = (error) => ({
  type: SEARCH_PRODUCTS_ERROR,
  error,
});

export const GetSearchResults = (
  keywords,
  category,
  subcategory,
  childcategory
) => async (dispatch) => {
  dispatch(fetchSearchRequest());

  await API()
    .get(`${ENDPOINTS.SEARCH}${keywords}`)
    .then((res) => {
      dispatch(fetchSearchSuccess(res.data.data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(fetchSearchError(error));
    });
};
