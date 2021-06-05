import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  OTHER_BRAND_REQUEST,
  OTHER_BRAND_SUCCESS,
  OTHER_BRAND_ERROR,
  OTHER_FILTER_PRODUCTS,
} from '../Types';

const otherBrandRequest = () => {
  return {
    type: OTHER_BRAND_REQUEST,
  };
};

const otherBrandSuccess = (res) => {
  return {
    type: OTHER_BRAND_SUCCESS,
    results: res.data,
    pages: res.meta,
  };
};

const otherBrandError = (error) => {
  return {
    type: OTHER_BRAND_ERROR,
    error,
  };
};
const filterProducts = (product, price) => {
  return {
    type: OTHER_FILTER_PRODUCTS,
    product,
  };
};

export const getOtherBrands = (data) => async (dispatch) => {
  dispatch(otherBrandRequest());

  API()
    .post(`${ENDPOINTS}?`)
    .then((res) => {
      dispatch(otherBrandSuccess(res.data));
    })
    .catch((error) => {
      dispatch(otherBrandError(error));
      console.log(error);
    });
};

export const getOtherSortedProducts = (data) => (dispatch, getState) => {
  const sortedProds = getState().GenericProducts.genericProducts.slice();

  if (data.sortingType === 'price low to high') {
    sortedProds.sort((a, b) =>
      Number(a.unit_prices?.price) > Number(b.unit_prices?.price) ? 1 : -1
    );
  } else if (data.sortingType === 'price high to low') {
    sortedProds.sort((a, b) =>
      Number(a.unit_prices?.price) < Number(b.unit_prices?.price) ? 1 : -1
    );
  } else {
    sortedProds.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
  dispatch(filterProducts(sortedProds, data.sortingType));
};