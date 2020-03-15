import React from 'react';
import { connect } from 'react-redux';
import { logoutUser, findUser } from '../actions/userAction';
import { Link, NavLink } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import { GlobalMessages } from './Global-Messages';


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
        this.displayGlobalMessages = this.displayGlobalMessages.bind(this)

        
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
                    left
                    isOpen={this.state.menuOpen}
                    onStateChange={(state) => this.handleStateChange(state)}
                >
                    <div className="section">
                        <NavLink to="/" onClick={() => this.closeMenu()}>Home</NavLink>
                    </div>  
                    <div className="section">
                        <NavLink to="/login" onClick={() => this.closeMenu()}>Login/Signup</NavLink>
                    </div>
                </Menu>
            )
        } else {
            return (
                <Menu 
                    left
                    isOpen={this.state.menuOpen}
                    onStateChange={(state) => this.handleStateChange(state)}
                >
                  <div className="section">
                        <NavLink to="/account" onClick={() => this.closeMenu()}>{this.props.users.username}</NavLink>
                  </div>
                  <div className="section">
                        <NavLink to="/" onClick={() => this.closeMenu()}>Home</NavLink>
                  </div>    
                  <div className="section">     
                        <NavLink to="/plant-collection" onClick={() => this.closeMenu()}>Plants</NavLink>
                  </div>
                  <div className="section">     
                        <NavLink to="/account/plants" onClick={() => this.closeMenu()}>My Plants</NavLink>
                  </div>
                  <div className="section">     
                        <a><button onClick={this.logout}>Logout</button></a>
                  </div>
                </Menu>
            )
        }
    }

    displayGlobalMessages() {
        if(this.props.globalMsg.length) {

            let globalMessages = this.props.globalMsg.map((plant, i) => {
                return <GlobalMessages key={i} message={this.props.globalMsg} />
            });

            return globalMessages;
            
        }
    }

    render() {   

        const setClass = (this.props.globalMsg.length) ? 'show-message' : 'hide-message';

        return (

            <header className="App-header">
                <div id="global-msg-container" className={setClass}>
                    {this.displayGlobalMessages()}
                </div>
                
                <div className="section logo-container">
                  <Link to="/" onClick={() => this.closeMenu()}>
                    <p className="header-title font-abril-fatface">Botanically</p>
                  </Link>
                </div>

                {this.handleUserState(this.props)}

                <div className="profile--wrp">
                  <div className="profile--img">
                    <img src="../icon-avatar.png"/>
                  </div>
                </div>
            </header>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users, 
        globalMsg: state.globalMsg
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

