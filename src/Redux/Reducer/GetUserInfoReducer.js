import { initialState } from '../Store/Store';
import {
  GET_USER_INFO_ERROR,
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
} from '../Types';

export const UserInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO_REQUEST:
      return {
        ...state,
        loading: true,
        delivery_types: [],
        info: [],
        status: [],
      };
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        delivery_types: action.deliveryTypes,
        info: action.info,
        status: action.status,
      };
    case GET_USER_INFO_ERROR:
      return {
        ...state,
        loading: true,
        delivery_types: [],
        info: [],
        status: [],
        error: action.error,
      };
    default:
      return {
        ...state,
      };
  }
};
