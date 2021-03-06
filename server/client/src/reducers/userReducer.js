import { LOGIN_USER, CREATE_USER, LOGOUT_USER } from '../actions/types';

const users = (state = {}, action) => {
    switch (action.type) {
        case CREATE_USER :
            return Object.assign({}, state, 
                {
                    username: action.payload.data.username,
                    email: action.payload.data.email,
                    first_name: action.payload.data.first_name,
                    last_name: action.payload.data.last_name
                }
            );
        
        case LOGIN_USER:
            const user = action.payload;
            return Object.assign({}, state, 
                {
                    username: user.username,
                    email: user.email,
                    first_name: user.first_name,
                    last_name: user.last_name
                }
            );

        case LOGOUT_USER:
            state = {}
            return state;

        default:
            return state
    }
}

export default users;