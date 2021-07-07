import { login } from "../../services/authService";

//actions
const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
const USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS";

//action creator
export const userLoginSuccess = (email, password) => {
  const { data } = login(email, password);
  return {
    type: USER_LOGIN_SUCCESS,
    payload: data,
  };
};

export const userLogoutSuccess = () => {
  return {
    type: USER_LOGOUT_SUCCESS,
  };
};

//Reducer
const initialState = {
  user: {
    user: "",
    password: "",
    email: "",
    token: "",
  },
  isAuthenticated: false,
};

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    }
    case USER_LOGOUT_SUCCESS: {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    }
    default:
      return state;
  }
}

export default AuthReducer;
