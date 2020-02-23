import React from 'react';
import HeaderConnected from './components/Header';
import Home from './pages/Home'
import ProfileConnected from './pages/Profile'
import PlantCollection from './components/Plant-Collection';
import PlantForm from './components/Plant-Form';
import LoginSignupContainer from './pages/LoginSignupContainer';
import RegisterFormConnected from './components/RegisterForm';
import {Provider} from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="page-container">
                    <Router>
                        <HeaderConnected />
                        <div className='content-body'>
                            <Route path='/home'>
                                <Home />
                            </Route>
                            <Route path='/profile'>
                                <ProfileConnected />
                            </Route>
                            <Route path='/profile/edit'>
                                <RegisterFormConnected />
                            </Route>
                            <Route path='/plantform'>
                                <PlantForm />
                            </Route>
                            <Route path='/plant-collection'>
                                <PlantCollection />
                            </Route>
                            <Route path='/account'>
                                <LoginSignupContainer />
                            </Route>
                        </div>
                    </Router>
                </div>
            </Provider>
        );
    }
}

export default App;
 