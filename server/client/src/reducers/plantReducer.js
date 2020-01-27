import { CREATE_USER_PLANT } from '../actions/types';

const plants = (state = [], action) => {
    switch (action.type) {
        case 'GET_PLANT_LIST':
            console.log('hello')
            return action.payload.data
            // return Object.assign([], state, 
            //     action.payload.response.data
            // );
        case 'CREATE_USER_PLANT':
            return Object.assign({}, state, 
                {
                    name: action.payload.name,
                    species: action.payload.species,
                    image_url: action.payload.image_url
                }
            );
        default:
            return state
    }
}

export default plants;