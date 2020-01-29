import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/userAction';

class LoginForm extends React.Component {
    constructor(props, dispatch) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.login(this.state)
    }

    render() {
        return (

            <div className="user-form-wrapper">
                <form>
                    <div className="section">
                        <label>email</label>
                        <input type="text" name="email" onChange={this.handleChange} placeholder="email" />
                    </div>
                    <div className="section">
                        <label>password</label>
                        <input type="text" name="password" onChange={this.handleChange} placeholder="password" />
                    </div>
                    <div className="section">
                        <button type='submit' onClick={this.handleSubmit}>login</button>
                    </div>
                </form>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
};

const mapDispatchToEvents = (dispatch) => {
    return {
        login: (user) => {
            dispatch(loginUser(user));
        }
    };
};

const LoginFormConnected = connect(mapStateToProps,mapDispatchToEvents)(LoginForm)
export default LoginFormConnected

