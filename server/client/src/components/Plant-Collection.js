import React from 'react';
import Plant from './Plant';
import axios from 'axios';
import { combineReducers } from 'redux';
import { connect } from 'react-redux';
import store from '../store';
import {getPlantsList} from '../actions/plantActions';


class PlantCollection extends React.Component {
    constructor() {
        super();

        this.state = {
            collection: []
        };

    }

    componentWillMount() {
        // console.log('store', store.getState())
        // const instance = axios.create({
        //     baseURL: '/',
        //     timeout: 1000,
        //     headers: {'X-Custom-Header': 'foobar'}
        // });

        this.props.getPlants()

    }

    render() {

        // let plantList = this.props.plants.map((plant, i) => {
        //     return (
        //     <Plant key={i} plant={plant} />
        //     )
        // });
// console.log('this.props', this.props)
        return (
            <div className="plant-collection">
                <ul>
                    {/* {plantList} */}
                </ul>
            </div>
        )
    }
};

const mapDispatchToEvents = (dispatch) => {
    return {
        getPlants: (plants) => {
            dispatch(getPlantsList(plants));
        }
    };
};

const mapStateToProps = (state) => {
    // console.log('plant state',state)
    return {
        plants: state.plants
    }
};

const PlantCollectionConnected = connect(mapStateToProps,mapDispatchToEvents)(PlantCollection)
export default PlantCollectionConnected


