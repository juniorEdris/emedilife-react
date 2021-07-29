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
  CATEGORIES:`/api/app/get_categories`,
  SUB_CHILD_PRODUCT:`/api/web/search_product_by_category`,
  PRODUCTDETAILS: `api/web/get_single_product?product_id=`,
  SEARCH: `api/web/search_product`,
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
  SEND_CONTACT_MSG: `api/send/contact-us-message`,
  COUPON_TOKEN: `api/verify_coupon`,
  PLACE_ORDER: `api/app/make_order`,
  SINGLE_BRAND_PRODUCTS: `api/web/product_by_company`,
  GET_ORDER_LIST: `api/get_orders`,
  CANCEL_ORDER: `api/cancel_order`,
  GENERIC_PRODUCTS: `api/web/product_by_generic`,
  GET_BLOG_LIST: `api/web/get_blog_lists`,
  GET_SINGLE_BLOG: `api/web/get_blog_details`,
  GET_SINGLE_ORDER: `api/get_order_details`,
  LOG_OUT: `api/app/logout`,
  CART_GUEST_CART: `api/product/add_to_cart`,
  WISH_GUEST_CART: `api/product/add_to_wishlist`,
  MOREPAGES: `api/get_page_contents`,
  EMAILCHECK: `api/app/check_unique_email`,
  EMEDICARE: `api/web/register/emedilife-care`,
  EMEDIPARTNER: `api/web/register/emedilife-partner`,
  EMEDI_E_VOLUNTEER: `api/web/register/evolunteer`,
  // 
  EMEDI_CAREER: `api/web/register/emedilife-careers`,
  EMEDI_SHEBOK: `api/web/register/medishebok`,
};
