import http from "./../../http/http";

export const AUTH = (email, password, isSignUp) => {
  return dispatch => {
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCU0NtZPJKOP8CdjgFtef5MyaV3FeERDlE";

    if (!isSignUp) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCU0NtZPJKOP8CdjgFtef5MyaV3FeERDlE";
    }

    const authData = {
      email,
      password,
      returnSecureToken: true
    };

    http.post(url, authData).then(resolve => {
      console.log(resolve);
    });
  };
};
