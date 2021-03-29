import { initialState } from '../Store/Store';
import { SET_USER, SET_USER_NULL } from '../Types';

export const setUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case SET_USER_NULL:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
