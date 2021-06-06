import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  CATEGORY_BASED_REQUEST,
  CATEGORY_BASED_SUCCESS,
  CATEGORY_BASED_ERROR,
  CATEGORY_FILTER_PRODUCTS,
} from '../Types';

const categoryBasedRequest = () => {
  return {
    type: CATEGORY_BASED_REQUEST,
  };
};

const categoryBasedSuccess = (res) => {
  return {
    type: CATEGORY_BASED_SUCCESS,
    results: res.products.data,
    categories: res.categories,
    pages: res.products.meta,
  };
};

const categoryBasedError = (error) => {
  return {
    type: CATEGORY_BASED_ERROR,
    error,
  };
};
const filterProducts = (product, price) => {
  return {
    type: CATEGORY_FILTER_PRODUCTS,
    product,
  };
};

export const GetCategoryBasedProd = (data) => async (dispatch) => {
  const { keywords, category_id = '', subcategory, childcategory, page } = data;
  dispatch(categoryBasedRequest());
  await API()
    .get(
      `${ENDPOINTS.HOMEPRODUCT}?per_page=20&page=${page}&category_id=${category_id}`
    )
    .then((res) => {
      dispatch(categoryBasedSuccess(res.data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(categoryBasedError(error));
    });
};


export const getCategorySortedProducts = (data) => (dispatch, getState) => {
  const sortedProds = getState().CategoryProducts.categoryProducts.slice();

  if (data.sortingType === 'price low to high') {
    sortedProds.sort((a, b) =>
      Number(a.unit_prices?.price) > Number(b.unit_prices?.price) ? 1 : -1
    );
  } else if (data.sortingType === 'price high to low') {
    sortedProds.sort((a, b) =>
      Number(a.unit_prices?.price) < Number(b.unit_prices?.price) ? 1 : -1
    );
  }else if (data.sortingType === 'name a to z') {
    sortedProds.sort((a, b) =>
    a.name.localeCompare(b.name)
    );
  }else if (data.sortingType === 'name z to a') {
    sortedProds.sort((a, b) =>
    b.name.localeCompare(a.name)
    );
  }  else {
    sortedProds.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
  dispatch(filterProducts(sortedProds, data.sortingType));
};