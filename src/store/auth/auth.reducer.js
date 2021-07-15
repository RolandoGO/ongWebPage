import { login } from "../../services/authService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchLoginThunk = createAsyncThunk(
  "auth/fetchLoginThunk",
  async (email, password) => {
    return await login(email, password);
  }
);

const initialState = {
  user: {},
  isAuthenticated: false,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.isAuthenticated = false;
      state.user = {};
    },
    register: (state, action) => {
      state.user.name = action.payload.name;
      state.user.password = action.payload.password;
      state.user.email = action.payload.email;
      state.user.token = action.payload.token;
    },
  },
  extraReducers: {
    [fetchLoginThunk.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchLoginThunk.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.user = action.payload.data;
      state.isAuthenticated = "true";
    },
    [fetchLoginThunk.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default authSlice.reducer;
