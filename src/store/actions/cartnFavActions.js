import axios from "axios";
import * as actionTypes from "./actionTypes";
import { toast } from "react-toastify";

const displayToast = (message) => {
  return toast.success(message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const getAllSarees = () => {
  return (dispatch) => {
    axios
      .get("/api/admin/get-sarees")
      .then((result) => {
        const data = result.data;
        console.log(data);
        dispatch({ type: actionTypes.GET_ALL_SAREES, sarees: data.sarees });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const getCartSarees = (id) => {
  return (dispatch) => {
    axios
      .get(`/api/cart/user/${id}`)
      .then((result) => {
        const data = result.data;
        console.log("Cart items", data);
        dispatch({ type: actionTypes.GET_CART_ITEMS, sarees: data.items });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
};

export const getFavoriteSarees = (id) => {
  return (dispatch) => {
    axios
      .get(`/api/favorites/user/${id}`)
      .then((result) => {
        const data = result.data;
        console.log("Favorite items", data);
        dispatch({ type: actionTypes.GET_FAVORITE_ITEMS, sarees: data.items });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
};

export const addToCart = (itemInfo, userId) => {
  return (dispatch) => {
    axios
      .post("/api/cart/add-item", {
        itemInfo,
        userId,
      })
      .then((result) => {
        const data = result.data;
        dispatch({ type: actionTypes.ADD_TO_CART, addedItem: data.item });
        displayToast("Saree added to cart!!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addToFavorites = (itemInfo, userId) => {
  return (dispatch) => {
    axios
      .post("/api/favorites/add-item", {
        itemInfo,
        userId,
      })
      .then((result) => {
        const data = result.data;
        dispatch({ type: actionTypes.ADD_TO_FAVORITES, addedItem: data.item });
        displayToast("Saree added to favorites!!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteFromCart = (itemId, cartItems) => (dispatch) => {
  const cartItemId = cartItems.filter((each) => each.itemId === itemId)[0];
  axios
    .delete(`/api/cart/delete/${cartItemId._id}`)
    .then((result) => {
      const data = result.data;
      dispatch({ type: actionTypes.DELETE_CART_ITEM, deletedSaree: data.item });
      displayToast("Saree removed from cart!!");
    })
    .catch((err) => {
      console.log(err);
    });
};
export const deleteFromFavorites = (itemId, favItems) => (dispatch) => {
  const favItemId = favItems.filter((each) => each.itemId === itemId)[0];
  axios
    .delete(`/api/favorites/delete/${favItemId._id}`)
    .then((result) => {
      const data = result.data;
      dispatch({
        type: actionTypes.DELETE_FAVORITE_ITEM,
        deletedSaree: data.item,
      });
      displayToast("Saree removed from favorites!!");
    })
    .catch((err) => {
      console.log(err);
    });
};
