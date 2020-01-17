import React from 'react';
import LoginFormConnected from './LoginForm'

export default class Header extends React.Component {

    render() {
        return (

            <header className="App-header">
                <div className="section ">logo</div>
                <div className="section"><LoginFormConnected /></div>
                <div className="section"></div>
            </header>

        )
    }
}

