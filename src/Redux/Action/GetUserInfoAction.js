import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  GET_USER_INFO_ERROR,
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
} from '../Types';

const getUserInfoRequest = () => ({
  type: GET_USER_INFO_REQUEST,
});
const getUserInfoSuccess = (res) => ({
  type: GET_USER_INFO_SUCCESS,
  deliveryTypes: res.delivery_type,
  info: res.order_info,
  status: res.status,
});
const getUserInfoError = (error) => ({
  type: GET_USER_INFO_ERROR,
  error,
});

export const getUserInfo = () => async (dispatch) => {
  dispatch(getUserInfoRequest());
  await API()
    .get(ENDPOINTS.USER_INFO)
    .then((res) => {
      dispatch(getUserInfoSuccess(res.data));
    })
    .catch((error) => {
      console.log(error.Response);
    });
};
