import { } from './types';
import axios from 'axios';
import { config } from './axiosHelper';

export const getPlantsList = (plants) => {
    return async function(dispatch, getState) {
        let response = await axios.get('/api/v1/plants', config)

        dispatch({type: "GET_PLANT_LIST", payload: response })
    }
}

export const searchPlantsByKeyword = (keyword) => {
    return async function(dispatch, getState) {
        let response = await axios.post('/api/v1/plants/search', {keyword});

        dispatch({type: "SEARCH_PLANT_LIST", payload: response })
    }
}




