import React from 'react';
import { connect } from 'react-redux';
import { PlantCard } from './Plant-Card';
import { getUserPlantsList, deleteUserPlant } from '../actions/user_plantActions';


class UserPlantCollection extends React.Component {
    constructor() {
        super();

        this.state = {
            collection: []
        };

        this.handleDelete = this.handleDelete.bind(this)

    }

    componentWillMount() {
        this.props.getUserPlants()
    }

    handleDelete(event) {
        const plant_id = event.target.parentElement.dataset.deleteId;
        console.log(plant_id);
        this.props.deleteUserPlant(event.target.parentNode.dataset.deleteId);
    }

    render() {
        let plantList;
        if(this.props.user_plants) {
            if(this.props.user_plants.length) {
                plantList = this.props.user_plants.map((plant, i) => {
                    return ( <PlantCard key={i} plant={plant} handleDelete={this.handleDelete} /> )
                });
            } else {
                plantList = <h2>you have no saved plants!</h2>
            }
        }

        return (
            <div className="plant-collection">
                <ul>
                    { plantList }
                </ul>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    console.log('state', state)
    return {
        user_plants: state.userPlants
    }
};

const mapDispatchToEvents = (dispatch) => {
    return {
        getUserPlants: () => {
            dispatch(getUserPlantsList());
        },
        deleteUserPlant: (id) => {
            dispatch(deleteUserPlant(id));
        }
    };
};

const UserPlantCollectionConnected = connect(mapStateToProps,mapDispatchToEvents)(UserPlantCollection)
export default UserPlantCollectionConnected


