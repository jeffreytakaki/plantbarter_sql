import React from 'react';
import { connect } from 'react-redux';
import { logoutUser, findUser } from '../actions/userAction';
import { Link } from "react-router-dom";


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
                <div className="section">
                    <Link to="/account">Login/Signup</Link>
                </div>
            )
            
        } else {
            return (
                <div className="section">
                    <div className="section">
                        hi, {this.props.users.username}
                    </div>     
                    <div className="section">     
                        <Link to="/plant-collection">collection</Link>
                    </div>
                    <div className="section">     
                        <Link to="/profile">profile</Link>
                    </div>
                    <div className="section">     
                        <button onClick={this.logout}>logout</button>
                    </div>
                    
                </div>
            )
        }
    }

    render() {   

        return (

            <header className="App-header">
                <div className="section ">logo</div>
                <div className="section "><Link to="/home">Home</Link></div>

                {this.handleUserState(this.props)}


            </header>

        )
    }
}

const mapStateToProps = (state) => {
    // console.log('state', state)
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

