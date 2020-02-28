import { CREATE_USER_PLANT } from '../actions/types';

const searchResults = (state = [], action) => {
    switch (action.type) {
        case 'SEARCH_PLANT_LIST':
            return state = [...action.payload.data]; //reset the search queue;

        case 'SEARCH_LOAD_MORE':
            let results = [...state, ...action.payload.data]
            return results
        
        default:
            return state
    }
}

export default searchResults;