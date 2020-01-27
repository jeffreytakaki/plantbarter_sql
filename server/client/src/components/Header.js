import React from 'react';
import { connect } from 'react-redux';
import LoginFormConnected from './LoginForm';
import RegisterFormConnected from './RegisterForm';
import axios from 'axios';


class Header extends React.Component {
    constructor(props) {
        super(props)
        this.handleUserState = this.handleUserState.bind(this)
    }

    componentWillMount() {
        
    }

    async logout() {
        const logout = await axios.get('/logout');
        console.log("logout", logout)
    }

    handleUserState(props) {

        if (!this.props.users.length) {
            return (
                <div>
                <div className="section"><LoginFormConnected /></div>
                <div className="section"><RegisterFormConnected /></div>
                </div>
            )
        } else {
            return (
                <div className="section"><button onClick={this.logout}>logout</button></div>
            )
            
        }
    }

    render() {
        console.log('this', this)
        

        return (

            <header className="App-header">
                <div className="section ">logo</div>
                {this.handleUserState(this.props)}
                {this.props.users.user_name}
            </header>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
};

const HeaderConnected = connect(mapStateToProps)(Header)
export default HeaderConnected

