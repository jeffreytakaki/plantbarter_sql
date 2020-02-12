import { } from './types';
import { instance } from './axiosHelper';

export const getUserPlantsList = (plants) => {
    return async function(dispatch, getState) {
        let response = await instance.get('/profile/plants')
        dispatch({type: "GET_USER_PLANT_LIST", payload: response })
    }
}

export const deleteUserPlant = (plant_id) => {
    return async function(dispatch, getState) {
        console.log('plant id', plant_id)
        let response = await instance.delete(`/profile/plant/${plant_id}`)
        if(response.data.code == "ER_BAD_FIELD_ERROR") {
            console.log('error', response.data.code)
        }
        dispatch({type: "DELETE_USER_PLANT_LIST", payload: response})

        // {response: 1 or 0, plant_id: id of plant}
    }
}

export const createUserPlant = (plant_id) => {
    return async function(dispatch, getState) {
        console.log('plant id', plant_id)
        let response = await instance.post(`/profile/plant/add`, {plant_id})
        if(response.data.code == "ER_BAD_FIELD_ERROR") {
            console.log('error', response.data.code)
        }
        console.log('response create user plant', response)
        dispatch({type: "CREATE_USER_PLANT_LIST", payload: response})

        
    }
}
