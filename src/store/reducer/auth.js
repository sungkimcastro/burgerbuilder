const initialState = {
  token: null,
  userId: null,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        error: null
      };

    case "ERROR":
      return {
        ...state,
        email: null,
        token: null,
        userId: null,
        error: action.error
      };

    case "LOGOUT":
      return {
        ...state,
        token: null,
        userId: null
      };

    default:
      return state;
  }
};

export default authReducer;
