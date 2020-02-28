import axios from 'axios';

export const searchPlantsByKeyword = (search) => {
    // search.keyword
    // search.pagination

    return async function(dispatch, getState) {
        const obj = {
            keyword: search.keyword,
            pagination: search.pagination,
            numberOfResults: search.numberOfResults
        };

        let response = await axios.post('/api/v1/plants/search', obj);

        dispatch({type: "SEARCH_PLANT_LIST", payload: response })
    }
}

export const searchLoadMore = (search) => {
    // search.keyword
    // search.pagination

    return async function(dispatch, getState) {
        const obj = {
            keyword: search.keyword,
            pagination: search.pagination,
            numberOfResults: search.numberOfResults
        };

        let response = await axios.post('/api/v1/plants/search', obj);

        dispatch({type: "SEARCH_LOAD_MORE", payload: response })
    }
}

