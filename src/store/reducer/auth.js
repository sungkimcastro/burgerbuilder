const initialState = {
  token: null,
  userId: null,
  email: null,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        email: action.email,
        error: null
      };

    case "ERROR":
      return {
        ...state,
        token: null,
        userId: null,
        email: null,
        error: action.error
      };

    case "LOGOUT":
      return {
        ...state,
        token: null,
        userId: null,
        email: null
      };

    default:
      return state;
  }
};

export default authReducer;
