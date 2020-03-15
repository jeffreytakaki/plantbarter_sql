import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { loginUser } from '../actions/userAction';

class LoginForm extends React.Component {
    constructor(props, dispatch) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.loginRedirect = this.loginRedirect.bind(this);
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

    loginRedirect() {
      
        return ( <Redirect to="/account" /> );
    }   

    render() {

        let showRedirect = (this.props['users'] && this.props['users'].username ) ? this.loginRedirect(): '';

        return (

            <div className="user-form-wrapper">
                <h1>Sign in</h1>
                <form>
                    <div className="form-group">
                        <div className="section">
                            <label>email</label>
                            <input type="text" className="form-control" name="email" onChange={this.handleChange} placeholder="email" />
                        </div>
                        <div className="section">
                            <label>password</label>
                            <input type="text" className="form-control" name="password" onChange={this.handleChange} placeholder="password" />
                        </div>
                        <div className="section">
                            <button type='submit' className="btn btn-primary" onClick={this.handleSubmit}>login</button>
                        </div>
                    </div>
                </form>
                { showRedirect }
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    console.log('state here', state)
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

