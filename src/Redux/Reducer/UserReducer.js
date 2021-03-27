import { initialState } from '../Store/Store';
import { SET_USER } from '../Types';

export const setUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
