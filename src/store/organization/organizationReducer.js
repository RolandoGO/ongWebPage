import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getOrganization,postOrganization} from '../../services/organizationService'

const newSlice = createSlice({
    name: 'organization',
    initialState: {
        organization: {},
        loading: null,
        error: null,
    },
    extraReducers:{},
})