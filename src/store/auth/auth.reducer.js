import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { action } from "commander";

import { login, register } from "../../services/authService";

export const registerThunk = createAsyncThunk(
	"auth/register",
	async (personData) => {
		await register(personData);
	}
);

export const loginThunk = createAsyncThunk(
	"auth/login",
	async (email, password) => {
		await login(email, password);
	}
);

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: {},
		loading: false,
		error: null,
	},
	extraReducers: {
		//registerThunk
		[registerThunk.pending]: (state, action) => {
			state.loading = true;
		},
		[registerThunk.fulfilled]: (state, { payload }) => {
			state.user = payload;
			state.loading = false;
		},
		[registerThunk.rejected]: (state, action) => {
			state.error = action.error;
    },
    //loginThunk
    [loginThunk.pending]: (state, action) => {
      state.loading = true
    },
    [loginThunk.fulfilled]: (state, action) => {
      state.user = action.payload
      state.loading = false
    },
    [loginThunk.rejected]: (state, action) => {
      state.error = action.error
    }
	},
});

export default authSlice.reducer;

//action creator
/*export const userLoginSuccess = (email, password) => {
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
    default:
      return state;
  }
}

export default authReducer;*/
