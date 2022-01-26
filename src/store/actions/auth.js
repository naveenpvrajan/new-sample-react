import { removeStorage, setStorage } from '../../services/storage';
import { getRandomId } from '../../utils';
import * as types from '../actionTypes/auth';

//Actions creators

export const loginRequest = data => dispatch => {
  dispatch({ type: types.LOGIN_REQUEST });
  if (data.username === 'admin@admin.com' && data.password === 'admin') {
    const token = getRandomId();
    setStorage('authToken', token);
    dispatch({ type: types.LOGIN_SUCCESS, payload: token });
  } else {
    dispatch({ type: types.LOGIN_FAILURE });
  }
};
export const logOut = () => dispatch => {
  dispatch({ type: types.LOGOUT });
  removeStorage('authToken');
};
