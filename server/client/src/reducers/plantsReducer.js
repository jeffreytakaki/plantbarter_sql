import { CREATE_USER_PLANT } from '../actions/types';

const plants = (state = [], action) => {
    switch (action.type) {
        case 'GET_PLANT_LIST':
            return action.payload.data
        
        default:
            return state
    }
}

export default plants;