import { USER_REGISTER } from './types';

export const userRegister = ( { data } ) => {

    const { user, token } = data;
    const { name, email, password } = user;
    return {
        type: USER_REGISTER,
        payload: {
            name,
            email,
            password,
            token
        }
        
    }
}