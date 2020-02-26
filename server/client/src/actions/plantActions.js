import axios from 'axios';
import { config } from './axiosHelper';

export const getPlantById = (plant_id) => {
    return async function(dispatch, getState) {
        const data = {
            plant_id
        };

        let response = await axios.get(`/api/v1/plants/${plant_id}`, config)

        console.log("response", response);
        dispatch({type: "GET_PLANT", payload: response })
    }
}

