import axiosIntance from "./apiService";

export const login = (email, password) => axiosIntance.post('/login',{ email, password});

export const register = ( name, email, password ) =>  axiosIntance.post('/register', {name, email, password});
