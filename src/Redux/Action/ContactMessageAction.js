import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_ERROR,
} from '../Types';

const sendMessageRequest = () => {
  return {
    type: SEND_MESSAGE_REQUEST,
  };
};

const sendMessageSuccess = (res) => {
  return {
    type: SEND_MESSAGE_SUCCESS,
    success: res,
  };
};
const sendMessageError = (error) => {
  return {
    type: SEND_MESSAGE_ERROR,
    error,
  };
};

export const SendContactMessage = (data) => async (dispatch) => {
  dispatch(sendMessageRequest());
  await API()
    .post(ENDPOINTS.SEND_CONTACT_MSG, data)
    .then((res) => {
      if (!res.data.errors) {
        dispatch(sendMessageSuccess(res.data.message));
        console.log(res.data);
      } else {
        dispatch(sendMessageError(res.data.errors));
        console.log(res.data.errors);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
