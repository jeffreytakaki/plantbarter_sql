import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderConnected from './components/Header';
import Home from './pages/Home'
import PlantCollection from './components/Plant-Collection';
import PlantForm from './components/Plant-Form'
import {Provider} from 'react-redux';
import store from './store';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function App() {
    return (
        <Provider store={store}>
            <div className="page-container">
                <HeaderConnected />
                <Router>
                <Route path='/home'>
                        <Home />
                    </Route>
                    <Route path='/plantform'>
                        <PlantForm />
                    </Route>
                    <Route path='/plant-collection'>
                        <PlantCollection />
                    </Route>
                    
                </Router>
            </div>
        </Provider>
    );
}

export default App;
 