import { LOGIN_USER, CREATE_USER } from '../actions/types';

const users = (state = [], action) => {
    switch (action.type) {
        case CREATE_USER :
            return Object.assign({}, state, 
                {
                    user_name: action.payload.data.user_name,
                    email: action.payload.data.email,
                    first_name: action.payload.data.first_name,
                    last_name: action.payload.data.last_name
                }
            );
        
        case LOGIN_USER:
            
            return Object.assign({}, state, 
                {
                    user_name: action.payload.data.user_name,
                    email: action.payload.data.email,
                    first_name: action.payload.data.first_name,
                    last_name: action.payload.data.last_name
                }
            );
        default:
            return state
    }
}

export default users;