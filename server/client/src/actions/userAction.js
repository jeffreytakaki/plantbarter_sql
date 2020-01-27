import axios from 'axios';
import { LOGIN_USER, CREATE_USER } from './types';

export const loginUser = (user) => {
    return async function(dispatch, getState) {
        console.log('user', user)
        // // perform api call here:
        let response = await axios.post('/login', user);
        console.log('response', response)

        dispatch({type: LOGIN_USER, payload: response })
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