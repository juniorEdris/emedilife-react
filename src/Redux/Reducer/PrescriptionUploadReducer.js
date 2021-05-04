import { initialState } from '../Store/Store';
import {
  PRESCRIPTION_UPLOAD_REQUEST,
  PRESCRIPTION_UPLOAD_SUCCESS,
  PRESCRIPTION_UPLOAD_ERROR,
  PRESCRIPTION_UPLOAD_SUCCESS_COMPLETE,
} from '../Types';

export const PrescriptionUploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRESCRIPTION_UPLOAD_REQUEST:
      return {
        ...state,
        prescriptionSuccess: 'Prescription upload loading',
        prescriptionStatus: true,
        error: {},
      };
    case PRESCRIPTION_UPLOAD_SUCCESS:
      return {
        ...state,
        prescriptionSuccess: action.results,
        prescriptionStatus: action.status,
        error: {},
      };
    case PRESCRIPTION_UPLOAD_SUCCESS_COMPLETE:
      return {
        ...state,
        prescriptionSuccess: '',
        prescriptionStatus: false,
        error: {},
      };
    case PRESCRIPTION_UPLOAD_ERROR:
      return {
        ...state,
        prescriptionSuccess: '',
        prescriptionStatus: false,
        error: { prescription: action.error.images[0] },
      };
    default:
      return {
        ...state,
      };
  }
};
