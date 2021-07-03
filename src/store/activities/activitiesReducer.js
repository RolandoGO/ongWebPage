import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  listActivities,
  createActivity,
  editActivity,
} from "../../services/activitiesService";

const initialState = { activities: [], status: "idle", error: null };

export const fetchActivities = createAsyncThunk(
  "activities/fetchActivities",
  listActivities
);

export const postNewActivity = createAsyncThunk(
  "activities/postNewActivity",
  async (newActivity) => await createActivity(newActivity)
);

export const modifyActivity = createAsyncThunk(
  "activities/modifyActivity",
  async (activityData) => await editActivity(activityData)
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
    [postNewActivity.pending]: (state, action) => {
      state.status = "loading";
    },
    [postNewActivity.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state = state.activities.push(action.payload);
    },
    [postNewActivity.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [modifyActivity.pending]: (state, action) => {
      state.status = "loading";
    },
    [modifyActivity.fulfilled]: (state, action) => {
      state.status = "succeeded";
      const modifiedActivity = state.activities.find(
        (activity) => activity.id === action.payload.id
      );

      if (modifiedActivity) {
        for (const property in modifiedActivity) {
          modifiedActivity[property] = action.payload[property];
        }
      }
    },
    [modifyActivity.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default activitiesSlice.reducer;
