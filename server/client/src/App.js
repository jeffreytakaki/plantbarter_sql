import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderConnected from './components/Header';
import PlantCollection from './components/Plant-Collection';
import PlantForm from './components/Plant-Form'
import {Provider} from 'react-redux';
import store from './store';


function App() {
    return (
        <Provider store={store}>
            <div className="page-container">
                <HeaderConnected />
                <PlantForm />
                <PlantCollection />
            </div>
        </Provider>
    );
}

export default App;
 