import { OPEN_NOTIFICATION, CLOSE_NOTIFICATION, REMOVE_NOTIFICATION } from '../actionTypes/noti';

const NotificationReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case OPEN_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, payload]
      };

    case CLOSE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.map(notification =>
          payload.dismissAll || notification.key === payload.key
            ? { ...notification, dismissed: true }
            : { ...notification }
        )
      };

    case REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(notification => notification.key !== payload.key)
      };
    default:
      return state;
  }
};

export default NotificationReducer;
