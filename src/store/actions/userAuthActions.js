import axios from "axios";
import * as actionTypes from "./actionTypes";

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

export const userLogout = () => {
  return (dispatch) => {
    localStorage.removeItem("user");
    dispatch({ type: actionTypes.USER_LOG_OUT });
    window.location = "/login";
  };
};
