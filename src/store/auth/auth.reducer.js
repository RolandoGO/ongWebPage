import {
  USER_REGISTER,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
} from "./types";
import { login } from "../../services/authService";

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

function authReducer(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTER:
      return {
        name: action.payload.name,
        password: action.payload.password,
        email: action.payload.email,
        token: action.payload.token,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    }
  }
}

export default authReducer;
