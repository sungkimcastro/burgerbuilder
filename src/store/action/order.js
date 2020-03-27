import http from "./../../http/http";

export const CREATE_PURCHASE = (id, order) => {
  return {
    type: "CREATE_PURCHASE",
    id,
    order
  };
};

export const PURCHASE_BURGER = (token, order) => {
  return dispatch => {
    http
      .post(`/orders.json?auth=${token}`, order)
      .then(resolve => {
        dispatch(CREATE_PURCHASE(resolve.data.name, order));
      })
      .catch(e => {
        dispatch(PURCHASE_ERROR(e.response.data.error.message));
      });
  };
};

export const PURCHASE_ERROR = error => {
  return {
    type: "PURCHASE_ERROR",
    error
  };
};

export const POPULATE_ORDERS = orders => {
  return {
    type: "POPULATE_ORDERS",
    orders
  };
};

export const ERROR_ORDER = error => {
  return {
    type: "ERROR_ORDER",
    error
  };
};

export const FETCH_ORDERS = (token, userId) => {
  const queryParams = `?auth=${token}&'orderBy'='userId'&equalTo'${userId}'`;
  return dispatch => {
    http
      .get(`/orders.json${queryParams}`)
      .then(resolve => {
        const orders = [];
        for (let key in resolve.data) {
          orders.push({
            ...resolve.data[key],
            id: key
          });
          dispatch(POPULATE_ORDERS(orders));
        }
      })
      .catch(e => {
        dispatch(ERROR_ORDER(e));
      });
  };
};
