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

        // this.context.router.push('/newPath');
        // let history = useHistory();
        // let location = useLocation();

        // console.log('location', location.state)
      
        // let { from } = location.state || { from: { pathname: "/" } };
        // let login = () => {
        //   fakeAuth.authenticate(() => {
        //     history.replace(from);
        //   });
        // };
      
        // return (
        //   <div>
        //     <p>You must log in to view the page at {from.pathname}</p>
        //     <button onClick={login}>Log in</button>
        //   </div>
        // );
    }

    render() {

        if (this.props['users']) this.loginRedirect();

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

