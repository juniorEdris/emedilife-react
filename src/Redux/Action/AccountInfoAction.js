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
  console.log('accinfoaction', object);
  await API()
    .post(
      `${ENDPOINTS.USER_UPDATE}?name=${object.name}&email=${object.email}&phone=${object.phone}&address=${object.address}&district_id=${object.district}&area_id${object.area}`
    ) //&photo=${}
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
