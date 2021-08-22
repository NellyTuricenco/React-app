const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("Login failed");
      return {
        ...state,
        authError: "The email or password is incorrect",
      };
    case "LOGIN_SUCCESS":
      console.log("Login success");
      return {
        ...state,
        authError: null,
      };
    case "SIGNOUT_SUCCESS":
      console.log("Sign out success");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("Sign Up success");
      return {
        ...state,
        authErr: null,
      };
    case "SIGNUP_ERROR":
      console.log("Sign Up failed");
      return {
        ...state,
        authError: action.err.message,
      };
    default:
      return state;
  }
};

export default authReducer;
