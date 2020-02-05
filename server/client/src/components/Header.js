import React from 'react';
import { connect } from 'react-redux';
import LoginFormConnected from './LoginForm';
import RegisterFormConnected from './RegisterForm';
import { logoutUser, findUser } from '../actions/userAction';
import axios from 'axios';


class Header extends React.Component {
    constructor(props) {
        super(props)
        this.handleUserState = this.handleUserState.bind(this)
        this.logout = this.logout.bind(this)
    }

    componentWillMount() {
        this.props.findUser()
    }

    async logout() {
        this.props.logout()
    }

    handleUserState(props) {
        
        const user = Object.keys(this.props.users).length === 0 && this.props.users.constructor === Object
        if (user) {
            return (
                <div>
                    <div className="section"><LoginFormConnected /></div>
                    <div className="section"><RegisterFormConnected /></div>
                </div>
            )
            
        } else {
            return (
                <div>
                    <div className="section">
                        hi, {this.props.users.username}
                    </div>     
                    <div className="section">     
                        <button onClick={this.logout}>logout</button>
                    </div>
                </div>
            )
        }
    }

    render() {
        console.log('this', this)
        

        return (

            <header className="App-header">
                <div className="section ">logo</div>
                {this.handleUserState(this.props)}
            </header>

        )
    }
}

const mapStateToProps = (state) => {
    console.log('state', state)
    return {
        users: state.users
    }
};
const mapDispatchToEvents = (dispatch) => {
    return {
        logout: (user) => {
            dispatch(logoutUser(user));
        },
        findUser: () => {
            dispatch(findUser());
        }
    };
};

const HeaderConnected = connect(mapStateToProps,mapDispatchToEvents)(Header)
export default HeaderConnected

