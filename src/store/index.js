import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.reducer";
import newsReducer from './news/newsReducer'
import organizationReducer from './organization/organizationReducer'

export const store = configureStore({
    reducer: {
        userInfo: authReducer,
        newsInfo: newsReducer,
        organizationInfo: organizationReducer,
    }
});


export default store;
