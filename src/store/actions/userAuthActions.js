import axios from "axios";
import * as actionTypes from "./actionTypes";

import { toast } from "react-toastify";

const successToast = (message) => {
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

export const storeUserDataFromLocalStorage = (user) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.USER_SIGN_IN_SUCCESS, user: user });
  };
};

export const userSignup = (userData) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.USER_SIGN_UP_SUCCESS,
      message: null,
    });
    dispatch({
      type: actionTypes.USER_SIGN_UP_ERROR,
      message: null,
    });
    axios
      .post("/api/user/signup", userData)
      .then((result) => {
        const data = result.data;
        console.log("this is data", data);
        if (data.type === "success") {
          dispatch({
            type: actionTypes.USER_SIGN_UP_SUCCESS,
            message: "Sign up successful!! Please login",
          });
        }
      })
      .catch((error) => {
        const data = error.response.data;
        if (data.email !== "") {
          dispatch({
            type: actionTypes.USER_SIGN_UP_ERROR,
            message: data.email,
          });
        }
        if (data.password !== "") {
          dispatch({
            type: actionTypes.USER_SIGN_UP_ERROR,
            message: data.password,
          });
        }
      });
  };
};

export const userSignin = (email, password) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.USER_SIGN_IN_ERROR, message: null });
    console.log(email, password);
    axios
      .post("/api/user/login", {
        email,
        password,
      })
      .then((result) => {
        const data = result.data;
        if (data.type === "success") {
          console.log("user data", data.user);
          dispatch({
            type: actionTypes.USER_SIGN_IN_SUCCESS,
            user: data.user,
          });
          localStorage.setItem("user", JSON.stringify(data.user));
          window.location = "/";
        }
      })
      .catch((error) => {
        const data = error.response.data;
        if (data.type === "error") {
          dispatch({
            type: actionTypes.USER_SIGN_IN_ERROR,
            message: data.message,
          });
        }
        if (data.type === "warning") {
          dispatch({
            type: actionTypes.USER_SIGN_IN_WARNING,
            message: data.message,
          });
        }
      });
  };
};

export const getResetLink = (email) => (dispatch) => {
  dispatch({
    type: actionTypes.RESET_LINK_SENT_SUCCESS,
    message: null,
  });
  dispatch({
    type: actionTypes.RESET_LINK_SENT_ERROR,
    message: null,
  });
  axios
    .post("/api/user/get-reset-link", {
      email,
    })
    .then((result) => {
      const data = result.data;
      console.log(data);
      dispatch({
        type: actionTypes.RESET_LINK_SENT_SUCCESS,
        message: data.message,
      });
    })
    .catch((error) => {
      const data = error.response.data;
      console.log(data);
      dispatch({
        type: actionTypes.RESET_LINK_SENT_ERROR,
        message: data.message,
      });
    });
};

export const resetPassword = (token, password) => (dispatch) => {
  axios
    .put("/api/user/reset-password", {
      token,
      password,
    })
    .then((result) => {
      const data = result.data;
      console.log(data);
      if (data.type === "success") {
        dispatch({
          type: actionTypes.RESET_PASSWORD_SUCCESS,
          message: "Your password has been updated!!",
        });
      }
    })
    .catch((error) => {
      const data = error.response.data;
      console.log(data);
      dispatch({
        type: actionTypes.RESET_PASSWORD_ERROR,
        message: "Something went wrong, try again!!",
      });
    });
};

export const changePassword = (userId, password) => (dispatch) => {
  axios
    .put("/api/user/change-password", {
      id: userId,
      password,
    })
    .then((result) => {
      const data = result.data;
      console.log(data);
      successToast("Your password has been changed!!");
    })
    .catch((error) => {
      const data = error.response.data;
      console.log(data);
      successToast("Something went wrong, please try again!!");
    });
};

export const userLogout = () => (dispatch) => {
  axios
    .get("/api/user/logout")
    .then((result) => {
      const data = result.data;
      if (data.type === "success") {
        localStorage.removeItem("user");
        dispatch({ type: actionTypes.USER_LOG_OUT });
        window.location = "/login";
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
