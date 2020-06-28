// FOR COMBINING REDUCERS
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export const allReducers = combineReducers({
  error: errorReducer,
  auth: authReducer,
});

