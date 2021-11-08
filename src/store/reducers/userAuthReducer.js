import * as actionTypes from "../actions/actionTypes";
const initialState = {
  user: null,
  signUpErrorMessage: null,
  signUpSuccessMessage: null,
  signInErrorMessage: null,
  signInWarningMessage: null,
};

const userAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpSuccessMessage: action.message,
      };
    case actionTypes.USER_SIGN_UP_ERROR:
      return {
        ...state,
        signUpErrorMessage: action.message,
      };
    case actionTypes.USER_SIGN_IN_ERROR:
      return {
        ...state,
        signInErrorMessage: action.message,
      };
    case actionTypes.USER_SIGN_IN_WARNING:
      return {
        ...state,
        signInWarningMessage: action.message,
      };
    case actionTypes.USER_SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.USER_LOG_OUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userAuthReducer;
