const defaultState = {
  ingridients: {
    meat: 0,
    salad: 0,
    bacon: 0,
    cheese: 0
  },
  cost: 2
};

const BURGER_PRICE = {
  meat: 1.5,
  salad: 0.7,
  bacon: 1.1,
  cheese: 0.5
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_INGRIDIENT":
      return {
        ...state,
        ingridients: {
          ...state.ingridients,
          [action.ingridient]: state.ingridients[action.ingridient] + 1
        },
        cost: state.cost + BURGER_PRICE[action.ingridient]
      };
    case "REMOVE_INGRIDIENT":
      return {
        ...state,
        ingridients: {
          ...state.ingridients,
          [action.ingridient]: state.ingridients[action.ingridient] - 1
        },
        cost: state.cost - BURGER_PRICE[action.ingridient]
      };

    default:
      return state;
  }
};
