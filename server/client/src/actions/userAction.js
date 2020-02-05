import axios from 'axios';
import { LOGIN_USER, CREATE_USER, LOGOUT_USER } from './types';
import {instance} from './axiosHelper';


export const findUser = () => {
    return async function(dispatch, getState) {
        let response = await instance.get('/users/findUser');
        
        dispatch({type: LOGIN_USER, payload: response })
    }
}

export const loginUser = (user) => {
    return async function(dispatch, getState) {
        console.log('user', user)
        // // perform api call here:
        let response = await instance.post('/login', user);
        console.log('response', response)
        localStorage.setItem('plantToken', response.data.token)

        dispatch({type: LOGIN_USER, payload: response })
    }
}

export const logoutUser = (user) => {
    return async function(dispatch, getState) {
        // // perform api call here:
        localStorage.removeItem('plantToken');
        dispatch({type: LOGOUT_USER, payload: [] })
    }
}

export function registerUser(user) {
    return async function(dispatch, getState) {
        console.log('user', user)
        // // perform api call here:
        let response = await instance.post('/signup', user);
        console.log('response', response)

        dispatch({type: CREATE_USER, payload: response })
    }
}