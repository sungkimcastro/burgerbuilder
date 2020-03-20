import http from "./../../http/http";

export const POPULATE_INGRIDIENTS = ingredients => {
  return {
    type: "POPULATE_INGRIDIENTS",
    ingredients
  };
};

export const FETCH_INGRIDIENTS = () => {
  return dispatch => {
    http("/ingredients.json").then(({ data: ingredients }) => {
      return dispatch(POPULATE_INGRIDIENTS(ingredients));
    });
  };
};

export const ADD_INGRIDIENT = ingridient => {
  return {
    type: "ADD_INGRIDIENT",
    ingridient
  };
};

export const REMOVE_INGRIDIENT = ingridient => {
  return {
    type: "REMOVE_INGRIDIENT",
    ingridient
  };
};
