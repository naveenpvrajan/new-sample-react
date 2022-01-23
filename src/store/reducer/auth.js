import * as types from "../actionTypes/auth";

// Reducer function
export default function AuthReducer(state = {}, { type, payload }) {
  switch (type) {
    case types.LOGIN_REQUEST:
      return { ...state, isLogging: true };
    case types.LOGIN_SUCCESS:
      return { ...state, isLogging: false, authToken: payload };
    case types.LOGIN_FAILURE:
      return { ...state, isLogging: false };

    case types.LOGOUT:
      return { ...state, authToken: "" };
    default:
      return state;
  }
}
