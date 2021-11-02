import * as actionTypes from "../actions/actionTypes";
const initialState = {
  admin: null,
  signUpErrorMessage: null,
  signUpSuccessMessage: null,
  signInErrorMessage: null,
  signInWarningMessage: null,
};

const adminAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpSuccessMessage: action.message,
      };
    case actionTypes.SIGN_UP_ERROR:
      return {
        ...state,
        signUpErrorMessage: action.message,
      };
    case actionTypes.SIGN_IN_ERROR:
      return {
        ...state,
        signInErrorMessage: action.message,
      };
    case actionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        admin: action.admin,
      };
    case actionTypes.LOG_OUT:
      return {
        ...state,
        admin: null,
      };
    default:
      return state;
  }
};

export default adminAuthReducer;
