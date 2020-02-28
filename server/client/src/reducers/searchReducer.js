import { CREATE_USER_PLANT } from '../actions/types';

const searchResults = (state = [], action) => {
    switch (action.type) {
        case 'SEARCH_PLANT_LIST':
            return state = [...action.payload.data]; // only return back the results from the query. reset the search queue everytime;

        case 'SEARCH_LOAD_MORE':
            let results = [...state, ...action.payload.data] // append new items to the search results list. 
            return results
        
        default:
            return state
    }
}

export default searchResults;