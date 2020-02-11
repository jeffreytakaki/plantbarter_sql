import { } from './types';
import { instance } from './axiosHelper';

export const getUserPlantsList = (plants) => {
    return async function(dispatch, getState) {
        let response = await instance.get('/profile/plants')
        dispatch({type: "GET_USER_PLANT_LIST", payload: response })
    }
}
