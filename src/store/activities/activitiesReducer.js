import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  listActivities,
  createActivity,
  editActivity,
  deleteActivity,
} from "../../services/activitiesService";

const initialState = { activitiesList: [], status: "idle", error: null };

export const fetchActivities = createAsyncThunk(
  "activities/fetchActivities",
  async () => {
    const { data } = await listActivities();
    return data;
  }
);

export const postNewActivity = createAsyncThunk(
  "activities/postNewActivity",
  async (newActivity) => await createActivity(newActivity)
);

export const modifyActivity = createAsyncThunk(
  "activities/modifyActivity",
  async (activityData) => await editActivity(activityData)
);

export const removeActivity = createAsyncThunk(
  "activities/removeActivity",
  async (activityId) => await deleteActivity(activityId)
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
      state.activitiesList = action.payload.data;
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
      state.activities = state.activities.push(action.payload.activities);
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
    [removeActivity.pending]: (state, action) => {
      state.status = "loading";
    },
    [removeActivity.fulfilled]: (state, action) => {
      state.status = "succeeded";
      const newActivities = state.activities.filter(
        (activity) => activity.id !== action.payload.id
      );
      state.activities = newActivities;
    },
    [removeActivity.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default activitiesSlice.reducer;
