import axios from 'axios';

export const getCommonlyTradedPlants = () => {
    return async function(dispatch, getState) {
        let response = await axios.get('/api/v1/plants/search/top-five');

        dispatch({type: "COMMONLY_TRADED_PLANT_LIST", payload: response })
    }
}