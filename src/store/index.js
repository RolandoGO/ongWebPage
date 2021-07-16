import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.reducer";
import newsReducer from './news/newsReducer'

export const store = configureStore({
    reducer: {
        userInfo: authReducer,
        newsInfo: newsReducer,
    }
});


export default store;
