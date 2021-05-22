import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  ACCOUNT_INFO_SUBMIT_REQUEST,
  ACCOUNT_INFO_SUBMIT_SUCCESS,
  ACCOUNT_INFO_SUBMIT_ERROR,
} from '../Types';

const submitAccountInfoReq = () => {
  return {
    type: ACCOUNT_INFO_SUBMIT_REQUEST,
  };
};
const submitAccountInfoSuccess = (res) => {
  return {
    type: ACCOUNT_INFO_SUBMIT_SUCCESS,
  };
};
const submitAccountInfoError = (res) => {
  return {
    type: ACCOUNT_INFO_SUBMIT_ERROR,
  };
};

export const StoreAccInfo = (object) => async (dispatch) => {
  dispatch(submitAccountInfoReq());
  await API()
    .post(
      `${ENDPOINTS.USER_UPDATE}?name=${object.name}&email=${object.email}&address=${object.address}&district_id=${object.district}&area_id${object.area}`
    ) //&photo=${}
    .then((res) => {
      dispatch(submitAccountInfoSuccess());
      console.log(res);
    })
    .catch((err) => {
      dispatch(submitAccountInfoError());
      console.log(err);
    });
};
