import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
	getOrganization,
	postOrganization,
} from "../../services/organizationService";

const getOrganization = createAsyncThunk(
	"organization/getOrganization",
	async () => {
		return await getOrganization(); //method in newsService.js
	}
);

const postOrganization = createAsyncThunk(
	"organization/postOrganization",
	async () => {
		return await postOrganization(); //method in newsService.js
	}
);

const newSlice = createSlice({
	name: "organization",
	initialState: {
		organization: {},
		loading: null,
    error: null,
    newOrganization: {},
	},
	extraReducers: {
		//getOrganizationThunk
		[getOrganization.pending]: (state, action) => {
			state.loading = true;
		},
		[getOrganization.fulfilled]: (state, action) => {
			state.organization = action.payload;
			state.loading = false;
		},
		[getOrganization.rejected]: (state, action) => {
			state.error = action.payload;
		},
		//postOrganizationThunk
		[postOrganization.pending]: (state, action) => {
			state.loading = true;
		},
		[postOrganization.fulfilled]: (state, action) => {
			state.newOrganization = action.payload;
			state.loading = false;
		},
		[postOrganization.rejected]: (state, action) => {
			state.error = action.payload;
		},
	},
});
