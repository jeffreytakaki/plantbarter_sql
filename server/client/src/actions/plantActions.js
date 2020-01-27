import axios from 'axios';
import { } from './types';

export const getPlantsList = (plants) => {
    return async function(dispatch, getState) {
        let response = await axios.get('/plants')

        console.log('response', response)

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
