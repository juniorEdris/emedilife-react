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
  console.log('useraction', user);
  dispatch(setUser(true));
};
export const LogOutAction = () => (dispatch, getState) => {
  localStorage.removeItem('user_token');
  localStorage.removeItem('user_id');
  dispatch(logoutSuccess(false));
};
