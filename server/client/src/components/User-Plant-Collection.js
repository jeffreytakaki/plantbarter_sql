import React from 'react';
import { connect } from 'react-redux';
import Plant from './Plant';
import { getUserPlantsList } from '../actions/user_plantActions';


class UserPlantCollection extends React.Component {
    constructor() {
        super();

        this.state = {
            collection: []
        };

    }

    componentWillMount() {
        this.props.getUserPlants()
    }

    render() {
        let plantList;
        if(this.props.user_plants) {
            plantList = this.props.user_plants.map((plant, i) => {
                return ( <Plant key={i} plant={plant} /> )
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
    return {
        user_plants: state.userPlants
    }
};

const mapDispatchToEvents = (dispatch) => {
    return {
        getUserPlants: () => {
            dispatch(getUserPlantsList());
        }
    };
};

const UserPlantCollectionConnected = connect(mapStateToProps,mapDispatchToEvents)(UserPlantCollection)
export default UserPlantCollectionConnected


