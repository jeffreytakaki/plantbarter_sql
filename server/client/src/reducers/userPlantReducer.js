import { CREATE_USER_PLANT } from '../actions/types';

const userPlants = (state = [], action) => {
    switch (action.type) {
        case 'GET_USER_PLANT_LIST':
            console.log('action.payload.data', action.payload.data)
            return action.payload.data
            // return Object.assign([], state, 
            //     action.payload.response.data
            // );
        default:
            return state
    }
}

export default userPlants;