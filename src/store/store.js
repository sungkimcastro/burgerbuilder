import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ingridients from "./reducer/ingridients";
import authReducer from "./reducer/auth";
import order from "./reducer/order";

export default createStore(
  combineReducers({
    ingridients,
    auth: authReducer,
    order
  }),
  applyMiddleware(thunk)
);
