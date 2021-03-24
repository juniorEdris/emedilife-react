import Axios from 'axios';
export const DOMAIN = `https://medipathy.changetechbd.com/`;

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
};
