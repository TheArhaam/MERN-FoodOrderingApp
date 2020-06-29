// FOR COMBINING REDUCERS
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import cartReducer from "./cartReducer"

export const allReducers = combineReducers({
  error: errorReducer,
  auth: authReducer,
  cart: cartReducer,
});

