import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import { SET_USER } from '../Types';

const setUser = (user) => ({
  type: SET_USER,
  user,
});

export const setUserAction = (user) => (dispatch, getState) => {
  console.log('useraction', user);
  dispatch(setUser(user));
};
