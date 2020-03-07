import { CREATE_USER_PLANT } from '../actions/types';

const commonlyTraded = (state = [], action) => {
    switch (action.type) {
        case 'COMMONLY_TRADED_PLANT_LIST':
            return action.payload.data
        
        default:
            return state
    }
}

export default commonlyTraded;