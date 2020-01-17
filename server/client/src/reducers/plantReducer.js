import { CREATE_USER_PLANT } from '../actions/types';

const plants = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_USER_PLANT':
            return Object.assign({}, state, 
                {
                    name: action.name,
                    species: action.species,
                    image_url: action.image_url
                }
            );
        default:
            return state
    }
}

export default plants;