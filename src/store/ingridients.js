import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ingridients from "./reducer/ingridients";

export default createStore(
  combineReducers({
    ingridients
  }),
  applyMiddleware(thunk)
);
