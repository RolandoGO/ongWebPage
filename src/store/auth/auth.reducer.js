import { USER_REGISTER } from './types';

const initialState = {
    name:"",
    password:"",
    email:"",
    token:"",
};

export const authReducer = (state = initialState, action) => {
  switch ( action.type ) {
    case USER_REGISTER:
      return {
        name: action.payload.name,
        password: action.payload.password,
        email: action.payload.email,
        token: action.payload.token
      }

  }
  return state;
}

export default authReducer;
