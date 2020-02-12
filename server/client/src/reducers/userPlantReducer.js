import { CREATE_USER_PLANT } from '../actions/types';

const userPlants = (state = [], action) => {
    switch (action.type) {
        case 'GET_USER_PLANT_LIST':
            return action.payload.data;

        case 'CREATE_USER_PLANT_LIST':
            return action.payload.data
    
        case 'DELETE_USER_PLANT_LIST':            
            const response = action.payload.data.response;
            const response_plant_id = action.payload.data.plant_id;
            const index = state.findIndex(plant => plant.plant_id == response_plant_id);
            
            if(response) {
                return [
                    ...state.slice(0,index), //everything before deleted plant
                    ...state.slice(index + 1), //everything after deleted plant
                ]
            }
            
            return state;

        default:
            return state
    }
}

export default userPlants;