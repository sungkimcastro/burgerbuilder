import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ingridients from "./reducer/ingridients";
import authReducer from "./reducer/auth";

export default createStore(
  combineReducers({
    ingridients,
    auth: authReducer
  }),
  applyMiddleware(thunk)
);
