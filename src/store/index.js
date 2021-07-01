import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth/auth.reducer";
import newsReducer from './news/newsReducer'

export const store = configureStore({
    reducer: {
        userInfo: AuthReducer,
        newsInfo: newsReducer,
    }
});


