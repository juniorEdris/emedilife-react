import { UserID } from '../../PrimarySections/Utility';
import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import {
  PRESCRIPTION_UPLOAD_REQUEST,
  PRESCRIPTION_UPLOAD_SUCCESS,
  PRESCRIPTION_UPLOAD_ERROR,
} from '../Types';

const prescriptionUploadRequest = () => {
  return {
    type: PRESCRIPTION_UPLOAD_REQUEST,
  };
};
const prescriptionUploadSuccess = (res) => {
  return {
    type: PRESCRIPTION_UPLOAD_SUCCESS,
  };
};
const prescriptionUploadError = (error) => {
  return {
    type: PRESCRIPTION_UPLOAD_ERROR,
    error,
  };
};

export const PrescriptionUpload = (name, image) => async (dispatch) => {
  const user_id = UserID();
  console.log('prescription upload', name, image, user_id);
  dispatch(prescriptionUploadRequest);
  dispatch(prescriptionUploadSuccess);
  dispatch(prescriptionUploadError);
  // API()
  //   .post(
  //     `${ENDPOINTS.PRESCRIPTION_UPLOAD}user_id=${user_id}&name=${name}&images=${image}`
  //   )
  //   .then((res) => {
  //     console.log('response from web', res);
  //   })
  //   .catch((error) => {
  //     console.log('error', error);
  //   });
};
