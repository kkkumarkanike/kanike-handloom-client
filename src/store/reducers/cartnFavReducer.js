import * as actionTypes from "../actions/actionTypes";

const initialState = {
  cart: null,
  favorites: null,
  sarees: null,
};

const cartNfavReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_SAREES:
      return {
        ...state,
        sarees: action.sarees,
      };
    default:
      return state;
  }
};

export default cartNfavReducer;
