import { login } from "../../services/authService"

//accion
const USER_LOGIN_SUCCESS = USER_LOGIN_SUCCESS
const USER_LOGIN_REQUEST = USER_LOGIN_REQUEST
const USER_LOGIN_FAILURE=USER_LOGIN_FAILURE
//creador de accion, acá habría que conectar con la api?
export const userLoginSuccess=(token)=>{
return{
  type:USER_LOGIN_SUCCESS,
  payload:token
}
}
// const fetchApi=(email,password)=>{
// return(dispatch)=>{
//   dispatch(userLoginSuccess())
//   login()
// }
// }

const initialState = {
    user:"",
    password:"",
    email:"",
    token:"",
};

function AuthReducer(state = initialState, action) {
  switch(action.type){
    case USER_LOGIN_SUCCESS:{
      return{

      }
    }
  }
  return state;
}

export default AuthReducer
