import React from 'react';
import LoginFormConnected from '../components/LoginForm';
import RegisterFormConnected from '../components/RegisterForm';

export default class LoginSignupContainer extends React.Component {
    constructor(props, dispatch) {
        super(props);
       
    }

    render() {
        return (

            <div>
                <LoginFormConnected />
                <RegisterFormConnected />
            </div>

        )
    }
}
