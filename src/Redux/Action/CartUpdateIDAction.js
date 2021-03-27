import { GET_CART_UPDATE_ID } from '../Types';

const getCartupdateID = (id) => {
  return { type: GET_CART_UPDATE_ID, id };
};

export const getCartUpdateID = (id) => (dispatch, getState) => {
  dispatch(getCartupdateID(id));
};
