import { configureStore } from "@reduxjs/toolkit";
import activitiesReducer from "./activities/activitiesReducer";
import authReducer from "./auth/auth.reducer";
import newsReducer from './news/newsReducer'

export const store = configureStore({
    reducer: {
        userInfo: authReducer,
        newsInfo: newsReducer,
        activitiesInfo : activitiesReducer,
    }
});


export default store;
