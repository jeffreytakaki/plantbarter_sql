import axios from 'axios';

export const searchPlantsByKeyword = (keyword) => {
    return async function(dispatch, getState) {
        let response = await axios.post('/api/v1/plants/search', {keyword});

        dispatch({type: "SEARCH_PLANT_LIST", payload: response })
    }
}


