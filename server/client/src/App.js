import React from 'react';
import HeaderConnected from './components/Header';
import Home from './pages/Home'
import ProfileConnected from './pages/Profile'
import PlantCollection from './pages/PlantCollection';
import PlantForm from './components/Plant-Form';
import Plant from './pages/Plant';
import LoginSignupContainer from './pages/LoginSignupContainer';
import RegisterFormConnected from './components/RegisterForm';
import {Provider} from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="page-container">
                    <Router>
                        <HeaderConnected />
                        <div className='content-body'>
                            <Switch>
                            <Route path='/home' component={Home} />
                            <Route path='/profile' component={ProfileConnected} />
                            <Route path='/plant/:plant_id' component={Plant} />
                            <Route path='/profile/edit' component={RegisterFormConnected} />
                            <Route path='/plant-collection' component={PlantCollection} />
                            <Route path='/account' component={LoginSignupContainer} />
                            <Route path='/' component={Home} />
                            </Switch>
                        </div>
                    </Router>
                </div>
            </Provider>
        );
    }
}

export default App;
 