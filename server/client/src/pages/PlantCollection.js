import React from 'react';
import PlantListConnected from '../components/Plant-List';
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
        console.log('event.target', event.target.dataset)
        const plant_id = event.target.dataset.addId;
        this.props.addUserPlant(plant_id);
    }

    render() {
        console.log("this.props.plants", this.props.plants)

        return (
            <div className="plant-collection">
                <ul>
                    <PlantListConnected plants={this.props.plants} />
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



