import { CREATE_USER_PLANT } from '../actions/types';

const userPlants = (state = [], action) => {
    switch (action.type) {
        case 'GET_USER_PLANT_LIST':
            return action.payload.data

        case 'CREATE_USER_PLANT_LIST':
            return action.payload.data
    
        case 'DELETE_USER_PLANT_LIST':
            return action.payload.data
        default:
            return state
    }
}

export default userPlants;