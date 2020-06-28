import axios from "axios";
import { returnErrors } from "./errorActions";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCESS,
  REGISTER_FAIL,
} from "./types";

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // USER LOADING
  dispatch({ type: USER_LOADING });

  axios
    .get("/user/auth", tokenConfig(getState))
    .then((user) => {
      dispatch({
        type: USER_LOADED,
        payload: user.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

// SETUP CONFIG/HEADERS AND TOKEN
export const tokenConfig = (getState) => {
  // GET TOKEN FROM LOCAL STORAGE
  const token = getState().auth.token;
  // HEADERS
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  // ADD TOKEN TO HEADER, IF AVAILABLE
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
