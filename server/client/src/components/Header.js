import React from 'react';
import { connect } from 'react-redux';
import { logoutUser, findUser } from '../actions/userAction';
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';


class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }

        this.handleUserState = this.handleUserState.bind(this)
        this.handleStateChange = this.handleStateChange.bind(this)
        this.closeMenu = this.closeMenu.bind(this)
        this.logout = this.logout.bind(this)

        
    }

    componentWillMount() {
        this.props.findUser()
    }

    async logout() {
        this.props.logout()
        this.closeMenu();
    }

    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
    }

    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu () {
        this.setState({menuOpen: false})
    }

    // This can be used to toggle the menu, e.g. when using a custom icon
    // Tip: You probably want to hide either/both default icons if using a custom icon
    // See https://github.com/negomi/react-burger-menu#custom-icons
    toggleMenu () {
        this.setState(state => ({menuOpen: !state.menuOpen}))
    }


    handleUserState(props) {
        
        const user = Object.keys(this.props.users).length === 0 && this.props.users.constructor === Object;

        if (user) {
            return (
                <Menu 
                    isOpen={this.state.menuOpen}
                    onStateChange={(state) => this.handleStateChange(state)}
                >
                    <div className="section">
                        <Link to="/home" onClick={() => this.closeMenu()}>Home</Link>
                    </div>  
                    <div className="section">
                        <Link to="/account" onClick={() => this.closeMenu()}>Login/Signup</Link>
                    </div>
                </Menu>
            )
        } else {
            return (
                <Menu 
                    isOpen={this.state.menuOpen}
                    onStateChange={(state) => this.handleStateChange(state)}
                >
                    <div className="section">
                        hi, {this.props.users.username}
                    </div>
                    <div className="section">
                        <Link to="/home" onClick={() => this.closeMenu()}>Home</Link>
                    </div>     
                    <div className="section">     
                        <Link to="/plant-collection" onClick={() => this.closeMenu()}>collection</Link>
                    </div>
                    <div className="section">     
                        <Link to="/profile" onClick={() => this.closeMenu()}>profile</Link>
                    </div>
                    <div className="section">     
                        <button onClick={this.logout}>logout</button>
                    </div>
                </Menu>
            )
        }
    }

    render() {   

        return (

            <header className="App-header">
                <div className="section logo-container">logo</div>
                <div className='hamburger-menu-icon'>
                    <svg className="bi bi-list" width="2em" height="2em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.5 13.5A.5.5 0 015 13h10a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-4A.5.5 0 015 9h10a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-4A.5.5 0 015 5h10a.5.5 0 010 1H5a.5.5 0 01-.5-.5z" clipRule="evenodd"/>
                    </svg>
                </div>
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

