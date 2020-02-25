import axios from 'axios';
import { LOGIN_USER, CREATE_USER, LOGOUT_USER } from './types';
import { config } from './axiosHelper';

export const findUser = () => {
    return async function(dispatch, getState) {
        try {
            let response = await axios.get('/api/v1/users/findUser', config);
            console.log('response', response)
            let userobj = response.data.user[0];
            dispatch({type: LOGIN_USER, payload: response.data.user[0] })
        } catch {
            console.log('user not logged in')
        }
        
    }
}

export const loginUser = (user) => {
    return async function(dispatch, getState) {
        let response = await axios.post('/login', user);
        localStorage.setItem('plantToken', response.data.token);
        dispatch({type: LOGIN_USER, payload: response.data.user })
    }
}

export const logoutUser = (user) => {
    return async function(dispatch, getState) {
        // // perform api call here:
        localStorage.removeItem('plantToken');
        dispatch({type: LOGOUT_USER, payload: [] })

        window.location.pathname = '/'
    }
}

export function registerUser(user) {
    return async function(dispatch, getState) {
        console.log('user', user)
        // // perform api call here:
        let response = await axios.post('/signup', user);
        console.log('response', response)

        dispatch({type: CREATE_USER, payload: response })
    }
}