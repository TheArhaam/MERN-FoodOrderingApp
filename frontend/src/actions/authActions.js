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

// REGISTER USER
export const register = (newUser) => (dispatch) => {
  // const body = JSON.stringify({ email, password, name, phoneNumber, address });
  axios.post("/user/new", newUser)
    .then((response) => {
      alert("REGISTRATION SUCCESS");
      dispatch({
        type: REGISTER_SUCESS,
        payload: response.data
      })
    })
    .catch((err) => {
      // console.log(err);
      alert(err.response.data)
      dispatch(returnErrors(err.response.data, err.response.status, "REGISTER_FAIL"));
      dispatch({
        type: REGISTER_FAIL,
      })
    });
}

// LOGIN USER
export const login = (user) => (dispatch) => {
  axios.post("user/existing", user)
    .then((response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      })
    })
    .catch((err) => {
      alert(err.response.data)
      dispatch(returnErrors(err.response.data, err.response.status, "LOGIN_FAIL"));
      dispatch({
        type: LOGIN_FAIL,
      })
    });
}


// LOGOUT USER
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}

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
