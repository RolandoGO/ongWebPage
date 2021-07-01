import { createStore } from "redux";
import AuthReducer from "./auth/auth.reducer";

const store = createStore(AuthReducer);

export default store
