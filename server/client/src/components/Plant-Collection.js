import React from 'react';
import Plant from './Plant';
import axios from 'axios';
import { combineReducers } from 'redux';
import store from '../store';


export default class PlantCollection extends React.Component {
    constructor() {
        super();

        this.state = {
            collection: []
        };

    }

    componentWillMount() {
        console.log('store', store.getState())
        // const instance = axios.create({
        //     baseURL: '/',
        //     timeout: 1000,
        //     headers: {'X-Custom-Header': 'foobar'}
        // });

        axios.get('plants')
        .then(response => {
            this.setState({collection: response.data})
        })
    }

    render() {

        let plantList = this.state.collection.map((plant, i) => {
            return (
            <Plant key={i} plant={plant} />
            )
        });

        return (
            <div className="plant-collection">
                <ul>
                    {plantList}
                </ul>
            </div>
        )
    }
};


