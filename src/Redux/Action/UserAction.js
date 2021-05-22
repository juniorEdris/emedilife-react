import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import { SET_USER, SET_USER_NULL } from '../Types';

const setUser = (user) => ({
  type: SET_USER,
  user,
});
const logoutSuccess = (user) => ({
  type: SET_USER_NULL,
  user,
});

export const setUserAction = (user) => (dispatch, getState) => {
  dispatch(setUser(true));
};
export const LogOutAction = () => async (dispatch, getState) => {
  await API()
    .post(`${ENDPOINTS.LOG_OUT}`)
    .then((res) => {
      console.log('logout', res);
      localStorage.removeItem('user_token');
      localStorage.removeItem('user_id');
    })
    .catch((err) => {
      console.log(err);
    });
  dispatch(logoutSuccess(false));
};
