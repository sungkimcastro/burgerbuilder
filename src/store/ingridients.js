import { createStore, combineReducers } from "redux";
import ingridients from "./reducer/ingridients";

export default createStore(
  combineReducers({
    ingridients
  })
);
