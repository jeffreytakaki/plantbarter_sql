import React from 'react';
import { connect } from 'react-redux';
import { loginUser, registerUser } from '../actions/userAction';

class RegisterForm extends React.Component {
    constructor(props, dispatch) {
        super(props);
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            username: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(props) {
        this.setState({...this.props.users});
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.register(this.state)
    }

    render() {
        return (

            <div className="user-form-wrapper">
                {this.state.users}
                <form>
                    <div className="section">
                        <label>first name</label>
                        <input type="text" name="first_name" onChange={this.handleChange} placeholder={this.props.users.first_name || 'first name'}></input>
                    </div>
                    <div className="section">
                        <label>last name</label>
                        <input type="text" name="last_name" onChange={this.handleChange} placeholder={this.props.users.last_name || 'last name'} />
                    </div>
                    <div className="section">
                        <label>email</label>
                        <input type="text" name="email" onChange={this.handleChange} placeholder={this.props.users.email || 'email'} />
                    </div>
                    <div className="section">
                        <label>username</label>
                        <input type="text" name="username" onChange={this.handleChange} placeholder={this.props.users.username || 'username'} />
                    </div>
                    <div className="section">
                        <label>password</label>
                        <input type="text" name="password" onChange={this.handleChange} placeholder="password" />
                    </div>
                    <div className="section">
                        <button type='submit' onClick={this.handleSubmit}>register</button>
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
        register: (user) => {
            dispatch(registerUser(user));
        }
    };
};

const RegisterFormConnected = connect(mapStateToProps,mapDispatchToEvents)(RegisterForm)
export default RegisterFormConnected

