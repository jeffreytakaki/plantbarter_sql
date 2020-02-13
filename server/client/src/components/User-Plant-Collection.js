import React from 'react';
import { connect } from 'react-redux';
import {Plant} from './Plant';
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
        this.props.deleteUserPlant(event.target.parentNode.parentNode.id);
    }

    render() {
        let plantList;
        if(this.props.user_plants) {
            plantList = this.props.user_plants.map((plant, i) => {
                return ( <Plant key={i} plant={plant} handleDelete={this.handleDelete} /> )
            });
        } else {
            plantList = '';
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


