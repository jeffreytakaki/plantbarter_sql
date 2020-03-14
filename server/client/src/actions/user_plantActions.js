import axios from 'axios';
import { handleGlobalMessages } from './globalMessageHelper';

let updateHeaders = () => {
    let config = {
        headers: {
            Authorization: `JWT ${localStorage.plantToken}`
        }
    }

    return config;
}

export const getUserPlantsList = (plants) => {
    return async function(dispatch, getState) {
        let response = await axios.get('/api/v1/profile/plants', updateHeaders());
        dispatch({type: "GET_USER_PLANT_LIST", payload: response })
    }
}

export const deleteUserPlant = (plant_id) => {
    return async function(dispatch, getState) {    
        let response = await axios.delete(`/api/v1/profile/plant/${plant_id}`, updateHeaders())
        if(response.data.code == "ER_BAD_FIELD_ERROR") {
            console.log('error', response.data.code)
        }
        handleGlobalMessages(response, dispatch)
        dispatch({type: "DELETE_USER_PLANT_LIST", payload: response})
    }
}

export const createUserPlant = (plant_id) => {
    return async function(dispatch, getState) {
        let response = await axios.post(`/api/v1/profile/plant/add`, {plant_id}, updateHeaders())
        if(response.data.statusCode == 500) {
            handleGlobalMessages(response, dispatch)
            return false;
        }
        dispatch({type: "CREATE_USER_PLANT_LIST", payload: response})
        handleGlobalMessages(response, dispatch)   
    }
}


