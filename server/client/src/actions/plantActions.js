import { } from './types';
import axios from 'axios';
import { config } from './axiosHelper';

export const getPlantsList = (plants) => {
    return async function(dispatch, getState) {
        let response = await axios.get('/plants', config)

        dispatch({type: "GET_PLANT_LIST", payload: response })
    }
}

