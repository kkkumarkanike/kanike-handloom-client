import axios from "axios";
import * as actionTypes from "./actionTypes";

export const storeAdminDataFromLocalStorage = (admin) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.SIGN_IN_SUCCESS, admin: admin });
  };
};

export const adminSignup = (adminData) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SIGN_UP_SUCCESS,
      message: null,
    });
    dispatch({
      type: actionTypes.SIGN_UP_ERROR,
      message: null,
    });
    axios
      .post("/api/admin/signup", adminData)
      .then((result) => {
        const data = result.data;
        console.log("this is data", data);
        if (data.type === "success") {
          dispatch({
            type: actionTypes.SIGN_UP_SUCCESS,
            message: "Sign up successful!! Please login",
          });
        }
      })
      .catch((error) => {
        const data = error.response.data;
        if (data.email !== "") {
          dispatch({
            type: actionTypes.SIGN_UP_ERROR,
            message: data.email,
          });
        }
        if (data.password !== "") {
          dispatch({
            type: actionTypes.SIGN_UP_ERROR,
            message: data.password,
          });
        }
      });
  };
};

export const adminSignIn = (email, password) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.SIGN_IN_ERROR, message: null });
    console.log(email, password);
    axios
      .post("/api/admin/login", {
        email,
        password,
      })
      .then((result) => {
        const data = result.data;
        if (data.type === "success") {
          console.log("user data", data.admin);
          dispatch({ type: actionTypes.SIGN_IN_SUCCESS, admin: data.admin });
          localStorage.setItem("admin", JSON.stringify(data.admin));
          window.location = "/admin";
        }
      })
      .catch((error) => {
        const data = error.response.data;
        if (data.type === "error") {
          dispatch({ type: actionTypes.SIGN_IN_ERROR, message: data.message });
        }
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("admin");
    dispatch({ type: actionTypes.LOG_OUT });
    window.location = "/admin/login";
  };
};
