import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  SINGLE_BRAND_PRODUCT_ERROR,
  SINGLE_BRAND_PRODUCT_REQUEST,
  SINGLE_BRAND_PRODUCT_SUCCESS,
} from '../Types';

const SingleBrandRequest = () => {
  return {
    type: SINGLE_BRAND_PRODUCT_REQUEST,
  };
};

const SingleBrandSuccess = (res) => {
  return {
    type: SINGLE_BRAND_PRODUCT_SUCCESS,
    results: res.products.data,
    categories: res.categories,
    pages: res.products.meta,
  };
};

const SingleBrandSuccessError = (error) => {
  return {
    type: SINGLE_BRAND_PRODUCT_ERROR,
  };
};

export const getSingleCompanyProducts = (data) => async (dispatch) => {
  dispatch(SingleBrandRequest());

  API()
    .post(
      `${ENDPOINTS.SINGLE_BRAND_PRODUCTS}?company_id=${data.company_id}&per_page=20&page=${data.page}&category_id=${data.category_id}`
    )
    .then((res) => {
      dispatch(SingleBrandSuccess(res.data));
    })
    .catch((error) => {
      dispatch(SingleBrandSuccessError());
      console.log(error);
    });
};
