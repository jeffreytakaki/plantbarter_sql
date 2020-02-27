import React from 'react';
import { PlantCard } from './Plant-Card';
import { connect } from 'react-redux';
import { getPlantsList } from '../actions/plantsActions';
import {createUserPlant} from '../actions/user_plantActions';

class PlantCollection extends React.Component {
    constructor() {
        super();

        this.state = {
            collection: []
        };

        this.handleAddPlant = this.handleAddPlant.bind(this);
    }

    componentWillMount() {
        this.props.getPlants()
    }

    handleAddPlant(event) {
        const plant_id = event.target.parentNode.id;
        this.props.addUserPlant(plant_id);
    }

    render() {

        let plantList = this.props.plants.map((plant, i) => {
            return (
            <PlantCard key={i} plant={plant} handleAddPlant={this.handleAddPlant}/>
            )
        });

        return (
            <div className="plant-collection">
                <ul>
                    { plantList }
                </ul>
            </div>
        )
    }
};

const mapDispatchToEvents = (dispatch) => {
    return {
        getPlants: (plants) => {
            dispatch(getPlantsList(plants));
        },
        addUserPlant: (plant_id) => {
            dispatch(createUserPlant(plant_id));
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


