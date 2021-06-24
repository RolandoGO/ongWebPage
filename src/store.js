import { createStore } from "redux";
import AuthReducer from "./AuthReducer";
export let store = createStore(AuthReducer);
