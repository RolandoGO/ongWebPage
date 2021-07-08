import { USER_REGISTER, USER_LOGIN_SUCCESS } from "./types";
import { login } from "../../services/authService";

const initialState = {
  name: "",
  password: "",
  email: "",
  token: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER:
      return {
        name: action.payload.name,
        password: action.payload.password,
        email: action.payload.email,
        token: action.payload.token,
      };
    case USER_LOGIN_SUCCESS:
      return {
        dataUser: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
