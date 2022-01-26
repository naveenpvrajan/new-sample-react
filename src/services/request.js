import axios from 'axios';
import qs from 'qs';
import store from '../store';
import { openNotification } from '../store/actions/noti';

const client = axios.create({
  baseURL: 'https://gorest.co.in/public/v1/'
});

const request = options =>
  client(options)
    .then(response => response.data)
    .catch(error => {
      errorHandler(error);
      return {
        error: (error.response && error.response.data) || error.message || 'SERVER_ERROR'
      };
    });

const errorHandler = error => {
  const dispatch = store.dispatch;
  if (error.response && error.response.status) {
    const msg = error.response.data?.data?.message;
    if (error.response.status === 404) {
      dispatch(openNotification({ msg: msg || 'Not Found', type: 'error' }));
    } else if (error.response.status === 401) {
      dispatch(openNotification({ msg: msg || 'Unauthorized', type: 'error' }));
    } else {
      dispatch(openNotification({ msg: msg || 'Server Error', type: 'error' }));
    }
  } else {
    dispatch(openNotification({ msg: 'Server Error', type: 'error' }));
  }
};

export const get = (url, params) => request({ url, method: 'get', params });

export const post = (url, data) => request({ url, method: 'post', data: qs.stringify(data) });

export const put = (url, data) => request({ url, method: 'put', data: qs.stringify(data) });

export const patch = (url, data) => request({ url, method: 'patch', data: qs.stringify(data) });

export const remove = url => request({ url, method: 'delete' });

export const fileUpload = (url, data, method = 'post') => {
  let formData = new FormData();
  for (let key in data) {
    formData.append(key, data[key]);
  }

  return request({
    url,
    data: formData,
    method,
    headers: { 'content-type': 'multipart/form-data' }
  });
};
