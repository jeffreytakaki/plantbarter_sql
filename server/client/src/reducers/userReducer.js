import { LOGIN_USER, CREATE_USER } from '../actions/types';

const users = (state = [], action) => {
    switch (action.type) {
        case CREATE_USER :
            return Object.assign({}, state, 
                {
                    username: action.payload.username,
                    email: action.payload.payloademail
                }
            );
        
        case LOGIN_USER:
            console.log(action.payload)
            return Object.assign({}, state, 
                {
                    username: action.payload.username,
                    email: action.payload.payloademail
                }
            );
        default:
            return state
    }
}

export default users;