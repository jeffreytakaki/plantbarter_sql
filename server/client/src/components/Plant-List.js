import React from 'react';
import { PlantCard } from './Plant-Card';
import { connect } from 'react-redux';
import { getPlantsList } from '../actions/plantsActions';
import { createUserPlant } from '../actions/user_plantActions';

class PlantList extends React.Component {
    constructor(props) {
        super();

        this.state = {
            collection: []
        };

        this.handleAddPlant = this.handleAddPlant.bind(this);
    }

    componentWillMount() {
        
    }

    handleAddPlant(event) {
        console.log('event.target', event.target.dataset)
        const plant_id = event.target.dataset.addId;
        this.props.addUserPlant(plant_id);
    }

    render(props) {
        
        let plantList = this.props.plants.map((plant, i) => {

            return (
            <PlantCard key={i} plant={plant} handleAddPlant={this.handleAddPlant} userLoggedIn={Object.entries(this.props.users).length}/>
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
    return {
        users: state.users
    }
};

const PlantListConnected = connect(mapStateToProps, mapDispatchToEvents)(PlantList)
export default PlantListConnected


