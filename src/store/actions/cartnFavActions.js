import axios from "axios";
import * as actionTypes from "./actionTypes";

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
