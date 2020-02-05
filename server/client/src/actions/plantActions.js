import { } from './types';
import { instance } from './axiosHelper';

export const getPlantsList = (plants) => {
    return async function(dispatch, getState) {
        let response = await instance.get('/plants')

        dispatch({type: "GET_PLANT_LIST", payload: response })
    }
}

// function getUserPlant(plant) {

//     // perform api call here:
//     let plant = axios.get(/);

//     if(plant) {
//         return {

//         }
//     }
    
// }

// function createUserPlant(plant) {

//     // perform api call here:
//     let plant = axios.post(/);

//     if(plant) {
//         return {

//         }
//     }
    
// }
