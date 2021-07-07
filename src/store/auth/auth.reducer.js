import { login } from "../../services/authService";

//actions
const USER_LOGIN_SUCCESS = USER_LOGIN_SUCCESS;
//action creator
export const userLoginSuccess = (email, password) => {
  const { data } = login(email, password);
  return {
    type: USER_LOGIN_SUCCESS,
    payload: data,
  };
};

//Reducer
const initialState = {
  user: "",
  password: "",
  email: "",
  token: "",
};
function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS: {
      return {
        dataUser: action.payload,
      };
    }
    case USER_LOGOUT_SUCCESS: {
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    }
  }
  return state;
}

export default AuthReducer;
