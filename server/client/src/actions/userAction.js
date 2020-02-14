import axios from 'axios';
import { LOGIN_USER, CREATE_USER, LOGOUT_USER } from './types';
import { config } from './axiosHelper';

export const findUser = () => {
    return async function(dispatch, getState) {
        try {
            let response = await axios.get('/users/findUser', config);
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
        localStorage.removeItem('plantToken');
        dispatch({type: LOGOUT_USER, payload: [] })
    }
}

export function registerUser(user) {
    return async function(dispatch, getState) {
        let response = await axios.post('/signup', user);
        // TODO check that the user was actually registered. otherwhise, throw eerror
        dispatch({type: CREATE_USER, payload: response })
    }
}