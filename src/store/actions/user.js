import { get, patch, post, remove } from '../../services/request';
import * as types from '../actionTypes/user';

//Actions creators
export const fetchUsersListRequest = () => dispatch => {
  dispatch({ type: types.FETCH_USERS_LIST_REQUEST });
  get('users')
    .then(res => dispatch({ type: types.FETCH_USERS_LIST_SUCCESS, payload: res }))
    .catch(() => dispatch({ type: types.FETCH_USERS_LIST_FAILURE }));
};

export const fetchProfileRequest = () => dispatch => {
  dispatch({ type: types.FETCH_PROFILE_REQUEST });
  post('users')
    .then(res => dispatch({ type: types.FETCH_PROFILE_SUCCESS, payload: res }))
    .catch(() => dispatch({ type: types.FETCH_PROFILE_FAILURE }));
};

export const updateProfileRequest = profileData => dispatch => {
  dispatch({ type: types.UPDATE_PROFILE_REQUEST });
  patch(`users/${profileData.id}`, profileData)
    .then(res => dispatch({ type: types.UPDATE_PROFILE_SUCCESS, payload: res }))
    .catch(() => dispatch({ type: types.UPDATE_PROFILE_FAILURE }));
};

export const fetchUserRequest = () => dispatch => {
  dispatch({ type: types.FETCH_USER_REQUEST });
  post('users')
    .then(res => dispatch({ type: types.FETCH_USER_SUCCESS, payload: res }))
    .catch(() => dispatch({ type: types.FETCH_USER_FAILURE }));
};

export const createUserRequest = userItem => dispatch => {
  dispatch({ type: types.CREATE_USER_REQUEST });
  post('users', userItem)
    .then(res => dispatch({ type: types.CREATE_USER_SUCCESS, payload: res }))
    .catch(() => dispatch({ type: types.CREATE_USER_FAILURE }));
};

export const updateUserRequest = userItem => dispatch => {
  dispatch({ type: types.UPDATE_USER_REQUEST });
  patch(`users/${userItem.id}`, userItem)
    .then(res => dispatch({ type: types.UPDATE_USER_SUCCESS, payload: res }))
    .catch(() => dispatch({ type: types.UPDATE_USER_FAILURE }));
};

export const deleteUserRequest = userId => dispatch => {
  dispatch({ type: types.DELETE_USER_REQUEST });
  remove(`users/${userId}`)
    .then(res => dispatch({ type: types.DELETE_USER_SUCCESS, payload: res }))
    .catch(() => dispatch({ type: types.DELETE_USER_FAILURE }));
};
