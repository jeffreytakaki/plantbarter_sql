import axios from 'axios';
import { LOGIN_USER, CREATE_USER, LOGOUT_USER } from './types';
import { config } from './axiosHelper';
import { handleGlobalMessages } from './globalMessageHelper';

export const findUser = () => {
    return async function(dispatch, getState) {
        try {
            let response = await axios.get('/api/v1/users/findUser', config);
            dispatch({type: LOGIN_USER, payload: response.data.user[0] })
        } catch {
            console.log('user not logged in')
        }
        
    }
}

export const loginUser = (user) => {
    return async function(dispatch, getState) {
        let response = await axios.post('/login', user);
        
        if(response.auth == true) {
            localStorage.setItem('plantToken', response.data.token);
            dispatch({type: LOGIN_USER, payload: response.data.user })
        } else {
            handleGlobalMessages({data: {message: response.message}}, dispatch);
            return false;
        }
        
        
    }
}

export const logoutUser = (user) => {
    return async function(dispatch, getState) {
        localStorage.removeItem('plantToken');
        dispatch({type: LOGOUT_USER, payload: [] })
        window.location.pathname = '/'
    }
}

export function registerUser(user) {
    return async function(dispatch, getState) {
        let response = await axios.post('/signup', user);
        console.log(response)
        if(response.data.auth == false) {
            handleGlobalMessages(response, dispatch);
            return false;
        }

        localStorage.setItem('plantToken', response.data.token);
        dispatch({type: CREATE_USER, payload: response })
    }
}

// to catch bad logins, since modifying the passportjs file would take too long. 
axios.interceptors.response.use(response => {
    return response;
 }, error => {
    if (error.response.status === 401) {}
    if (error.response.status === 500) {
        console.log('error 500');
        // handleGlobalMessages({data: {message: '!'}}, dispatch);
    }
   return error;
 });