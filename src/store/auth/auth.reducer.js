import { login } from "../../services/authService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getLoginThunk = createAsyncThunk(
  "login/getLoginThunk",
  async (email, password) => {
    return await login(email, password);
  }
);

const initialState = {
  user: {},
  isAuthenticated: false,
  loading: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {},
});

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
  user: {},
  isAuthenticated: false,
  loading: false,
  error: "",
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
