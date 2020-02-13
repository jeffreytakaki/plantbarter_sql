import { } from './types';
import axios from 'axios';
import { config } from './axiosHelper';

export const getUserPlantsList = (plants) => {
    return async function(dispatch, getState) {
        console.log('config', config)
        let response = await axios.get('/profile/plants', config);
        dispatch({type: "GET_USER_PLANT_LIST", payload: response })
    }
}

export const deleteUserPlant = (plant_id) => {
    return async function(dispatch, getState) {
        let response = await axios.delete(`/profile/plant/${plant_id}`, config)
        if(response.data.code == "ER_BAD_FIELD_ERROR") {
            console.log('error', response.data.code)
        }
        dispatch({type: "DELETE_USER_PLANT_LIST", payload: response})
    }
}

export const createUserPlant = (plant_id) => {
    return async function(dispatch, getState) {
        let response = await axios.post(`/profile/plant/add`, {plant_id}, config)
        if(response.data.statusCode == 500) {
            console.log('error', response.data.message)
            return false;
        }
        dispatch({type: "CREATE_USER_PLANT_LIST", payload: response})
    }
}
