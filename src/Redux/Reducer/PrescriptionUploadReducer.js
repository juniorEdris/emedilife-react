import { initialState } from '../Store/Store';
import {
  PRESCRIPTION_UPLOAD_REQUEST,
  PRESCRIPTION_UPLOAD_SUCCESS,
  PRESCRIPTION_UPLOAD_ERROR,
} from '../Types';

export const PrescriptionUploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRESCRIPTION_UPLOAD_REQUEST:
      return {
        state,
        prescriptionSuccess: '',
        error: {},
      };
    case PRESCRIPTION_UPLOAD_SUCCESS:
      return {
        state,
        prescriptionSuccess: '',
        error: {},
      };
    case PRESCRIPTION_UPLOAD_ERROR:
      return {
        state,
        prescriptionSuccess: '',
        error: { prescription: action.error.images[0] },
      };
    default:
      return {
        state,
      };
  }
};
