import { OPEN_NOTIFICATION, CLOSE_NOTIFICATION, REMOVE_NOTIFICATION } from '../actionTypes/noti';

export const openNotification = data => {
  return {
    type: OPEN_NOTIFICATION,
    payload: {
      ...data,
      key: new Date().getTime() + Math.random()
    }
  };
};

export const closeNotification = key => ({
  type: CLOSE_NOTIFICATION,
  payload: {
    dismissAll: !key, // dismiss all if no key has been defined
    key
  }
});

export const removeNotification = key => ({
  type: REMOVE_NOTIFICATION,
  payload: {key}
});
