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
    case actionTypes.GET_CART_ITEMS:
      return {
        ...state,
        cart: action.sarees,
      };
    case actionTypes.GET_FAVORITE_ITEMS:
      return {
        ...state,
        favorites: action.sarees,
      };
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: state.cart
          ? [...state.cart, action.addedItem]
          : [action.addedItem],
      };
    case actionTypes.ADD_TO_FAVORITES:
      console.log("added to favorites from reducer", action.addedItem);
      return {
        ...state,
        favorites: state.favorites
          ? [...state.favorites, action.addedItem]
          : [action.addedItem],
      };
    case actionTypes.DELETE_CART_ITEM:
      const updatedCartItems = [...state.cart].filter(
        (each) => each._id !== action.deletedSaree._id
      );
      return {
        ...state,
        cart: updatedCartItems,
      };
    case actionTypes.DELETE_FAVORITE_ITEM:
      const updatedFavoriteItems = [...state.favorites].filter(
        (each) => each._id !== action.deletedSaree._id
      );
      return {
        ...state,
        favorites: updatedFavoriteItems,
      };
    default:
      return state;
  }
};

export default cartNfavReducer;
