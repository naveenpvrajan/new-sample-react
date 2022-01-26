import * as types from "../actionTypes/user";

// Reducer function
export default function UserReducer(state = {}, { type, payload }) {
  switch (type) {
    case types.FETCH_PROFILE_REQUEST:
      return { ...state, isProfileLoading: true };
    case types.FETCH_PROFILE_SUCCESS:
      return { ...state, isProfileLoading: false, profileData: payload };
    case types.FETCH_PROFILE_FAILURE:
      return { ...state, isProfileLoading: false };

    case types.UPDATE_PROFILE_REQUEST:
      return { ...state, isProfileLoading: true };
    case types.UPDATE_PROFILE_SUCCESS:
      return { ...state, isProfileLoading: false, profileData: payload };
    case types.UPDATE_PROFILE_FAILURE:
      return { ...state, isProfileLoading: false };

    case types.FETCH_USERS_LIST_REQUEST:
      return { ...state, isUsersListLoading: true };
    case types.FETCH_USERS_LIST_SUCCESS:
      return { ...state, isUsersListLoading: false, usersList: payload };
    case types.FETCH_USERS_LIST_FAILURE:
      return { ...state, isUsersListLoading: false };

    case types.FETCH_USER_REQUEST:
      return { ...state, isUserLoading: true };
    case types.FETCH_USER_SUCCESS:
      return { ...state, isUserLoading: false, userItem: payload };
    case types.FETCH_USER_FAILURE:
      return { ...state, isUserLoading: false };

    case types.UPDATE_USER_REQUEST:
      return { ...state, isUserUpdating: true };
    case types.UPDATE_USER_SUCCESS:
      return { ...state, isUserUpdating: false, userItem: payload };
    case types.UPDATE_USER_FAILURE:
      return { ...state, isUserUpdating: false };

    case types.DELETE_USER_REQUEST:
      return { ...state, isUserDeleting: true };
    case types.DELETE_USER_SUCCESS:
      return { ...state, isUserDeleting: false };
    case types.DELETE_USER_FAILURE:
      return { ...state, isUserDeleting: false };
    default:
      return state;
  }
}
