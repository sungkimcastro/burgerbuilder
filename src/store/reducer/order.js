const initialState = {
  orders: [],
  purchased: false,
  error: null,
  loaded: false
};

const order = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PURCHASE":
      const newOrder = {
        ...action.order,
        id: action.id
      };
      return {
        ...state,
        orders: [...state.orders, newOrder],
        purchased: true,
        error: null,
        loaded: false
      };

    case "PURCHASE_ERROR":
      return {
        ...state,
        purchased: false,
        error: action.error,
        loaded: false
      };

    case "POPULATE_ORDERS":
      return {
        ...state,
        orders: [...action.orders],
        purchased: false,
        error: false,
        loaded: true
      };

    default:
      return state;
  }
};

export default order;
