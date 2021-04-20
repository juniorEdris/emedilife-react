import Axios from 'axios';
export const DOMAIN = `https://admin.emedilife.com/`;

let BaseApi = Axios.create({
  baseURL: DOMAIN,
});

export const API = () => {
  const authToken = localStorage.getItem('user_token');
  if (authToken) {
    BaseApi.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
  }
  return BaseApi;
};

export const ENDPOINTS = {
  HOMEPRODUCT: `api/web/get_home_contents`,
  PRODUCTDETAILS: `api/web/get_single_product?product_id=`,
  SEARCH: `api/web/search_product?keyword=`,
  ADDTOBASKET: `api/product/add_to_cart`,
  CART_UPDATE: `api/user/cart_update/`,
  DELETEFROMBASKET: `api/cart/delete_product/`,
  GETCARTITEMS: `api/user/cart_products`,
  REGISTER: `api/app/register`,
  LOGIN: `api/app/login`,
  GET_WISHLIST_ITEM: `api/user/wishlist_products`,
  ADD_WISHLIST_ITEM: `api/product/add_to_wishlist?`,
  UPDATE_WISHLIST_ITEM: `api/user/wishlist_update/`,
  DELETE_WISHLIST_ITEM: `api/delete/wishlist_product/`,
  USER_INFO: `api/get_user_info`,
  USER_UPDATE: `api/user_update`,
  PRESCRIPTION_UPLOAD: `api/app/prescription_store?`,
};
