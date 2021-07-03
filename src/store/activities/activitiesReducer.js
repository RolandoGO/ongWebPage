import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { listActivities } from "../../services/activitiesService";

const initialState = { activities: [], status: "idle", error: null };

export const fetchActivities = createAsyncThunk(
  "activities/fetchActivities",
  listActivities
);

const activitiesSlice = createSlice({
  name: "activities",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchActivities.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchActivities.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.activities = state.activities.concat(action.payload);
    },
    [fetchActivities.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default activitiesSlice.reducer;
